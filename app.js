/* ═══════════════════════════════════════════════════
   D'Olivo Restaurant — app.js
   ═══════════════════════════════════════════════════ */

'use strict';

/* ──────────── CONSTANTS ──────────── */
const WA_NUMBER = '994559406018';

/* ──────────── DISH DATA ──────────── */
const DISHES = [
  // 0-3 Starters
  { id:0,  name:'Bruschetta alla Pomodoro', desc:'Təzə pomidor, straçetella pendir, reyhan, balzamik sous', price:15, img:'images/bruschetta-pomodoro.jpg', cat:'starters' },
  { id:1,  name:'Bruschetta al Salmone',   desc:'Hisə verilmiş qızıl balıq, avokado, straçetella pendir, reyhan yağı, kapar', price:19, img:'images/bruschetta-salmone.jpg', cat:'starters' },
  { id:2,  name:'Bruschetta di Manzo',     desc:'Grildə bişmiş tərəvəzlər, can əti, rukola, parmezan, balzamik glaze', price:18, img:'images/bruschetta-manzo.jpg', cat:'starters' },
  { id:3,  name:'Bruschetta with Burata',  desc:'Bruschetta çörəyi, guacamole, burrata pendir, pomidor, zeytun yağı', price:18, img:'images/bruschetta-burata.jpg', cat:'starters' },
  // 4-7 Soups
  { id:4,  name:'Cream Cheese',            desc:'Parmesan, qaymaq, gauda, çedar (230 qr). Dadlı pendirli krem şorba – zəngin ləzzəti ilə gün boyu enerji verir.', price:7,  img:'images/soup-cream-cheese.jpg', cat:'soups' },
  { id:5,  name:'Crema Pomodoro',          desc:'Pomidor püresi, təzə qaymaq, parmezan. İtalyan pomidorunun ən saf ləzzəti.', price:6,  img:'images/soup-pomodoro.jpg', cat:'soups' },
  { id:6,  name:'Minestrone Verdure',      desc:'Brokoli, göbələk, qulançar, tərəvəzlər, zeytun yağı, ədviyyatlar. Sağlam İtalyan tərəvəz şorbası.', price:6,  img:'images/soup-minestrone.jpg', cat:'soups' },
  { id:7,  name:'Zuppa di Zucca',          desc:'Balqabaq püresi, toyuq eti, krem, qabaq toxumu. Yumşaq balqabaq ətri.', price:6,  img:'images/soup-zucca.jpg', cat:'soups' },
  // 8-11 Salads
  { id:8,  name:'Insalata di Salmone e Avocado', desc:'Hisə verilmiş qızıl balıq, rukkola, avokado, kapar, limon sosu, zeytun yağı', price:17, img:'images/salad-salmon.jpg', cat:'salads' },
  { id:9,  name:'Insalata Kinoa',          desc:'Aysberq, rukola, toyuq filesi, avokado, kinoa, limon-yağ sosu, qırmızı soğan', price:17, img:'images/salad-kinoa.jpg', cat:'salads' },
  { id:10, name:'Insalata Caesar Pollo',   desc:'Romano kahı, qızardılmış toyuq filesi, parmezan, krutun, Sezar sosu. Krevetkalı versiya 16 ₼.', price:14, img:'images/salad-caesar.jpg', cat:'salads' },
  { id:11, name:'Beef Bowl',               desc:'Can eti, kök, düyü, yumurta, ispanaq, susam sosu, zeytun yağı', price:17, img:'images/beef-bowl.jpg', cat:'salads' },
  // 12-15 Pasta
  { id:12, name:'Campanelli con Pomodoro', desc:'Qurudulmuş pomidor, tomat sousu, burrata pendir, limon qabuğu, reyhan', price:18, img:'images/pasta-campanelli.jpg', cat:'pasta' },
  { id:13, name:'Spaghetti Frutti di Mare',desc:'Dəniz məhsulları, tomat sousu, cəfəri, sarımsaq, ağ şərab', price:24, img:'images/pasta-frutti-mare.jpg', cat:'pasta' },
  { id:14, name:'Spaghetti Bolognese',     desc:'Pomidor sousu ilə uzun müddət bişmiş mal əti, təzə reyhan, parmezan', price:17, img:'images/pasta-bolognese.jpg', cat:'pasta' },
  { id:15, name:'Spaghetti Pomodoro',      desc:'Pomidor sousu, parmezan, təzə reyhan, keyfiyyətli zeytun yağı', price:14, img:'images/pasta-pomodoro.jpg', cat:'pasta' },
  // 16-17 Breakfast
  { id:16, name:'Shakshuka',               desc:'Badımcan, bibər, pomidor, yumurta, ədviyyatlar. Orta Şərq ənənəvi səhər yeməyi.', price:12, img:'images/shakshuka.jpg', cat:'breakfast' },
  { id:17, name:'Sucuklu Yumurta',         desc:'Sucuk, yumurta, kərə yağı, təzə reyhan. Sadə, qidalı səhər yeməyi.', price:9,  img:'images/sucuklu-yumurta.jpg', cat:'breakfast' },
  // 18-21 Wine
  { id:18, name:'Bottega Pinot Grigio Rose', desc:'Nazik, meyvəli ətirli İtalyan roze şərabı. Qarpız, çiyələk ətri ilə tamamlanmış zərif içki.', price:72, img:'images/rose-wine.jpg', cat:'wine' },
  { id:19, name:'Meysari Senem',           desc:'Yerli Azərbaycan üzümlərindən hazırlanmış roze şərab. Milli ləzzəti ilə fərqlənir.', price:55, img:'images/rose-wine.jpg', cat:'wine' },
  { id:20, name:'Chabiant Rose',           desc:'Fransız roze şərabı, yüngül və təravətli, çiçəkli ətirli.', price:42, img:'images/rose-wine.jpg', cat:'wine' },
  { id:21, name:'Campo Viejo Rose',        desc:'İspan roze şərabı, çiçəkli ətir, balanslı ləzzət, dadlı son.', price:80, img:'images/rose-wine.jpg', cat:'wine' },
];

