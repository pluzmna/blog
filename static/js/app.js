// Cache management
const CACHE_DURATION = 60 * 60 * 1000; // 1 hour
const CACHE_KEYS = {
    LINKS: 'pluzman_links',
    GAMES: 'pluzman_games',
    NEWS: 'pluzman_news'
};

// Get data from cache or fetch new
function getCachedData(key) {
    const cached = localStorage.getItem(key);
    if (!cached) return null;
    
    try {
        const { data, timestamp } = JSON.parse(cached);
        if (Date.now() - timestamp < CACHE_DURATION) {
            return data;
        }
        localStorage.removeItem(key);
    } catch (e) {
        console.error('Cache parse error:', e);
        localStorage.removeItem(key);
    }
    return null;
}

// Set data in cache
function setCachedData(key, data) {
    try {
        localStorage.setItem(key, JSON.stringify({
            data,
            timestamp: Date.now()
        }));
    } catch (e) {
        console.error('Cache set error:', e);
    }
}

// Drawer functionality
const drawer = document.getElementById('drawer');
const drawerToggle = document.getElementById('drawerToggle');
const drawerClose = document.getElementById('drawerClose');
const drawerOverlay = document.getElementById('drawerOverlay');

function openDrawer() {
    drawer.classList.add('active');
    drawerOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeDrawer() {
    drawer.classList.remove('active');
    drawerOverlay.classList.remove('active');
    document.body.style.overflow = '';
}

drawerToggle.addEventListener('click', openDrawer);
drawerClose.addEventListener('click', closeDrawer);
drawerOverlay.addEventListener('click', closeDrawer);

// Load links from XML
async function loadLinks() {
    const drawerContent = document.getElementById('drawerContent');
    
    // Check cache first
    const cachedLinks = getCachedData(CACHE_KEYS.LINKS);
    if (cachedLinks) {
        renderLinks(cachedLinks);
        return;
    }
    
    try {
        const response = await fetch('https://raw.githubusercontent.com/pluzmna/blog/main/linkler.xml');
        const xmlText = await response.text();
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xmlText, 'text/xml');
        
        const categories = xmlDoc.querySelectorAll('kategori');
        const linksData = [];
        
        categories.forEach(category => {
            const categoryId = category.getAttribute('id');
            const categoryName = category.getAttribute('isim');
            const links = [];
            
            category.querySelectorAll('link').forEach(link => {
                links.push({
                    title: link.querySelector('baslik')?.textContent || '',
                    url: link.querySelector('url')?.textContent || '',
                    description: link.querySelector('aciklama')?.textContent || '',
                    icon: link.querySelector('ikon')?.textContent || 'fas fa-link'
                });
            });
            
            linksData.push({
                id: categoryId,
                name: categoryName,
                links
            });
        });
        
        // Cache the data
        setCachedData(CACHE_KEYS.LINKS, linksData);
        renderLinks(linksData);
    } catch (error) {
        console.error('Error loading links:', error);
        drawerContent.innerHTML = '<p style="color: #ff6b6b; text-align: center;">Linkler yüklenemedi 😢</p>';
    }
}

function renderLinks(linksData) {
    const drawerContent = document.getElementById('drawerContent');
    
    // Category icons mapping
    const categoryIcons = {
        'iletisim': '📧',
        'sosyal': '🌐',
        'diger': '🔗'
    };
    
    let html = '';
    linksData.forEach(category => {
        const categoryIcon = categoryIcons[category.id] || '🔗';
        html += `
            <div class="category-section">
                <div class="category-header">
                    <span class="category-icon">${categoryIcon}</span>
                    <h4 class="category-title">${category.name}</h4>
                </div>
                <div class="category-links">
        `;
        
        category.links.forEach(link => {
            html += `
                <a href="${link.url}" target="_blank" rel="noopener noreferrer" class="link-bubble">
                    <div class="link-icon">
                        <i class="${link.icon}"></i>
                    </div>
                    <div class="link-info">
                        <div class="link-title">${link.title}</div>
                        <div class="link-description">${link.description}</div>
                    </div>
                </a>
            `;
        });
        
        html += `
                </div>
            </div>
        `;
    });
    
    drawerContent.innerHTML = html;
}

