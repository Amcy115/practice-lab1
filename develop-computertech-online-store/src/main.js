// ============ DATA ============
const CATEGORIES = [
  { id: 1, name: 'Ноутбуки', slug: 'laptops', icon: '💻' },
  { id: 2, name: 'Системные блоки', slug: 'pcs', icon: '🖥️' },
  { id: 3, name: 'Мониторы', slug: 'monitors', icon: '🖼️' },
  { id: 4, name: 'Процессоры', slug: 'cpu', icon: '🧠' },
  { id: 5, name: 'Видеокарты', slug: 'gpu', icon: '🎮' },
  { id: 6, name: 'Оперативная память', slug: 'ram', icon: '💾' },
  { id: 7, name: 'Накопители', slug: 'storage', icon: '🗄️' },
  { id: 8, name: 'Периферия', slug: 'peripherals', icon: '⌨️' },
  { id: 9, name: 'Аксессуары', slug: 'accessories', icon: '🔌' },
];

const BRANDS = [
  { id: 1, name: 'ASUS' }, { id: 2, name: 'Lenovo' }, { id: 3, name: 'HP' },
  { id: 4, name: 'Dell' }, { id: 5, name: 'MSI' }, { id: 6, name: 'Apple' },
  { id: 7, name: 'Intel' }, { id: 8, name: 'AMD' }, { id: 9, name: 'NVIDIA' },
  { id: 10, name: 'Samsung' }, { id: 11, name: 'Kingston' }, { id: 12, name: 'Logitech' },
];

function svgImg(emoji, c1, c2) {
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'><defs><linearGradient id='g' x1='0' y1='0' x2='1' y2='1'><stop offset='0%' stop-color='${c1}'/><stop offset='100%' stop-color='${c2}'/></linearGradient></defs><rect width='400' height='300' fill='url(%23g)'/><text x='200' y='190' font-size='120' text-anchor='middle'>${emoji}</text></svg>`;
  return 'data:image/svg+xml;utf8,' + encodeURIComponent(svg);
}

let products = [
  { id: 1, name: 'ASUS ROG Strix G15', categoryId: 1, brandId: 1, price: 129990, oldPrice: 149990, stock: 12, rating: 4.8, reviewsCount: 124, description: 'Игровой ноутбук с AMD Ryzen 7 и RTX 4060. Идеален для игр и творчества.', image: svgImg('💻', '%231e3a8a', '%237c3aed'), attributes: [{k:'Процессор',v:'AMD Ryzen 7 7735HS'},{k:'Видеокарта',v:'RTX 4060 8GB'},{k:'ОЗУ',v:'16 GB DDR5'},{k:'SSD',v:'1 TB NVMe'},{k:'Экран',v:'15.6" 165Hz'}], isHit: true, createdAt: '2026-01-15', seller: 'seller' },
  { id: 2, name: 'Lenovo Legion 5 Pro', categoryId: 1, brandId: 2, price: 154990, stock: 8, rating: 4.9, reviewsCount: 89, description: 'Мощный игровой ноутбук с экраном 16" QHD 240Hz.', image: svgImg('💻', '%23dc2626', '%23ea580c'), attributes: [{k:'Процессор',v:'Intel Core i7-13700H'},{k:'Видеокарта',v:'RTX 4070 8GB'},{k:'ОЗУ',v:'32 GB DDR5'},{k:'Экран',v:'16" 2560x1600 240Hz'}], isNew: true, createdAt: '2026-03-01', seller: 'seller' },
  { id: 3, name: 'Apple MacBook Pro 14"', categoryId: 1, brandId: 6, price: 219990, stock: 15, rating: 5.0, reviewsCount: 256, description: 'Профессиональный ноутбук на Apple M3 Pro.', image: svgImg('💻', '%23475569', '%231e293b'), attributes: [{k:'Процессор',v:'Apple M3 Pro'},{k:'ОЗУ',v:'18 GB Unified'},{k:'SSD',v:'512 GB'},{k:'Экран',v:'14.2" Liquid Retina XDR'}], isHit: true, createdAt: '2026-02-20', seller: 'seller' },
  { id: 4, name: 'Игровой ПК Hyperion RTX 4070', categoryId: 2, brandId: 5, price: 189990, oldPrice: 209990, stock: 5, rating: 4.7, reviewsCount: 47, description: 'Готовый игровой компьютер для требовательных задач.', image: svgImg('🖥️', '%23059669', '%2306b6d4'), attributes: [{k:'Процессор',v:'Intel Core i7-13700KF'},{k:'Видеокарта',v:'RTX 4070 12GB'},{k:'ОЗУ',v:'32 GB DDR5'},{k:'SSD',v:'2 TB NVMe'}], isNew: true, createdAt: '2026-03-10', seller: 'seller' },
  { id: 5, name: 'Samsung Odyssey G7 32"', categoryId: 3, brandId: 10, price: 64990, stock: 20, rating: 4.6, reviewsCount: 312, description: 'Изогнутый игровой монитор 240Hz.', image: svgImg('🖼️', '%237c3aed', '%23ec4899'), attributes: [{k:'Диагональ',v:'32"'},{k:'Разрешение',v:'2560x1440 QHD'},{k:'Частота',v:'240 Hz'},{k:'Матрица',v:'VA Curved'}], isHit: true, createdAt: '2026-01-05', seller: 'seller' },
  { id: 6, name: 'Intel Core i9-14900K', categoryId: 4, brandId: 7, price: 64990, stock: 25, rating: 4.9, reviewsCount: 178, description: 'Топовый процессор 14-го поколения. 24 ядра.', image: svgImg('🧠', '%230284c7', '%231e40af'), attributes: [{k:'Сокет',v:'LGA 1700'},{k:'Ядра',v:'24 / 32'},{k:'Частота Turbo',v:'6.0 GHz'}], isNew: true, createdAt: '2026-02-01', seller: 'seller' },
  { id: 7, name: 'NVIDIA RTX 4080 Super', categoryId: 5, brandId: 9, price: 119990, stock: 7, rating: 4.8, reviewsCount: 92, description: 'Флагманская видеокарта для 4K-гейминга.', image: svgImg('🎮', '%2316a34a', '%2384cc16'), attributes: [{k:'Видеопамять',v:'16 GB GDDR6X'},{k:'CUDA-ядра',v:'10240'}], isHit: true, createdAt: '2026-01-20', seller: 'seller' },
  { id: 8, name: 'Kingston Fury 32GB DDR5', categoryId: 6, brandId: 11, price: 12990, stock: 50, rating: 4.7, reviewsCount: 421, description: 'Высокоскоростной комплект ОЗУ DDR5 6000MHz с RGB.', image: svgImg('💾', '%23db2777', '%239333ea'), attributes: [{k:'Объём',v:'32 GB (2x16 GB)'},{k:'Тип',v:'DDR5'},{k:'Частота',v:'6000 MHz'}], createdAt: '2025-12-10', seller: 'seller' },
  { id: 9, name: 'Samsung 990 PRO 2TB NVMe', categoryId: 7, brandId: 10, price: 19990, oldPrice: 24990, stock: 30, rating: 4.9, reviewsCount: 587, description: 'NVMe SSD со скоростью чтения до 7450 MB/s.', image: svgImg('🗄️', '%230f766e', '%230369a1'), attributes: [{k:'Объём',v:'2 TB'},{k:'Чтение',v:'7450 MB/s'},{k:'Запись',v:'6900 MB/s'}], isHit: true, createdAt: '2025-11-15', seller: 'seller' },
  { id: 10, name: 'Logitech G Pro X', categoryId: 8, brandId: 12, price: 14990, stock: 40, rating: 4.6, reviewsCount: 234, description: 'Механическая игровая клавиатура.', image: svgImg('⌨️', '%231f2937', '%23374151'), attributes: [{k:'Тип',v:'Механическая'},{k:'Форм-фактор',v:'TKL'}], createdAt: '2025-10-20', seller: 'seller' },
  { id: 11, name: 'Logitech G Pro Superlight 2', categoryId: 8, brandId: 12, price: 13990, stock: 35, rating: 4.9, reviewsCount: 698, description: 'Беспроводная игровая мышь 60 г.', image: svgImg('🖱️', '%23facc15', '%23f97316'), attributes: [{k:'Сенсор',v:'HERO 2'},{k:'Вес',v:'60 г'}], isHit: true, createdAt: '2026-01-08', seller: 'seller' },
  { id: 12, name: 'Dell UltraSharp U2723QE 27" 4K', categoryId: 3, brandId: 4, price: 79990, stock: 10, rating: 4.8, reviewsCount: 145, description: 'Профессиональный монитор 4K IPS Black.', image: svgImg('🖼️', '%231e40af', '%230891b2'), attributes: [{k:'Диагональ',v:'27"'},{k:'Разрешение',v:'3840x2160 4K'}], createdAt: '2025-09-01', seller: 'seller' },
];

let users = [
  { id: 1, email: 'admin@electromag.ru', name: 'Администратор', role: 'admin', phone: '+7 (999) 000-00-01', createdAt: '2025-01-01' },
  { id: 2, email: 'mod@electromag.ru', name: 'Модератор Иван', role: 'moderator', phone: '+7 (999) 000-00-02', createdAt: '2025-02-01' },
  { id: 3, email: 'user@mail.ru', name: 'Алексей Покупатель', role: 'customer', phone: '+7 (999) 123-45-67', address: 'г. Москва, ул. Ленина, 1', createdAt: '2025-06-15' },
  { id: 4, email: 'seller@electromag.ru', name: 'Продавец Олег', role: 'seller', phone: '+7 (999) 000-00-04', createdAt: '2025-03-10' },
];

let orders = [
  { id: 1001, userId: 3, userName: 'Алексей Покупатель', items: [{ productId: 5, name: 'Samsung Odyssey G7 32"', quantity: 1, price: 64990 }], total: 64990, status: 'delivered', paymentMethod: 'card', deliveryMethod: 'courier', address: 'г. Москва, ул. Ленина, 1', trackNumber: 'CT123456789', createdAt: '2026-01-15' },
  { id: 1002, userId: 3, userName: 'Алексей Покупатель', items: [{ productId: 8, name: 'Kingston Fury 32GB DDR5', quantity: 2, price: 12990 }, { productId: 11, name: 'Logitech G Pro Superlight 2', quantity: 1, price: 13990 }], total: 39970, status: 'shipped', paymentMethod: 'sbp', deliveryMethod: 'courier', address: 'г. Москва, ул. Ленина, 1', trackNumber: 'CT987654321', createdAt: '2026-03-01' },
  { id: 1003, userId: 3, userName: 'Алексей Покупатель', items: [{ productId: 1, name: 'ASUS ROG Strix G15', quantity: 1, price: 129990 }], total: 129990, status: 'paid', paymentMethod: 'card', deliveryMethod: 'pickup', address: 'Самовывоз', createdAt: '2026-03-20' },
];

let reviews = [
  { id: 1, productId: 1, userName: 'Александр П.', rating: 5, text: 'Отличный ноутбук, играю в топовые игры!', date: '2026-02-10', approved: true },
  { id: 2, productId: 1, userName: 'Мария К.', rating: 4, text: 'Хороший, но шумит.', date: '2026-02-15', approved: true },
  { id: 3, productId: 5, userName: 'Александр П.', rating: 5, text: 'Изображение огонь, 240Hz чувствуется.', date: '2026-01-20', approved: true },
];

const salesData = [
  { month: 'Окт', revenue: 1240000 },
  { month: 'Ноя', revenue: 1580000 },
  { month: 'Дек', revenue: 2340000 },
  { month: 'Янв', revenue: 1890000 },
  { month: 'Фев', revenue: 2120000 },
  { month: 'Мар', revenue: 2670000 },
];

// ============ STATE ============
let state = {
  currentUser: null,
  cart: [],
  wishlist: [],
  theme: 'light',
  page: 'home',
  pageParams: {},
};

function loadState() {
  try {
    const raw = localStorage.getItem('ct_state');
    if (raw) {
      const s = JSON.parse(raw);
      state.cart = s.cart || [];
      state.wishlist = s.wishlist || [];
      state.theme = s.theme || 'light';
      if (s.currentUserId) {
        state.currentUser = users.find(u => u.id === s.currentUserId) || null;
      }
      if (s.products) products = s.products;
      if (s.orders) orders = s.orders;
      if (s.users) users = s.users;
      if (s.reviews) reviews = s.reviews;
    }
  } catch(e) {}
}

function saveState() {
  localStorage.setItem('ct_state', JSON.stringify({
    cart: state.cart,
    wishlist: state.wishlist,
    theme: state.theme,
    currentUserId: state.currentUser?.id,
    products,
    orders,
    users,
    reviews,
  }));
}

