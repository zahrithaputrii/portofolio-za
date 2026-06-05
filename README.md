# Portfolio Zahritha Putri Novana
## Panduan Penggunaan & Kustomisasi

---

## 📁 Struktur Folder

```
portfolio/
│
├── index.html      → Halaman utama (struktur konten)
├── style.css       → Semua styling (warna, font, layout)
├── script.js       → Animasi dan interaksi
│
└── images/
    ├── profile.jpg     → Foto profile kamu
    ├── project1.png    → Screenshot project web #1
    ├── project2.png    → Screenshot project web #2
    ├── project3.png    → Screenshot project web #3
    ├── project4.png    → Screenshot project web #4
    ├── project5.png    → Screenshot project web #5
    ├── ui1.png         → Mockup UI/UX Design #1
    ├── ui2.png         → Mockup UI/UX Design #2
    ├── ui3.png         → Mockup UI/UX Design #3
    ├── ui4.png         → Mockup UI/UX Design #4
    ├── ui5.png         → Mockup UI/UX Design #5
    ├── ui6.png         → Mockup UI/UX Design #6
    └── ui7.png         → Mockup UI/UX Design #7
```

---

## 🖼️ Cara Menambahkan Foto

### Foto Profile
1. Siapkan foto kamu (disarankan rasio 3:4, portrait)
2. Simpan dengan nama **profile.jpg** di folder `images/`
3. Selesai! Foto akan otomatis muncul di hero section

### Screenshot Project Web
1. Screenshot tampilan project kamu (disarankan 16:9)
2. Simpan dengan nama **project1.png** s/d **project5.png**
3. Letakkan di folder `images/`

### Mockup UI/UX Design
1. Export mockup dari Figma (PNG, disarankan 16:10)
2. Simpan dengan nama **ui1.png** s/d **ui7.png**
3. Letakkan di folder `images/`

---

## 🔗 Cara Mengganti Link

Cari komentar berikut di `index.html` dan ganti link-nya:

| Komentar | Yang perlu diganti |
|---|---|
| `<!-- MASUKKAN LINK GITHUB DI SINI -->` | Ganti URL GitHub kamu |
| `<!-- GANTI LINK LINKEDIN DI SINI -->` | Ganti URL LinkedIn kamu |
| `<!-- GANTI EMAIL DI SINI -->` | Ganti email kamu |

Di `script.js`, cari baris ini dan ganti emailnya:
```js
const toEmail = 'zahritha@email.com';
```

---

## 🎨 Cara Mengganti Warna Aksen

Buka `style.css`, cari bagian `:root` di bagian paling atas:

```css
:root {
  --accent: #9b7fe8;   /* ← Ganti warna ungu ini */
}
```

Beberapa saran warna aksen:
- Ungu soft:  `#9b7fe8` (default)
- Pink rose:  `#e88fa0`
- Teal:       `#5bbfb5`
- Biru lavender: `#7ba7d4`

---

## 🌐 Cara Deploy ke Internet (Gratis)

### Opsi 1: GitHub Pages
1. Upload semua file ke repository GitHub
2. Masuk Settings → Pages → Source: main branch
3. Website live di: `https://username.github.io/nama-repo`

### Opsi 2: Netlify (Drag & Drop)
1. Buka netlify.com → Sign up gratis
2. Drag folder `portfolio/` ke dashboard Netlify
3. Website langsung live!

### Opsi 3: Vercel
1. Buka vercel.com → Import dari GitHub
2. Deploy otomatis setiap push ke GitHub

---

## 📱 Responsivitas

Website sudah responsive untuk:
- ✅ Mobile (< 600px) — termasuk hamburger menu
- ✅ Tablet (600px – 900px)
- ✅ Laptop & Desktop (> 900px)

---

## ✏️ Tips Kustomisasi

- **Ganti font**: Edit di bagian `<link>` Google Fonts di `index.html`, lalu update `--font-display` dan `--font-body` di CSS
- **Tambah project**: Salin blok `<div class="project-card">` dan sesuaikan isinya
- **Ganti warna background**: Edit `--bg-deep` dan `--bg-dark` di `:root`
- **Sembunyikan section**: Tambahkan `display: none;` pada section yang ingin disembunyikan

---

Made with ♥ for Zahritha Putri Novana
