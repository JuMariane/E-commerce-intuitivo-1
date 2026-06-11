// --- GLOBAL SELECTIONS STATE ---
const selections = {
  iphone: {
    model: 'iPhone 17',
    basePrice: 6999,
    color: 'Titânio Deserto',
    storage: '128GB',
    storageOffset: 0,
    img: 'https://images.unsplash.com/photo-1696446701796-da61225697cc?q=80&w=800&auto=format&fit=crop',
    gift: 'Capa Protetora MagSafe Slim Clear + Película de Privacidade em Cerâmica Aplicada'
  },
  ipad: {
    model: 'iPad Air M2',
    basePrice: 5499,
    color: 'Cinza Espacial',
    storage: '128GB',
    storageOffset: 0,
    img: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=800&auto=format&fit=crop',
    gift: 'Capa Magnética Smart Folio com imagem inteligente + Película Protetora Fosca'
  },
  macbook: {
    model: 'MacBook Air M3',
    basePrice: 10999,
    color: 'Preto Espacial',
    screenSize: '13.6"',
    screenSizeOffset: 0,
    storage: '256GB',
    storageOffset: 0,
    img: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=800&auto=format&fit=crop',
    gift: 'Hub Adaptador USB-C Multiportas de Alumínio (HDMI, USB 3.0, SD/MicroSD)'
  },
  watch: {
    model: 'Apple Watch Series 9',
    basePrice: 3599,
    color: 'Estelar',
    caseSize: '41mm',
    caseSizeOffset: 0,
    strap: 'Pulseira Esportiva',
    img: 'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?q=80&w=800&auto=format&fit=crop',
    gift: 'Pulseira Milanese Metálica Extra de Aço Inoxidável com fecho magnético'
  },
  airpods: {
    model: 'AirPods 3',
    basePrice: 1299,
    color: 'Branco Clássico',
    img: 'https://images.unsplash.com/photo-1588449668365-d15e397f6787?q=80&w=800&auto=format&fit=crop',
    gift: 'Estojo Protetor de Silicone Hipoalergênico com gancho de fixação'
  }
};

// --- GLOBAL HELPER FUNCTIONS (Exposed on window) ---

window.abrirModal = function(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
};

window.fecharModal = function(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
};

window.changeModalImage = function(category, newSrc) {
  const imgEl = document.getElementById('img-destaque-' + category);
  if (!imgEl || imgEl.getAttribute('src') === newSrc) return;
  
  imgEl.classList.add('fade-out');
  setTimeout(() => {
    imgEl.src = newSrc;
    imgEl.onload = () => {
      imgEl.classList.remove('fade-out');
    };
    // fallback
    setTimeout(() => {
      imgEl.classList.remove('fade-out');
    }, 350);
  }, 200);
};

window.selectModel = function(category, modelName, basePrice, imageUrl, buttonEl) {
  const sel = selections[category];
  if (!sel) return;
  
  sel.model = modelName;
  sel.basePrice = basePrice;
  
  // Toggle selected class
  if (buttonEl) {
    const siblings = buttonEl.parentNode.querySelectorAll('.selector-btn');
    siblings.forEach(sibling => sibling.classList.remove('selected'));
    buttonEl.classList.add('selected');
  }
  
  // Change image
  window.changeModalImage(category, imageUrl);
  
  // Special layout adaptations
  if (category === 'watch') {
    updateWatchLayout(modelName);
  }
  
  window.updatePrice(category);
};

window.selectColor = function(category, colorName, buttonEl) {
  const sel = selections[category];
  if (!sel) return;
  
  sel.color = colorName;
  
  // Update label
  const labelEl = document.getElementById('color-label-' + category);
  if (labelEl) {
    labelEl.innerText = colorName;
  }
  
  // Toggle selected class
  if (buttonEl) {
    const siblings = buttonEl.parentNode.querySelectorAll('.color-circle-btn');
    siblings.forEach(sibling => sibling.classList.remove('selected'));
    buttonEl.classList.add('selected');
  }
};

window.selectStorage = function(category, storageValue, priceOffset, buttonEl) {
  const sel = selections[category];
  if (!sel) return;
  
  sel.storage = storageValue;
  sel.storageOffset = priceOffset;
  
  // Toggle selected class
  if (buttonEl) {
    const siblings = buttonEl.parentNode.querySelectorAll('.selector-btn');
    siblings.forEach(sibling => sibling.classList.remove('selected'));
    buttonEl.classList.add('selected');
  }
  
  window.updatePrice(category);
};

