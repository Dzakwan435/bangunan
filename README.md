# Abbas Building — Website Resmi

Website portfolio dan company profile arsitektur serta pengembang properti premium di Indonesia. Dibangun menggunakan React 18, Vite, Tailwind CSS, Framer Motion, dan visualisasi wireframe 3D kota berbasis Three.js.

---

## 🚀 Panduan Menjalankan Secara Lokal

1. **Clone repository:**
   ```bash
   git clone https://github.com/dzakwanabbas/framer.git
   cd framer
   ```

2. **Install dependensi:**
   ```bash
   npm install
   ```

3. **Jalankan development server:**
   ```bash
   npm run dev
   ```
   Buka peramban di `http://localhost:3000`.

4. **Build untuk produksi:**
   ```bash
   npm run build
   ```

5. **Pratinjau build produksi lokal:**
   ```bash
   npm run preview
   ```

---

## 🌐 Pilihan & Panduan Deploy ke Production

Project ini telah dikonfigurasi dan siap di-deploy langsung ke berbagai platform:

### 1. Vercel (Paling Direkomendasikan)
Konfigurasi file: [`vercel.json`](vercel.json) sudah tersedia.

- **Cara 1 (Melalui Dashboard Vercel):**
  1. Buka [vercel.com](https://vercel.com) dan login.
  2. Klik **"Add New"** > **"Project"**.
  3. Import repository GitHub project ini.
  4. Framework Preset akan otomatis terdeteksi sebagai **Vite**.
  5. Klik **"Deploy"**.

- **Cara 2 (Melalui Vercel CLI):**
  ```bash
  npm i -g vercel
  vercel
  ```

---

### 2. Netlify
Konfigurasi file: [`netlify.toml`](netlify.toml) sudah tersedia.

- **Cara 1 (Melalui Dashboard Netlify):**
  1. Buka [netlify.com](https://netlify.com).
  2. Pilih **"Add new site"** > **"Import an existing project"**.
  3. Hubungkan dengan akun GitHub dan pilih repository.
  4. Build command: `npm run build`, Publish directory: `dist`.
  5. Klik **"Deploy site"**.

- **Cara 2 (Drag & Drop):**
  1. Jalankan `npm run build`.
  2. Drag folder `dist` langsung ke menu Deployments di Netlify.

---

### 3. GitHub Pages (Otomatis via GitHub Actions)
Konfigurasi workflow: [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) sudah tersedia.

1. Buka repository di GitHub.
2. Masuk ke menu **Settings** > **Pages**.
3. Pada bagian **Build and deployment** > **Source**, pilih **"GitHub Actions"**.
4. Lakukan `git push origin main`. GitHub Actions akan otomatis melakukan build dan deploy website.

---

### 4. Docker / VPS / Cloud Run
File konfigurasi: [`Dockerfile`](Dockerfile), [`nginx.conf`](nginx.conf), dan [`.dockerignore`](.dockerignore) sudah tersedia.

- **Build Docker image:**
  ```bash
  docker build -t abbas-building .
  ```

- **Jalankan container:**
  ```bash
  docker run -d -p 80:80 --name abbas-website abbas-building
  ```
  Akses di `http://localhost` atau IP server VPS Anda.

---

## 🛠️ Tech Stack & Fitur

- **Framework**: React 18 & Vite
- **Styling**: Tailwind CSS
- **Animasi & Interaksi**: Framer Motion
- **Visualisasi 3D**: Three.js (Procedural 3D City Skyline Canvas)
- **Ikon**: Lucide React & Custom SVG
- **SEO & Social Share**: OpenGraph, Twitter Card, `robots.txt`, `sitemap.xml`
- **Arsitektur Build**: Rollup manual chunking untuk caching performa tinggi