/* ──────────── VACANCY DATA ──────────── */
const VACANCIES = [
  {
    icon:'👨‍🍳', title:'Aşpaz (Chef)',
    details:[
      '📌 Vəzifə: Sous Chef / Line Cook',
      '⏰ İş saatları: Tam ştat (Növbə ilə)',
      '✅ Tələblər: İtalyan mətbəxi üzrə 2+ il təcrübə, komandada işləmə bacarığı',
      '💰 Maaş: Razılaşma əsasında',
      '📩 Müraciət: WhatsApp vasitəsilə CV göndərin',
    ]
  },
  {
    icon:'🍽️', title:'Ofisiant',
    details:[
      '📌 Vəzifə: Ofisiant / Server',
      '⏰ İş saatları: Tam ştat (Növbə ilə)',
      '✅ Tələblər: Xoş ünsiyyət, azərbaycan/rus dili, restoran təcrübəsi üstünlük',
      '💰 Maaş: Sabit maaş + çay pulu',
      '📩 Müraciət: WhatsApp vasitəsilə',
    ]
  },
  {
    icon:'☕', title:'Barista',
    details:[
      '📌 Vəzifə: Barista',
      '⏰ İş saatları: Yarım ştat (Həftəsonu)',
      '✅ Tələblər: Qəhvə hazırlama bacarığı, espresso maşını ilə işləmə',
      '💰 Maaş: Saatlıq ödəniş',
      '📩 Müraciət: WhatsApp vasitəsilə',
    ]
  },
  {
    icon:'🧹', title:'Sanitariya İşçisi',
    details:[
      '📌 Vəzifə: Mətbəx / Salon sanitariya',
      '⏰ İş saatları: Tam ştat',
      '✅ Tələblər: Məsuliyyətli, vaxtında gəlmə',
      '💰 Maaş: Razılaşma əsasında',
      '📩 Müraciət: WhatsApp vasitəsilə',
    ]
  },
  {
    icon:'📱', title:'SMM Menecer',
    details:[
      '📌 Vəzifə: Sosial media idarəetməsi (Instagram, TikTok)',
      '⏰ İş saatları: Uzaqdan / Freelance',
      '✅ Tələblər: Kontent yaratma, foto/video redaktəsi, reklam idarəetməsi',
      '💰 Maaş: Layihə əsaslı ödəniş',
      '📩 Müraciət: WhatsApp vasitəsilə portfolio göndərin',
    ]
  },
  {
    icon:'🚗', title:'Kuryer',
    details:[
      '📌 Vəzifə: Sifariş çatdırılması',
      '⏰ İş saatları: Yarım ştat (Axşam saatları)',
      '✅ Tələblər: Motosiklet sürücülük vəsiqəsi, Bakı xəritəsini bilmə',
      '💰 Maaş: Çatdırılma başına ödəniş',
      '📩 Müraciət: WhatsApp vasitəsilə',
    ]
  },
];