window.selectScreenSize = function(category, sizeValue, priceOffset, buttonEl) {
  const sel = selections[category];
  if (!sel) return;
  
  sel.screenSize = sizeValue;
  sel.screenSizeOffset = priceOffset;
  
  // Toggle selected class
  if (buttonEl) {
    const siblings = buttonEl.parentNode.querySelectorAll('.selector-btn');
    siblings.forEach(sibling => sibling.classList.remove('selected'));
    buttonEl.classList.add('selected');
  }
  
  window.updatePrice(category);
};

window.selectCaseSize = function(category, sizeValue, priceOffset, buttonEl) {
  const sel = selections[category];
  if (!sel) return;
  
  sel.caseSize = sizeValue;
  sel.caseSizeOffset = priceOffset;
  
  // Toggle selected class
  if (buttonEl) {
    const siblings = buttonEl.parentNode.querySelectorAll('.selector-btn');
    siblings.forEach(sibling => sibling.classList.remove('selected'));
    buttonEl.classList.add('selected');
  }
  
  window.updatePrice(category);
};

window.selectStrap = function(category, strapValue, buttonEl) {
  const sel = selections[category];
  if (!sel) return;
  
  sel.strap = strapValue;
  
  // Toggle selected class
  if (buttonEl) {
    const siblings = buttonEl.parentNode.querySelectorAll('.selector-btn');
    siblings.forEach(sibling => sibling.classList.remove('selected'));
    buttonEl.classList.add('selected');
  }
};

window.updatePrice = function(category) {
  const sel = selections[category];
  if (!sel) return;
  
  const price = sel.basePrice + (sel.storageOffset || 0) + (sel.screenSizeOffset || 0) + (sel.caseSizeOffset || 0);
  const originalPrice = price * 1.15;
  
  const currEl = document.getElementById('price-curr-' + category);
  const origEl = document.getElementById('price-orig-' + category);
  
  if (currEl) {
    currEl.innerText = price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  }
  if (origEl) {
    origEl.innerText = originalPrice.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  }
};

window.checkoutWhatsApp = function(category) {
  const sel = selections[category];
  if (!sel) return;
  
  const phoneNumber = '5519991101326';
  
  const categoryTitles = {
    iphone: 'Linha iPhone 17',
    ipad: 'Linha iPad Pro',
    macbook: 'Linha MacBook Pro',
    watch: 'Linha Apple Watch',
    airpods: 'Linha AirPods'
  };
  
  const title = categoryTitles[category] || category;
  
  let message = `Olá, Barbieri Tech! Gostaria de encomendar um item da categoria:\n`;
  message += `*${title}*\n\n`;
  
  if (sel.model) message += `- *Modelo:* ${sel.model}\n`;
  
  if (category === 'macbook' && sel.screenSize) {
    message += `- *Tamanho de Tela:* ${sel.screenSize}\n`;
  }
  
  if (category === 'watch') {
    if (sel.caseSize) message += `- *Tamanho da Caixa:* ${sel.caseSize}\n`;
    if (sel.model === 'Apple Watch Ultra 2' && sel.strap) {
      message += `- *Pulseira:* ${sel.strap}\n`;
    }
  }
  
  if (sel.color) message += `- *Cor:* ${sel.color}\n`;
  
  if (category !== 'airpods' && sel.storage) {
    message += `- *Armazenamento:* ${sel.storage}\n`;
  }
  
  const finalPrice = sel.basePrice + (sel.storageOffset || 0) + (sel.screenSizeOffset || 0) + (sel.caseSizeOffset || 0);
  const formattedPrice = finalPrice.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  
  message += `\n*Preço:* ${formattedPrice} à vista no Pix\n`;
  message += `*Frete:* Grátis para todo o Brasil 🇧🇷 (Cortesia)\n`;
  message += `*Brinde Incluso:* ${sel.gift}\n\n`;
  message += `Por favor, verifique a disponibilidade e me envie o link de pagamento.`;
  
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  
  window.open(whatsappUrl, '_blank');
  window.fecharModal('modal-' + category);
};

