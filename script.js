/* =====================================================
   UPSA CAMPUS STORE — script.js
   Logic: Cart, Routing, Mock Checkout, Login
   ===================================================== */

// ---- Product Data ----
const products = [
  { id: 'h1', name: 'UPSA Classic Hoodie', price: 145, cat: 'Hoodies', badge: 'Bestseller', rating: 4.8, reviews: 42, meta: 'Premium Cotton Blend', img: 'images/classic_hoodie.png' },
  { id: 'h2', name: 'UPSA Zip-Up Hoodie', price: 165, cat: 'Hoodies', badge: null, rating: 4.7, reviews: 28, meta: 'Full-zip with pockets', img: 'images/zipup_hoodie.png' },
  { id: 'h3', name: 'UPSA Oversized Hoodie', price: 155, cat: 'Hoodies', badge: 'New', rating: 4.9, reviews: 15, meta: 'Relaxed fit, heavy fabric', img: 'images/oversized_hoodie.png' },
  { id: 't1', name: 'Canvas Tote Bag', price: 48, cat: 'Tote Bags', badge: null, rating: 4.5, reviews: 64, meta: 'Durable eco-friendly canvas', img: 'images/canvas_tote.png' },
  { id: 't2', name: 'UPSA Graphic Tote', price: 55, cat: 'Tote Bags', badge: 'Bestseller', rating: 4.8, reviews: 92, meta: 'Limited edition campus print', img: 'images/graphic_tote.png' },
  { id: 'w1', name: 'UPSA Steel Bottle 500ml', price: 70, cat: 'Water Bottles', badge: null, rating: 4.6, reviews: 37, meta: 'Stainless steel, leak-proof', img: 'images/upsa_steel_bottle.png' },
  { id: 'w2', name: 'Insulated Tumbler 750ml', price: 90, cat: 'Water Bottles', badge: 'New', rating: 4.7, reviews: 21, meta: 'Keeps drinks cold for 24h', img: 'images/insulated_tumbler.png' },
  { id: 's1', name: 'UPSA Notebook Set', price: 35, cat: 'Stationery', badge: null, rating: 4.9, reviews: 110, meta: '3-pack ruled notebooks', img: 'images/notebook_set.png' },
  { id: 's2', name: 'Premium Pen Set (5pc)', price: 28, cat: 'Stationery', badge: null, rating: 4.4, reviews: 53, meta: 'Smooth gel ink, black', img: 'images/premium_pen_set.png' },
  { id: 'ls1', name: '13" Laptop Sleeve', price: 88, cat: 'Laptop Sleeves', badge: null, rating: 4.7, reviews: 45, meta: 'Padded protection, water-resistant', img: 'images/13inch_sleeve.png' },
  { id: 'ls2', name: '15" Laptop Sleeve', price: 95, cat: 'Laptop Sleeves', badge: null, rating: 4.6, reviews: 32, meta: 'Fits most 15-inch laptops', img: 'images/15inch_sleeve.png' },
  { id: 'gc1', name: "Bachelor's Cloak (Rental)", price: 500, cat: 'Graduation Cloaks', badge: 'Rental', rating: 5.0, reviews: 210, meta: 'Official UPSA Bachelor Regalia', rental: true, note: 'Rental price for graduation week.', img: 'images/bachelor_cloak.png' },
  { id: 'gc2', name: "Master's Cloak (Rental)", price: 500, cat: 'Graduation Cloaks', badge: 'Rental', rating: 5.0, reviews: 145, meta: 'Official UPSA Master Regalia', rental: true, note: 'Rental price for graduation week.', img: 'images/master_cloak.png' },
  { id: 'gc3', name: "PhD Cloak (Rental)", price: 500, cat: 'Graduation Cloaks', badge: 'Rental', rating: 5.0, reviews: 88, meta: 'Official UPSA PhD Regalia', rental: true, note: 'Rental price for graduation week.', img: 'images/phd_cloak.png' },
  { id: 'b1', name: 'UPSA Classic Backpack', price: 120, cat: 'Backpacks', badge: null, rating: 4.8, reviews: 76, meta: 'Multi-compartment student bag', img: 'images/classic_backpack.png' },
  { id: 'b2', name: 'UPSA Heavy-Duty Backpack', price: 155, cat: 'Backpacks', badge: 'Bestseller', rating: 4.9, reviews: 134, meta: 'Reinforced straps, laptop pocket', img: 'images/heavy_duty_backpack.png' },
  { id: 'b3', name: 'Slim Laptop Backpack', price: 140, cat: 'Backpacks', badge: null, rating: 4.7, reviews: 52, meta: 'Sleek design for urban commute', img: 'images/slim_laptop_backpack.png' },
  { id: 'l1', name: 'Lenovo IdeaPad 3', price: 2800, cat: 'Electronics', badge: null, rating: 4.5, reviews: 24, meta: 'Intel i3, 8GB RAM, 256GB SSD', warranty: '6-month warranty', img: 'images/lenovo_ideapad.jpg' },
  { id: 'l2', name: 'HP 14 Laptop', price: 2200, cat: 'Electronics', badge: null, rating: 4.3, reviews: 18, meta: 'Intel i3, 4GB RAM, 128GB SSD', warranty: '6-month warranty', img: 'images/hp_14_laptop.jpg' },
  { id: 'l3', name: 'Acer Aspire 3', price: 2650, cat: 'Electronics', badge: null, rating: 4.4, reviews: 31, meta: 'AMD Ryzen 3, 8GB, 256GB SSD', warranty: '6-month warranty', img: 'images/acer_aspire.jpg' },
  { id: 'l4', name: 'Refurbished Dell Latitude', price: 1800, cat: 'Electronics', badge: 'Best Value', rating: 4.2, reviews: 12, meta: 'Reliable business laptop', warranty: '6-month warranty', img: 'images/dell_latitude.jpg' },
  { id: 'l5', name: 'UPSA Student Bundle', price: 3200, cat: 'Electronics', badge: 'Bundle', rating: 4.9, reviews: 45, meta: 'Laptop + Sleeve + Bag', warranty: '6-month warranty', img: 'images/student_bundle.jpg' },
  { id: 'sh1', name: 'UPSA Polo Tee', price: 85, cat: 'Shirts', badge: null, rating: 4.7, reviews: 67, meta: 'Embroidered logo, pique fabric', img: 'images/polo_tee.png' },
  { id: 'sh2', name: 'UPSA Round Neck Shirt', price: 65, cat: 'Shirts', badge: 'New', rating: 4.6, reviews: 89, meta: 'Soft cotton, screen printed', img: 'images/round_neck_shirt.png' },
  { id: 'sh3', name: 'Polo T-Shirt White Thread', price: 95, cat: 'Shirts', badge: null, rating: 4.8, reviews: 34, meta: 'Contrast stitching detail', img: 'images/polo_white_thread.png' },
  { id: 'm1', name: 'UPSA Classic Mug', price: 45, cat: 'Mugs', badge: 'New', rating: 4.7, reviews: 56, meta: 'Ceramic, dishwasher safe', img: 'images/upsa_classic_mug.png' },
  { id: 'm2', name: 'UPSA Alumni Mug', price: 65, cat: 'Mugs', badge: null, rating: 4.5, reviews: 23, meta: 'Travel mug, insulated', img: 'images/upsa_travel_mug.png' },
  { id: 'ht1', name: 'UPSA Snapback Cap', price: 75, cat: 'Hats', badge: 'New', rating: 4.6, reviews: 41, meta: 'Adjustable fit, 3D embroidery', img: 'images/upsa_snapback_cap.png' },
  { id: 'ht2', name: 'UPSA Embroidered Dad Hat', price: 60, cat: 'Hats', badge: null, rating: 4.8, reviews: 72, meta: 'Unstructured crown, curved brim', img: 'images/upsa_dad_hat.png' },
  { id: 'tb1', name: 'Total Quality Management', price: 110, cat: 'Textbooks', badge: 'Required', rating: 4.7, reviews: 85, meta: 'A Comprehensive Guide to TQM', img: 'images/tqm_book.jpg' },
  { id: 'tb2', name: 'E-Commerce Strategy', price: 125, cat: 'Textbooks', badge: 'New', rating: 4.8, reviews: 42, meta: 'Modern E-Commerce Business Models', img: 'images/ecommerce_book.jpg' },
  { id: 'tb3', name: 'Principles of Marketing', price: 130, cat: 'Textbooks', badge: 'Bestseller', rating: 4.9, reviews: 156, meta: 'Global Edition • Kotler', img: 'images/marketing_book.jpg' },
  { id: 'tb4', name: 'Financial Reporting', price: 140, cat: 'Textbooks', badge: null, rating: 4.6, reviews: 94, meta: 'IFRS Standards & Analysis', img: 'images/financial_reporting_book.jpg' },
  { id: 'tb5', name: 'Principles of Taxation', price: 115, cat: 'Textbooks', badge: null, rating: 4.5, reviews: 67, meta: 'Ghanaian Tax Laws & Practice', img: 'images/taxation_book.jpg' },
  { id: 'tb6', name: 'Managerial Economics', price: 120, cat: 'Textbooks', badge: null, rating: 4.7, reviews: 53, meta: 'Economic Theory for Business', img: 'images/economics_book.jpg' },
  { id: 'tb7', name: 'Environmental Mgt', price: 105, cat: 'Textbooks', badge: null, rating: 4.4, reviews: 38, meta: 'Sustainability in Business', img: 'images/environmental_mgt_book.jpg' },
  { id: 'tb8', name: 'Business Ethics', price: 95, cat: 'Textbooks', badge: null, rating: 4.8, reviews: 72, meta: 'Corporate Governance & Responsibility', img: 'images/ethics_book.jpg' },
  { id: 'el1', name: 'MacBook Pro (Rental)', price: 500, cat: 'Electronics', badge: 'Rental', rating: 4.9, reviews: 12, meta: 'M2 Chip, 8GB RAM, 256GB SSD', rental: true, note: 'Rental price per semester.', img: 'images/macbook_pro.jpg' },
  { id: 'el2', name: 'Dell XPS 13', price: 3500, cat: 'Electronics', badge: 'New', rating: 4.8, reviews: 8, meta: 'Intel i7, 16GB RAM, 512GB SSD', img: 'images/dell_xps.jpg' },
  { id: 'el3', name: 'Scientific Calculator', price: 100, cat: 'Electronics', badge: 'Essential', rating: 4.7, reviews: 145, meta: 'FX-991EX ClassWiz', img: 'images/calculator.jpg' }
];