/* ──────────── GALLERY DATA ──────────── */
const GALLERY_ITEMS = [
  { img:'images/gallery-violinist.jpg', caption:'Canlı Musiqi — Şənbə axşamları' },
  { img:'images/gallery-restaurant.jpg', caption:'Restoran Atmosferi' },
  { img:'images/menu-hero.jpg', caption:'Mükəmməl Pasta' },
  { img:'images/gallery-pizza.jpg', caption:'Əl Yoğrulmuş Pizza' },
  { img:'images/gallery-pasta.jpg', caption:'Pasta Çeşidləri' },
  { img:'images/gallery-interior.jpg', caption:'Şam Yeməyi' },
];

/* ──────────── STATE ──────────── */
let cart          = [];       // [{id, qty}]
let currentDish   = null;
let pageHistory   = ['home'];
let scrollPos     = {};       // {pageName: scrollY}
let lightboxIdx   = 0;

/* ──────────── PAGE NAVIGATION ──────────── */
function showPage(name) {
  const cur = pageHistory[pageHistory.length - 1];
  if (cur === name) return;

  // Save scroll position of current page
  const curEl = document.getElementById('page-' + cur);
  if (curEl) scrollPos[cur] = window.scrollY;

  // Hide all
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));

  // Show target
  const target = document.getElementById('page-' + name);
  if (!target) return;
  target.classList.add('active');

  // Restore scroll position or go to top
  const saved = scrollPos[name] || 0;
  window.scrollTo({ top: saved, behavior: 'instant' });

  pageHistory.push(name);
  closeCart();
}

function goBack() {
  if (pageHistory.length <= 1) {
    showPage('home');
    return;
  }
  // Save scroll of current page
  const cur = pageHistory[pageHistory.length - 1];
  const curEl = document.getElementById('page-' + cur);
  if (curEl) scrollPos[cur] = window.scrollY;

  pageHistory.pop();
  const prev = pageHistory[pageHistory.length - 1];

  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const prevEl = document.getElementById('page-' + prev);
  if (prevEl) {
    prevEl.classList.add('active');
    const savedScroll = scrollPos[prev] || 0;
    window.scrollTo({ top: savedScroll, behavior: 'instant' });
  }
}

/* ──────────── HAMBURGER ──────────── */
function toggleMenu() {
  const links = document.getElementById('navLinks');
  const ham   = document.getElementById('hamburger');
  const back  = document.getElementById('navBackdrop');
  const isOpen = links.classList.toggle('open');
  ham.classList.toggle('open', isOpen);
  back.classList.toggle('show', isOpen);
  document.body.style.overflow = isOpen ? 'hidden' : '';
}

