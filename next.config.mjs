// ⚙️  ONE toggle to rule the base path.
//   "/Portfolio" → site served at https://abbassimedayoub.github.io/Portfolio/
//   ""           → custom root domain (your .tech) OR a <user>.github.io repo
// When you attach your .tech domain later, just set this to "".
const BASE_PATH = "/Portfolio";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Static export → produces an "out/" folder that GitHub Pages serves.
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,

  basePath: BASE_PATH,
  assetPrefix: BASE_PATH || undefined,

  // Exposed to the client so raw <a href> links (e.g. the CV) can be prefixed.
  env: { NEXT_PUBLIC_BASE_PATH: BASE_PATH },
};

export default nextConfig;