// ---- State ----
let cart = [];
let orderHistory = [];
let currentCategory = 'all';
let currentStep = 1;
let isLoggedIn = false;

// ---- DOM Elements ----
const loginScreen = document.getElementById('login-screen');
const appContent = document.getElementById('app-content');
const loginBtn = document.getElementById('login-btn');
const loginError = document.getElementById('login-error');
const studentIdInput = document.getElementById('student-id');
const passwordInput = document.getElementById('password');

const featuredGrid = document.getElementById('featured-grid');
const shopGrid = document.getElementById('shop-grid');
const cartCount = document.getElementById('cart-count');
const toast = document.getElementById('toast');
const toastMsg = document.getElementById('toast-msg');

// ---- Initialization ----
document.addEventListener('DOMContentLoaded', () => {
  renderFeatured();
  renderShop();
  updateCartUI();
});

// ---- Login Logic ----
loginBtn.addEventListener('click', () => {
  const id = studentIdInput.value.trim();
  const pass = passwordInput.value.trim();

  // Mock login check
  if (id && pass) {
    isLoggedIn = true;
    loginScreen.classList.add('hidden');
    appContent.classList.remove('hidden');
    showToast("Welcome back, Student!");
  } else {
    loginError.style.display = 'block';
  }
});

function logout() {
  isLoggedIn = false;
  appContent.classList.add('hidden');
  loginScreen.classList.remove('hidden');
  studentIdInput.value = '';
  passwordInput.value = '';
}