// --- PRIVATE WATCH LAYOUT UPDATES ---
function updateWatchLayout(modelName) {
  const case41 = document.getElementById('btn-case-41');
  const case45 = document.getElementById('btn-case-45');
  const case49 = document.getElementById('btn-case-49');
  const strapGroup = document.getElementById('watch-strap-group');
  
  if (modelName === 'Apple Watch Ultra 2') {
    if (case41) case41.style.display = 'none';
    if (case45) case45.style.display = 'none';
    if (case49) {
      case49.style.display = 'inline-block';
      selections.watch.caseSize = '49mm';
      selections.watch.caseSizeOffset = 0;
      const siblings = case49.parentNode.querySelectorAll('.selector-btn');
      siblings.forEach(sibling => sibling.classList.remove('selected'));
      case49.classList.add('selected');
    }
    if (strapGroup) strapGroup.style.display = 'flex';
  } else {
    if (case41) {
      case41.style.display = 'inline-block';
      selections.watch.caseSize = '41mm';
      selections.watch.caseSizeOffset = 0;
      const siblings = case41.parentNode.querySelectorAll('.selector-btn');
      siblings.forEach(sibling => sibling.classList.remove('selected'));
      case41.classList.add('selected');
    }
    if (case45) case45.style.display = 'inline-block';
    if (case49) case49.style.display = 'none';
    if (strapGroup) strapGroup.style.display = 'none';
  }
}

// --- DOM CONTENT LOADED INITIALIZATIONS ---
document.addEventListener('DOMContentLoaded', () => {
  
  // --- HEADER SCROLL EFFECT ---
  const header = document.getElementById('main-header');
  if (header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });
  }

  // --- SCROLL ZOOM EFFECT ON HERO VIDEO ---
  const videoBg = document.getElementById('hero-bg-video');
  if (videoBg) {
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY;
      const scale = 1.05 + (scrollY / 1800);
      videoBg.style.transform = `scale(${Math.min(scale, 1.35)})`;
    });
  }

  // --- DYNAMIC OPENING HOURS BADGE ---
  function updateBusinessStatus() {
    const statusBadge = document.getElementById('status-badge');
    if (!statusBadge) return;

    const now = new Date();
    const day = now.getDay(); // 0 = Sunday, 1 = Monday, 2 = Tuesday, ..., 6 = Saturday
    const hour = now.getHours();
    const minutes = now.getMinutes();
    
    const currentTimeInMinutes = hour * 60 + minutes;
    const openTimeInMinutes = 9 * 60; // 09:00
    const closeTimeInMinutes = 18 * 60; // 18:00

    let isOpen = false;
    let statusText = '';

    if (day >= 2 && day <= 6) { // Terça a Sábado
      if (currentTimeInMinutes >= openTimeInMinutes && currentTimeInMinutes < closeTimeInMinutes) {
        isOpen = true;
      }
    }

    if (isOpen) {
      statusText = 'Aberto Agora';
      statusBadge.style.color = 'var(--success)';
      statusBadge.style.borderColor = 'rgba(48, 209, 88, 0.2)';
      statusBadge.style.backgroundColor = 'rgba(48, 209, 88, 0.1)';
    } else {
      statusBadge.style.color = 'var(--text-secondary)';
      statusBadge.style.borderColor = 'var(--border-color)';
      statusBadge.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';

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

  updateBusinessStatus();
  setInterval(updateBusinessStatus, 60000);

  // --- MODAL CLICK OUTSIDE CLOSURE ---
  document.querySelectorAll('.modal-overlay').forEach(overlay => {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) {
        window.fecharModal(overlay.id);
      }
    });
  });

  // --- CART DRAWER TOGGLE ---
  const btnCartToggle = document.getElementById('btn-cart-toggle');
  const btnCartClose = document.getElementById('btn-cart-close');
  const cartOverlay = document.getElementById('cart-bg-overlay');
  const cartPanel = document.getElementById('cart-panel');
  
  if (btnCartToggle && cartPanel && cartOverlay) {
    function toggleCart() {
      cartPanel.classList.toggle('active');
      cartOverlay.classList.toggle('active');
    }
    btnCartToggle.addEventListener('click', toggleCart);
    if (btnCartClose) btnCartClose.addEventListener('click', toggleCart);
    cartOverlay.addEventListener('click', toggleCart);
  }

  const btnCartCheckout = document.getElementById('btn-cart-checkout');
  if (btnCartCheckout) {
    btnCartCheckout.addEventListener('click', () => {
      const phoneNumber = '5519991101326';
      const message = `Olá, Barbieri Tech! Gostaria de falar com um atendente sobre os produtos da loja.`;
      const encodedMessage = encodeURIComponent(message);
      window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
    });
  }
});
