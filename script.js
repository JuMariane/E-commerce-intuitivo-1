document.addEventListener('DOMContentLoaded', () => {
  
  // --- HEADER SCROLL EFFECT ---
  const header = document.getElementById('main-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // --- DYNAMIC OPENING HOURS BADGE ---
  function updateBusinessStatus() {
    const statusBadge = document.getElementById('status-badge');
    if (!statusBadge) return;

    const now = new Date();
    const day = now.getDay(); // 0 = Sunday, 1 = Monday, 2 = Tuesday, ..., 6 = Saturday
    const hour = now.getHours();
    const minutes = now.getMinutes();
    
    // Convert time to minutes for easier comparison (9:00 = 540 min, 18:00 = 1080 min)
    const currentTimeInMinutes = hour * 60 + minutes;
    const openTimeInMinutes = 9 * 60; // 09:00
    const closeTimeInMinutes = 18 * 60; // 18:00

    let isOpen = false;
    let statusText = '';
    let badgeClass = '';

    // Business days: Tuesday (2) to Saturday (6)
    if (day >= 2 && day <= 6) {
      if (currentTimeInMinutes >= openTimeInMinutes && currentTimeInMinutes < closeTimeInMinutes) {
        isOpen = true;
      }
    }

    if (isOpen) {
      statusText = 'Aberto Agora';
      badgeClass = 'badge-success';
      statusBadge.style.color = 'var(--success)';
      statusBadge.style.borderColor = 'rgba(48, 209, 88, 0.2)';
      statusBadge.style.backgroundColor = 'rgba(48, 209, 88, 0.1)';
    } else {
      badgeClass = 'badge-shipping'; // Cyan/Gray badge
      statusBadge.style.color = 'var(--text-secondary)';
      statusBadge.style.borderColor = 'var(--border-color)';
      statusBadge.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';

      // Define next opening text
      if (day === 6 && currentTimeInMinutes >= closeTimeInMinutes || day === 0 || day === 1) {
        statusText = 'Fechado • Abre Terça às 09:00';
      } else if (currentTimeInMinutes < openTimeInMinutes) {
        statusText = 'Fechado • Abre Hoje às 09:00';
      } else {
        statusText = 'Fechado • Abre Amanhã às 09:00';
      }
    }

    statusBadge.innerHTML = `<span class="pulse-dot active" style="color: ${isOpen ? 'var(--success)' : 'var(--text-secondary)'}"></span> ${statusText}`;
  }

  // Update status immediately and then every minute
  updateBusinessStatus();
  setInterval(updateBusinessStatus, 60000);

  // --- SHOPPING CART LOGIC ---
  let cart = [];

  // Load cart from LocalStorage if exists
  if (localStorage.getItem('barbieri_tech_cart')) {
    try {
      cart = JSON.parse(localStorage.getItem('barbieri_tech_cart'));
    } catch (e) {
      cart = [];
    }
  }

  const btnCartToggle = document.getElementById('btn-cart-toggle');
  const btnCartClose = document.getElementById('btn-cart-close');
  const cartOverlay = document.getElementById('cart-bg-overlay');
  const cartPanel = document.getElementById('cart-panel');
  const cartCounter = document.getElementById('cart-counter');
  const cartList = document.getElementById('cart-list');
  const cartSubtotal = document.getElementById('cart-subtotal');
  const cartTotalValue = document.getElementById('cart-total-value');
  const btnCartCheckout = document.getElementById('btn-cart-checkout');

  // Toggle Cart Drawer
  function toggleCart() {
    cartPanel.classList.toggle('active');
    cartOverlay.classList.toggle('active');
  }

  btnCartToggle.addEventListener('click', toggleCart);
  btnCartClose.addEventListener('click', toggleCart);
  cartOverlay.addEventListener('click', toggleCart);

  // Save Cart to LocalStorage
  function saveCart() {
    localStorage.setItem('barbieri_tech_cart', JSON.stringify(cart));
    updateCartUI();
  }

  // Update Cart UI
  function updateCartUI() {
    // 1. Update counter bubble
    const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
    cartCounter.innerText = totalItems;
    if (totalItems > 0) {
      cartCounter.classList.add('active');
    } else {
      cartCounter.classList.remove('active');
    }

    // 2. Render list items
    if (cart.length === 0) {
      cartList.innerHTML = `
        <div class="cart-empty-message">
          <i class="fas fa-shopping-basket cart-empty-icon"></i>
          <p>Seu carrinho está vazio.</p>
          <p style="font-size: 0.85rem; margin-top: 0.5rem; color: var(--text-muted)">Adicione produtos para finalizar seu pedido.</p>
        </div>
      `;
      cartSubtotal.innerText = 'R$ 0,00';
      cartTotalValue.innerText = 'R$ 0,00';
      btnCartCheckout.disabled = true;
      btnCartCheckout.style.opacity = '0.5';
      btnCartCheckout.style.cursor = 'not-allowed';
      return;
    }

    btnCartCheckout.disabled = false;
    btnCartCheckout.style.opacity = '1';
    btnCartCheckout.style.cursor = 'pointer';

    cartList.innerHTML = '';
    let subtotal = 0;

    cart.forEach(item => {
      const itemTotal = item.price * item.qty;
      subtotal += itemTotal;

      const itemEl = document.createElement('div');
      itemEl.className = 'cart-item';
      itemEl.innerHTML = `
        <div class="cart-item-img-box">
          <img src="${item.img}" alt="${item.name}">
        </div>
        <div class="cart-item-details">
          <div>
            <h4 class="cart-item-title">${item.name}</h4>
            <div class="cart-item-price">R$ ${item.price.toFixed(2).replace('.', ',')}</div>
          </div>
          <div class="cart-item-actions">
            <div class="quantity-control">
              <button class="qty-btn dec-qty" data-id="${item.id}">-</button>
              <span class="qty-val">${item.qty}</span>
              <button class="qty-btn inc-qty" data-id="${item.id}">+</button>
            </div>
            <button class="remove-item-btn" data-id="${item.id}">
              <i class="far fa-trash-alt"></i> Remover
            </button>
          </div>
        </div>
      `;
      cartList.appendChild(itemEl);
    });

    // Format currency
    const formattedSubtotal = 'R$ ' + subtotal.toFixed(2).replace('.', ',');
    cartSubtotal.innerText = formattedSubtotal;
    cartTotalValue.innerText = formattedSubtotal; // Free shipping so total == subtotal

    // Add event listeners to newly rendered items
    document.querySelectorAll('.dec-qty').forEach(btn => {
      btn.addEventListener('click', (e) => adjustQty(e.target.dataset.id, -1));
    });
    document.querySelectorAll('.inc-qty').forEach(btn => {
      btn.addEventListener('click', (e) => adjustQty(e.target.dataset.id, 1));
    });
    document.querySelectorAll('.remove-item-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = e.target.closest('.remove-item-btn').dataset.id;
        removeItem(id);
      });
    });
  }

  // Add Item to Cart
  function addToCart(id, name, price, img) {
    const existingItem = cart.find(item => item.id === id);
    if (existingItem) {
      existingItem.qty += 1;
    } else {
      cart.push({
        id,
        name,
        price: parseFloat(price),
        img,
        qty: 1
      });
    }
    saveCart();
    // Auto-open cart for feedback
    if (!cartPanel.classList.contains('active')) {
      toggleCart();
    }
  }

  // Adjust Quantity
  function adjustQty(id, change) {
    const item = cart.find(item => item.id === id);
    if (!item) return;

    item.qty += change;
    if (item.qty <= 0) {
      removeItem(id);
    } else {
      saveCart();
    }
  }

  // Remove Item
  function removeItem(id) {
    cart = cart.filter(item => item.id !== id);
    saveCart();
  }

  // Register Catalog Add to Cart Buttons
  document.querySelectorAll('.add-to-cart-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const targetBtn = e.target.closest('.add-to-cart-btn');
      const id = targetBtn.dataset.id;
      const name = targetBtn.dataset.name;
      const price = targetBtn.dataset.price;
      const img = targetBtn.dataset.img;
      
      addToCart(id, name, price, img);
    });
  });

  // --- WHATSAPP CHECKOUT ---
  btnCartCheckout.addEventListener('click', () => {
    if (cart.length === 0) return;

    const phoneNumber = '5519991101326';
    let message = 'Olá, Barbieri Tech! Gostaria de fazer o seguinte pedido:\n\n';
    
    let total = 0;
    cart.forEach((item, index) => {
      const itemTotal = item.price * item.qty;
      total += itemTotal;
      message += `${index + 1}. *${item.name}* (Qtd: ${item.qty}) - R$ ${item.price.toFixed(2).replace('.', ',')} un.\n`;
    });

    message += `\n*Subtotal:* R$ ${total.toFixed(2).replace('.', ',')}`;
    message += `\n*Frete:* Grátis para todo o Brasil 🇧🇷`;
    message += `\n*Total:* R$ ${total.toFixed(2).replace('.', ',')}`;
    message += `\n\nPor favor, me informe o link para pagamento e prazo de entrega.`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    // Redirect to WhatsApp
    window.open(whatsappUrl, '_blank');
  });

  // Initial draw
  updateCartUI();
});