// ---- Routing ----
function showPage(pageId) {
  // Hide all pages
  document.querySelectorAll('.section-page').forEach(p => p.classList.add('hidden'));
  // Show target page
  const targetPage = document.getElementById(`page-${pageId}`);
  if (targetPage) targetPage.classList.remove('hidden');
  
  if (pageId === 'history') {
    renderHistory();
  }
  // Update nav links
  document.querySelectorAll('.nav-link').forEach(l => {
    l.classList.toggle('active', l.dataset.page === pageId);
  });

  // Scroll to top
  window.scrollTo(0, 0);

  // Close mobile menu if open
  document.getElementById('mobile-menu').classList.remove('open');
}

function toggleMobileMenu() {
  document.getElementById('mobile-menu').classList.toggle('open');
}

// ---- Rendering ----
function createProductCard(p) {
  const badgeClass = p.badge ? `badge--${p.badge.toLowerCase()}` : '';
  return `
    <div class="product-card">
      <div class="product-card__img-wrap">
        <img src="${p.img}" alt="${p.name}" loading="lazy">
        ${p.badge ? `<span class="product-badge ${badgeClass}">${p.badge}</span>` : ''}
      </div>
      <div class="product-rating">
        <span class="star">★</span> ${p.rating} (${p.reviews})
      </div>
      <h3 class="product-name">${p.name}</h3>
      <p class="product-meta">${p.meta}</p>
      ${p.note ? `<div class="product-rental-note">${p.note}</div>` : ''}
      ${p.warranty ? `<div class="product-warranty">🛡️ ${p.warranty}</div>` : ''}
      <div class="product-card__footer">
        <span class="product-price">GH₵ ${p.price.toFixed(2)}</span>
        <button class="add-btn" onclick="addToCart('${p.id}')">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
        </button>
      </div>
    </div>
  `;
}

