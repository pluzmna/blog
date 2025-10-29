# Pluzman Gaming Portal 🎮

Oyuncu Portalı - **Player.me Tarzı Modern Tasarım - GitHub Pages ile yayınlanmaya hazır!**

## ✨ Özellikler

### 🎨 Yeni Tasarım Özellikleri
- ✅ **Modern Player.me Tarzı Tasarım** - Gaming odaklı kullanışlı arayüz
- ✅ **Sağ Drawer (Çekmece)** - Toggle ile açılan/kapanan link menüsü
- ✅ **Messenger Tarzı Baloncuk Linkler** - Facebook Messenger benzeri link görünümü
- ✅ **Kategori Sembolleri** - Her kategori için özel emoji (📧 🌐 🔗)
- ✅ **Karanlık Oyuncu Teması** - Modern gradient tasarım (mor/mavi)
- ✅ **Teknoloji Badge'leri** - Python, JavaScript, React, FastAPI, MongoDB, Node.js
- ✅ **Ücretsiz Oyunlar** - Popüler F2P oyunlar (Fortnite, Valorant, CS2, vb.)
- ✅ **Oyun Haberleri** - Güncel Türkçe oyun haberleri
- ✅ **Link Yönetimi** - linkler.xml'den dinamik linkler
- ✅ **LocalStorage Cache** - 1 saatlik cache sistemi
- ✅ **Tam Responsive** - Mobile, tablet ve desktop uyumlu
- ✅ **GitHub Pages Ready** - Static hosting için optimize

