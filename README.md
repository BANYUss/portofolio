# Sahrul Arif Fauzi — Portfolio

Personal portfolio website built with Next.js 14 + Tailwind CSS.

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## 📁 Struktur Foto yang Perlu Diisi

### 1. Foto Profil
```
public/
└── profile.jpg        ← foto kamu (bukan foto formal CV)
```
Ukuran ideal: **500x500px** atau lebih, format JPG/PNG.

---

### 2. Screenshot Project
```
public/
└── projects/
    ├── dompetku.jpg
    ├── docchat.jpg
    ├── scheduling.jpg
    ├── am-management.jpg
    ├── befresh.jpg
    ├── fruitcare.jpg
    ├── musikkampus.jpg
    ├── iot-cctv.jpg
    └── cloud-segmentation.jpg
```
Ukuran ideal: **1280x720px** (ratio 16:9), format JPG.
Cara ambil: buka project di browser → screenshot → crop → simpan di sini.

---

### 3. Foto Sertifikat
```
public/
└── certificates/
    ├── database-cert.jpg     ← foto/scan sertifikat database
    └── telkom-cert.jpg       ← foto/scan sertifikat Telkom
```
Ukuran ideal: **800x600px** (ratio 4:3), format JPG.
Cara ambil: foto pakai HP, pastikan pencahayaan cukup dan teks terbaca jelas.

---

## Deploy ke Vercel

1. Push repo ke GitHub
2. Buka [vercel.com](https://vercel.com) → Import project
3. Deploy otomatis

---

## Edit Konten

Semua konten ada di satu file:
```
src/lib/data.ts
```
Edit file ini untuk update teks, link, project, dll.