function renderFeatured() {
  const featured = products.slice(0, 4);
  featuredGrid.innerHTML = featured.map(p => createProductCard(p)).join('');
}

function renderShop() {
  const search = document.getElementById('shop-search').value.toLowerCase();
  const sort = document.getElementById('shop-sort').value;
  
  let filtered = products.filter(p => {
    const matchesSearch = p.name.toLowerCase().includes(search) || p.cat.toLowerCase().includes(search);
    const matchesCat = currentCategory === 'all' || p.cat === currentCategory;
    return matchesSearch && matchesCat;
  });

  if (sort === 'price-low') filtered.sort((a, b) => a.price - b.price);
  if (sort === 'price-high') filtered.sort((a, b) => b.price - a.price);
  if (sort === 'rating') filtered.sort((a, b) => b.rating - a.rating);

  shopGrid.innerHTML = filtered.map(p => createProductCard(p)).join('');
  document.getElementById('shop-empty').classList.toggle('hidden', filtered.length > 0);
}

function filterProducts() {
  renderShop();
}

function setCategory(cat) {
  currentCategory = cat;
  document.querySelectorAll('.chip').forEach(c => {
    c.classList.toggle('active', c.dataset.cat === cat);
  });
  renderShop();
}

// ---- Cart Logic ----
function addToCart(id) {
  const product = products.find(p => p.id === id);
  const existing = cart.find(item => item.id === id);
  
  if (existing) {
    existing.qty++;
  } else {
    cart.push({ ...product, qty: 1 });
  }
  
  updateCartUI();
  showToast(`${product.name} added to bag`);
}

function updateCartUI() {
  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
  cartCount.textContent = totalItems;
  
  renderCartPage();
}

function showToast(msg) {
  toastMsg.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3000);
}

function renderCartPage() {
  const emptyView = document.getElementById('cart-empty-view');
  const fullView = document.getElementById('cart-full-view');
  const itemsList = document.getElementById('cart-items-list');
  
  if (cart.length === 0) {
    emptyView.classList.remove('hidden');
    fullView.classList.add('hidden');
    return;
  }

  emptyView.classList.add('hidden');
  fullView.classList.remove('hidden');

  itemsList.innerHTML = cart.map(item => `
    <div class="cart-item">
      <div class="cart-item__img">
        <img src="${item.img}" alt="${item.name}">
      </div>
      <div class="cart-item__info">
        <h3 class="cart-item__name">${item.name}</h3>
        <p class="cart-item__cat">${item.cat}</p>
        <p class="cart-item__price">GH₵ ${item.price.toFixed(2)}</p>
      </div>
      <div class="cart-item__actions">
        <div class="qty-ctrl">
          <button class="qty-btn" onclick="changeQty('${item.id}', -1)">-</button>
          <span class="qty-num">${item.qty}</span>
          <button class="qty-btn" onclick="changeQty('${item.id}', 1)">+</button>
        </div>
        <button class="remove-btn" onclick="removeFromCart('${item.id}')">Remove</button>
      </div>
    </div>
  `).join('');

  updateSummary();
}

function changeQty(id, delta) {
  const item = cart.find(i => i.id === id);
  if (item) {
    item.qty += delta;
    if (item.qty < 1) removeFromCart(id);
    else updateCartUI();
  }
}