function closeMenu() {
  document.getElementById('navLinks').classList.remove('open');
  document.getElementById('hamburger').classList.remove('open');
  document.getElementById('navBackdrop').classList.remove('show');
  document.body.style.overflow = '';
}

/* ──────────── MENU FILTER ──────────── */
function filterMenu(cat, btn) {
  document.querySelectorAll('.menu-tab').forEach(t => t.classList.remove('active'));
  btn.classList.add('active');

  document.querySelectorAll('.menu-category').forEach(sec => {
    if (cat === 'all') {
      sec.classList.remove('hidden');
    } else {
      sec.classList.toggle('hidden', sec.dataset.category !== cat);
    }
  });

  // Scroll to top of menu content
  const menuContainer = document.getElementById('menuContainer');
  if (menuContainer) menuContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

/* ──────────── DISH MODAL ──────────── */
function openDish(id) {
  const d = DISHES[id];
  if (!d) return;
  currentDish = d;

  document.getElementById('dishImg').src = d.img;
  document.getElementById('dishImg').alt = d.name;
  document.getElementById('dishName').textContent = d.name;
  document.getElementById('dishDesc').textContent = d.desc;
  document.getElementById('dishPrice').textContent = d.price + ' ₼';

  document.getElementById('dishOverlay').classList.add('show');
  document.body.style.overflow = 'hidden';
}

function closeDish(e) {
  if (e && e.target !== document.getElementById('dishOverlay')) return;
  document.getElementById('dishOverlay').classList.remove('show');
  document.body.style.overflow = '';
  currentDish = null;
}

function addToCartFromModal() {
  if (currentDish) {
    addToCart(currentDish.id);
    closeDish();
  }
}

/* ──────────── CART ──────────── */
function addToCart(id) {
  const d = DISHES[id];
  if (!d) return;
  const existing = cart.find(i => i.id === id);
  if (existing) {
    existing.qty++;
  } else {
    cart.push({ id, qty: 1 });
  }
  updateCartUI();
  showCartToast(d.name);
}

function removeFromCart(id) {
  cart = cart.filter(i => i.id !== id);
  updateCartUI();
}

function changeQty(id, delta) {
  const item = cart.find(i => i.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) {
    cart = cart.filter(i => i.id !== id);
  }
  updateCartUI();
}

function updateCartUI() {
  const total  = cart.reduce((s, i) => s + DISHES[i.id].price * i.qty, 0);
  const count  = cart.reduce((s, i) => s + i.qty, 0);

  document.getElementById('cartCount').textContent = count;
  document.getElementById('cartCount').style.display = count > 0 ? 'flex' : 'none';

  const itemsEl  = document.getElementById('cartItems');
  const emptyEl  = document.getElementById('cartEmpty');
  const footerEl = document.getElementById('cartFooter');
  const totalEl  = document.getElementById('cartTotal');

  if (cart.length === 0) {
    emptyEl.style.display  = 'flex';
    footerEl.style.display = 'none';
    itemsEl.innerHTML      = '';
    itemsEl.appendChild(emptyEl);
    return;
  }

  emptyEl.style.display  = 'none';
  footerEl.style.display = 'block';
  totalEl.textContent    = total + ' ₼';

  // Rebuild cart items
  itemsEl.innerHTML = '';
  cart.forEach(ci => {
    const d   = DISHES[ci.id];
    const div = document.createElement('div');
    div.className = 'cart-item';
    div.innerHTML = `
      <img class="cart-item-img" src="${d.img}" alt="${d.name}" loading="lazy" />
      <div class="cart-item-info">
        <h4>${d.name}</h4>
        <p>${d.price * ci.qty} ₼</p>
      </div>
      <div class="cart-item-controls">
        <button class="qty-btn" onclick="changeQty(${d.id},-1)" aria-label="Azalt">−</button>
        <span class="qty-num">${ci.qty}</span>
        <button class="qty-btn" onclick="changeQty(${d.id},1)" aria-label="Artır">+</button>
      </div>`;
    itemsEl.appendChild(div);
  });
}

function toggleCart() {
  const overlay = document.getElementById('cartOverlay');
  const isOpen  = overlay.classList.toggle('show');
  document.body.style.overflow = isOpen ? 'hidden' : '';
}

function closeCart() {
  document.getElementById('cartOverlay').classList.remove('show');
  document.body.style.overflow = '';
}

function closeCartOutside(e) {
  if (e.target === document.getElementById('cartOverlay')) {
    closeCart();
  }
}

function showCartToast(name) {
  let toast = document.getElementById('cartToast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'cartToast';
    toast.style.cssText = `
      position:fixed; bottom:24px; left:50%; transform:translateX(-50%);
      background:var(--green); color:#fff;
      padding:12px 20px; border-radius:100px;
      font-size:14px; font-weight:600;
      z-index:9999; box-shadow:0 4px 16px rgba(0,0,0,.2);
      white-space:nowrap; pointer-events:none;
      transition:opacity .3s, transform .3s;
    `;
    document.body.appendChild(toast);
  }
  toast.textContent = '✓ Səbətə əlavə edildi';
  toast.style.opacity = '1';
  toast.style.transform = 'translateX(-50%) translateY(0)';
  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(-50%) translateY(8px)';
  }, 2000);
}

