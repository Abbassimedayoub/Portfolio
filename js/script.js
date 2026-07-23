// Signale que le JS fonctionne → active les animations "reveal" (sinon contenu visible par défaut).
document.documentElement.classList.add("js");

// ---- CV files (both live in /cv). Relative paths → work on GitHub Pages too. ----
const CV = {
  fr: "cv/CV_Abbassi_Med_Ayoub_FR.pdf",
  en: "cv/CV_Abbassi_Med_Ayoub_EN.pdf",
};

const root = document.documentElement;
const langBtn = document.getElementById("langBtn");
const cvLink = document.getElementById("cvLink");

// Point the "Download CV" badge to the CV matching the current language.
function syncCv() {
  const lang = root.getAttribute("data-lang") === "en" ? "en" : "fr";
  if (cvLink) {
    cvLink.setAttribute("href", CV[lang]);
    cvLink.setAttribute("download", "CV_Abbassi_Med_Ayoub_" + lang.toUpperCase() + ".pdf");
  }
}

async function triggerCvDownload(event) {
  if (!cvLink) {
    return;
  }

  event.preventDefault();

  try {
    const response = await fetch(cvLink.href);
    if (!response.ok) {
      throw new Error("Unable to fetch CV file");
    }

    const blob = await response.blob();
    const objectUrl = URL.createObjectURL(blob);
    const tempLink = document.createElement("a");
    tempLink.href = objectUrl;
    tempLink.download = cvLink.download;
    tempLink.rel = "noopener";
    document.body.appendChild(tempLink);
    tempLink.click();
    tempLink.remove();
    setTimeout(() => URL.revokeObjectURL(objectUrl), 1000);
  } catch (error) {
    window.open(cvLink.href, "_blank", "noopener");
  }
}

syncCv();
if (cvLink) {
  cvLink.addEventListener("click", triggerCvDownload);
}

// ---- Language toggle ----
langBtn.addEventListener("click", () => {
  const n = root.getAttribute("data-lang") === "fr" ? "en" : "fr";
  root.setAttribute("data-lang", n);
  root.setAttribute("lang", n);
  langBtn.innerHTML = n === "fr" ? "<b>FR</b> · EN" : "FR · <b>EN</b>";
  syncCv();
});

// ---- Mobile menu ----
const burger = document.getElementById("burger");
burger.addEventListener("click", () => {
  document.getElementById("navLeft").classList.toggle("mobile-open");
});

// ---- Reveal on scroll ----
const io = new IntersectionObserver(
  (es) =>
    es.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("in");
        io.unobserve(e.target);
      }
    }),
  { threshold: 0.12 }
);
document.querySelectorAll(".reveal").forEach((el, i) => {
  el.style.transitionDelay = (i % 3) * 70 + "ms";
  io.observe(el);
});

// ---- Circuit line draw-in ----
const cio = new IntersectionObserver(
  (es) => es.forEach((e) => { if (e.isIntersecting) e.target.classList.add("drawn"); }),
  { threshold: 0.2 }
);
document.querySelectorAll(".circuit").forEach((c) => cio.observe(c));

// ---- Magnetic buttons ----
document.querySelectorAll(".btn,.node-btn,.cv-core").forEach((b) => {
  b.addEventListener("mousemove", (e) => {
    const r = b.getBoundingClientRect();
    const x = e.clientX - r.left - r.width / 2;
    const y = e.clientY - r.top - r.height / 2;
    b.style.transform = `translate(${x * 0.12}px, ${y * 0.12}px)`;
  });
  b.addEventListener("mouseleave", () => (b.style.transform = ""));
});

// ---- Bento glow follows the cursor ----
document.querySelectorAll(".cell").forEach((c) => {
  c.addEventListener("mousemove", (e) => {
    const r = c.getBoundingClientRect();
    c.style.setProperty("--mx", e.clientX - r.left + "px");
    c.style.setProperty("--my", e.clientY - r.top + "px");
  });
});

// ---- Copy email ----
const copyBtn = document.getElementById("copyBtn");
copyBtn.addEventListener("click", () => {
  const t = "abbassimohamedayoub@gmail.com";
  (navigator.clipboard ? navigator.clipboard.writeText(t) : Promise.reject())
    .then(() => {
      const fr = root.getAttribute("data-lang") === "fr";
      copyBtn.textContent = fr ? "Copié ✓" : "Copied ✓";
      setTimeout(
        () => (copyBtn.innerHTML = '<span class="fr">Copier</span><span class="en">Copy</span>'),
        1600
      );
    })
    .catch(() => {});
});

// ---- Footer year ----
document.getElementById("year").textContent = new Date().getFullYear();