// Load free games
async function loadFreeGames() {
    const gamesGrid = document.getElementById('gamesGrid');
    
    // Check cache first
    const cachedGames = getCachedData(CACHE_KEYS.GAMES);
    if (cachedGames) {
        renderGames(cachedGames);
        return;
    }
    
    // Static free games data
    const freeGames = [
        {
            name: 'Fortnite',
            description: 'Battle Royale oyunu. 100 oyuncu, son kalan kazanır!',
            tag: 'Battle Royale'
        },
        {
            name: 'Valorant',
            description: 'Taktiksel 5v5 karakter tabanlı FPS oyunu.',
            tag: 'FPS'
        },
        {
            name: 'CS2 (Counter-Strike 2)',
            description: 'Efsanevi FPS oyununun yeni versiyonu.',
            tag: 'FPS'
        },
        {
            name: 'League of Legends',
            description: '5v5 MOBA oyunu. Dünya çapında popüler!',
            tag: 'MOBA'
        },
        {
            name: 'Dota 2',
            description: 'Strateji ve takım çalışması gerektiren MOBA.',
            tag: 'MOBA'
        },
        {
            name: 'Apex Legends',
            description: 'Karakter yetenekleriyle Battle Royale.',
            tag: 'Battle Royale'
        },
        {
            name: 'Warframe',
            description: 'Uzay ninja aksiyon oyunu. Co-op destekli.',
            tag: 'Action'
        },
        {
            name: 'Genshin Impact',
            description: 'Açık dünya RPG oyunu. Çarpıcı grafikler!',
            tag: 'RPG'
        },
        {
            name: 'Rocket League',
            description: 'Arabalar ve futbol! Heyecan dolu maçlar.',
            tag: 'Sports'
        }
    ];
    
    // Cache the data
    setCachedData(CACHE_KEYS.GAMES, freeGames);
    renderGames(freeGames);
}

function renderGames(games) {
    const gamesGrid = document.getElementById('gamesGrid');
    
    let html = '';
    games.forEach(game => {
        html += `
            <div class="game-card">
                <h4>${game.name}</h4>
                <p>${game.description}</p>
                <span class="game-tag">${game.tag}</span>
            </div>
        `;
    });
    
    gamesGrid.innerHTML = html;
}

// Load gaming news
async function loadNews() {
    const newsGrid = document.getElementById('newsGrid');
    
    // Check cache first
    const cachedNews = getCachedData(CACHE_KEYS.NEWS);
    if (cachedNews) {
        renderNews(cachedNews);
        return;
    }
    
    // Static gaming news data (Türkçe)
    const news = [
        {
            title: 'GTA 6 Çıkış Tarihi Açıklandı!',
            description: 'Rockstar Games, GTA 6\'nın 2025 yılında çıkacağını duyurdu. Vice City\'ye dönüyoruz!',
            source: 'Gaming News',
            date: '2025-01-15'
        },
        {
            title: 'Counter-Strike 2 Yeni Güncelleme',
            description: 'CS2\'ye yeni harita ve oyun modu eklendi. Premier matchmaking iyileştirmeleri geldi.',
            source: 'Esports TR',
            date: '2025-01-14'
        },
        {
            title: 'Valorant Yeni Ajan Duyuruldu',
            description: 'Valorant\'un yeni ajanı Iso gelecek sezonla birlikte oyuna eklenecek.',
            source: 'Riot Games',
            date: '2025-01-13'
        },
        {
            title: 'League of Legends 2025 Sezonu Başladı',
            description: 'Yeni sezon güncellemesi ile birlikte meta değişiklikler geldi.',
            source: 'LoL TR',
            date: '2025-01-10'
        },
        {
            title: 'PlayStation VR2 İndirimde',
            description: 'Sony, PSVR2 fiyatlarında büyük indirim yaptı. Oyun kataloğu genişliyor.',
            source: 'Tech Gaming',
            date: '2025-01-08'
        },
        {
            title: 'Steam Kış İndirimleri Devam Ediyor',
            description: 'Binlerce oyun %90\'a varan indirimlerle! Fırsat kaçmaz.',
            source: 'Steam News',
            date: '2025-01-05'
        }
    ];
    
    // Cache the data
    setCachedData(CACHE_KEYS.NEWS, news);
    renderNews(news);
}

function renderNews(news) {
    const newsGrid = document.getElementById('newsGrid');
    
    let html = '';
    news.forEach(article => {
        html += `
            <div class="news-card">
                <h4>${article.title}</h4>
                <p>${article.description}</p>
                <div class="news-meta">
                    <span><i class="fas fa-newspaper"></i> ${article.source}</span>
                    <span><i class="fas fa-calendar"></i> ${article.date}</span>
                </div>
            </div>
        `;
    });
    
    newsGrid.innerHTML = html;
}

// Initialize everything on page load
document.addEventListener('DOMContentLoaded', () => {
    loadLinks();
    loadFreeGames();
    loadNews();
    
    // Telegram Web App initialization (if running in Telegram)
    if (window.Telegram && window.Telegram.WebApp) {
        const tg = window.Telegram.WebApp;
        tg.ready();
        tg.expand();
        
        // Set theme colors
        if (tg.themeParams) {
            document.documentElement.style.setProperty('--tg-theme-bg-color', tg.themeParams.bg_color || '#0f0c29');
            document.documentElement.style.setProperty('--tg-theme-text-color', tg.themeParams.text_color || '#e0e0e0');
        }
    }
});

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
    // ESC to close drawer
    if (e.key === 'Escape' && drawer.classList.contains('active')) {
        closeDrawer();
    }
    
    // Ctrl/Cmd + L to open drawer
    if ((e.ctrlKey || e.metaKey) && e.key === 'l') {
        e.preventDefault();
        if (drawer.classList.contains('active')) {
            closeDrawer();
        } else {
            openDrawer();
        }
    }
});