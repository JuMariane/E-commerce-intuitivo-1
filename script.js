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

  // --- 5 CATEGORY LINES DATABASE ---
  const PRODUCTS = [
    {
      id: "linha-iphone-17",
      name: "Linha iPhone 17",
      category: "Celulares",
      badge: "ÚLTIMO LANÇAMENTO",
      desc: "O máximo em performance e design. Processador A19 Pro, estrutura em titânio e sistema de câmeras avançado.",
      basePrice: 6999.00,
      originalPrice: 7999.00,
      img: "assets/iphone.png",
      specs: {
        "Processador": "A19 Pro Neural Core",
        "Câmera": "48MP Fusion principal",
        "Tela": "6.1\" até 6.9\" Super Retina XDR",
        "Construção": "Titânio Aeroespacial"
      },
      models: ["iPhone 17", "iPhone 17 Plus", "iPhone 17 Pro", "iPhone 17 Pro Max"],
      modelImages: {
        "iPhone 17": "https://images.unsplash.com/photo-1696446701796-da61225697cc?q=80&w=800&auto=format&fit=crop",
        "iPhone 17 Plus": "https://images.unsplash.com/photo-1695048133142-1a20484d2569?q=80&w=800&auto=format&fit=crop",
        "iPhone 17 Pro": "https://images.unsplash.com/photo-1726058428469-8041065f02bc?q=80&w=800&auto=format&fit=crop",
        "iPhone 17 Pro Max": "assets/iphone.png"
      },
      colors: [
        { name: "Titânio Deserto", hex: "#c2b29f" },
        { name: "Titânio Concreto", hex: "#8c8d90" },
        { name: "Preto Espacial", hex: "#1c1d21" },
        { name: "Prata", hex: "#e3e4e5" }
      ],
      storage: ["128GB", "256GB", "512GB", "1TB"],
      whatsInBox: [
        "iPhone com iOS 19",
        "Cabo USB-C Premium (1m)",
        "Manuais de Instrução"
      ],
      gift: "Capa Protetora MagSafe Slim Clear + Película de Privacidade em Cerâmica Aplicada"
    },
    {
      id: "linha-ipad-pro",
      name: "Linha iPad Pro",
      category: "iPads",
      badge: "ULTRA FINO",
      desc: "O design mais fino já criado com o poder absurdo do chip M4. Tela Ultra Retina XDR espetacular.",
      basePrice: 7999.00,
      originalPrice: 9499.00,
      img: "assets/ipad.png",
      specs: {
        "Processador": "Apple M4 (Até 10 núcleos)",
        "Tela": "11\" ou 13\" Tandem OLED Liquid Retina",
        "Gráficos": "GPU de 10 núcleos com aceleração por hardware"
      },
      models: ["iPad Air M2", "iPad Pro M4"],
      modelImages: {
        "iPad Air M2": "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=800&auto=format&fit=crop",
        "iPad Pro M4": "assets/ipad.png"
      },
      colors: [
        { name: "Cinza Espacial", hex: "#4b4c4e" },
        { name: "Estelar", hex: "#dfdcd4" },
        { name: "Prata", hex: "#e3e4e5" }
      ],
      storage: ["128GB", "256GB", "512GB", "1TB"],
      whatsInBox: [
        "iPad com iPadOS",
        "Cabo de carregamento USB-C (1m)",
        "Manuais"
      ],
      gift: "Capa Magnética Smart Folio com imagem inteligente + Película Protetora Fosca"
    },
    {
      id: "linha-macbook-pro",
      name: "Linha MacBook Pro",
      category: "MacBooks",
      badge: "MÁXIMO PODER",
      desc: "Desempenho monstruoso para quem trabalha pesado. Bateria para o dia todo e tela Liquid Retina XDR.",
      basePrice: 10999.00,
      originalPrice: 12999.00,
      img: "assets/macbook.png",
      specs: {
        "Processador": "Chip Apple M3 ou M4 Pro/Max",
        "Tela": "13.6\" ou 15.3\" Liquid Retina",
        "Bateria": "Até 22 horas de autonomia"
      },
      models: ["MacBook Air M3", "MacBook Pro M4"],
      modelImages: {
        "MacBook Air M3": "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=800&auto=format&fit=crop",
        "MacBook Pro M4": "assets/macbook.png"
      },
      screenSizes: ["13\"", "15\""],
      colors: [
        { name: "Preto Espacial", hex: "#1d1e22" },
        { name: "Prata", hex: "#e3e4e5" },
        { name: "Cinza Espacial", hex: "#4b4c4e" }
      ],
      storage: ["256GB", "512GB", "1TB", "2TB"],
      whatsInBox: [
        "MacBook Pro",
        "Cabo MagSafe 3 (2m)",
        "Adaptador de energia USB-C",
        "Manuais"
      ],
      gift: "Hub Adaptador USB-C Multiportas de Alumínio (HDMI, USB 3.0, SD/MicroSD)"
    },
    {
      id: "linha-apple-watch",
      name: "Linha Apple Watch",
      category: "Smartwatches",
      badge: "SAÚDE E ESPORTE",
      desc: "O parceiro definitivo para monitorar sua saúde e superar limites. Resistência extrema.",
      basePrice: 3599.00,
      originalPrice: 4299.00,
      img: "assets/smartwatch.png",
      specs: {
        "Processador": "Chip S9 SiP ou S10",
        "Sensores": "Oxigênio, ECG, Temperatura e Sensor de Quedas",
        "Construção": "Alumínio ou Titânio Aeroespacial"
      },
      models: ["Apple Watch Series 9", "Apple Watch Ultra 2"],
      modelImages: {
        "Apple Watch Series 9": "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?q=80&w=800&auto=format&fit=crop",
        "Apple Watch Ultra 2": "assets/smartwatch.png"
      },
      caseSizes: ["41mm", "45mm", "49mm"],
      strapTypes: ["Pulseira Esportiva", "Pulseira Trail", "Pulseira Oceano"],
      colors: [
        { name: "Estelar", hex: "#dfdcd4" },
        { name: "Preto Espacial", hex: "#232426" },
        { name: "Titânio Natural", hex: "#c2b29f" }
      ],
      whatsInBox: [
        "Caixa do Apple Watch",
        "Pulseira do modelo correspondente",
        "Cabo magnético de carregamento rápido para USB-C",
        "Manuais"
      ],
      gift: "Pulseira Milanese Metálica Extra de Aço Inoxidável com fecho magnético"
    },
    {
      id: "linha-airpods",
      name: "Linha AirPods",
      category: "Fones de Ouvido",
      badge: "ÁUDIO IMERSIVO",
      desc: "Som de altíssima fidelidade, cancelamento ativo de ruído superior e bateria de longa duração.",
      basePrice: 1299.00,
      originalPrice: 1599.00,
      img: "assets/airpods.png",
      specs: {
        "Áudio": "Áudio espacial dinâmico e equalização adaptativa",
        "Bateria": "Até 30 horas com estojo de recarga",
        "Conectores": "Chip H1 ou H2 de alta performance"
      },
      models: ["AirPods 3", "AirPods Pro 2", "AirPods Max"],
      modelImages: {
        "AirPods 3": "https://images.unsplash.com/photo-1588449668365-d15e397f6787?q=80&w=800&auto=format&fit=crop",
        "AirPods Pro 2": "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?q=80&w=800&auto=format&fit=crop",
        "AirPods Max": "assets/airpods.png"
      },
      colors: [
        { name: "Branco Clássico", hex: "#ffffff" },
        { name: "Preto Espacial", hex: "#232426" },
        { name: "Prata", hex: "#e3e4e5" }
      ],
      whatsInBox: [
        "AirPods",
        "Estojo de Carga correspondente",
        "Cabo Lightning ou USB-C",
        "Manuais"
      ],
      gift: "Estojo Protetor de Silicone Hipoalergênico com gancho de fixação"
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

      let badgeHTML = '';
      if (product.badge) {
        if (product.id === 'linha-iphone-17') {
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
            <span class="product-price-label">A partir de</span>
            <div>
              <span class="product-price original">R$ ${product.originalPrice.toFixed(2).replace('.', ',')}</span>
              <span class="product-price">R$ ${product.basePrice.toFixed(2).replace('.', ',')}</span>
            </div>
          </div>

          <!-- Trust Badges Line -->
          <div class="product-card-trust-lines">
            <div class="trust-line-item">
              <i class="fas fa-shipping-fast"></i> <span>Frete Grátis em todo o Brasil</span>
            </div>
            <div class="trust-line-item">
              <i class="fas fa-gift"></i> <span>Brinde Exclusivo Barbieri Tech</span>
            </div>
          </div>

          <button class="btn btn-primary product-btn open-details-btn" data-id="${product.id}">
            <i class="fas fa-sliders-h"></i> Configurar e Comprar
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
    if (activeProduct.id === "linha-iphone-17") {
      if (configSelection.model === "iPhone 17") price = 6999.00;
      else if (configSelection.model === "iPhone 17 Plus") price = 7599.00;
      else if (configSelection.model === "iPhone 17 Pro") price = 8599.00;
      else if (configSelection.model === "iPhone 17 Pro Max") price = 9399.00;
    } else if (activeProduct.id === "linha-ipad-pro") {
      if (configSelection.model === "iPad Air M2") price = 5499.00;
      else if (configSelection.model === "iPad Pro M4") price = 7999.00;
    } else if (activeProduct.id === "linha-macbook-pro") {
      if (configSelection.model === "MacBook Air M3") price = 10999.00;
      else if (configSelection.model === "MacBook Pro M4") price = 14999.00;
    } else if (activeProduct.id === "linha-apple-watch") {
      if (configSelection.model === "Apple Watch Series 9") price = 3599.00;
      else if (configSelection.model === "Apple Watch Ultra 2") price = 5999.00;
    } else if (activeProduct.id === "linha-airpods") {
      if (configSelection.model === "AirPods 3") price = 1299.00;
      else if (configSelection.model === "AirPods Pro 2") price = 1899.00;
      else if (configSelection.model === "AirPods Max") price = 5499.00;
    }

    // Screen size adjustments
    if (configSelection.screenSize === "15\"" && activeProduct.id === "linha-macbook-pro") {
      price += 1500;
    }

    // Case sizes adjustments
    if (configSelection.caseSize === "45mm" && configSelection.model === "Apple Watch Series 9") {
      price += 400;
    } else if (configSelection.caseSize === "49mm" && configSelection.model === "Apple Watch Series 9") {
      // Switch model to Ultra 2
      configSelection.model = "Apple Watch Ultra 2";
      configSelection.caseSize = "49mm";
      updateModalSelectors();
      return;
    }

    // Storage increments
    if (activeProduct.id !== "linha-airpods") {
      if (configSelection.storage === "256GB") {
        price += 600;
      } else if (configSelection.storage === "512GB") {
        price += 1400;
      } else if (configSelection.storage === "1TB") {
        price += 2600;
      } else if (configSelection.storage === "2TB") {
        price += 4400;
      }
    }

    return price;
  }

  // Update original price relative to current
  function updateModalPriceUI(currentPrice) {
    const originalPrice = currentPrice * 1.15; // 15% discount simulated
    modalPriceOriginal.innerText = `R$ ${originalPrice.toFixed(2).replace('.', ',')}`;
    modalPriceCurrent.innerText = `R$ ${currentPrice.toFixed(2).replace('.', ',')}`;
  }

  // Dynamic smooth image fade switch
  function changeModalImage(newSrc) {
    if (modalImg.getAttribute('src') === newSrc) return;
    modalImg.classList.add('fade-out');
    setTimeout(() => {
      modalImg.src = newSrc;
      modalImg.onload = () => {
        modalImg.classList.remove('fade-out');
      };
      // fallback in case onload doesn't trigger immediately
      setTimeout(() => {
        modalImg.classList.remove('fade-out');
      }, 350);
    }, 200);
  }

  // Update modal selectors dynamically depending on selected options
  function updateModalSelectors() {
    if (!activeProduct) return;

    // Change image based on selected model
    const currentModelImg = (activeProduct.modelImages && activeProduct.modelImages[configSelection.model]) 
                            || activeProduct.img;
    changeModalImage(currentModelImg);

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
          if (activeProduct.id === "linha-apple-watch") {
            if (model === "Apple Watch Ultra 2") {
              configSelection.caseSize = "49mm";
            } else if (model === "Apple Watch Series 9") {
              configSelection.caseSize = "45mm";
            }
          }
          updateModalSelectors();
        });
        optionsModel.appendChild(btn);
      });
    } else {
      groupModel.style.display = 'none';
    }

    // Handle Screen Sizes (MacBooks)
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
    if (activeProduct.caseSizes && activeProduct.caseSizes.length > 0 && configSelection.model !== "Apple Watch Ultra 2") {
      groupCase.style.display = 'flex';
      optionsCase.innerHTML = '';
      activeProduct.caseSizes.filter(size => {
        if (configSelection.model === "Apple Watch Series 9" && size === "49mm") return false;
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

    // Handle Strap Types (Watches)
    if (activeProduct.strapTypes && activeProduct.strapTypes.length > 0 && configSelection.model === "Apple Watch Ultra 2") {
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
    if (activeProduct.storage && activeProduct.storage.length > 0 && activeProduct.id !== "linha-airpods") {
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
    configSelection.caseSize = product.caseSizes ? (product.id === "linha-apple-watch" && product.models[0] === "Apple Watch Ultra 2" ? "49mm" : product.caseSizes[0]) : '';
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

  // Direct checkout via WhatsApp from Modal
  btnModalCheckout.addEventListener('click', () => {
    if (!activeProduct) return;

    const phoneNumber = '5519991101326';
    let message = `Olá, Barbieri Tech! Gostaria de encomendar um item da categoria:\n`;
    message += `*${activeProduct.name}*\n\n`;
    
    // Add chosen configurations
    if (configSelection.model) message += `- *Modelo:* ${configSelection.model}\n`;
    if (configSelection.screenSize && activeProduct.id === "linha-macbook-pro") message += `- *Tamanho de Tela:* ${configSelection.screenSize}\n`;
    if (configSelection.caseSize && activeProduct.id === "linha-apple-watch") message += `- *Tamanho da Caixa:* ${configSelection.caseSize}\n`;
    if (configSelection.strapType && activeProduct.id === "linha-apple-watch" && configSelection.model === "Apple Watch Ultra 2") message += `- *Pulseira:* ${configSelection.strapType}\n`;
    if (configSelection.colorName) message += `- *Cor:* ${configSelection.colorName}\n`;
    if (configSelection.storage && activeProduct.id !== "linha-airpods") message += `- *Armazenamento:* ${configSelection.storage}\n`;
    
    const finalPrice = calculateCurrentPrice();
    message += `\n*Preço:* R$ ${finalPrice.toFixed(2).replace('.', ',')}\n`;
    message += `*Frete:* Grátis para todo o Brasil 🇧🇷 (Cortesia)\n`;
    message += `*Brinde Incluso:* ${activeProduct.gift}\n\n`;
    message += `Por favor, verifique a disponibilidade e me envie o link de pagamento.`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank');
    
    // Close modal
    closeModal();
  });

  // --- SHOPPING CART LOGIC (FALLBACK/DORMANT) ---
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

  if (btnCartToggle && cartPanel && cartOverlay) {
    function toggleCart() {
      cartPanel.classList.toggle('active');
      cartOverlay.classList.toggle('active');
    }

    btnCartToggle.addEventListener('click', toggleCart);
    if (btnCartClose) btnCartClose.addEventListener('click', toggleCart);
    cartOverlay.addEventListener('click', toggleCart);
  }

  function saveCart() {
    localStorage.setItem('barbieri_tech_cart', JSON.stringify(cart));
    updateCartUI();
  }

  function updateCartUI() {
    if (!cartCounter || !cartList) return;
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
        </div>
      `;
      if (cartSubtotal) cartSubtotal.innerText = 'R$ 0,00';
      if (cartTotalValue) cartTotalValue.innerText = 'R$ 0,00';
      return;
    }

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
        </div>
      `;
      cartList.appendChild(itemEl);
    });

    const formattedSubtotal = 'R$ ' + subtotal.toFixed(2).replace('.', ',');
    if (cartSubtotal) cartSubtotal.innerText = formattedSubtotal;
    if (cartTotalValue) cartTotalValue.innerText = formattedSubtotal;
  }

  // Render the dynamic catalog on load
  renderCatalog();
  updateCartUI();
});
