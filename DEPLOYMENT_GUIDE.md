# GitHub Pages Deployment Rehberi 🚀

## Hızlı Başlangıç (5 Dakika)

### Adım 1: Dosyaları Kontrol Et ✅

Aşağıdaki dosyaların repo'nuzun ana dizininde olduğundan emin olun:

```
/
├── index.html          ✅ Ana sayfa
├── linkler.xml         ✅ Link veritabanı
└── static/            ✅ Statik dosyalar
    ├── css/
    │   └── style.css
    └── js/
        └── app.js
```

### Adım 2: GitHub Settings'e Git

1. GitHub repo'nuza gidin: `https://github.com/pluzmna/blog1`
2. Sağ üstteki **Settings** sekmesine tıklayın
### Adım 3: Pages Ayarlarını Yapın
1. Sol menüden **Pages** seçeneğine tıklayın
2. **Source** bölümünde:
   - **"Deploy from a branch"** seçin

3. **Branch** bölümünde:
   - Branch: **`main`** (veya `master`) seçin
   - Folder: **`/ (root)`** seçin

4. **Save** butonuna tıklayın

### Adım 4: Bekleyin ve Ziyaret Edin 🎉

- Deployment 2-3 dakika sürebilir
- Sayfa hazır olduğunda yeşil bir onay mesajı görürsünüz
- Siteniz bu adreste yayında: `https://pluzmna.github.io/blog1/`

---

## Detaylı Açıklama

### GitHub Pages Nedir?

GitHub Pages, GitHub repository'nizden doğrudan statik web siteleri yayınlamanıza olanak tanır. Tamamen ücretsizdir!

### Neden Static Site?

Bu proje **tamamen statik** (HTML/CSS/JavaScript) olarak tasarlandı:
- ✅ GitHub Pages ile uyumlu
- ✅ Hızlı yüklenme
- ✅ Sunucu maliyeti yok
- ✅ Kolay bakım

### Linkler Nasıl Çalışır?

`linkler.xml` dosyası GitHub'daki `https://github.com/pluzmna/blog` reposundan çekilir:
- JavaScript ile otomatik fetch edilir
- LocalStorage'da 1 saat cache'lenir
- Tüm linkler **yeni sekmede** açılır (`target="_blank"`)

### Özel Domain Bağlama (Opsiyonel)

Kendi domain'inizi bağlamak isterseniz:

1. **DNS Ayarları:**
   ```
   Tip: CNAME
   Name: www (veya @)
   Value: pluzmna.github.io
   ```

2. **GitHub Settings → Pages:**
   - "Custom domain" alanına domain'inizi yazın
3. **HTTPS:** GitHub otomatik SSL sertifikası sağlar

---

## Sorun Giderme 🔧

### Site Görünmüyor

**Çözüm:**
1. `index.html`'in repo kök dizininde olduğunu kontrol edin
2. Branch seçiminin doğru olduğundan emin olun
3. Actions sekmesinde build hatası olup olmadığını kontrol edin

### CSS/JS Yüklenmiyor

**Çözüm:**
1. Dosya yollarını kontrol edin: `./static/css/style.css`
2. Dosya isimlerinin büyük/küçük harf duyarlılığına dikkat edin
3. Browser console'da (F12) hata mesajlarını kontrol edin

### Linkler Görünmüyor

**Çözüm:**
1. `linkler.xml`'in doğru formatta olduğunu kontrol edin
2. CORS hatası varsa, GitHub raw URL'sini kullanın
3. Browser console'u kontrol edin (F12)

### 404 Hatası

**Çözüm:**
1. Doğru URL'yi kullanın: `https://kullaniciadi.github.io/repo-adi/`
2. Repo isminde büyük harf varsa küçük harfe çevirin
3. `index.html` dosyasının varlığını kontrol edin

---

## Güncelleme Yapma

### Linkler Güncelleme

1. `linkler.xml` dosyasını düzenleyin
2. Değişiklikleri commit & push yapın
3. Cache temizlemek için: Browser'da `Ctrl+Shift+R` (hard refresh)

### Tasarım Değiştirme

1. `static/css/style.css` dosyasını düzenleyin
2. Commit & push yapın
3. 1-2 dakika sonra değişiklikler yayınlanır

### Yeni Özellik Ekleme

1. `static/js/app.js` dosyasını düzenleyin
2. `index.html`'e gerekli HTML ekleyin
3. Commit & push yapın
---

## Performans İpuçları ⚡

### Cache Kullanımı

Proje LocalStorage ile 1 saatlik cache kullanır:
- Linkler 1 saat cache'lenir
- Oyun listesi 1 saat cache'lenir
- Haberler 1 saat cache'lenir

Cache'i temizlemek için:
```javascript
localStorage.clear();
```

### Hızlı Yüklenme

- CDN'den yüklenen kütüphaneler (Font Awesome, Google Fonts)
- Optimize edilmiş CSS (Glassmorphism)
- Lazy loading yok - tüm içerik anında yüklenir

---

## Güvenlik 🔒

### HTTPS

GitHub Pages otomatik HTTPS sağlar. Tüm bağlantılar güvenlidir.

### External Links

Tüm dış linkler:
- `target="_blank"` ile yeni sekmede açılır
- `rel="noopener noreferrer"` ile güvenliği sağlanır

---

## Yardım ve Destek

### Soru Sormak İçin:

- **GitHub Discussions:** [blog/discussions](https://github.com/pluzmna/blog/discussions)
- **Telegram:** [@Pluzman](https://t.me/Pluzman)
- **E-posta:** dgiymat@gmail.com

### Yararlı Kaynaklar:

- [GitHub Pages Dokümantasyonu](https://docs.github.com/en/pages)
- [MDN Web Docs](https://developer.mozilla.org/)
- [Font Awesome Icons](https://fontawesome.com/icons)

---

## Lisans

Bu proje kişisel kullanım içindir. Özgürce kullanabilir ve özelleştirebilirsiniz!

---

🎮 **İyi oyunlar!**

_Son güncelleme: Ocak 2025_