function removeFromCart(id) {
  cart = cart.filter(i => i.id !== id);
  updateCartUI();
}

function updateSummary() {
  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  const discount = subtotal * 0.05;
  const total = subtotal - discount;

  document.getElementById('summary-subtotal').textContent = `GH₵ ${subtotal.toFixed(2)}`;
  document.getElementById('summary-discount').textContent = `- GH₵ ${discount.toFixed(2)}`;
  document.getElementById('summary-total').textContent = `GH₵ ${total.toFixed(2)}`;
}

// ---- Checkout Logic ----
function openCheckout() {
  currentStep = 1;
  document.getElementById('checkout-modal').classList.remove('hidden');
  renderCheckoutStep();
}

function closeCheckout() {
  document.getElementById('checkout-modal').classList.add('hidden');
}

function renderCheckoutStep() {
  const body = document.getElementById('modal-body');
  const title = document.getElementById('modal-title');
  const stepLabel = document.getElementById('modal-step-label');
  const total = cart.reduce((sum, item) => sum + (item.price * item.qty), 0) * 0.95;

  if (currentStep === 1) {
    title.textContent = "Shipping Details";
    stepLabel.textContent = "Step 1 of 3: Shipping";
    body.innerHTML = `
      <div class="info-note">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
        We deliver to all hostels on campus and nearby private residences.
      </div>
      <div class="form-group">
        <span class="form-icon">👤</span>
        <input type="text" class="form-input" placeholder="Full Name" value="Ignatius Arthur">
      </div>
      <div class="form-group">
        <span class="form-icon">🏢</span>
        <input type="text" class="form-input" placeholder="Hostel Name / Room Number" placeholder="e.g. Mandela Hall, Room 402">
      </div>
      <div class="form-group">
        <span class="form-icon">📞</span>
        <input type="tel" class="form-input" placeholder="Phone Number" value="+233 ">
      </div>
      <button class="btn btn--primary btn--full" onclick="nextStep()">Continue to Payment</button>
    `;
  } else if (currentStep === 2) {
    title.textContent = "Payment Method";
    stepLabel.textContent = "Step 2 of 3: Payment";
    body.innerHTML = `
      <div class="method-grid">
        <div class="method-btn active" onclick="setPaymentMethod('momo')">
          <span class="method-icon">📱</span>
          <span>Mobile Money</span>
        </div>
        <div class="method-btn" id="card-method-btn" onclick="setPaymentMethod('card')">
          <span class="method-icon">💳</span>
          <span>Credit Card</span>
        </div>
      </div>

      <div id="momo-fields">
        <div class="provider-label">Select Provider</div>
        <div class="provider-grid">
          <button class="provider-btn mtn active" onclick="setMomoProvider('mtn')">MTN</button>
          <button class="provider-btn telecel" onclick="setMomoProvider('telecel')">Telecel</button>
          <button class="provider-btn airteltigo" onclick="setMomoProvider('airteltigo')">AirtelTigo</button>
        </div>
        <div class="momo-label">MoMo Number</div>
        <div class="form-group">
          <span class="form-icon">📱</span>
          <input type="tel" class="form-input" placeholder="024 XXX XXXX">
        </div>
      </div>

      <div id="card-fields" class="hidden">
        <div class="form-group">
          <span class="form-icon">💳</span>
          <input type="text" id="card-number" class="form-input" placeholder="Card Number (XXXX XXXX XXXX XXXX)" maxlength="19">
        </div>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
          <div class="form-group">
            <span class="form-icon">📅</span>
            <input type="text" id="card-expiry" class="form-input" placeholder="MM/YY" maxlength="5">
          </div>
          <div class="form-group">
            <span class="form-icon">🔒</span>
            <input type="password" id="card-cvv" class="form-input" placeholder="CVV" maxlength="3">
          </div>
        </div>
      </div>

      <div class="pay-total">
        <span class="pay-total-label">Total to Pay:</span>
        <span class="pay-total-amount">GH₵ ${total.toFixed(2)}</span>
      </div>
      <button class="btn btn--primary btn--full" onclick="processPayment()">Pay Now</button>
    `;
    
    // Add card formatting logic
    setTimeout(() => {
      const cardInput = document.getElementById('card-number');
      if (cardInput) {
        cardInput.addEventListener('input', (e) => {
          let v = e.target.value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
          let matches = v.match(/\d{4,16}/g);
          let match = matches && matches[0] || '';
          let parts = [];
          for (let i=0, len=match.length; i<len; i+=4) {
            parts.push(match.substring(i, i+4));
          }
          if (parts.length) e.target.value = parts.join(' ');
          else e.target.value = v;
        });
      }
    }, 0);

  } else if (currentStep === 3) {
    title.textContent = "Processing...";
    stepLabel.textContent = "Please wait";
    body.innerHTML = `
      <div class="processing-wrap">
        <div class="processing-ring-wrap">
          <div class="spinner-ring"></div>
          <div class="processing-icon">🔒</div>
        </div>
        <h3>Securing Transaction</h3>
        <p>We're connecting to your payment provider to authorize the GH₵ ${total.toFixed(2)} payment. Please do not close this window.</p>
        <div class="secure-badge">
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/></svg>
          Bank-Grade Encryption
        </div>
      </div>
    `;
    
    // Simulate processing
    setTimeout(() => {
      currentStep = 4;
      renderCheckoutStep();
    }, 3000);
  } else if (currentStep === 4) {
    title.textContent = "Order Confirmed";
    stepLabel.textContent = "Success";
    const orderId = "UPSA-" + Math.random().toString(36).substr(2, 9).toUpperCase();
    
    // Save to history
    orderHistory.unshift({
      id: orderId,
      date: new Date().toLocaleString(),
      items: [...cart],
      total: total
    });

    body.innerHTML = `
      <div class="success-wrap">
        <div class="success-icon">✓</div>
        <h3>Thank You!</h3>
        <p>Your order has been placed successfully and is being prepared for delivery.</p>
        
        <div class="order-box">
          <div class="order-box__row">
            <div>
              <div class="order-box__key">Order ID</div>
              <div class="order-box__id">${orderId}</div>
            </div>
            <div style="text-align: right;">
              <div class="order-box__key">Amount Paid</div>
              <div class="order-box__amount">GH₵ ${total.toFixed(2)}</div>
            </div>
          </div>
          <div class="order-box__note">
            A confirmation email has been sent to your student address. You will receive a call when our delivery agent is at your hostel.
          </div>
        </div>

        <button class="btn btn--primary btn--full" onclick="finishCheckout()">Back to Store</button>
      </div>
    `;
    cart = [];
    updateCartUI();
  }
}