// ============ HELPERS ============
function $(id) { return document.getElementById(id); }
function fmtPrice(n) { return new Intl.NumberFormat('ru-RU').format(n) + ' ₽'; }
function esc(s) { return String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])); }
function getCat(id) { return CATEGORIES.find(c => c.id === id); }
function getBrand(id) { return BRANDS.find(b => b.id === id); }

function notify(msg, type = 'success') {
  const t = document.createElement('div');
  t.className = 'toast ' + type;
  t.textContent = msg;
  $('toasts').appendChild(t);
  setTimeout(() => t.remove(), 3000);
}

function starsHTML(r) {
  let h = '<span class="stars">';
  for (let i = 1; i <= 5; i++) h += i <= Math.round(r) ? '★' : '<span class="off">★</span>';
  return h + '</span>';
}

// ============ NAVIGATION ============
function navigate(page, params = {}) {
  state.page = page;
  state.pageParams = params;
  render();
  window.scrollTo({ top: 0, behavior: 'smooth' });
  document.title = {
    home: 'ЭлектроМаг — Интернет-магазин электроники',
    catalog: 'Каталог · ЭлектроМаг',
    product: 'Товар · ЭлектроМаг',
    cart: 'Корзина · ЭлектроМаг',
    wishlist: 'Избранное · ЭлектроМаг',
    checkout: 'Оформление · ЭлектроМаг',
    login: 'Вход · ЭлектроМаг',
    register: 'Регистрация · ЭлектроМаг',
    'forgot-password': 'Восстановление пароля',
    profile: 'Профиль · ЭлектроМаг',
    orders: 'Заказы · ЭлектроМаг',
    admin: 'Админ-панель · ЭлектроМаг',
    seller: 'Кабинет продавца',
    about: 'О магазине · ЭлектроМаг',
  }[page] || 'ЭлектроМаг';
}
window.navigate = navigate;

// ============ RENDER ============
function render() {
  const app = $('app');
  updateHeader();
  switch (state.page) {
    case 'home': app.innerHTML = renderHome(); break;
    case 'catalog': app.innerHTML = renderCatalog(); break;
    case 'product': app.innerHTML = renderProduct(state.pageParams.id); break;
    case 'cart': app.innerHTML = renderCart(); break;
    case 'wishlist': app.innerHTML = renderWishlist(); break;
    case 'checkout': app.innerHTML = renderCheckout(); break;
    case 'login': app.innerHTML = renderLogin(); break;
    case 'register': app.innerHTML = renderRegister(); break;
    case 'forgot-password': app.innerHTML = renderForgot(); break;
    case 'profile': app.innerHTML = renderProfile(); break;
    case 'orders': app.innerHTML = renderOrders(); break;
    case 'admin': app.innerHTML = renderAdmin(); break;
    case 'seller': app.innerHTML = renderSeller(); break;
    case 'about': app.innerHTML = renderAbout(); break;
    default: app.innerHTML = renderHome();
  }
  bindPageHandlers();
}

function updateHeader() {
  $('cart-count').textContent = state.cart.reduce((s, i) => s + i.qty, 0);
  $('wish-count').textContent = state.wishlist.length;
  $('theme-btn').textContent = state.theme === 'dark' ? '☀️' : '🌙';

  const btn = $('user-btn');
  const dd = $('user-dropdown');
  if (state.currentUser) {
    $('user-avatar').textContent = state.currentUser.name[0];
    $('user-name').textContent = state.currentUser.name.split(' ')[0];
    const roleBadge = { admin: '👑 Админ', moderator: '🛡️ Модератор', seller: '🏪 Продавец', customer: '👤 Покупатель' }[state.currentUser.role] || '';
    dd.innerHTML = `
      <div class="user-dropdown-head">
        <strong>${esc(state.currentUser.name)}</strong>
        <div class="ud-email">${esc(state.currentUser.email)}</div>
        <span class="tag tag-${state.currentUser.role === 'admin' ? 'red' : state.currentUser.role === 'moderator' ? 'yellow' : state.currentUser.role === 'seller' ? 'green' : 'blue'}" style="margin-top:6px">${roleBadge}</span>
      </div>
      <button onclick="navigate('profile')">👤 Профиль</button>
      <button onclick="navigate('orders')">📦 Мои заказы</button>
      ${state.currentUser.role === 'seller' ? '<button onclick="navigate(\'seller\')">🏪 Кабинет продавца</button>' : ''}
      ${(state.currentUser.role === 'admin' || state.currentUser.role === 'moderator') ? '<button onclick="navigate(\'admin\')">⚙️ Админ-панель</button>' : ''}
      <button onclick="doLogout()" style="color:var(--danger)">🚪 Выйти</button>
    `;
  } else {
    $('user-avatar').textContent = '?';
    $('user-name').textContent = 'Войти';
    dd.innerHTML = `<button onclick="navigate('login')" class="btn btn-primary btn-block">Войти</button>`;
  }
}

function bindPageHandlers() {
  // Dropdown toggle
  $('user-btn').onclick = (e) => {
    e.stopPropagation();
    $('user-dropdown').classList.toggle('show');
  };
  document.onclick = () => $('user-dropdown')?.classList.remove('show');
}