/* ──────────── WHATSAPP ORDER ──────────── */
function orderViaWhatsApp() {
  if (cart.length === 0) return;
  const total = cart.reduce((s, i) => s + DISHES[i.id].price * i.qty, 0);
  let msg = '🛒 *D\'Olivo — Sifariş*\n\n';
  cart.forEach(ci => {
    const d = DISHES[ci.id];
    msg += `• ${d.name} × ${ci.qty} — ${d.price * ci.qty} ₼\n`;
  });
  msg += `\n💰 *Cəmi: ${total} ₼*\n\nZəhmət olmasa sifarişimi təsdiqləyin.`;
  const url = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;
  window.open(url, '_blank');
}

/* ──────────── RESERVATION ──────────── */
function submitReservation(e) {
  e.preventDefault();
  const name   = document.getElementById('res-name').value.trim();
  const phone  = document.getElementById('res-phone').value.trim();
  const date   = document.getElementById('res-date').value;
  const time   = document.getElementById('res-time').value;
  const guests = document.getElementById('res-guests').value;
  const note   = document.getElementById('res-note').value.trim();

  // Validation
  let ok = true;
  [['res-name',name],['res-phone',phone],['res-date',date],['res-time',time],['res-guests',guests]].forEach(([id,val]) => {
    const el = document.getElementById(id);
    if (!val) { el.classList.add('error'); ok = false; }
    else el.classList.remove('error');
  });
  if (!ok) return;

  const d = new Date(date);
  const dateStr = d.toLocaleDateString('az-AZ', { day:'numeric', month:'long', year:'numeric' });

  let msg = `📅 *D'Olivo — Rezervasiya Tələbi*\n\n`;
  msg += `👤 Ad: ${name}\n`;
  msg += `📞 Telefon: ${phone}\n`;
  msg += `📆 Tarix: ${dateStr}\n`;
  msg += `🕐 Saat: ${time}\n`;
  msg += `👥 Qonaq sayı: ${guests}\n`;
  if (note) msg += `📝 Qeyd: ${note}\n`;
  msg += `\nZəhmət olmasa rezervasiyanı təsdiqləyin.`;

  window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank');

  // Reset form
  e.target.reset();
  showSuccessMsg();
}

function showSuccessMsg() {
  let el = document.getElementById('resSuccess');
  if (!el) {
    el = document.createElement('div');
    el.id = 'resSuccess';
    el.style.cssText = `
      background:#dcfce7; color:#16a34a;
      border:1px solid #bbf7d0;
      border-radius:12px; padding:16px 20px;
      font-size:14px; font-weight:600;
      margin-top:16px; text-align:center;
    `;
    document.querySelector('.reservation-form').after(el);
  }
  el.textContent = '✓ Rezervasiya tələbiniz WhatsApp-a göndərildi!';
  el.style.display = 'block';
  setTimeout(() => { el.style.display = 'none'; }, 5000);
}