function nextStep() {
  currentStep++;
  renderCheckoutStep();
}

function setPaymentMethod(method) {
  document.querySelectorAll('.method-btn').forEach(b => b.classList.remove('active'));
  if (method === 'momo') {
    document.querySelector('.method-btn:first-child').classList.add('active');
    document.getElementById('momo-fields').classList.remove('hidden');
    document.getElementById('card-fields').classList.add('hidden');
  } else {
    document.getElementById('card-method-btn').classList.add('active');
    document.getElementById('momo-fields').classList.add('hidden');
    document.getElementById('card-fields').classList.remove('hidden');
  }
}

function setMomoProvider(provider) {
  document.querySelectorAll('.provider-btn').forEach(b => b.classList.remove('active'));
  document.querySelector(`.provider-btn.${provider}`).classList.add('active');
}

function processPayment() {
  currentStep = 3;
  renderCheckoutStep();
}

function finishCheckout() {
  closeCheckout();
  showPage('home');
}

function renderHistory() {
  const historyList = document.getElementById('history-list');
  if (!historyList) return;

  if (orderHistory.length === 0) {
    historyList.innerHTML = `
      <div class="empty-state">
        <div class="empty-icon">📜</div>
        <h3>No Purchase History</h3>
        <p>You haven't made any purchases yet. Start shopping to see your history here!</p>
        <button class="btn btn--primary" onclick="showPage('shop')">Go to Shop</button>
      </div>
    `;
    return;
  }

  historyList.innerHTML = orderHistory.map(order => `
    <div class="history-card">
      <div class="history-card__header">
        <div>
          <div class="history-id">${order.id}</div>
          <div class="history-date">${order.date}</div>
        </div>
        <div class="history-total">GH₵ ${order.total.toFixed(2)}</div>
      </div>
      <div class="history-items">
        ${order.items.map(item => `
          <div class="history-item">
            <span>${item.name} x ${item.qty}</span>
            <span>GH₵ ${(item.price * item.qty).toFixed(2)}</span>
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');
}