### 💻 Teknolojiler

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![Font Awesome](https://img.shields.io/badge/Font_Awesome-339AF0?style=for-the-badge&logo=fontawesome&logoColor=white)

## 🚀 GitHub Pages'e Deployment

### ✅ Dosyalar Hazır!

Ana dizinde (`/app/`) GitHub Pages için gerekli tüm dosyalar mevcut:

```
/app/
├── index.html          # ✅ Ana sayfa
├── linkler.xml         # ✅ Link veritabanı
└── static/            # ✅ CSS ve JS dosyaları
    ├── css/
    │   └── style.css
    └── js/
        └── app.js
```

### 📋 Hızlı Deployment (5 Dakika)

1. GitHub repo'nuza gidin: **Settings** → **Pages**
2. **Source**: "Deploy from a branch" seçin
3. **Branch**: `main` / **Folder**: `/ (root)` seçin
4. **Save** butonuna tıklayın
5. 2-3 dakika sonra siteniz yayında! 🎉

**Site URL:** `https://pluzmna.github.io/blog1/`

📖 **Detaylı rehber için:** [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md) dosyasını inceleyin.

## 📱 Özellikler

### Sağ Drawer Menü
- Toggle butonu ile açılır/kapanır
- Kategori bazlı link organizasyonu
- Messenger tarzı link balonları
- Her link için özel ikon
- Tüm linkler **yeni sekmede** açılır

### Ücretsiz Oyunlar Bölümü
- Fortnite, Valorant, CS2, LoL, Dota 2
- Apex Legends, Warframe, Genshin Impact
- Rocket League ve daha fazlası
- Oyun türü etiketleri

### Oyun Haberleri
- Güncel Türkçe gaming haberleri
- Tarih ve kaynak bilgisi
- Modern kart tasarımı

### LocalStorage Cache
- 1 saatlik otomatik cache
- Hızlı sayfa yükleme
- Bandwidth tasarrufu

## 📱 Sosyal Medya Linkleri

- **Telegram Profil:** https://t.me/Pluzman?text=Workshop
- **Telegram Bot:** https://t.me/tavsiyeebot?startapp
- **Google Chat:** https://chat.google.com/room/AAQASXQ84gU?cls=7
- **Steam Chat:** https://s.team/chat/P6OS1Ier

## 📝 Linkler Eklemek

`linkler.xml` dosyasını düzenleyin:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<linkler>
    <kategori id="kategori_id" isim="Kategori İsmi">
        <link>
            <baslik>Link Başlığı</baslik>
            <url>https://example.com</url>
            <aciklama>Açıklama</aciklama>
            <ikon>fas fa-icon-name</ikon>
        </link>
    </kategori>
</linkler>
```

### Kategori İkonları
- `iletisim`: 📧 (E-posta, Telegram)
- `sosyal`: 🌐 (Steam, Twitch, Reddit, YouTube)
- `diger`: 🔗 (GitHub, Sticker, Tema)

## 🎨 Tasarım

### Renk Paleti
- **Mor**: `#8b5cf6` (Primary)
- **Mavi**: `#3b82f6` (Accent)
- **Koyu Lacivert**: `#0f0c29` (Background)
- **Gradient**: `linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%)`

### Tipografi
- **Font**: Inter (Google Fonts)
- **Stil**: Modern, Clean, Gaming

### Efektler
- Glassmorphism (Buzlu cam efekti)
- Hover animasyonları
- Smooth transitions
- Float animasyonları

## 📱 Responsive Tasarım

### Breakpoints
- **Desktop**: > 768px
- **Tablet**: 481px - 768px
- **Mobile**: < 480px

### Mobil Özellikler
- Tam ekran drawer
- Touch-friendly butonlar
- Optimize edilmiş grid layout
- Responsive font boyutları

## 🔧 Geliştirme

### Lokal Test

Basit bir HTTP sunucusu kullanın:

```bash
# Python ile
python -m http.server 8000

# Node.js ile
npx serve .

# PHP ile
php -S localhost:8000
```

Arda tarayıcıda: `http://localhost:8000`

### Dosya Yapısı

```
/app/
├── index.html              # Ana HTML dosyası
├── linkler.xml             # Link veritabanı (XML)
├── static/
│   ├── css/
│   │   └── style.css       # Tüm CSS stilleri
│   └── js/
│       └── app.js          # Tüm JavaScript
├── DEPLOYMENT_GUIDE.md     # Deployment rehberi
└── README.md               # Bu dosya
```

### Kod Yapısı

**JavaScript (app.js):**
- Cache yönetimi (LocalStorage)
- Drawer işlevselliği
- XML parsing ve render
- Oyun ve haber yüklemesi
- Telegram Web App entegrasyonu

**CSS (style.css):**
- Modern gradient background
- Glassmorphism efektleri
- Responsive grid sistemleri
- Animasyonlar ve transitions
- Drawer ve overlay stilleri

## 👥 Telegram Web App

Telegram bot'unuzda web app olarak kullanmak için:

1. BotFather'da web app URL'inizi ayarlayın
2. Telegram Web App script otomatik yüklenir
3. Mobil uyumlu tasarım sayesinde sorunsuz çalışır

## 🔒 Güvenlik

- Tüm external linkler `target="_blank"` ve `rel="noopener noreferrer"` ile açılır
- XSS korumalı DOM manipulation
- HTTPS üzerinden çalışır (GitHub Pages)

## ⚡ Performans

- **LocalStorage Cache**: 1 saatlik cache ile hızlı yüklenme
- **CDN Kullanımı**: Font Awesome ve Google Fonts CDN'den
- **Optimize CSS**: Tek dosyada tüm stiller
- **Minimal JavaScript**: Hafif ve hızlı

## 📝 Lisans

Bu proje kişisel kullanım içindir.

## 👤 Yazar

**Pluzman**
- GitHub: [@pluzmna](https://github.com/pluzmna)
- Telegram: [@Pluzman](https://t.me/Pluzman)
- E-posta: dgiymat@gmail.com

## 🙏 Teşekkürler

- Font Awesome - İkonlar için
- Google Fonts - Inter font için
- GitHub Pages - Ücretsiz hosting için
- Tüm oyun severler için 💜

---

💜 **Oyun severler için yapıldı**

_Son güncelleme: Ocak 2025_