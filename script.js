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

  // --- SCROLL ZOOM EFFECT ON HERO VIDEO ---
  const videoBg = document.getElementById('hero-bg-video');
  window.addEventListener('scroll', () => {
    if (videoBg) {
      const scrollY = window.scrollY;
      // Scale from 1.05 up to 1.35 based on scrolling
      const scale = 1.05 + (scrollY / 1800);
      videoBg.style.transform = `scale(${Math.min(scale, 1.35)})`;
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
    
    const currentTimeInMinutes = hour * 60 + minutes;
    const openTimeInMinutes = 9 * 60; // 09:00
    const closeTimeInMinutes = 18 * 60; // 18:00

    let isOpen = false;
    let statusText = '';

    if (day >= 2 && day <= 6) {
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

  // --- PRODUCTS DATABASE ---
  const PRODUCTS = [
    {
      id: "iphone-17-pro-max",
      name: "iPhone 17 Pro Max",
      category: "Celulares",
      badge: "ÚLTIMO LANÇAMENTO",
      desc: "O pináculo da engenharia móvel. Acabamento ultra-resistente em titânio, chip A19 Pro Neural Engine e a maior tela já vista em um iPhone.",
      basePrice: 9499.00,
      originalPrice: 10999.00,
      img: "assets/iphone.png",
      specs: {
        "Processador": "A19 Pro Neural Core",
        "Câmera": "Tripla Ultra-Sensing (48MP + 48MP + 48MP)",
        "Tela": "6.9 polegadas Super Retina XDR Tandem",
        "Material": "Titânio Aeroespacial"
      },
      models: ["Plus", "Pro", "Pro Max"],
      colors: [
        { name: "Titânio Deserto", hex: "#c2b29f" },
        { name: "Titânio Concreto", hex: "#8c8d90" },
        { name: "Titânio Preto", hex: "#232426" },
        { name: "Titânio Branco", hex: "#f2f1ed" }
      ],
      storage: ["128GB", "256GB", "512GB", "1TB"],
      whatsInBox: [
        "iPhone 17 Pro Max com iOS 19",
        "Cabo USB-C para USB-C Premium (1m)",
        "Ferramenta de Ejeção de Chip",
        "Manuais de Instrução"
      ],
      gift: "Capa Protetora MagSafe Slim Clear + Película de Privacidade em Cerâmica Aplicada"
    },
    {
      id: "ipad-pro-m4",
      name: "iPad Pro M4",
      category: "iPads",
      badge: "O MAIS VENDIDO",
      desc: "Fininho. Desempenho inimaginável do chip Apple M4 com aceleração gráfica e tela OLED de brilho inacreditável.",
      basePrice: 7499.00,
      originalPrice: 8999.00,
      img: "assets/iphone.png", // Reusing the high-quality phone image styled nicely
      specs: {
        "Processador": "Apple M4 de 9 núcleos",
        "Tela": "11\" ou 13\" Tandem OLED Liquid Retina",
        "Gráficos": "GPU de 10 núcleos com Ray Tracing"
      },
      models: ["iPad Air", "iPad Pro M4"],
      screenSizes: ["11\"", "13\""],
      colors: [
        { name: "Cinza Espacial", hex: "#4b4c4e" },
        { name: "Estelar", hex: "#dfdcd4" },
        { name: "Prata", hex: "#e3e4e5" }
      ],
      storage: ["128GB", "256GB", "512GB", "1TB"],
      whatsInBox: [
        "iPad com iPadOS",
        "Cabo de carregamento USB-C (1m)",
        "Carregador de Parede USB-C Turbo de 20W",
        "Manuais"
      ],
      gift: "Capa Magnética Smart Folio com fechamento inteligente + Suporte Stylus"
    },
    {
      id: "macbook-pro-m4",
      name: "MacBook Pro M4",
      category: "MacBooks",
      badge: "MÁXIMO PODER",
      desc: "Superpotente. Bateria projetada para durar o dia todo e velocidade insuperável do processador de última geração para profissionais exigentes.",
      basePrice: 11999.00,
      originalPrice: 13999.00,
      img: "assets/airpods.png", // Reusing standard catalog imagery styled cleanly
      specs: {
        "Processador": "Apple M4 Pro ou Max",
        "Memória": "Até 36GB de memória unificada",
        "Bateria": "Até 22 horas de reprodução de vídeo"
      },
      models: ["MacBook Air M3", "MacBook Pro M4"],
      screenSizes: ["13\"", "15\""],
      colors: [
        { name: "Preto Espacial", hex: "#1d1e22" },
        { name: "Prata", hex: "#e3e4e5" }
      ],
      storage: ["256GB", "512GB", "1TB", "2TB"],
      whatsInBox: [
        "MacBook Pro",
        "Carregador de tomada de alta potência 70W/96W USB-C",
        "Cabo USB-C para MagSafe 3 Trançado (2m)",
        "Manuais"
      ],
      gift: "Hub Adaptador USB-C Multiportas de Alumínio (HDMI, USB 3.0, MicroSD/SD)"
    },
    {
      id: "apple-watch-ultra-2",
      name: "Apple Watch Ultra 2",
      category: "Smartwatches",
      badge: "ESPORTES EXTREMOS",
      desc: "A caixa de titânio de 49mm une leveza e resistência com a tela Retina Sempre Ativa mais brilhante da história da Apple.",
      basePrice: 5999.00,
      originalPrice: 6999.00,
      img: "assets/smartwatch.png",
      specs: {
        "Caixa": "Titânio Aeroespacial de 49mm",
        "Autonomia": "Até 36 horas em uso normal (72h no modo economia)",
        "Sensores": "GPS de dupla frequência, Sensor de Profundidade e Temperatura da Água"
      },
      models: ["Series 9", "Ultra 2"],
      caseSizes: ["41mm", "45mm", "49mm"],
      strapTypes: ["Pulseira Oceano", "Pulseira Trail", "Pulseira Loop Alpina"],
      colors: [
        { name: "Titânio Natural", hex: "#c2b29f" },
        { name: "Titânio Preto", hex: "#232426" },
        { name: "Azul Oceânico", hex: "#1c2e4a" }
      ],
      whatsInBox: [
        "Caixa de Titânio do Apple Watch Ultra",
        "Pulseira Premium Selecionada",
        "Carregador Magnético Rápido USB-C trançado",
        "Manuais"
      ],
      gift: "Pulseira Loop Milanese Metálica Extra com Fecho Magnético em Aço Inox"
    },
    {
      id: "airpods-max-pro",
      name: "AirPods Max Pro",
      category: "Fones de Ouvido",
      badge: "ÁUDIO LUXURY",
      desc: "Áudio de altíssima fidelidade com Cancelamento Ativo de Ruído de nível profissional e Modo Ambiente inteligente.",
      basePrice: 1899.00,
      originalPrice: 2499.00,
      img: "assets/airpods.png",
      specs: {
        "Drivers": "Dinâmicos projetados pela Apple",
        "Cancelamento": "Ativo de Ruído com Áudio Espacial Dinâmico",
        "Conectores": "Chip H1 em cada fone para áudio computacional"
      },
      models: ["AirPods Max Standard", "AirPods Max Pro Edition"],
      colors: [
        { name: "Preto Espacial", hex: "#232426" },
        { name: "Prata", hex: "#e3e4e5" },
        { name: "Azul Céu", hex: "#b9cce3" },
        { name: "Verde Menta", hex: "#c1ccc1" }
      ],
      whatsInBox: [
        "AirPods Max",
        "Smart Case Flexível correspondente",
        "Cabo de Lightning para USB-C",
        "Manuais de Instruções"
      ],
      gift: "Estojo de Viagem Rígido em EVA com zíper e proteção contra quedas + Cabo Auxiliar de Áudio"
    },
    {
      id: "smartband-horizon",
      name: "Smartband Horizon",
      category: "Wearables",
      badge: "MELHOR CUSTO",
      desc: "Uma pulseira de fitness inteligente ultra-confortável com tela AMOLED vívida e monitor de sono e batimentos de alta precisão.",
      basePrice: 199.00,
      originalPrice: 299.00,
      img: "assets/smartband.png",
      specs: {
        "Tela": "AMOLED Touchscreen de 1.62\"",
        "Bateria": "Até 14 dias de duração com carregamento magnético",
        "Esportes": "Rastreia mais de 110 modalidades físicas"
      },
      models: ["Horizon Fit Lite", "Horizon Sport Pro"],
      colors: [
        { name: "Preto Obsidiana", hex: "#1c1d21" },
        { name: "Cinza Titanium", hex: "#5a5c61" },
        { name: "Azul Noturno", hex: "#2b4c7e" }
      ],
      whatsInBox: [
        "Smartband Horizon",
        "Pulseira de Silicone Hipoalergênica",
        "Cabo de Carregamento Magnético USB",
        "Manuais do Usuário"
      ],
      gift: "Pulseira de Nylon Respirável Extra com Ajuste em Velcro + Película 3D Protetora de Tela"
    }
  ];

  // --- DYNAMIC RENDERING OF CATALOG ---
  const catalogGrid = document.getElementById('catalog-grid');

  function renderCatalog() {
    if (!catalogGrid) return;
    catalogGrid.innerHTML = '';

    PRODUCTS.forEach(product => {
      const card = document.createElement('div');
      card.className = 'product-card';
      card.id = `prod-${product.id}`;

      // Highlight Flagship and categories
      let badgeHTML = '';
      if (product.badge) {
        if (product.id === 'iphone-17-pro-max') {
          badgeHTML = `<span class="product-card-badge">${product.badge}</span>`;
        } else {
          badgeHTML = `<span class="badge badge-shipping product-badge" style="z-index: 3;">${product.badge}</span>`;
        }
      }

      card.innerHTML = `
        <div class="product-img-container">
          ${badgeHTML}
          <img src="${product.img}" alt="${product.name}" class="product-img">
        </div>
        <div class="product-info">
          <span class="product-category">${product.category}</span>
          <h3 class="product-title">${product.name}</h3>
          <p class="product-desc">${product.desc}</p>
          
          <div class="product-price-row">
            <span class="product-price-label">À vista ou Pix</span>
            <div>
              <span class="product-price original">R$ ${product.originalPrice.toFixed(2).replace('.', ',')}</span>
              <span class="product-price">R$ ${product.basePrice.toFixed(2).replace('.', ',')}</span>
            </div>
          </div>

          <!-- Trust Badges Line -->
          <div class="product-card-trust-lines">
            <div class="trust-line-item">
              <i class="fas fa-shipping-fast"></i> <span>Frete Grátis Nacional</span>
            </div>
            <div class="trust-line-item">
              <i class="fas fa-gift"></i> <span>Brinde Exclusivo Barbieri</span>
            </div>
          </div>

          <button class="btn btn-primary product-btn open-details-btn" data-id="${product.id}">
            <i class="fas fa-cog"></i> Configurar e Comprar
          </button>
        </div>
      `;
      catalogGrid.appendChild(card);
    });

    // Register details button click
    document.querySelectorAll('.open-details-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = e.target.closest('.open-details-btn').dataset.id;
        openProductModal(id);
      });
    });
  }

  // --- DETAIL MODAL SELECTORS & CONFIGURATION LOGIC ---
  let activeProduct = null;
  let configSelection = {
    model: '',
    screenSize: '',
    caseSize: '',
    strapType: '',
    colorName: '',
    storage: ''
  };

  const modalOverlay = document.getElementById('product-modal-overlay');
  const modalContainer = document.getElementById('product-modal-container');
  const btnModalClose = document.getElementById('btn-modal-close');

  const modalImg = document.getElementById('modal-product-img');
  const modalCategory = document.getElementById('modal-product-category');
  const modalTitle = document.getElementById('modal-product-title');
  const modalDesc = document.getElementById('modal-product-desc');
  const modalSpecs = document.getElementById('modal-product-specs');
  const modalBoxItems = document.getElementById('modal-box-items');
  const modalGiftText = document.getElementById('modal-gift-text');
  
  const modalPriceOriginal = document.getElementById('modal-price-original');
  const modalPriceCurrent = document.getElementById('modal-price-current');
  
  const groupModel = document.getElementById('group-model');
  const optionsModel = document.getElementById('options-model');
  
  const groupScreen = document.getElementById('group-screen');
  const optionsScreen = document.getElementById('options-screen');

  const groupCase = document.getElementById('group-case');
  const optionsCase = document.getElementById('options-case');

  const groupStrap = document.getElementById('group-strap');
  const optionsStrap = document.getElementById('options-strap');

  const groupColor = document.getElementById('group-color');
  const optionsColor = document.getElementById('options-color');
  const selectedColorLabel = document.getElementById('selected-color-label');

  const groupStorage = document.getElementById('group-storage');
  const optionsStorage = document.getElementById('options-storage');

  const btnModalCheckout = document.getElementById('btn-modal-checkout');

  // Close modal logic
  function closeModal() {
    modalOverlay.classList.remove('active');
  }

  btnModalClose.addEventListener('click', closeModal);
  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) closeModal();
  });

  // Calculate pricing based on chosen options
  function calculateCurrentPrice() {
    if (!activeProduct) return 0;
    let price = activeProduct.basePrice;

    // Adjust price by model selected
    if (activeProduct.id === "iphone-17-pro-max") {
      if (configSelection.model === "Plus") price = 7499.00;
      else if (configSelection.model === "Pro") price = 8699.00;
      else if (configSelection.model === "Pro Max") price = 9499.00;
    } else if (activeProduct.id === "ipad-pro-m4") {
      if (configSelection.model === "iPad Air") price = 5499.00;
      else if (configSelection.model === "iPad Pro M4") price = 7999.00;
    } else if (activeProduct.id === "macbook-pro-m4") {
      if (configSelection.model === "MacBook Air M3") price = 10499.00;
      else if (configSelection.model === "MacBook Pro M4") price = 14999.00;
    } else if (activeProduct.id === "apple-watch-ultra-2") {
      if (configSelection.model === "Series 9") price = 3799.00;
      else if (configSelection.model === "Ultra 2") price = 5999.00;
    }

    // Screen adjustments
    if (configSelection.screenSize === "13\"" && activeProduct.id === "ipad-pro-m4" && configSelection.model === "iPad Pro M4") {
      price += 2500;
    } else if (configSelection.screenSize === "15\"" && activeProduct.id === "macbook-pro-m4") {
      price += 1800;
    }

    // Case sizes adjustments
    if (configSelection.caseSize === "45mm" && configSelection.model === "Series 9") {
      price += 400;
    } else if (configSelection.caseSize === "49mm" && configSelection.model === "Series 9") {
      // Series 9 does not have 49mm, switch model to Ultra 2
      configSelection.model = "Ultra 2";
      updateModalSelectors();
      return;
    }

    // Storage increments
    if (configSelection.storage === "256GB") {
      price += 600;
    } else if (configSelection.storage === "512GB") {
      price += 1400;
    } else if (configSelection.storage === "1TB") {
      price += 2600;
    } else if (configSelection.storage === "2TB") {
      price += 4500;
    }

    return price;
  }

  // Update original price relative to current
  function updateModalPriceUI(currentPrice) {
    const originalPrice = currentPrice * 1.15; // 15% discount simulated
    modalPriceOriginal.innerText = `R$ ${originalPrice.toFixed(2).replace('.', ',')}`;
    modalPriceCurrent.innerText = `R$ ${currentPrice.toFixed(2).replace('.', ',')}`;
  }

  // Update modal selectors dynamically depending on selected options
  function updateModalSelectors() {
    if (!activeProduct) return;

    // Render Specs
    modalSpecs.innerHTML = '';
    Object.entries(activeProduct.specs).forEach(([key, val]) => {
      const specEl = document.createElement('div');
      specEl.className = 'spec-item';
      specEl.innerHTML = `<span class="spec-label">${key}</span><span class="spec-value">${val}</span>`;
      modalSpecs.appendChild(specEl);
    });

    // Handle Model Selector
    if (activeProduct.models && activeProduct.models.length > 0) {
      groupModel.style.display = 'flex';
      optionsModel.innerHTML = '';
      activeProduct.models.forEach(model => {
        const btn = document.createElement('button');
        btn.className = `selector-btn ${configSelection.model === model ? 'selected' : ''}`;
        btn.innerText = model;
        btn.addEventListener('click', () => {
          configSelection.model = model;
          // Adapt default dependencies based on selected model
          if (activeProduct.id === "apple-watch-ultra-2") {
            if (model === "Ultra 2") configSelection.caseSize = "49mm";
            else if (model === "Series 9") configSelection.caseSize = "45mm";
          }
          updateModalSelectors();
        });
        optionsModel.appendChild(btn);
      });
    } else {
      groupModel.style.display = 'none';
    }

    // Handle Screen Sizes
    if (activeProduct.screenSizes && activeProduct.screenSizes.length > 0) {
      groupScreen.style.display = 'flex';
      optionsScreen.innerHTML = '';
      activeProduct.screenSizes.forEach(size => {
        const btn = document.createElement('button');
        btn.className = `selector-btn ${configSelection.screenSize === size ? 'selected' : ''}`;
        btn.innerText = size;
        btn.addEventListener('click', () => {
          configSelection.screenSize = size;
          updateModalSelectors();
        });
        optionsScreen.appendChild(btn);
      });
    } else {
      groupScreen.style.display = 'none';
    }

    // Handle Case Sizes (Watches)
    if (activeProduct.caseSizes && activeProduct.caseSizes.length > 0 && configSelection.model !== "Ultra 2") {
      groupCase.style.display = 'flex';
      optionsCase.innerHTML = '';
      activeProduct.caseSizes.filter(size => {
        // Ultra is 49mm only, Series 9 is 41/45
        if (configSelection.model === "Series 9" && size === "49mm") return false;
        return true;
      }).forEach(size => {
        const btn = document.createElement('button');
        btn.className = `selector-btn ${configSelection.caseSize === size ? 'selected' : ''}`;
        btn.innerText = size;
        btn.addEventListener('click', () => {
          configSelection.caseSize = size;
          updateModalSelectors();
        });
        optionsCase.appendChild(btn);
      });
    } else {
      groupCase.style.display = 'none';
    }

    // Handle Strap Types
    if (activeProduct.strapTypes && activeProduct.strapTypes.length > 0 && configSelection.model === "Ultra 2") {
      groupStrap.style.display = 'flex';
      optionsStrap.innerHTML = '';
      activeProduct.strapTypes.forEach(strap => {
        const btn = document.createElement('button');
        btn.className = `selector-btn ${configSelection.strapType === strap ? 'selected' : ''}`;
        btn.innerText = strap;
        btn.addEventListener('click', () => {
          configSelection.strapType = strap;
          updateModalSelectors();
        });
        optionsStrap.appendChild(btn);
      });
    } else {
      groupStrap.style.display = 'none';
    }

    // Handle Colors Selector
    if (activeProduct.colors && activeProduct.colors.length > 0) {
      groupColor.style.display = 'flex';
      optionsColor.innerHTML = '';
      selectedColorLabel.innerText = configSelection.colorName;

      activeProduct.colors.forEach(color => {
        const btn = document.createElement('button');
        btn.className = `color-circle-btn ${configSelection.colorName === color.name ? 'selected' : ''}`;
        btn.title = color.name;
        btn.innerHTML = `<span class="color-inner" style="background-color: ${color.hex}"></span>`;
        btn.addEventListener('click', () => {
          configSelection.colorName = color.name;
          updateModalSelectors();
        });
        optionsColor.appendChild(btn);
      });
    } else {
      groupColor.style.display = 'none';
    }

    // Handle Storage Selector
    if (activeProduct.storage && activeProduct.storage.length > 0 && activeProduct.storage[0] !== "N/A") {
      groupStorage.style.display = 'flex';
      optionsStorage.innerHTML = '';
      activeProduct.storage.forEach(cap => {
        const btn = document.createElement('button');
        btn.className = `selector-btn ${configSelection.storage === cap ? 'selected' : ''}`;
        btn.innerText = cap;
        btn.addEventListener('click', () => {
          configSelection.storage = cap;
          updateModalSelectors();
        });
        optionsStorage.appendChild(btn);
      });
    } else {
      groupStorage.style.display = 'none';
    }

    // Update Box items and Gift text
    modalBoxItems.innerHTML = '';
    activeProduct.whatsInBox.forEach(item => {
      const li = document.createElement('li');
      li.innerText = item;
      modalBoxItems.appendChild(li);
    });
    modalGiftText.innerText = activeProduct.gift;

    // Recalculate and show current price
    const computedPrice = calculateCurrentPrice();
    updateModalPriceUI(computedPrice);
  }

  // Open Modal Details and Load Selection Defaults
  function openProductModal(productId) {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) return;

    activeProduct = product;

    // Set defaults
    configSelection.model = product.models ? product.models[0] : '';
    configSelection.screenSize = product.screenSizes ? product.screenSizes[0] : '';
    configSelection.caseSize = product.caseSizes ? (product.id === "apple-watch-ultra-2" ? "49mm" : product.caseSizes[0]) : '';
    configSelection.strapType = product.strapTypes ? product.strapTypes[0] : '';
    configSelection.colorName = product.colors ? product.colors[0].name : '';
    configSelection.storage = product.storage ? product.storage[0] : '';

    // Load static values
    modalImg.src = product.img;
    modalImg.alt = product.name;
    modalCategory.innerText = product.category;
    modalTitle.innerText = product.name;
    modalDesc.innerText = product.desc;

    updateModalSelectors();

    // Show overlay
    modalOverlay.classList.add('active');
  }

  // Add configured product from modal to Cart
  btnModalCheckout.addEventListener('click', () => {
    if (!activeProduct) return;

    // Compile title with selections
    let detailsLabel = [];
    if (configSelection.model) detailsLabel.push(configSelection.model);
    if (configSelection.screenSize) detailsLabel.push(configSelection.screenSize);
    if (configSelection.caseSize && activeProduct.id === "apple-watch-ultra-2") detailsLabel.push(configSelection.caseSize);
    if (configSelection.strapType && activeProduct.id === "apple-watch-ultra-2" && configSelection.model === "Ultra 2") detailsLabel.push(configSelection.strapType);
    if (configSelection.colorName) detailsLabel.push(configSelection.colorName);
    if (configSelection.storage && configSelection.storage !== "N/A") detailsLabel.push(configSelection.storage);

    const fullConfigTitle = `${activeProduct.name} (${detailsLabel.join(' / ')})`;
    const price = calculateCurrentPrice();
    const uniqueId = `${activeProduct.id}-${detailsLabel.join('-').toLowerCase().replace(/\s+/g, '')}`;

    addToCart(uniqueId, fullConfigTitle, price, activeProduct.img);
    closeModal();
  });

  // --- SHOPPING CART LOGIC ---
  let cart = [];

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

  function toggleCart() {
    cartPanel.classList.toggle('active');
    cartOverlay.classList.toggle('active');
  }

  btnCartToggle.addEventListener('click', toggleCart);
  btnCartClose.addEventListener('click', toggleCart);
  cartOverlay.addEventListener('click', toggleCart);

  function saveCart() {
    localStorage.setItem('barbieri_tech_cart', JSON.stringify(cart));
    updateCartUI();
  }

  function updateCartUI() {
    const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
    cartCounter.innerText = totalItems;
    if (totalItems > 0) {
      cartCounter.classList.add('active');
    } else {
      cartCounter.classList.remove('active');
    }

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
            <h4 class="cart-item-title" style="font-size: 0.85rem; line-height: 1.3;">${item.name}</h4>
            <div class="cart-item-price" style="font-size: 0.9rem; margin-top: 0.15rem;">R$ ${item.price.toFixed(2).replace('.', ',')}</div>
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

    const formattedSubtotal = 'R$ ' + subtotal.toFixed(2).replace('.', ',');
    cartSubtotal.innerText = formattedSubtotal;
    cartTotalValue.innerText = formattedSubtotal;

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
    
    if (!cartPanel.classList.contains('active')) {
      toggleCart();
    }
  }

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

  function removeItem(id) {
    cart = cart.filter(item => item.id !== id);
    saveCart();
  }

  // --- WHATSAPP CHECKOUT ---
  btnCartCheckout.addEventListener('click', () => {
    if (cart.length === 0) return;

    const phoneNumber = '5519991101326';
    let message = 'Olá, Barbieri Tech! Gostaria de fazer o seguinte pedido de compra:\n\n';
    
    let total = 0;
    cart.forEach((item, index) => {
      const itemTotal = item.price * item.qty;
      total += itemTotal;
      message += `${index + 1}. *${item.name}*\n   Qtd: ${item.qty} x R$ ${item.price.toFixed(2).replace('.', ',')} un.\n\n`;
    });

    message += `*Subtotal:* R$ ${total.toFixed(2).replace('.', ',')}`;
    message += `\n*Frete:* Grátis para todo o Brasil 🇧🇷 (Cortesia)`;
    message += `\n*Total:* R$ ${total.toFixed(2).replace('.', ',')}`;
    message += `\n\nPor favor, confirme a disponibilidade e me envie o link de pagamento.`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
  });

  // Render the dynamic catalog on load
  renderCatalog();
  updateCartUI();
});
