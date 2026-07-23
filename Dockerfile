# syntax=docker/dockerfile:1
# Optional: build the static site and serve it with nginx.
# (The primary deployment target is GitHub Pages — see .github/workflows/deploy.yml.)

# ---- Build the static export ----
FROM node:20-alpine AS builder
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm ci 2>/dev/null || npm install
COPY . .
ENV NEXT_TELEMETRY_DISABLED=1
RUN npm run build   # produces ./out (output: "export")

# ---- Serve with nginx ----
FROM nginx:alpine AS runner
COPY --from=builder /app/out /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