// ============ PAGE: HOME ============
function renderHome() {
  const hits = products.filter(p => p.isHit).slice(0, 4);
  const newest = products.filter(p => p.isNew).slice(0, 4);

  return `
    <section class="hero">
      <div class="container hero-inner">
        <div>
          <span class="tag tag-yellow" style="background:rgba(255,255,255,.2);color:white;margin-bottom:16px;display:inline-block">🚀 Скидки до 30%</span>
          <h1>Компьютерная техника для <span style="color:#fde047">каждого</span></h1>
          <p>Ноутбуки, ПК, видеокарты, периферия и аксессуары. Гарантия качества и быстрая доставка.</p>
          <div class="hero-actions">
            <button class="btn btn-primary btn-lg" onclick="navigate('catalog')">Перейти в каталог →</button>
            <button class="btn btn-secondary btn-lg" style="background:rgba(255,255,255,.1);color:white;border:none" onclick="navigate('about')">О магазине</button>
          </div>
          <div class="hero-stats">
            <div><div class="hero-stat-value">10K+</div><div class="hero-stat-label">товаров</div></div>
            <div><div class="hero-stat-value">50K+</div><div class="hero-stat-label">клиентов</div></div>
            <div><div class="hero-stat-value">8 лет</div><div class="hero-stat-label">на рынке</div></div>
          </div>
        </div>
        <div class="hero-emoji">💻</div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <h2 class="section-title">Категории</h2>
        <div class="cat-grid">
          ${CATEGORIES.map(c => `
            <div class="cat-card" onclick="navigate('catalog', {categoryId:${c.id}})">
              <div class="cat-icon">${c.icon}</div>
              <div class="cat-name">${esc(c.name)}</div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:20px">
          <h2 class="section-title" style="margin:0">🔥 Хиты продаж</h2>
          <button class="btn btn-ghost btn-sm" onclick="navigate('catalog')">Все товары →</button>
        </div>
        <div class="products-grid">${hits.map(productCardHTML).join('')}</div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:20px">
          <h2 class="section-title" style="margin:0">✨ Новинки</h2>
          <button class="btn btn-ghost btn-sm" onclick="navigate('catalog')">Смотреть все →</button>
        </div>
        <div class="products-grid">${newest.map(productCardHTML).join('')}</div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="features-grid">
          ${[
            ['🚚', 'Быстрая доставка', '1-3 дня по всей России'],
            ['🛡️', 'Гарантия', 'От 1 года на все товары'],
            ['💳', 'Удобная оплата', 'Карта, СБП, наличные'],
            ['📞', 'Поддержка 24/7', 'Всегда на связи'],
          ].map(f => `
            <div class="feature-card">
              <div class="feature-icon">${f[0]}</div>
              <div class="feature-title">${f[1]}</div>
              <div class="feature-desc">${f[2]}</div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}

function productCardHTML(p) {
  const discount = p.oldPrice ? Math.round((1 - p.price / p.oldPrice) * 100) : 0;
  const inWish = state.wishlist.includes(p.id);
  return `
    <div class="product-card">
      <div style="position:relative">
        <img src="${p.image}" alt="${esc(p.name)}" class="product-img" onclick="navigate('product', {id:${p.id}})" />
        <div style="position:absolute;top:8px;left:8px">
          ${p.isNew ? '<span class="tag tag-green">Новинка</span>' : ''}
          ${p.isHit ? '<span class="tag tag-red">Хит</span>' : ''}
          ${discount > 0 ? `<span class="tag tag-yellow">−${discount}%</span>` : ''}
        </div>
        <button style="position:absolute;top:8px;right:8px;background:${inWish ? '#ef4444' : 'white'};border:none;width:36px;height:36px;border-radius:50%;cursor:pointer;font-size:16px" onclick="toggleWishlist(${p.id})">${inWish ? '❤️' : '🤍'}</button>
      </div>
      <div class="product-body">
        <div style="margin-bottom:6px">${starsHTML(p.rating)} <span class="text-sm text-muted">(${p.reviewsCount})</span></div>
        <div class="product-name" onclick="navigate('product', {id:${p.id}})">${esc(p.name)}</div>
        <div class="product-specs">${p.attributes.slice(0,2).map(a => a.k+': '+a.v).join(' · ')}</div>
        <div class="product-bottom">
          <div>
            ${p.oldPrice ? `<div class="product-old-price">${fmtPrice(p.oldPrice)}</div>` : ''}
            <div class="product-price">${fmtPrice(p.price)}</div>
          </div>
          <div class="product-stock ${p.stock ? '' : 'out'}">${p.stock > 0 ? '✓ В наличии' : 'Нет в наличии'}</div>
        </div>
        <button class="btn btn-primary btn-block" ${p.stock === 0 ? 'disabled' : ''} onclick="addToCart(${p.id})">🛒 В корзину</button>
      </div>
    </div>
  `;
}

// ============ PAGE: CATALOG ============
let filterState = { categoryId: null, search: '', brandIds: [], priceMin: 0, priceMax: 300000, inStock: false, sort: 'popular' };

function renderCatalog() {
  const p = state.pageParams;
  if (p.categoryId) filterState.categoryId = p.categoryId;
  if (p.search !== undefined) filterState.search = p.search;

  let list = [...products];
  if (filterState.categoryId) list = list.filter(x => x.categoryId === filterState.categoryId);
  if (filterState.brandIds.length > 0) list = list.filter(x => filterState.brandIds.includes(x.brandId));
  if (filterState.search.trim()) {
    const s = filterState.search.toLowerCase();
    list = list.filter(x => x.name.toLowerCase().includes(s) || x.description.toLowerCase().includes(s) || x.attributes.some(a => a.v.toLowerCase().includes(s)));
  }
  list = list.filter(x => x.price >= filterState.priceMin && x.price <= filterState.priceMax);
  if (filterState.inStock) list = list.filter(x => x.stock > 0);
  switch (filterState.sort) {
    case 'price-asc': list.sort((a, b) => a.price - b.price); break;
    case 'price-desc': list.sort((a, b) => b.price - a.price); break;
    case 'rating': list.sort((a, b) => b.rating - a.rating); break;
    case 'new': list.sort((a, b) => b.createdAt.localeCompare(a.createdAt)); break;
    default: list.sort((a, b) => b.reviewsCount - a.reviewsCount);
  }

  const catName = filterState.categoryId ? getCat(filterState.categoryId)?.name : '';

  return `
    <div class="container" style="padding:20px 16px">
      <div class="breadcrumbs">
        <a onclick="navigate('home')">Главная</a>
        <span class="sep">/</span>
        <span>Каталог</span>
        ${catName ? `<span class="sep">/</span><span style="color:var(--fg)">${esc(catName)}</span>` : ''}
      </div>
      <h1 class="section-title">${catName || 'Все товары'}</h1>
      <div class="catalog-layout">
        <aside>
          <div class="filter-block">
            <h3>Категории</h3>
            <div class="filter-list">
              <button class="filter-item ${!filterState.categoryId ? 'active' : ''}" onclick="setCatFilter(null)">Все категории</button>
              ${CATEGORIES.map(c => `
                <button class="filter-item ${filterState.categoryId === c.id ? 'active' : ''}" onclick="setCatFilter(${c.id})">${c.icon} ${esc(c.name)}</button>
              `).join('')}
            </div>
          </div>
          <div class="filter-block">
            <h3>Цена, ₽</h3>
            <div style="display:flex;gap:8px;align-items:center">
              <input class="input" type="number" value="${filterState.priceMin}" onchange="setPriceMin(+this.value)" placeholder="от" style="padding:6px 8px" />
              <span>—</span>
              <input class="input" type="number" value="${filterState.priceMax}" onchange="setPriceMax(+this.value)" placeholder="до" style="padding:6px 8px" />
            </div>
          </div>
          <div class="filter-block">
            <h3>Бренды</h3>
            <div class="filter-list">
              ${BRANDS.map(b => `
                <label class="filter-label"><input type="checkbox" ${filterState.brandIds.includes(b.id) ? 'checked' : ''} onchange="toggleBrand(${b.id})"> ${esc(b.name)}</label>
              `).join('')}
            </div>
          </div>
          <div class="filter-block">
            <label class="filter-label"><input type="checkbox" ${filterState.inStock ? 'checked' : ''} onchange="setInStock(this.checked)"> Только в наличии</label>
          </div>
          <button class="btn btn-outline btn-block btn-sm" onclick="resetFilters()">Сбросить</button>
        </aside>
        <div>
          <div style="display:flex;gap:8px;margin-bottom:12px;flex-wrap:wrap">
            <input class="input" style="flex:1;min-width:200px" value="${esc(filterState.search)}" oninput="filterState.search=this.value;render()" placeholder="Поиск в каталоге..." />
            <select class="select" style="width:200px" onchange="filterState.sort=this.value;render()">
              <option value="popular" ${filterState.sort==='popular'?'selected':''}>По популярности</option>
              <option value="new" ${filterState.sort==='new'?'selected':''}>Сначала новые</option>
              <option value="price-asc" ${filterState.sort==='price-asc'?'selected':''}>Цена ↑</option>
              <option value="price-desc" ${filterState.sort==='price-desc'?'selected':''}>Цена ↓</option>
              <option value="rating" ${filterState.sort==='rating'?'selected':''}>По рейтингу</option>
            </select>
          </div>
          <div class="text-sm text-muted mb-2">Найдено: ${list.length}</div>
          ${list.length === 0 ? `
            <div class="card empty">
              <div class="empty-icon">😔</div>
              <h2>Ничего не найдено</h2>
              <p>Попробуйте изменить фильтры</p>
            </div>
          ` : `<div class="products-grid">${list.map(productCardHTML).join('')}</div>`}
        </div>
      </div>
    </div>
  `;
}

window.setCatFilter = id => { filterState.categoryId = id; render(); };
window.setPriceMin = v => { filterState.priceMin = v; render(); };
window.setPriceMax = v => { filterState.priceMax = v; render(); };
window.toggleBrand = id => {
  if (filterState.brandIds.includes(id)) filterState.brandIds = filterState.brandIds.filter(x => x !== id);
  else filterState.brandIds.push(id);
  render();
};
window.setInStock = v => { filterState.inStock = v; render(); };
window.resetFilters = () => { filterState = { categoryId: null, search: '', brandIds: [], priceMin: 0, priceMax: 300000, inStock: false, sort: 'popular' }; render(); };

function doSearch(e) {
  e.preventDefault();
  const v = $('search-input').value.trim();
  filterState.search = v;
  navigate('catalog');
}
window.doSearch = doSearch;

// ============ PAGE: PRODUCT ============
function renderProduct(id) {
  const p = products.find(x => x.id === id);
  if (!p) return '<div class="container" style="padding:40px 16px;text-align:center">Товар не найден</div>';

  const cat = getCat(p.categoryId);
  const brand = getBrand(p.brandId);
  const inWish = state.wishlist.includes(p.id);
  const pReviews = reviews.filter(r => r.productId === id && r.approved);
  const similar = products.filter(x => x.categoryId === p.categoryId && x.id !== p.id).slice(0, 4);

  return `
    <div class="container" style="padding:20px 16px">
      <div class="breadcrumbs">
        <a onclick="navigate('home')">Главная</a><span class="sep">/</span>
        <a onclick="navigate('catalog')">Каталог</a>
        ${cat ? `<span class="sep">/</span><a onclick="navigate('catalog',{categoryId:${cat.id}})">${esc(cat.name)}</a>` : ''}
        <span class="sep">/</span>
        <span style="color:var(--fg)">${esc(p.name)}</span>
      </div>

      <div class="product-detail">
        <div>
          <div class="product-main-img"><img src="${p.image}" alt="${esc(p.name)}" /></div>
        </div>
        <div>
          <div style="margin-bottom:8px">
            ${p.isNew ? '<span class="tag tag-green">Новинка</span>' : ''}
            ${p.isHit ? '<span class="tag tag-red">Хит</span>' : ''}
            ${brand ? `<span class="tag tag-gray">${esc(brand.name)}</span>` : ''}
          </div>
          <h1 style="font-size:28px;margin-bottom:10px">${esc(p.name)}</h1>
          <div style="display:flex;gap:8px;align-items:center;margin-bottom:16px">
            ${starsHTML(p.rating)}
            <span class="text-sm text-muted">${p.rating} · ${p.reviewsCount} отзывов</span>
          </div>
          <div class="card mb-2">
            ${p.attributes.map(a => `
              <div style="display:flex;justify-content:space-between;padding:8px 0;border-bottom:1px dashed var(--border)">
                <span class="text-muted">${esc(a.k)}</span>
                <span style="font-weight:600">${esc(a.v)}</span>
              </div>
            `).join('')}
          </div>
          <div class="card" style="background:linear-gradient(135deg,#eff6ff,#eef2ff)">
            <div style="display:flex;align-items:baseline;gap:12px;margin-bottom:12px">
              <span style="font-size:32px;font-weight:bold">${fmtPrice(p.price)}</span>
              ${p.oldPrice ? `<span style="font-size:18px;color:var(--muted);text-decoration:line-through">${fmtPrice(p.oldPrice)}</span>` : ''}
            </div>
            <div style="margin-bottom:16px">${p.stock > 0 ? `<span style="color:var(--success)">✓ В наличии: ${p.stock} шт.</span>` : '<span style="color:var(--danger)">✗ Нет в наличии</span>'}</div>
            <div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center">
              <div class="qty-ctrl">
                <button onclick="qtyChange(-1)">−</button>
                <span id="qty-val">1</span>
                <button onclick="qtyChange(1)">+</button>
              </div>
              <button class="btn btn-primary btn-lg" ${p.stock === 0 ? 'disabled' : ''} onclick="addToCart(${p.id}, getQty())">🛒 В корзину</button>
              <button class="btn btn-outline btn-lg" onclick="toggleWishlist(${p.id})">${inWish ? '❤️' : '🤍'}</button>
            </div>
          </div>
          <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin-top:12px;font-size:12px">
            <div class="card" style="padding:8px;text-align:center">🚚 Доставка 1-3 дня</div>
            <div class="card" style="padding:8px;text-align:center">🛡️ Гарантия 12+ мес</div>
            <div class="card" style="padding:8px;text-align:center">↩️ Возврат 14 дней</div>
          </div>
        </div>
      </div>

      <div style="margin-top:40px">
        <div class="tabs">
          <div class="tab active" onclick="switchTab(event,'tab-desc')">Описание</div>
          <div class="tab" onclick="switchTab(event,'tab-specs')">Характеристики</div>
          <div class="tab" onclick="switchTab(event,'tab-reviews')">Отзывы (${pReviews.length})</div>
        </div>
        <div class="card">
          <div class="tab-panel active" id="tab-desc">
            <p>${esc(p.description)}</p>
            <p style="margin-top:12px;color:var(--muted)">Товар поставляется в оригинальной упаковке производителя. Официальная гарантия. Розничная и оптовая продажа.</p>
          </div>
          <div class="tab-panel" id="tab-specs">
            <table class="table">
              ${p.attributes.map(a => `<tr><td style="color:var(--muted);width:40%">${esc(a.k)}</td><td>${esc(a.v)}</td></tr>`).join('')}
              ${brand ? `<tr><td style="color:var(--muted)">Бренд</td><td>${esc(brand.name)}</td></tr>` : ''}
            </table>
          </div>
          <div class="tab-panel" id="tab-reviews">
            ${pReviews.length === 0 ? '<p class="text-muted">Отзывов пока нет.</p>' : pReviews.map(r => `
              <div class="review">
                <div style="display:flex;justify-content:space-between;margin-bottom:4px">
                  <strong>${esc(r.userName)}</strong>
                  <span class="text-sm text-muted">${r.date}</span>
                </div>
                ${starsHTML(r.rating)}
                <p style="margin-top:8px">${esc(r.text)}</p>
              </div>
            `).join('')}
            <div style="border-top:1px solid var(--border);padding-top:16px;margin-top:16px">
              <h3 style="margin-bottom:12px">Оставить отзыв</h3>
              ${!state.currentUser ? `<p class="text-sm text-muted mb-2">⚠️ Нужно <a style="color:var(--primary);cursor:pointer" onclick="navigate('login')">войти</a></p>` : ''}
              <label class="field"><span>Оценка</span>
                <div style="font-size:24px;cursor:pointer" id="review-stars">
                  ${[1,2,3,4,5].map(i => `<span data-v="${i}" onclick="setReviewRating(${i})">★</span>`).join('')}
                </div>
              </label>
              <label class="field"><span>Текст отзыва</span><textarea class="textarea" id="review-text" rows="3" placeholder="Ваш отзыв..."></textarea></label>
              <button class="btn btn-primary" onclick="submitReview(${p.id})">Отправить</button>
            </div>
          </div>
        </div>
      </div>

      ${similar.length > 0 ? `
        <div style="margin-top:40px">
          <h2 class="section-title">Похожие товары</h2>
          <div class="products-grid">${similar.map(x => `
            <button style="background:var(--card);border:1px solid var(--border);border-radius:12px;padding:12px;text-align:left;cursor:pointer;color:inherit" onclick="navigate('product',{id:${x.id}})">
              <img src="${x.image}" style="width:100%;aspect-ratio:1;object-fit:cover;border-radius:8px;margin-bottom:8px" />
              <div style="font-size:13px;font-weight:600;line-height:1.3;margin-bottom:4px">${esc(x.name)}</div>
              <div style="font-weight:bold">${fmtPrice(x.price)}</div>
            </button>
          `).join('')}</div>
        </div>
      ` : ''}
    </div>
  `;
}

let reviewRating = 5;
let productQty = 1;
window.setReviewRating = v => {
  reviewRating = v;
  document.querySelectorAll('#review-stars span').forEach(s => s.style.color = +s.dataset.v <= v ? '#fbbf24' : 'var(--border)');
};
window.qtyChange = d => {
  productQty = Math.max(1, productQty + d);
  const el = $('qty-val'); if (el) el.textContent = productQty;
};
window.getQty = () => productQty;
window.switchTab = (e, id) => {
  e.currentTarget.parentElement.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  e.currentTarget.classList.add('active');
  e.currentTarget.closest('.card')?.parentElement?.querySelectorAll('.tab-panel')?.forEach(p => p.classList.remove('active'));
  const card = e.currentTarget.parentElement.parentElement;
  card.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
  card.querySelector('#'+id)?.classList.add('active');
};

window.submitReview = productId => {
  if (!state.currentUser) { navigate('login'); return; }
  const text = $('review-text')?.value?.trim();
  if (!text) return notify('Напишите текст отзыва', 'error');
  reviews.unshift({
    id: Date.now(), productId, userName: state.currentUser.name,
    rating: reviewRating, text, date: new Date().toISOString().slice(0,10), approved: false,
  });
  saveState();
  notify('Отзыв отправлен на модерацию');
  render();
};

// ============ PAGE: CART ============
function renderCart() {
  const items = state.cart.map(c => ({ ...c, p: products.find(x => x.id === c.productId) })).filter(c => c.p);
  if (items.length === 0) return `
    <div class="container empty" style="padding:60px 16px">
      <div class="empty-icon">🛒</div>
      <h2>Корзина пуста</h2>
      <p>Самое время отправиться за покупками!</p>
      <button class="btn btn-primary btn-lg" onclick="navigate('catalog')">В каталог</button>
    </div>
  `;
  const total = items.reduce((s, i) => s + i.p.price * i.qty, 0);
  return `
    <div class="container" style="padding:20px 16px">
      <h1 class="section-title">Корзина</h1>
      <div class="catalog-layout">
        <div>
          ${items.map(i => `
            <div class="cart-item">
              <img src="${i.p.image}" class="cart-item-img" onclick="navigate('product',{id:${i.p.id}})" style="cursor:pointer" />
              <div class="cart-item-body">
                <div class="cart-item-name" onclick="navigate('product',{id:${i.p.id}})">${esc(i.p.name)}</div>
                <div class="text-sm text-muted">${i.p.attributes[0]?.k}: ${i.p.attributes[0]?.v}</div>
                <div style="display:flex;align-items:center;gap:16px;margin-top:10px;flex-wrap:wrap">
                  <div class="qty-ctrl">
                    <button onclick="updateCartQty(${i.p.id},${i.qty-1})">−</button>
                    <span>${i.qty}</span>
                    <button onclick="updateCartQty(${i.p.id},${i.qty+1})">+</button>
                  </div>
                  <span style="font-weight:bold">${fmtPrice(i.p.price * i.qty)}</span>
                  <button class="btn btn-ghost btn-sm" style="color:var(--danger)" onclick="removeFromCart(${i.p.id})">✕</button>
                </div>
              </div>
            </div>
          `).join('')}
          <button class="btn btn-ghost btn-sm text-muted" onclick="clearCart()">Очистить корзину</button>
        </div>
        <div>
          <div class="card" style="position:sticky;top:80px">
            <h3 style="margin-bottom:12px">Ваш заказ</h3>
            <div style="display:flex;justify-content:space-between;margin-bottom:6px"><span>Товары (${items.length})</span><span>${fmtPrice(total)}</span></div>
            <div style="display:flex;justify-content:space-between;margin-bottom:12px"><span>Доставка</span><span style="color:var(--success)">Бесплатно</span></div>
            <div style="border-top:1px solid var(--border);padding-top:12px;display:flex;justify-content:space-between;font-size:20px;font-weight:bold"><span>Итого</span><span>${fmtPrice(total)}</span></div>
            <button class="btn btn-primary btn-block btn-lg" style="margin-top:16px" onclick="navigate('checkout')">Оформить заказ →</button>
          </div>
        </div>
      </div>
    </div>
  `;
}

window.addToCart = (id, qty = 1) => {
  const existing = state.cart.find(c => c.productId === id);
  if (existing) existing.qty += qty;
  else state.cart.push({ productId: id, qty });
  saveState(); render();
  notify('Товар добавлен в корзину');
};
window.updateCartQty = (id, q) => {
  if (q <= 0) removeFromCart(id);
  else { const c = state.cart.find(x => x.productId === id); if (c) c.qty = q; }
  saveState(); render();
};
window.removeFromCart = id => { state.cart = state.cart.filter(c => c.productId !== id); saveState(); render(); };
window.clearCart = () => { state.cart = []; saveState(); render(); };

// ============ PAGE: WISHLIST ============
function renderWishlist() {
  const items = products.filter(p => state.wishlist.includes(p.id));
  if (items.length === 0) return `
    <div class="container empty" style="padding:60px 16px">
      <div class="empty-icon">❤️</div>
      <h2>Список избранного пуст</h2>
      <p>Сохраняйте понравившиеся товары</p>
      <button class="btn btn-primary btn-lg" onclick="navigate('catalog')">В каталог</button>
    </div>
  `;
  return `
    <div class="container" style="padding:20px 16px">
      <h1 class="section-title">Избранное (${items.length})</h1>
      <div class="products-grid">${items.map(productCardHTML).join('')}</div>
    </div>
  `;
}
window.toggleWishlist = id => {
  if (state.wishlist.includes(id)) {
    state.wishlist = state.wishlist.filter(x => x !== id);
    notify('Удалено из избранного', 'info');
  } else {
    state.wishlist.push(id);
    notify('Добавлено в избранное');
  }
  saveState(); render();
};

// ============ PAGE: CHECKOUT ============
let checkoutData = { name: '', phone: '', email: '', address: '', delivery: 'courier', payment: 'card' };

function renderCheckout() {
  if (!state.currentUser) return `
    <div class="container empty" style="padding:60px 16px">
      <h2>Нужна авторизация</h2>
      <p class="text-muted mb-3">Войдите в аккаунт, чтобы оформить заказ</p>
      <button class="btn btn-primary" onclick="navigate('login')">Войти</button>
    </div>
  `;
  if (state.cart.length === 0) return `
    <div class="container empty" style="padding:60px 16px">
      <h2>Корзина пуста</h2>
      <button class="btn btn-primary" onclick="navigate('catalog')">В каталог</button>
    </div>
  `;

  checkoutData.name = state.currentUser.name;
  checkoutData.phone = state.currentUser.phone || '';
  checkoutData.email = state.currentUser.email;
  checkoutData.address = state.currentUser.address || '';

  const items = state.cart.map(c => ({ ...c, p: products.find(x => x.id === c.productId) })).filter(c => c.p);
  const total = items.reduce((s, i) => s + i.p.price * i.qty, 0);

  return `
    <div class="container" style="padding:20px 16px">
      <h1 class="section-title">Оформление заказа</h1>
      <div class="catalog-layout">
        <form onsubmit="submitOrder(event)" class="space-y">
          <div class="card">
            <h3 style="margin-bottom:12px">Контактные данные</h3>
            <div style="display:grid;gap:12px;grid-template-columns:1fr 1fr">
              <label class="field"><span>Имя *</span><input class="input" id="ch-name" value="${esc(checkoutData.name)}" required /></label>
              <label class="field"><span>Телефон *</span><input class="input" id="ch-phone" value="${esc(checkoutData.phone)}" required /></label>
              <label class="field" style="grid-column:1/-1"><span>Email *</span><input class="input" type="email" id="ch-email" value="${esc(checkoutData.email)}" required /></label>
            </div>
          </div>
          <div class="card">
            <h3 style="margin-bottom:12px">Способ доставки</h3>
            <div style="display:flex;flex-direction:column;gap:8px">
              ${[
                ['courier', '🚚 Курьером', '1-2 дня по Москве'],
                ['pickup', '🏪 Самовывоз', 'г. Москва, склад #3'],
                ['post', '📮 Почта России', '3-7 дней'],
              ].map(([v, l, d]) => `
                <label style="display:flex;align-items:center;gap:12px;padding:12px;border:1px solid ${checkoutData.delivery === v ? 'var(--primary)' : 'var(--border)'};border-radius:10px;cursor:pointer;background:${checkoutData.delivery === v ? '#eff6ff' : 'transparent'}">
                  <input type="radio" name="delivery" value="${v}" ${checkoutData.delivery === v ? 'checked' : ''} onchange="checkoutData.delivery='${v}';render()">
                  <div><div style="font-weight:600">${l}</div><div class="text-sm text-muted">${d}</div></div>
                </label>
              `).join('')}
            </div>
            ${checkoutData.delivery !== 'pickup' ? `<label class="field mt-2"><span>Адрес доставки *</span><input class="input" id="ch-address" value="${esc(checkoutData.address)}" required /></label>` : ''}
          </div>
          <div class="card">
            <h3 style="margin-bottom:12px">Способ оплаты</h3>
            <select class="select" onchange="checkoutData.payment=this.value">
              <option value="card" ${checkoutData.payment === 'card' ? 'selected' : ''}>💳 Банковская карта</option>
              <option value="sbp" ${checkoutData.payment === 'sbp' ? 'selected' : ''}>📱 СБП</option>
              <option value="cash" ${checkoutData.payment === 'cash' ? 'selected' : ''}>💵 Наличные при получении</option>
            </select>
          </div>
          <button class="btn btn-primary btn-lg btn-block">Подтвердить заказ</button>
        </form>
        <div class="card" style="position:sticky;top:80px;height:fit-content">
          <h3 style="margin-bottom:12px">Ваш заказ</h3>
          <div style="max-height:200px;overflow-y:auto;margin-bottom:12px">
            ${items.map(i => `
              <div style="display:flex;gap:8px;padding:8px 0;border-bottom:1px solid var(--border)">
                <img src="${i.p.image}" style="width:40px;height:40px;border-radius:6px;object-fit:cover" />
                <div style="flex:1;min-width:0">
                  <div class="text-sm" style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${esc(i.p.name)}</div>
                  <div class="text-sm text-muted">${i.qty} × ${fmtPrice(i.p.price)}</div>
                </div>
              </div>
            `).join('')}
          </div>
          <div style="display:flex;justify-content:space-between;margin-bottom:4px"><span>Сумма</span><span>${fmtPrice(total)}</span></div>
          <div style="display:flex;justify-content:space-between;margin-bottom:12px"><span>Доставка</span><span style="color:var(--success)">Бесплатно</span></div>
          <div style="border-top:1px solid var(--border);padding-top:12px;display:flex;justify-content:space-between;font-size:20px;font-weight:bold"><span>Итого</span><span>${fmtPrice(total)}</span></div>
        </div>
      </div>
    </div>
  `;
}

window.submitOrder = e => {
  e.preventDefault();
  const name = $('ch-name').value.trim();
  const phone = $('ch-phone').value.trim();
  const email = $('ch-email').value.trim();
  const address = checkoutData.delivery === 'pickup' ? 'Самовывоз' : ($('ch-address')?.value || '').trim();
  if (!name || !phone || !email || !address) return notify('Заполните все поля', 'error');

  const items = state.cart.map(c => {
    const p = products.find(x => x.id === c.productId);
    return { productId: p.id, name: p.name, qty: c.qty, price: p.price };
  });
  const total = items.reduce((s, i) => s + i.price * i.qty, 0);
  const newOrder = {
    id: Math.max(1000, ...orders.map(o => o.id)) + 1,
    userId: state.currentUser.id,
    userName: state.currentUser.name,
    items, total,
    status: 'created',
    paymentMethod: checkoutData.payment,
    deliveryMethod: checkoutData.delivery,
    address,
    createdAt: new Date().toISOString().slice(0,10),
  };
  orders.unshift(newOrder);
  state.cart = [];
  saveState();
  notify('Заказ #' + newOrder.id + ' оформлен!');
  renderOrderSuccess(newOrder.id);
};

function renderOrderSuccess(id) {
  $('app').innerHTML = `
    <div class="container empty" style="padding:60px 16px">
      <div class="empty-icon">✅</div>
      <h2>Заказ оформлен!</h2>
      <p class="text-muted mb-1">Ваш номер заказа:</p>
      <p style="font-size:32px;font-weight:bold;color:var(--primary);margin:16px 0">#${id}</p>
      <p class="text-sm text-muted mb-3">Мы отправили подтверждение на email</p>
      <div style="display:flex;gap:8px;justify-content:center">
        <button class="btn btn-primary" onclick="navigate('orders')">Мои заказы</button>
        <button class="btn btn-outline" onclick="navigate('home')">На главную</button>
      </div>
    </div>
  `;
}

// ============ PAGE: LOGIN ============
function renderLogin() {
  return `
    <div class="auth-wrap">
      <div class="card">
        <h1 style="text-align:center;margin-bottom:8px">Вход в аккаунт</h1>
        <p class="text-center text-muted text-sm mb-3">Войдите, чтобы продолжить покупки</p>
        <form onsubmit="doLogin(event)">
          <label class="field"><span>Email</span><input class="input" type="email" id="login-email" required /></label>
          <label class="field"><span>Пароль</span><input class="input" type="password" id="login-pass" required /></label>
          <div id="login-error" class="text-sm" style="color:var(--danger);margin-bottom:12px"></div>
          <button class="btn btn-primary btn-block btn-lg">Войти</button>
        </form>
        <div class="text-center text-sm mt-2 text-muted">
          Нет аккаунта? <a style="color:var(--primary);cursor:pointer" onclick="navigate('register')">Зарегистрироваться</a>
        </div>
        <div class="text-center text-sm mt-1">
          <a style="color:var(--muted);cursor:pointer" onclick="navigate('forgot-password')">Забыли пароль?</a>
        </div>
        <div style="border-top:1px solid var(--border);margin-top:20px;padding-top:16px">
          <div class="text-center text-sm text-muted mb-2">Демо-аккаунты (пароль любой ≥ 4 символов):</div>
          <div style="display:flex;flex-direction:column;gap:6px;font-size:12px">
            <button class="btn btn-secondary btn-sm" onclick="quickLogin('admin@electromag.ru')">👑 Администратор</button>
            <button class="btn btn-secondary btn-sm" onclick="quickLogin('mod@electromag.ru')">🛡️ Модератор</button>
            <button class="btn btn-secondary btn-sm" onclick="quickLogin('seller@electromag.ru')">🏪 Продавец</button>
            <button class="btn btn-secondary btn-sm" onclick="quickLogin('user@mail.ru')">👤 Покупатель</button>
          </div>
        </div>
      </div>
    </div>
  `;
}
window.quickLogin = email => { $('login-email').value = email; $('login-pass').value = '123456'; };
window.doLogin = e => {
  e.preventDefault();
  const email = $('login-email').value.trim();
  const pass = $('login-pass').value;
  if (pass.length < 4) { $('login-error').textContent = 'Пароль должен быть ≥ 4 символов'; return; }
  const user = users.find(u => u.email.toLowerCase() === email.toLowerCase());
  if (!user) { $('login-error').textContent = 'Пользователь не найден'; return; }
  state.currentUser = user;
  saveState();
  notify('Добро пожаловать, ' + user.name + '!');
  navigate('home');
};
window.doLogout = () => { state.currentUser = null; saveState(); notify('Вы вышли из аккаунта', 'info'); navigate('home'); };

// ============ PAGE: REGISTER ============
function renderRegister() {
  return `
    <div class="auth-wrap">
      <div class="card">
        <h1 style="text-align:center;margin-bottom:8px">Регистрация</h1>
        <p class="text-center text-muted text-sm mb-3">Создайте аккаунт за минуту</p>
        <form onsubmit="doRegister(event)">
          <label class="field"><span>Имя *</span><input class="input" id="reg-name" required /></label>
          <label class="field"><span>Email *</span><input class="input" type="email" id="reg-email" required /></label>
          <label class="field"><span>Телефон</span><input class="input" id="reg-phone" /></label>
          <label class="field"><span>Пароль * (мин. 6 символов)</span><input class="input" type="password" id="reg-pass" required /></label>
          <label class="field"><span>Подтверждение *</span><input class="input" type="password" id="reg-pass2" required /></label>
          <div id="reg-error" class="text-sm" style="color:var(--danger);margin-bottom:12px"></div>
          <button class="btn btn-primary btn-block btn-lg">Зарегистрироваться</button>
        </form>
        <div class="text-center text-sm mt-2 text-muted">
          Уже есть аккаунт? <a style="color:var(--primary);cursor:pointer" onclick="navigate('login')">Войти</a>
        </div>
      </div>
    </div>
  `;
}
window.doRegister = e => {
  e.preventDefault();
  const name = $('reg-name').value.trim();
  const email = $('reg-email').value.trim();
  const phone = $('reg-phone').value.trim();
  const pass = $('reg-pass').value;
  const pass2 = $('reg-pass2').value;
  const err = $('reg-error');
  if (pass.length < 6) { err.textContent = 'Пароль должен быть ≥ 6 символов'; return; }
  if (pass !== pass2) { err.textContent = 'Пароли не совпадают'; return; }
  if (users.some(u => u.email.toLowerCase() === email.toLowerCase())) { err.textContent = 'Email уже зарегистрирован'; return; }
  const newUser = { id: Math.max(0, ...users.map(u => u.id)) + 1, email, name, phone, role: 'customer', createdAt: new Date().toISOString().slice(0,10) };
  users.push(newUser);
  state.currentUser = newUser;
  saveState();
  notify('Регистрация успешна!');
  navigate('home');
};

// ============ PAGE: FORGOT PASSWORD ============
function renderForgot() {
  return `
    <div class="auth-wrap">
      <div class="card" id="forgot-card">
        <h1 style="text-align:center;margin-bottom:8px">Восстановление пароля</h1>
        <p class="text-center text-muted text-sm mb-3">Введите email, указанный при регистрации</p>
        <form onsubmit="doForgot(event)">
          <label class="field"><span>Email</span><input class="input" type="email" id="forgot-email" required /></label>
          <button class="btn btn-primary btn-block btn-lg">Отправить ссылку для сброса</button>
        </form>
        <div class="text-center text-sm mt-2 text-muted">
          Вспомнили пароль? <a style="color:var(--primary);cursor:pointer" onclick="navigate('login')">Войти</a>
        </div>
      </div>
    </div>
  `;
}
window.doForgot = e => {
  e.preventDefault();
  const email = $('forgot-email').value.trim();
  $('forgot-card').innerHTML = `
    <div style="text-align:center;padding:20px">
      <div style="font-size:56px;margin-bottom:12px">📧</div>
      <h2 style="margin-bottom:8px">Проверьте почту</h2>
      <p class="text-sm text-muted mb-3">Мы отправили инструкции на <strong>${esc(email)}</strong></p>
      <button class="btn btn-outline" onclick="navigate('login')">Вернуться к входу</button>
    </div>
  `;
  notify('Инструкции отправлены на email');
};

// ============ PAGE: PROFILE ============
function renderProfile() {
  if (!state.currentUser) return `
    <div class="container empty" style="padding:60px 16px">
      <p class="mb-3">Войдите в аккаунт</p>
      <button class="btn btn-primary" onclick="navigate('login')">Войти</button>
    </div>
  `;
  const u = state.currentUser;
  const uOrders = orders.filter(o => o.userId === u.id);
  return `
    <div class="container" style="padding:20px 16px">
      <h1 class="section-title">Личный кабинет</h1>
      <div class="catalog-layout">
        <aside>
          <div class="card text-center">
            <div style="width:80px;height:80px;margin:0 auto 12px;border-radius:50%;background:linear-gradient(135deg,#3b82f6,#a855f7);color:white;display:flex;align-items:center;justify-content:center;font-size:32px;font-weight:bold">${u.name[0]}</div>
            <div style="font-weight:600">${esc(u.name)}</div>
            <div class="text-sm text-muted">${esc(u.email)}</div>
            <span class="tag tag-${u.role === 'admin' ? 'red' : u.role === 'moderator' ? 'yellow' : u.role === 'seller' ? 'green' : 'blue'}" style="margin-top:8px">
              ${u.role === 'admin' ? '👑 Админ' : u.role === 'moderator' ? '🛡️ Модератор' : u.role === 'seller' ? '🏪 Продавец' : '👤 Покупатель'}
            </span>
          </div>
          <div class="card mt-2">
            <div class="text-sm text-muted mb-2">Демо: смена роли</div>
            <div style="display:flex;flex-direction:column;gap:4px">
              ${['customer', 'seller', 'moderator', 'admin'].map(r => `
                <button class="btn ${state.currentUser.role === r ? 'btn-primary' : 'btn-ghost'} btn-sm" onclick="switchRole('${r}')" style="text-align:left">
                  ${r === 'admin' ? '👑' : r === 'moderator' ? '🛡️' : r === 'seller' ? '🏪' : '👤'} ${r}
                </button>
              `).join('')}
            </div>
          </div>
          ${u.role === 'seller' ? `
            <div class="card mt-2">
              <div class="text-sm text-muted mb-2">Окно продавца</div>
              <button class="btn btn-outline btn-sm btn-block" onclick="navigate('seller')">Добавить товар →</button>
            </div>
          ` : ''}
          <div class="card mt-2">
            <div class="text-sm text-muted mb-1">Заказов оформлено</div>
            <div style="font-size:24px;font-weight:bold">${uOrders.length}</div>
            <button class="btn btn-outline btn-sm btn-block mt-2" onclick="navigate('orders')">Мои заказы →</button>
          </div>
        </aside>
        <div>
          <div class="card mb-3">
            <h3 style="margin-bottom:12px">Личные данные</h3>
            <form onsubmit="saveProfile(event)">
              <div style="display:grid;gap:12px;grid-template-columns:1fr 1fr">
                <label class="field"><span>Имя</span><input class="input" id="prof-name" value="${esc(u.name)}" /></label>
                <label class="field"><span>Email</span><input class="input" value="${esc(u.email)}" disabled /></label>
                <label class="field"><span>Телефон</span><input class="input" id="prof-phone" value="${esc(u.phone || '')}" /></label>
                <label class="field"><span>Дата регистрации</span><input class="input" value="${u.createdAt}" disabled /></label>
                <label class="field" style="grid-column:1/-1"><span>Адрес</span><input class="input" id="prof-address" value="${esc(u.address || '')}" /></label>
              </div>
              <button class="btn btn-primary mt-2">Сохранить</button>
            </form>
          </div>
          <div class="card">
            <h3 style="margin-bottom:12px">Сменить пароль</h3>
            <form onsubmit="changePass(event)" style="max-width:400px">
              <label class="field"><span>Старый пароль</span><input class="input" type="password" id="pass-old" /></label>
              <label class="field"><span>Новый пароль (мин. 6 символов)</span><input class="input" type="password" id="pass-new" /></label>
              <label class="field"><span>Подтверждение</span><input class="input" type="password" id="pass-new2" /></label>
              <div id="pass-error" class="text-sm mb-2" style="color:var(--danger)"></div>
              <button class="btn btn-outline">Сменить пароль</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  `;
}
window.switchRole = role => { state.currentUser.role = role; saveState(); notify('Роль изменена: ' + role, 'info'); render(); };
window.saveProfile = e => {
  e.preventDefault();
  state.currentUser.name = $('prof-name').value.trim();
  state.currentUser.phone = $('prof-phone').value.trim();
  state.currentUser.address = $('prof-address').value.trim();
  const idx = users.findIndex(u => u.id === state.currentUser.id);
  if (idx >= 0) users[idx] = { ...state.currentUser };
  saveState(); render();
  notify('Профиль обновлён');
};
window.changePass = e => {
  e.preventDefault();
  const old = $('pass-old').value, n = $('pass-new').value, n2 = $('pass-new2').value;
  const err = $('pass-error'); err.textContent = '';
  if (!old || !n || !n2) { err.textContent = 'Заполните все поля'; return; }
  if (n.length < 6) { err.textContent = 'Пароль должен быть ≥ 6 символов'; return; }
  if (n !== n2) { err.textContent = 'Пароли не совпадают'; return; }
  $('pass-old').value = ''; $('pass-new').value = ''; $('pass-new2').value = '';
  notify('Пароль успешно изменён');
};

// ============ PAGE: ORDERS ============
const statusInfo = {
  created: { label: '🆕 Создан', color: 'blue' },
  paid: { label: '💳 Оплачен', color: 'purple' },
  shipped: { label: '🚚 Отправлен', color: 'yellow' },
  delivered: { label: '✅ Доставлен', color: 'green' },
  cancelled: { label: '❌ Отменён', color: 'red' },
};
const delLabels = { courier: 'Курьер', pickup: 'Самовывоз', post: 'Почта России' };
const payLabels = { card: 'Карта', sbp: 'СБП', cash: 'Наличные' };

function renderOrders() {
  if (!state.currentUser) return `
    <div class="container empty" style="padding:60px 16px">
      <p class="mb-3">Войдите в аккаунт</p>
      <button class="btn btn-primary" onclick="navigate('login')">Войти</button>
    </div>
  `;
  const list = orders.filter(o => o.userId === state.currentUser.id);
  if (list.length === 0) return `
    <div class="container">
      <div class="card empty">
        <div class="empty-icon">📦</div>
        <h2>У вас пока нет заказов</h2>
        <p class="text-muted mb-3">Самое время отправиться за покупками!</p>
        <button class="btn btn-primary" onclick="navigate('catalog')">В каталог</button>
      </div>
    </div>
  `;
  return `
    <div class="container" style="padding:20px 16px">
      <h1 class="section-title">Мои заказы</h1>
      ${list.map(o => `
        <div class="order-card">
          <div style="display:flex;justify-content:space-between;flex-wrap:wrap;gap:12px;margin-bottom:12px">
            <div>
              <div style="display:flex;gap:8px;align-items:center;margin-bottom:4px">
                <strong style="font-size:18px">Заказ #${o.id}</strong>
                <span class="tag tag-${statusInfo[o.status].color}">${statusInfo[o.status].label}</span>
              </div>
              <div class="text-sm text-muted">${o.createdAt} · ${payLabels[o.paymentMethod]} · ${delLabels[o.deliveryMethod]}</div>
            </div>
            <div style="text-align:right">
              <div style="font-size:20px;font-weight:bold">${fmtPrice(o.total)}</div>
              ${o.trackNumber ? `<div class="text-sm text-muted">Трек: ${o.trackNumber}</div>` : ''}
            </div>
          </div>
          ${o.items.map(i => `
            <div style="display:flex;justify-content:space-between;padding:6px 0;border-top:1px solid var(--border);font-size:14px">
              <span>${esc(i.name)} × ${i.qty}</span>
              <span style="font-weight:600">${fmtPrice(i.price * i.qty)}</span>
            </div>
          `).join('')}
          <div class="text-sm text-muted mt-1">📍 ${esc(o.address)}</div>
          <div style="display:flex;gap:8px;margin-top:12px;flex-wrap:wrap">
            ${o.status === 'created' ? `<button class="btn btn-danger btn-sm" onclick="cancelOrder(${o.id})">Отменить заказ</button>` : ''}
            ${o.status === 'shipped' && o.trackNumber ? '<button class="btn btn-outline btn-sm">Отследить посылку</button>' : ''}
            <button class="btn btn-outline btn-sm">Повторить заказ</button>
          </div>
        </div>
      `).join('')}
    </div>
  `;
}
window.cancelOrder = id => { if (confirm('Отменить заказ?')) { const o = orders.find(x => x.id === id); if (o) o.status = 'cancelled'; saveState(); render(); notify('Заказ отменён', 'info'); } };

// ============ PAGE: ADMIN ============
let adminTab = 'dashboard';
let adminProductSearch = '';

function renderAdmin() {
  if (!state.currentUser || (state.currentUser.role !== 'admin' && state.currentUser.role !== 'moderator')) return `
    <div class="container empty" style="padding:60px 16px">
      <div class="empty-icon">🔒</div>
      <h2>Доступ запрещён</h2>
      <p class="text-muted mb-3">Только для администраторов и модераторов</p>
      <button class="btn btn-primary" onclick="navigate('home')">На главную</button>
    </div>
  `;
  const isAdmin = state.currentUser.role === 'admin';

  const tabs = [
    ['dashboard', '📊', 'Дашборд'],
    ['products', '📦', 'Товары', true],
    ['orders', '🧾', 'Заказы'],
    ['users', '👥', 'Пользователи', true],
    ['reviews', '⭐', 'Отзывы'],
    ['analytics', '📈', 'Аналитика', true],
    ['import', '📥', 'Импорт', true],
    ['settings', '⚙️', 'Настройки', true],
  ].filter(t => !t[3] || isAdmin);

  return `
    <div class="container" style="padding:20px 16px">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:20px;flex-wrap:wrap;gap:8px">
        <div>
          <h1 class="section-title" style="margin:0">Админ-панель</h1>
          <p class="text-sm text-muted">Управление магазином ЭлектроМаг</p>
        </div>
        <span class="tag tag-${isAdmin ? 'red' : 'yellow'}">${isAdmin ? '👑 Полный доступ' : '🛡️ Модератор'}</span>
      </div>
      <div class="admin-layout">
        <aside>
          <div class="card" style="padding:8px">
            ${tabs.map(t => `
              <button class="${adminTab === t[0] ? 'active' : ''}" onclick="adminTab='${t[0]}';render()">
                <span>${t[1]}</span><span>${t[2]}</span>
              </button>
            `).join('')}
          </div>
        </aside>
        <div id="admin-content">
          ${adminTab === 'dashboard' ? adminDashboard() :
            adminTab === 'products' ? adminProducts() :
            adminTab === 'orders' ? adminOrders() :
            adminTab === 'users' ? adminUsers() :
            adminTab === 'reviews' ? adminReviews() :
            adminTab === 'analytics' ? adminAnalytics() :
            adminTab === 'import' ? adminImport() :
            adminTab === 'settings' ? adminSettings() : ''}
        </div>
      </div>
    </div>
  `;
}

function adminDashboard() {
  const revenue = orders.filter(o => o.status !== 'cancelled').reduce((s, o) => s + o.total, 0);
  const avg = orders.filter(o => o.status !== 'cancelled').length > 0 ? revenue / orders.filter(o => o.status !== 'cancelled').length : 0;
  const lowStock = products.filter(p => p.stock < 10).length;
  const pending = reviews.filter(r => !r.approved).length;
  const maxRev = Math.max(...salesData.map(s => s.revenue));

  return `
    <div class="stats-grid">
      <div class="stat-card">
        <div class="stat-icon green">💰</div>
        <div class="stat-label">Выручка</div>
        <div class="stat-value">${fmtPrice(revenue)}</div>
      </div>
      <div class="stat-card">
        <div class="stat-icon blue">🧾</div>
        <div class="stat-label">Заказов</div>
        <div class="stat-value">${orders.length}</div>
      </div>
      <div class="stat-card">
        <div class="stat-icon purple">📊</div>
        <div class="stat-label">Средний чек</div>
        <div class="stat-value">${fmtPrice(Math.round(avg))}</div>
      </div>
      <div class="stat-card">
        <div class="stat-icon yellow">👥</div>
        <div class="stat-label">Пользователей</div>
        <div class="stat-value">${users.length}</div>
      </div>
    </div>
    <div style="display:grid;grid-template-columns:1fr;gap:16px">
      <div class="card">
        <h3 style="margin-bottom:12px">Динамика выручки</h3>
        <div class="chart">
          ${salesData.map(s => `
            <div class="chart-col">
              <div class="chart-val">${Math.round(s.revenue/1000)}к</div>
              <div class="chart-bar" style="height:${(s.revenue/maxRev)*100}%"></div>
              <div class="chart-label">${s.month}</div>
            </div>
          `).join('')}
        </div>
      </div>
      <div class="card">
        <h3 style="margin-bottom:12px">Топ товаров</h3>
        ${[...products].sort((a,b) => b.reviewsCount - a.reviewsCount).slice(0,5).map((p, i) => `
          <div style="display:flex;align-items:center;gap:12px;padding:8px 0;border-bottom:1px solid var(--border)">
            <div style="width:24px;height:24px;border-radius:6px;background:var(--bg);display:flex;align-items:center;justify-content:center;font-weight:bold;font-size:12px">${i+1}</div>
            <img src="${p.image}" style="width:40px;height:40px;border-radius:6px;object-fit:cover" />
            <div style="flex:1;min-width:0">
              <div style="font-size:13px;font-weight:600;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${esc(p.name)}</div>
              <div class="text-sm text-muted">${p.reviewsCount} отзывов · ${fmtPrice(p.price)}</div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
    <div class="card mt-2">
      <h3 style="margin-bottom:12px">⚡ Быстрые действия</h3>
      <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:12px">
        <div style="padding:12px;border-radius:10px;background:var(--bg)">
          <div class="text-sm text-muted">Новых заказов</div>
          <div style="font-size:24px;font-weight:bold">${orders.filter(o => o.status === 'created').length}</div>
        </div>
        <div style="padding:12px;border-radius:10px;background:var(--bg)">
          <div class="text-sm text-muted">К отправке</div>
          <div style="font-size:24px;font-weight:bold">${orders.filter(o => o.status === 'paid').length}</div>
        </div>
        <div style="padding:12px;border-radius:10px;background:${lowStock > 0 ? '#fee2e2' : 'var(--bg)'}">
          <div class="text-sm text-muted">Низкие остатки</div>
          <div style="font-size:24px;font-weight:bold">${lowStock}</div>
        </div>
        <div style="padding:12px;border-radius:10px;background:${pending > 0 ? '#fee2e2' : 'var(--bg)'}">
          <div class="text-sm text-muted">Отзывов на модерации</div>
          <div style="font-size:24px;font-weight:bold">${pending}</div>
        </div>
      </div>
    </div>
    <div class="card mt-2">
      <h3 style="margin-bottom:12px">Последние заказы</h3>
      <div class="table-wrap">
        <table class="table">
          <thead><tr><th>№</th><th>Клиент</th><th>Дата</th><th>Сумма</th><th>Статус</th></tr></thead>
          <tbody>
            ${orders.slice(0,5).map(o => `
              <tr>
                <td class="font-bold">#${o.id}</td>
                <td>${esc(o.userName)}</td>
                <td class="text-muted">${o.createdAt}</td>
                <td>${fmtPrice(o.total)}</td>
                <td><span class="tag tag-${statusInfo[o.status].color}">${statusInfo[o.status].label}</span></td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

function adminProducts() {
  const list = products.filter(p => p.name.toLowerCase().includes(adminProductSearch.toLowerCase()));
  return `
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;flex-wrap:wrap;gap:8px">
      <h2 style="margin:0">Товары (${products.length})</h2>
      <div style="display:flex;gap:8px">
        <input class="input" style="width:200px" value="${esc(adminProductSearch)}" oninput="adminProductSearch=this.value;render()" placeholder="Поиск..." />
        <button class="btn btn-primary" onclick="openProductModal()">+ Добавить</button>
      </div>
    </div>
    <div class="card">
      <div class="table-wrap">
        <table class="table">
          <thead><tr><th>ID</th><th>Товар</th><th>Категория</th><th>Цена</th><th>Остаток</th><th>Действия</th></tr></thead>
          <tbody>
            ${list.map(p => `
              <tr>
                <td class="text-muted">#${p.id}</td>
                <td><div style="display:flex;gap:8px;align-items:center"><img src="${p.image}" style="width:40px;height:40px;border-radius:6px;object-fit:cover" /><span style="font-weight:600">${esc(p.name)}</span></div></td>
                <td class="text-muted">${getCat(p.categoryId)?.name}</td>
                <td class="font-bold">${fmtPrice(p.price)}</td>
                <td style="${p.stock < 10 ? 'color:var(--danger);font-weight:600' : ''}">${p.stock}</td>
                <td>
                  <button class="btn btn-ghost btn-sm" onclick="openProductModal(${p.id})">✏️</button>
                  <button class="btn btn-ghost btn-sm" onclick="deleteProduct(${p.id})">🗑️</button>
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </div>
    <div id="product-modal"></div>
  `;
}

window.openProductModal = (id) => {
  const p = id ? products.find(x => x.id === id) : null;
  $('product-modal').innerHTML = `
    <div class="modal show" onclick="if(event.target===this)closeProductModal()">
      <div class="modal-content">
        <div class="modal-head">${p ? 'Редактировать товар' : 'Новый товар'}</div>
        <form onsubmit="saveProduct(event, ${id || 'null'})">
          <label class="field"><span>Название *</span><input class="input" id="pm-name" value="${p ? esc(p.name) : ''}" required /></label>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px">
            <label class="field"><span>Цена</span><input class="input" type="number" id="pm-price" value="${p?.price || 0}" /></label>
            <label class="field"><span>Остаток</span><input class="input" type="number" id="pm-stock" value="${p?.stock || 0}" /></label>
          </div>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px">
            <label class="field"><span>Категория</span><select class="select" id="pm-cat">${CATEGORIES.map(c => `<option value="${c.id}" ${p?.categoryId === c.id ? 'selected' : ''}>${c.name}</option>`).join('')}</select></label>
            <label class="field"><span>Бренд</span><select class="select" id="pm-brand">${BRANDS.map(b => `<option value="${b.id}" ${p?.brandId === b.id ? 'selected' : ''}>${b.name}</option>`).join('')}</select></label>
          </div>
          <label class="field"><span>Описание</span><textarea class="textarea" id="pm-desc" rows="3">${p ? esc(p.description) : ''}</textarea></label>
          <div class="modal-foot">
            <button class="btn btn-outline" type="button" onclick="closeProductModal()">Отмена</button>
            <button class="btn btn-primary" type="submit">Сохранить</button>
          </div>
        </form>
      </div>
    </div>
  `;
};
window.closeProductModal = () => { $('product-modal').innerHTML = ''; };
window.saveProduct = (e, id) => {
  e.preventDefault();
  const data = {
    name: $('pm-name').value.trim(),
    price: +$('pm-price').value,
    stock: +$('pm-stock').value,
    categoryId: +$('pm-cat').value,
    brandId: +$('pm-brand').value,
    description: $('pm-desc').value.trim(),
    slug: $('pm-name').value.toLowerCase().replace(/\\s+/g,'-'),
    image: svgImg('📦', '%23e2e8f0', '%2394a3b8'),
    attributes: [{k:'Категория', v: getCat(+$('pm-cat').value)?.name || ''}],
  };
  if (id) {
    const p = products.find(x => x.id === id);
    Object.assign(p, data);
    notify('Товар обновлён');
  } else {
    products.unshift({ id: Math.max(0, ...products.map(x => x.id)) + 1, ...data, rating: 0, reviewsCount: 0, createdAt: new Date().toISOString().slice(0,10), seller: state.currentUser.name });
    notify('Товар добавлен');
  }
  saveState();
  closeProductModal();
  render();
};
window.deleteProduct = id => { if (confirm('Удалить товар?')) { products = products.filter(p => p.id !== id); saveState(); render(); notify('Товар удалён', 'info'); } };

function adminOrders() {
  let filter = 'all';
  return `
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;flex-wrap:wrap;gap:8px">
      <h2 style="margin:0">Заказы (${orders.length})</h2>
      <select class="select" style="width:200px" onchange="adminFilterOrder(this.value)">
        <option value="all">Все статусы</option>
        ${Object.entries(statusInfo).map(([k,v]) => `<option value="${k}">${v.label}</option>`).join('')}
      </select>
    </div>
    <div class="card">
      <div class="table-wrap">
        <table class="table">
          <thead><tr><th>№</th><th>Дата</th><th>Клиент</th><th>Сумма</th><th>Статус</th><th>Доставка</th><th>Действия</th></tr></thead>
          <tbody id="admin-orders-body">
            ${orders.map(o => `
              <tr data-status="${o.status}">
                <td class="font-bold">#${o.id}</td>
                <td class="text-muted">${o.createdAt}</td>
                <td>${esc(o.userName)}</td>
                <td class="font-bold">${fmtPrice(o.total)}</td>
                <td><span class="tag tag-${statusInfo[o.status].color}">${statusInfo[o.status].label}</span></td>
                <td class="text-muted text-sm">${o.trackNumber || '—'}</td>
                <td><button class="btn btn-outline btn-sm" onclick="openOrderModal(${o.id})">Открыть</button></td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </div>
    <div id="order-modal"></div>
  `;
}
window.adminFilterOrder = v => {
  document.querySelectorAll('#admin-orders-body tr').forEach(tr => {
    tr.style.display = v === 'all' || tr.dataset.status === v ? '' : 'none';
  });
};
window.openOrderModal = id => {
  const o = orders.find(x => x.id === id);
  $('order-modal').innerHTML = `
    <div class="modal show" onclick="if(event.target===this)closeOrderModal()">
      <div class="modal-content">
        <div class="modal-head">Заказ #${o.id}</div>
        <div style="display:flex;flex-direction:column;gap:10px">
          <div><span class="text-muted">Клиент:</span> <strong>${esc(o.userName)}</strong></div>
          <div><span class="text-muted">Дата:</span> ${o.createdAt}</div>
          <div><span class="text-muted">Адрес:</span> ${esc(o.address)}</div>
          <div><span class="text-muted">Сумма:</span> <strong>${fmtPrice(o.total)}</strong></div>
          <div style="border-top:1px solid var(--border);padding-top:10px">
            <div style="font-weight:600;margin-bottom:6px">Состав заказа:</div>
            ${o.items.map(i => `<div style="display:flex;justify-content:space-between;padding:4px 0"><span>${esc(i.name)} × ${i.qty}</span><span>${fmtPrice(i.price * i.qty)}</span></div>`).join('')}
          </div>
          <label class="field"><span>Изменить статус</span>
            <select class="select" onchange="updateOrderStatus(${o.id}, this.value)">
              ${Object.entries(statusInfo).map(([k,v]) => `<option value="${k}" ${o.status === k ? 'selected' : ''}>${v.label}</option>`).join('')}
            </select>
          </label>
          ${o.trackNumber ? `<div class="text-sm">Трек-номер: <code>${o.trackNumber}</code></div>` : ''}
        </div>
        <div class="modal-foot"><button class="btn btn-primary" onclick="closeOrderModal()">Закрыть</button></div>
      </div>
    </div>
  `;
};
window.closeOrderModal = () => { $('order-modal').innerHTML = ''; };
window.updateOrderStatus = (id, status) => {
  const o = orders.find(x => x.id === id);
  o.status = status;
  if (status === 'shipped' && !o.trackNumber) o.trackNumber = 'CT' + Math.floor(Math.random() * 1000000000);
  saveState(); render();
  notify('Статус заказа обновлён');
};

function adminUsers() {
  return `
    <h2 style="margin-bottom:12px">Пользователи (${users.length})</h2>
    <div class="card">
      <div class="table-wrap">
        <table class="table">
          <thead><tr><th>ID</th><th>Имя</th><th>Email</th><th>Телефон</th><th>Роль</th><th>Регистрация</th></tr></thead>
          <tbody>
            ${users.map(u => `
              <tr>
                <td class="text-muted">#${u.id}</td>
                <td class="font-bold">${esc(u.name)}</td>
                <td class="text-muted">${esc(u.email)}</td>
                <td class="text-muted">${u.phone || '—'}</td>
                <td><span class="tag tag-${u.role === 'admin' ? 'red' : u.role === 'moderator' ? 'yellow' : u.role === 'seller' ? 'green' : 'blue'}">${u.role}</span></td>
                <td class="text-muted">${u.createdAt}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

function adminReviews() {
  return `
    <h2 style="margin-bottom:12px">Модерация отзывов</h2>
    <div style="display:flex;flex-direction:column;gap:12px">
      ${reviews.length === 0 ? '<div class="card empty"><p>Нет отзывов</p></div>' : reviews.map(r => {
        const p = products.find(x => x.id === r.productId);
        return `
          <div class="card">
            <div style="display:flex;gap:12px">
              <img src="${p?.image || ''}" style="width:60px;height:60px;border-radius:8px;object-fit:cover" />
              <div style="flex:1">
                <div style="display:flex;gap:8px;align-items:center;margin-bottom:4px">
                  <strong>${esc(r.userName)}</strong>
                  <span class="text-sm text-muted">${r.date}</span>
                  ${r.approved ? '<span class="tag tag-green">✓ Одобрен</span>' : '<span class="tag tag-yellow">⏳ На модерации</span>'}
                </div>
                <div class="text-sm text-muted mb-1">К товару: ${p?.name || '—'}</div>
                <div class="stars">${'★'.repeat(r.rating)}${'☆'.repeat(5-r.rating)}</div>
                <p style="margin-top:8px">${esc(r.text)}</p>
              </div>
              <div style="display:flex;flex-direction:column;gap:6px">
                ${!r.approved ? `<button class="btn btn-primary btn-sm" onclick="moderateReview(${r.id}, true)">Одобрить</button>` : ''}
                <button class="btn btn-danger btn-sm" onclick="moderateReview(${r.id}, false)">Удалить</button>
              </div>
            </div>
          </div>
        `;
      }).join('')}
    </div>
  `;
}
window.moderateReview = (id, approved) => {
  if (approved) { const r = reviews.find(x => x.id === id); if (r) r.approved = true; notify('Отзыв одобрен'); }
  else { reviews = reviews.filter(x => x.id !== id); notify('Отзыв удалён', 'info'); }
  saveState(); render();
};

function adminAnalytics() {
  const total = orders.filter(o => o.status !== 'cancelled').reduce((s, o) => s + o.total, 0);
  const avg = orders.filter(o => o.status !== 'cancelled').length > 0 ? total / orders.filter(o => o.status !== 'cancelled').length : 0;
  const byCat = CATEGORIES.map(c => {
    const v = orders.flatMap(o => o.items).reduce((acc, i) => {
      const p = products.find(x => x.id === i.productId);
      if (p?.categoryId === c.id) return acc + i.price * i.qty;
      return acc;
    }, 0);
    return { ...c, value: v };
  }).filter(x => x.value > 0).sort((a,b) => b.value - a.value);
  const maxVal = byCat[0]?.value || 1;
  const maxRev = Math.max(...salesData.map(s => s.revenue));

  return `
    <h2 style="margin-bottom:12px">Аналитика и отчёты</h2>
    <div class="stats-grid">
      <div class="stat-card">
        <div class="stat-icon green">💰</div>
        <div class="stat-label">Общая выручка</div>
        <div class="stat-value">${fmtPrice(total)}</div>
      </div>
      <div class="stat-card">
        <div class="stat-icon blue">📊</div>
        <div class="stat-label">Средний чек</div>
        <div class="stat-value">${fmtPrice(Math.round(avg))}</div>
      </div>
      <div class="stat-card">
        <div class="stat-icon purple">🛒</div>
        <div class="stat-label">Конверсия</div>
        <div class="stat-value">3.2%</div>
      </div>
    </div>
    <div class="card mb-2">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px">
        <h3 style="margin:0">Динамика выручки</h3>
        <div style="display:flex;gap:8px">
          <button class="btn btn-outline btn-sm">📥 Excel</button>
          <button class="btn btn-outline btn-sm">📄 PDF</button>
        </div>
      </div>
      <div class="chart">
        ${salesData.map(s => `
          <div class="chart-col">
            <div class="chart-val">${Math.round(s.revenue/1000)}к</div>
            <div class="chart-bar" style="height:${(s.revenue/maxRev)*100}%"></div>
            <div class="chart-label">${s.month}</div>
          </div>
        `).join('')}
      </div>
    </div>
    <div class="card">
      <h3 style="margin-bottom:12px">Продажи по категориям</h3>
      ${byCat.map(c => `
        <div style="margin-bottom:12px">
          <div style="display:flex;justify-content:space-between;margin-bottom:4px">
            <span>${c.icon} ${esc(c.name)}</span>
            <span class="font-bold">${fmtPrice(c.value)}</span>
          </div>
          <div style="height:8px;background:var(--bg);border-radius:4px;overflow:hidden">
            <div style="height:100%;width:${(c.value/maxVal)*100}%;background:linear-gradient(90deg,#3b82f6,#6366f1);border-radius:4px"></div>
          </div>
        </div>
      `).join('')}
    </div>
  `;
}

function adminImport() {
  return `
    <h2 style="margin-bottom:12px">Импорт товаров</h2>
    <div class="card mb-2">
      <p class="text-sm text-muted mb-3">Загрузите файл с товарами в одном из поддерживаемых форматов.</p>
      <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:12px">
        ${['CSV','XML','JSON','1С'].map(f => `
          <button class="btn btn-outline" style="padding:20px" onclick="startImport('${f}')">
            <div style="font-size:32px;margin-bottom:4px">📄</div>
            <div>${f}</div>
          </button>
        `).join('')}
      </div>
      <div id="import-progress"></div>
    </div>
    <div class="card">
      <h3 style="margin-bottom:12px">Журнал импорта</h3>
      ${[
        { date: '2026-03-25 14:23', src: 'CSV', count: 45, ok: true },
        { date: '2026-03-20 09:15', src: '1С', count: 128, ok: true },
        { date: '2026-03-15 11:42', src: 'XML', count: 0, ok: false },
      ].map(l => `
        <div style="display:flex;justify-content:space-between;padding:10px 0;border-bottom:1px solid var(--border)">
          <div>
            <div class="font-bold">Импорт из ${l.src}</div>
            <div class="text-sm text-muted">${l.date} · ${l.count} товаров</div>
          </div>
          <span class="tag tag-${l.ok ? 'green' : 'red'}">${l.ok ? 'Успешно' : 'Ошибка'}</span>
        </div>
      `).join('')}
    </div>
  `;
}
window.startImport = type => {
  let p = 0;
  $('import-progress').innerHTML = `
    <div style="margin-top:16px">
      <div class="text-sm text-muted">Прогресс: <span id="ip-val">0</span>%</div>
      <div class="progress-bar"><div class="progress-bar-fill" id="ip-bar" style="width:0%"></div></div>
    </div>
  `;
  const iv = setInterval(() => {
    p += 10;
    const bar = $('ip-bar'), val = $('ip-val');
    if (bar) bar.style.width = p + '%';
    if (val) val.textContent = p;
    if (p >= 100) { clearInterval(iv); notify('Импорт из ' + type + ' завершён'); }
  }, 150);
};

function adminSettings() {
  return `
    <h2 style="margin-bottom:12px">Настройки магазина</h2>
    <div class="card mb-2">
      <h3 style="margin-bottom:12px">Общие настройки</h3>
      <div style="display:flex;flex-direction:column;gap:12px">
        <label class="field"><span>Название магазина</span><input class="input" value="ЭлектроМаг" /></label>
        <label class="field"><span>Email</span><input class="input" value="info@electromag.ru" /></label>
        <label class="field"><span>Мин. сумма для бесплатной доставки, ₽</span><input class="input" type="number" value="5000" /></label>
      </div>
    </div>
    <div class="card mb-2">
      <h3 style="margin-bottom:12px">Уведомления</h3>
      <div style="display:flex;flex-direction:column;gap:8px">
        ${['Email о новых заказах', 'SMS при изменении статуса', 'Уведомление об отзывах', 'Уведомление о низких остатках'].map(o => `<label style="display:flex;align-items:center;gap:8px"><input type="checkbox" checked /> <span>${o}</span></label>`).join('')}
      </div>
    </div>
    <div class="card">
      <h3 style="margin-bottom:12px">Безопасность</h3>
      <div style="display:flex;flex-direction:column;gap:10px">
        ${[
          ['Хеширование паролей', 'Argon2', true],
          ['SSL (HTTPS)', 'Активен', true],
          ['Защита от CSRF', 'Включена', true],
          ['Rate-limit', 'Включён', true],
          ['Резервное копирование', 'Ежедневно', true],
        ].map(r => `
          <div style="display:flex;justify-content:space-between;align-items:center">
            <span>${r[0]}</span>
            <span class="tag tag-green">${r[1]} ✓</span>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

// ============ PAGE: SELLER ============
let sellerForm = { name: '', categoryId: 1, brandId: 1, price: 0, oldPrice: 0, stock: 0, description: '', cpu: '', gpu: '', ram: '', storage: '', extra: '' };

function renderSeller() {
  if (!state.currentUser || state.currentUser.role !== 'seller') return `
    <div class="container empty" style="padding:60px 16px">
      <div class="empty-icon">🔒</div>
      <h2>Нужен доступ продавца</h2>
      <p class="text-muted mb-3">Доступно только с ролью "Продавец"</p>
      <button class="btn btn-primary" onclick="navigate('login')">Войти как продавец</button>
    </div>
  `;
  const myProducts = products.filter(p => p.seller === state.currentUser.name);
  const cat = getCat(sellerForm.categoryId);
  const previewImg = svgImg(cat?.icon || '📦', '%231d4ed8', '%237c3aed');

  return `
    <div class="container" style="padding:20px 16px">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:20px;flex-wrap:wrap;gap:8px">
        <div>
          <h1 class="section-title" style="margin:0">Кабинет продавца</h1>
          <p class="text-sm text-muted">Добавление товара с заполнением карточки, характеристик и остатков</p>
        </div>
        <span class="tag tag-green">Продавец: ${esc(state.currentUser.name)}</span>
      </div>

      <div class="catalog-layout">
        <form onsubmit="submitProduct(event)">
          <div class="card mb-2">
            <h3 style="margin-bottom:12px">1. Основные данные товара</h3>
            <div style="display:grid;gap:12px;grid-template-columns:1fr 1fr">
              <label class="field" style="grid-column:1/-1"><span>Название товара *</span><input class="input" id="sf-name" value="${esc(sellerForm.name)}" required placeholder="Например: Игровой ПК Ryzen 7 RTX 4070" /></label>
              <label class="field"><span>Категория *</span><select class="select" id="sf-cat" onchange="sellerForm.categoryId=+this.value;render()">${CATEGORIES.map(c => `<option value="${c.id}" ${sellerForm.categoryId === c.id ? 'selected' : ''}>${c.name}</option>`).join('')}</select></label>
              <label class="field"><span>Бренд *</span><select class="select" id="sf-brand" onchange="sellerForm.brandId=+this.value">${BRANDS.map(b => `<option value="${b.id}" ${sellerForm.brandId === b.id ? 'selected' : ''}>${b.name}</option>`).join('')}</select></label>
              <label class="field"><span>Цена, ₽ *</span><input class="input" type="number" id="sf-price" value="${sellerForm.price}" /></label>
              <label class="field"><span>Старая цена, ₽</span><input class="input" type="number" id="sf-oldPrice" value="${sellerForm.oldPrice}" /></label>
              <label class="field"><span>Количество на складе *</span><input class="input" type="number" id="sf-stock" value="${sellerForm.stock}" /></label>
              <label class="field"><span>Шаблон</span><input class="input" value="${cat?.icon || '📦'} ${cat?.name || ''} / ${getBrand(sellerForm.brandId)?.name || ''}" disabled /></label>
            </div>
          </div>

          <div class="card mb-2">
            <h3 style="margin-bottom:12px">2. Описание и WYSIWYG-заполнение</h3>
            <textarea class="textarea" id="sf-desc" rows="5" placeholder="Опишите назначение товара, комплектацию, преимущества и условия гарантии...">${esc(sellerForm.description)}</textarea>
            <div class="text-sm text-muted mt-1">Поддерживаемые операции: заполнение формы товара, изменение данных, товар добавлен, запрос на удаление/скрытие.</div>
          </div>

          <div class="card mb-2">
            <h3 style="margin-bottom:12px">3. Характеристики товара</h3>
            <div style="display:grid;gap:12px;grid-template-columns:1fr 1fr">
              <label class="field"><span>Процессор</span><input class="input" id="sf-cpu" value="${esc(sellerForm.cpu)}" placeholder="Intel Core i7-14700K" /></label>
              <label class="field"><span>Видеокарта</span><input class="input" id="sf-gpu" value="${esc(sellerForm.gpu)}" placeholder="NVIDIA RTX 4070 12GB" /></label>
              <label class="field"><span>ОЗУ</span><input class="input" id="sf-ram" value="${esc(sellerForm.ram)}" placeholder="32 GB DDR5" /></label>
              <label class="field"><span>Накопитель</span><input class="input" id="sf-storage" value="${esc(sellerForm.storage)}" placeholder="1 TB SSD NVMe" /></label>
              <label class="field" style="grid-column:1/-1"><span>Дополнительные характеристики</span><textarea class="textarea" id="sf-extra" rows="4" placeholder="Экран: 15.6 IPS 144Hz&#10;Блок питания: 750W Gold&#10;Гарантия: 24 месяца">${esc(sellerForm.extra)}</textarea></label>
            </div>
          </div>

          <div style="display:flex;gap:8px;flex-wrap:wrap">
            <button class="btn btn-primary btn-lg" type="submit">Создать карточку и передать на модерацию</button>
            <button class="btn btn-outline btn-lg" type="button" onclick="resetSellerForm()">Очистить форму</button>
          </div>
        </form>

        <aside>
          <div class="card" style="position:sticky;top:80px">
            <h3 style="margin-bottom:12px">Предпросмотр карточки</h3>
            <img src="${previewImg}" class="mb-2" style="width:100%;border-radius:12px;border:1px solid var(--border)" />
            <div class="text-sm text-muted mb-1">${cat?.name} · ${getBrand(sellerForm.brandId)?.name}</div>
            <div class="font-bold" style="font-size:16px">${esc(sellerForm.name || 'Название товара')}</div>
            <div style="font-size:24px;font-weight:bold;margin:4px 0">${fmtPrice(sellerForm.price || 0)}</div>
            <div style="display:flex;gap:4px;flex-wrap:wrap">
              <span class="tag tag-green">Новинка</span>
              <span class="tag tag-yellow">На модерации</span>
            </div>
            <div class="text-sm text-muted mt-2">После создания карточка появится в каталоге и будет передана на модерацию.</div>
          </div>
          <div class="card mt-2">
            <h3 style="margin-bottom:12px">Мои товары (${myProducts.length})</h3>
            ${myProducts.length === 0 ? '<div class="text-sm text-muted">Пока нет товаров</div>' : myProducts.map(p => `
              <div style="display:flex;gap:8px;padding:8px;border-radius:8px;cursor:pointer" onclick="navigate('product',{id:${p.id}})">
                <img src="${p.image}" style="width:48px;height:48px;border-radius:6px;object-fit:cover" />
                <div style="flex:1;min-width:0">
                  <div style="font-size:13px;font-weight:600;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${esc(p.name)}</div>
                  <div class="text-sm text-muted">${fmtPrice(p.price)} · ${p.stock} шт.</div>
                </div>
              </div>
            `).join('')}
          </div>
        </aside>
      </div>
    </div>
  `;
}

window.resetSellerForm = () => {
  sellerForm = { name: '', categoryId: 1, brandId: 1, price: 0, oldPrice: 0, stock: 0, description: '', cpu: '', gpu: '', ram: '', storage: '', extra: '' };
  render();
};

window.submitProduct = e => {
  e.preventDefault();
  const errors = [];
  sellerForm.name = $('sf-name').value.trim();
  sellerForm.categoryId = +$('sf-cat').value;
  sellerForm.brandId = +$('sf-brand').value;
  sellerForm.price = +$('sf-price').value;
  sellerForm.oldPrice = +$('sf-oldPrice').value;
  sellerForm.stock = +$('sf-stock').value;
  sellerForm.description = $('sf-desc').value.trim();
  sellerForm.cpu = $('sf-cpu').value.trim();
  sellerForm.gpu = $('sf-gpu').value.trim();
  sellerForm.ram = $('sf-ram').value.trim();
  sellerForm.storage = $('sf-storage').value.trim();
  sellerForm.extra = $('sf-extra').value.trim();

  if (sellerForm.name.length < 3) errors.push('Название ≥ 3 символов');
  if (sellerForm.price <= 0) errors.push('Цена должна быть > 0');
  if (sellerForm.stock < 0) errors.push('Остаток не может быть отрицательным');
  if (sellerForm.description.length < 20) errors.push('Описание ≥ 20 символов');
  if (errors.length > 0) { notify(errors[0], 'error'); return; }

  const cat = getCat(sellerForm.categoryId);
  const brand = getBrand(sellerForm.brandId);
  const attributes = [];
  if (sellerForm.cpu) attributes.push({k:'Процессор', v: sellerForm.cpu});
  if (sellerForm.gpu) attributes.push({k:'Видеокарта', v: sellerForm.gpu});
  if (sellerForm.ram) attributes.push({k:'ОЗУ', v: sellerForm.ram});
  if (sellerForm.storage) attributes.push({k:'Накопитель', v: sellerForm.storage});
  attributes.push({k:'Продавец', v: state.currentUser.name});
  attributes.push({k:'Статус карточки', v: 'На модерации'});
  sellerForm.extra.split('\n').filter(Boolean).forEach(row => {
    const [k, ...v] = row.split(':');
    if (k && v.length > 0) attributes.push({k: k.trim(), v: v.join(':').trim()});
  });

  const newP = {
    id: Math.max(0, ...products.map(x => x.id)) + 1,
    name: sellerForm.name,
    slug: sellerForm.name.toLowerCase().replace(/[^a-zа-я0-9]+/gi, '-'),
    categoryId: sellerForm.categoryId,
    brandId: sellerForm.brandId,
    price: sellerForm.price,
    oldPrice: sellerForm.oldPrice > sellerForm.price ? sellerForm.oldPrice : undefined,
    stock: sellerForm.stock,
    rating: 0,
    reviewsCount: 0,
    description: sellerForm.description,
    image: svgImg(cat?.icon || '📦', '%231d4ed8', '%237c3aed'),
    attributes,
    isNew: true,
    createdAt: new Date().toISOString().slice(0, 10),
    seller: state.currentUser.name,
  };
  products.unshift(newP);
  saveState();
  notify('Карточка товара создана и передана на модерацию');
  resetSellerForm();
};

// ============ PAGE: ABOUT ============
function renderAbout() {
  return `
    <div class="container" style="padding:40px 16px">
      <h1 style="font-size:36px;margin-bottom:8px">О магазине ЭлектроМаг</h1>
      <p class="text-muted mb-3">Интернет-магазин компьютерной техники, комплектующих и периферии</p>
      <div style="display:grid;grid-template-columns:1fr;gap:16px">
        <div class="card">
          <div style="font-size:36px;margin-bottom:8px">🎯</div>
          <h2 style="margin-bottom:8px">Наша миссия</h2>
          <p class="text-muted">Сделать качественную компьютерную технику доступной каждому. Мы помогаем выбрать идеальное решение — от рабочей станции до геймерской сборки.</p>
        </div>
        <div class="card">
          <div style="font-size:36px;margin-bottom:8px">🚀</div>
          <h2 style="margin-bottom:8px">Что мы предлагаем</h2>
          <ul style="padding-left:20px;color:var(--muted)">
            <li>Ноутбуки, ПК и моноблоки</li>
            <li>Комплектующие: CPU, GPU, RAM, SSD</li>
            <li>Мониторы и периферия</li>
            <li>Гарантия и сервис</li>
          </ul>
        </div>
        <div class="card">
          <h2 style="margin-bottom:16px">Преимущества</h2>
          <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:16px">
            ${[
              ['🛡️', 'Гарантия качества', 'Официальная гарантия от производителей'],
              ['🚚', 'Быстрая доставка', 'По Москве за 1 день, по России 1-3 дня'],
              ['💳', 'Удобная оплата', 'Карты, СБП, наличные, рассрочка'],
              ['🎁', 'Программа лояльности', 'Кэшбэк на следующие покупки'],
              ['👨‍💻', 'Экспертная консультация', 'Поможем подобрать конфигурацию'],
              ['🔄', 'Обмен и возврат', '14 дней на возврат без вопросов'],
            ].map(f => `
              <div style="display:flex;gap:12px">
                <div style="font-size:28px">${f[0]}</div>
                <div>
                  <div style="font-weight:600">${f[1]}</div>
                  <div class="text-sm text-muted">${f[2]}</div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
        <div class="card">
          <h2 style="margin-bottom:16px">Контактная информация</h2>
          <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:16px">
            <div><div class="text-sm text-muted mb-1">Адрес</div><div>📍 г. Москва, ул. Тверская, д. 1</div></div>
            <div><div class="text-sm text-muted mb-1">Телефон</div><div>📞 8 (800) 555-35-35</div></div>
            <div><div class="text-sm text-muted mb-1">Email</div><div>✉️ info@electromag.ru</div></div>
            <div><div class="text-sm text-muted mb-1">Часы работы</div><div>🕐 Ежедневно 9:00–21:00</div></div>
          </div>
        </div>
      </div>
    </div>
  `;
}

// ============ THEME ============
function toggleTheme() {
  state.theme = state.theme === 'light' ? 'dark' : 'light';
  document.body.classList.toggle('dark', state.theme === 'dark');
  saveState();
  render();
}
window.toggleTheme = toggleTheme;

// ============ INIT ============
loadState();
document.body.classList.toggle('dark', state.theme === 'dark');
render();