/* ──────────── FAQ ──────────── */
function toggleFaq(btn) {
  const answer = btn.nextElementSibling;
  const isOpen = answer.classList.contains('open');

  // Close all
  document.querySelectorAll('.faq-q').forEach(q => q.classList.remove('open'));
  document.querySelectorAll('.faq-a').forEach(a => a.classList.remove('open'));

  if (!isOpen) {
    btn.classList.add('open');
    answer.classList.add('open');
  }
}

/* ──────────── VACANCIES ──────────── */
function openVacancy(idx) {
  const v = VACANCIES[idx];
  if (!v) return;

  document.getElementById('vacIcon').textContent    = v.icon;
  document.getElementById('vacTitle').textContent   = v.title;

  const detailsEl = document.getElementById('vacDetails');
  detailsEl.innerHTML = v.details.map(d => `<p>${d}</p>`).join('');

  const msg = `💼 *D'Olivo — Vakansiyaya Müraciət*\n\n🔖 Vəzifə: ${v.title}\n\nSalam! Bu vakansiyaya müraciət etmək istəyirəm.`;
  document.getElementById('vacApplyBtn').href = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;

  document.getElementById('vacancyOverlay').classList.add('show');
  document.body.style.overflow = 'hidden';
}

function closeVacancy(e) {
  if (e && e.target !== document.getElementById('vacancyOverlay')) return;
  document.getElementById('vacancyOverlay').classList.remove('show');
  document.body.style.overflow = '';
}

/* ──────────── GALLERY / LIGHTBOX ──────────── */
function openLightbox(idx) {
  lightboxIdx = idx;
  setLightboxPhoto(idx);
  document.getElementById('lightbox').classList.add('show');
  document.body.style.overflow = 'hidden';
}

function closeLightbox(e) {
  if (e && e.target !== document.getElementById('lightbox')) return;
  document.getElementById('lightbox').classList.remove('show');
  document.body.style.overflow = '';
}

function setLightboxPhoto(idx) {
  const item = GALLERY_ITEMS[idx];
  document.getElementById('lightboxImg').src = item.img;
  document.getElementById('lightboxImg').alt = item.caption;
  document.getElementById('lightboxCaption').textContent = item.caption;
}

function prevPhoto() {
  lightboxIdx = (lightboxIdx - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length;
  setLightboxPhoto(lightboxIdx);
}

function nextPhoto() {
  lightboxIdx = (lightboxIdx + 1) % GALLERY_ITEMS.length;
  setLightboxPhoto(lightboxIdx);
}

/* ──────────── KEYBOARD NAVIGATION ──────────── */
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    closeDish();
    closeVacancy();
    closeLightbox();
    closeCart();
    closeMenu();
  }
  if (document.getElementById('lightbox').classList.contains('show')) {
    if (e.key === 'ArrowLeft')  prevPhoto();
    if (e.key === 'ArrowRight') nextPhoto();
  }
});

/* ──────────── INIT ──────────── */
document.addEventListener('DOMContentLoaded', () => {
  // Set min date for reservation to today
  const dateInput = document.getElementById('res-date');
  if (dateInput) {
    const today = new Date().toISOString().split('T')[0];
    dateInput.min = today;
  }

  // Init cart count display
  updateCartUI();
  document.getElementById('cartCount').style.display = 'none';

  // Lazy load performance observer
  if ('IntersectionObserver' in window) {
    const imgs = document.querySelectorAll('img[loading="lazy"]');
    const obs  = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          if (img.dataset.src) {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
          }
          observer.unobserve(img);
        }
      });
    }, { rootMargin: '200px' });
    imgs.forEach(img => obs.observe(img));
  }
});
