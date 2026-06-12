// --- PRODUCT DATA STATE ---
let products = [];

const fallbackProducts = [
  {
    "id": "iphone",
    "title": "Linha iPhone",
    "category": "Celulares",
    "badge": "ÚLTIMO LANÇAMENTO",
    "desc": "Performance e design excepcionais. Câmera avançada, processamento de ponta e bateria de longa duração.",
    "originalPrice": 6323.85,
    "basePrice": 5499.00,
    "img": "assets/categorias/iphone.png",
    "specs": {
      "Processador": "A18 ou A18 Pro Bionic",
      "Câmera": "48MP Fusion principal",
      "Tela": "Super Retina XDR OLED",
      "Construção": "Alumínio ou Titânio Aeroespacial"
    },
    "boxItems": [
      "iPhone com iOS 18",
      "Cabo USB-C Premium trançado (1m)",
      "Manuais de Instrução"
    ],
    "gift": "Capa Protetora MagSafe Slim Clear + Película de Privacidade em Cerâmica Aplicada",
    "models": [
      { "name": "iPhone 16", "price": 5499, "img": "https://images.unsplash.com/photo-1696446701796-da61225697cc?q=80&w=800&auto=format&fit=crop" },
      { "name": "iPhone 16 Plus", "price": 6099, "img": "https://images.unsplash.com/photo-1695048133142-1a20484d2569?q=80&w=800&auto=format&fit=crop" },
      { "name": "iPhone 16 Pro", "price": 7299, "img": "https://images.unsplash.com/photo-1726058428469-8041065f02bc?q=80&w=800&auto=format&fit=crop" },
      { "name": "iPhone 16 Pro Max", "price": 8299, "img": "assets/categorias/iphone.png" }
    ],
    "colors": [
      { "name": "Preto Titânio / Escuro", "hex": "#1c1d21" },
      { "name": "Branco Titânio / Claro", "hex": "#e3e4e5" },
      { "name": "Titânio Natural", "hex": "#c2b29f" },
      { "name": "Azul Ultramarino", "hex": "#2c3e50" }
    ],
    "storages": [
      { "name": "128GB", "offset": 0 },
      { "name": "256GB", "offset": 600 },
      { "name": "512GB", "offset": 1400 },
      { "name": "1TB", "offset": 2600 }
    ]
  },
  {
    "id": "ipad",
    "title": "Linha iPad Pro",
    "category": "iPads",
    "badge": "ULTRA FINO",
    "desc": "O design mais fino já criado com o poder absurdo do chip M4. Tela Ultra Retina XDR espetacular.",
    "originalPrice": 6323.85,
    "basePrice": 5499.00,
    "img": "assets/categorias/ipad.png",
    "specs": {
      "Processador": "Apple M4 (Até 10 núcleos)",
      "Tela": "Tandem OLED Liquid Retina XDR",
      "Gráficos": "GPU de 10 núcleos"
    },
    "boxItems": [
      "iPad com iPadOS",
      "Cabo de carregamento USB-C (1m)",
      "Manuais"
    ],
    "gift": "Capa Magnética Smart Folio com imagem inteligente + Película Protetora Fosca",
    "models": [
      { "name": "iPad Air M2", "price": 5499, "img": "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=800&auto=format&fit=crop" },
      { "name": "iPad Pro M4", "price": 7999, "img": "assets/categorias/ipad.png" }
    ],
    "colors": [
      { "name": "Cinza Espacial", "hex": "#4b4c4e" },
      { "name": "Estelar", "hex": "#dfdcd4" },
      { "name": "Prata", "hex": "#e3e4e5" }
    ],
    "storages": [
      { "name": "128GB", "offset": 0 },
      { "name": "256GB", "offset": 600 },
      { "name": "512GB", "offset": 1400 },
      { "name": "1TB", "offset": 2600 }
    ]
  },
  {
    "id": "macbook",
    "title": "Linha MacBook Pro",
    "category": "MacBooks",
    "badge": "MÁXIMO PODER",
    "desc": "Desempenho monstruoso para quem trabalha pesado. Bateria para o dia todo e tela Liquid Retina XDR.",
    "originalPrice": 12648.85,
    "basePrice": 10999.00,
    "img": "assets/categorias/macbook.png",
    "specs": {
      "Processador": "Chip Apple M3 ou M4 Pro/Max",
      "Tela": "13.6\" ou 15.3\" Liquid Retina",
      "Bateria": "Até 22 horas de autonomia"
    },
    "boxItems": [
      "MacBook Pro",
      "Cabo MagSafe 3 (2m)",
      "Adaptador de energia USB-C",
      "Manuais"
    ],
    "gift": "Hub Adaptador USB-C Multiportas de Alumínio (HDMI, USB 3.0, SD/MicroSD)",
    "models": [
      { "name": "MacBook Air M3", "price": 10999, "img": "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=800&auto=format&fit=crop" },
      { "name": "MacBook Pro M4", "price": 14999, "img": "assets/categorias/macbook.png" }
    ],
    "colors": [
      { "name": "Preto Espacial", "hex": "#1d1e22" },
      { "name": "Prata", "hex": "#e3e4e5" },
      { "name": "Cinza Espacial", "hex": "#4b4c4e" }
    ],
    "storages": [
      { "name": "256GB", "offset": 0 },
      { "name": "512GB", "offset": 1200 },
      { "name": "1TB", "offset": 2400 },
      { "name": "2TB", "offset": 4400 }
    ],
    "screens": [
      { "name": "13.6\"", "offset": 0 },
      { "name": "15.3\"", "offset": 1500 }
    ]
  },
  {
    "id": "watch",
    "title": "Linha Apple Watch",
    "category": "Smartwatches",
    "badge": "SAÚDE E ESPORTE",
    "desc": "O parceiro definitivo para monitorar sua saúde e superar limites. Resistência extrema.",
    "originalPrice": 4138.85,
    "basePrice": 3599.00,
    "img": "assets/categorias/smartwatch.png",
    "specs": {
      "Processador": "Chip S9 SiP ou S10",
      "Sensores": "ECG, Oxigênio e Temperatura",
      "Construção": "Alumínio ou Titânio Aeroespacial"
    },
    "boxItems": [
      "Caixa do Apple Watch",
      "Pulseira do modelo correspondente",
      "Cabo magnético de carregamento rápido USB-C"
    ],
    "gift": "Pulseira Milanese Metálica Extra de Aço Inoxidável com fecho magnético",
    "models": [
      { "name": "Apple Watch Series 9", "price": 3599, "img": "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?q=80&w=800&auto=format&fit=crop" },
      { "name": "Apple Watch Ultra 2", "price": 5999, "img": "assets/categorias/smartwatch.png" }
    ],
    "colors": [
      { "name": "Estelar", "hex": "#dfdcd4" },
      { "name": "Preto Espacial", "hex": "#232426" },
      { "name": "Titânio Natural", "hex": "#c2b29f" }
    ],
    "cases": [
      { "name": "41mm", "offset": 0 },
      { "name": "45mm", "offset": 400 },
      { "name": "49mm", "offset": 0 }
    ],
    "straps": [
      { "name": "Pulseira Esportiva" },
      { "name": "Pulseira Trail" },
      { "name": "Pulseira Oceano" }
    ]
  },
  {
    "id": "airpods",
    "title": "Linha AirPods",
    "category": "Fones de Ouvido",
    "badge": "ÁUDIO IMERSIVO",
    "desc": "Som de altíssima fidelidade, cancelamento ativo de ruído superior e bateria de longa duração.",
    "originalPrice": 1493.85,
    "basePrice": 1299.00,
    "img": "assets/categorias/airpods.png",
    "specs": {
      "Drivers": "Dinâmicos projetados pela Apple",
      "Cancelamento": "Ativo de Ruído (ANC) / Modo Ambiente",
      "Processamento": "Chip H1 ou H2 de alta fidelidade"
    },
    "boxItems": [
      "AirPods",
      "Estojo de Carga correspondente",
      "Cabo de Lightning ou USB-C"
    ],
    "gift": "Estojo Protetor de Silicone Hipoalergênico com gancho de fixação",
    "models": [
      { "name": "AirPods 3", "price": 1299, "img": "https://images.unsplash.com/photo-1588449668365-d15e397f6787?q=80&w=800&auto=format&fit=crop" },
      { "name": "AirPods Pro 2", "price": 1899, "img": "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?q=80&w=800&auto=format&fit=crop" },
      { "name": "AirPods Max", "price": 5499, "img": "assets/categorias/airpods.png" }
    ],
    "colors": [
      { "name": "Branco Clássico", "hex": "#ffffff" },
      { "name": "Preto Espacial", "hex": "#232426" },
      { "name": "Prata", "hex": "#e3e4e5" }
    ]
  }
];

// --- GLOBAL SELECTIONS STATE ---
const selections = {};

// --- HELPER FUNCTION: OPEN GENERAL MODALS ---
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

// --- DYNAMIC IMAGE TRANSITION ---
window.changeDynamicModalImage = function(newSrc) {
  const imgEl = document.getElementById('dynamic-modal-img');
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

// --- INITIALIZE SELECTIONS STATE ---
function initSelections(product) {
  const defaultModel = product.models && product.models.length > 0 ? product.models[0] : { name: '', price: product.basePrice || 0 };
  const defaultColor = product.colors && product.colors.length > 0 ? product.colors[0] : { name: '' };
  
  selections[product.id] = {
    categoryTitle: product.title,
    model: defaultModel.name,
    basePrice: defaultModel.price,
    color: defaultColor.name,
    img: defaultModel.img || product.img,
    gift: product.gift,
    storage: product.storages && product.storages.length > 0 ? product.storages[0].name : null,
    storageOffset: 0,
    screenSize: product.screens && product.screens.length > 0 ? product.screens[0].name : null,
    screenSizeOffset: 0,
    caseSize: product.cases && product.cases.length > 0 ? product.cases[0].name : null,
    caseSizeOffset: 0,
    strap: product.straps && product.straps.length > 0 ? product.straps[0].name : null
  };
}

// --- DYNAMIC PRICE CALCULATION ---
window.updateDynamicPrice = function(productId) {
  const sel = selections[productId];
  if (!sel) return;
  
  const price = sel.basePrice + (sel.storageOffset || 0) + (sel.screenSizeOffset || 0) + (sel.caseSizeOffset || 0);
  const originalPrice = price * 1.15;
  
  const currEl = document.getElementById('dynamic-price-curr');
  const origEl = document.getElementById('dynamic-price-orig');
  
  if (currEl) {
    currEl.innerText = price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  }
  if (origEl) {
    origEl.innerText = originalPrice.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  }
};

// --- DYNAMIC SELECTION HANDLERS ---
window.selectDynamicModel = function(productId, index, buttonEl) {
  const product = products.find(p => p.id === productId);
  const sel = selections[productId];
  if (!product || !sel) return;
  
  const model = product.models[index];
  sel.model = model.name;
  sel.basePrice = model.price;
  sel.img = model.img || product.img;
  
  // Custom case-size rules for Apple Watch
  if (productId === 'watch') {
    if (model.name === 'Apple Watch Ultra 2') {
      sel.caseSize = '49mm';
      sel.caseSizeOffset = 0;
    } else {
      sel.caseSize = '41mm';
      sel.caseSizeOffset = 0;
    }
  }
  
  window.changeDynamicModalImage(sel.img);
  window.renderDynamicSelectors(productId);
  window.updateDynamicPrice(productId);
};

window.selectDynamicColor = function(productId, index, buttonEl) {
  const product = products.find(p => p.id === productId);
  const sel = selections[productId];
  if (!product || !sel) return;
  
  const color = product.colors[index];
  sel.color = color.name;
  
  const colorLabel = document.getElementById('dynamic-color-label');
  if (colorLabel) {
    colorLabel.textContent = color.name;
  }
  
  if (buttonEl) {
    const siblings = buttonEl.parentNode.querySelectorAll('.color-circle-btn');
    siblings.forEach(s => s.classList.remove('selected'));
    buttonEl.classList.add('selected');
  }
};

window.selectDynamicScreen = function(productId, index, buttonEl) {
  const product = products.find(p => p.id === productId);
  const sel = selections[productId];
  if (!product || !sel) return;
  
  const screen = product.screens[index];
  sel.screenSize = screen.name;
  sel.screenSizeOffset = screen.offset || 0;
  
  if (buttonEl) {
    const siblings = buttonEl.parentNode.querySelectorAll('.selector-btn');
    siblings.forEach(s => s.classList.remove('selected'));
    buttonEl.classList.add('selected');
  }
  
  window.updateDynamicPrice(productId);
};

window.selectDynamicCase = function(productId, index, buttonEl) {
  const product = products.find(p => p.id === productId);
  const sel = selections[productId];
  if (!product || !sel) return;
  
  const c = product.cases[index];
  sel.caseSize = c.name;
  sel.caseSizeOffset = c.offset || 0;
  
  if (buttonEl) {
    const siblings = buttonEl.parentNode.querySelectorAll('.selector-btn');
    siblings.forEach(s => s.classList.remove('selected'));
    buttonEl.classList.add('selected');
  }
  
  window.updateDynamicPrice(productId);
};

window.selectDynamicStrap = function(productId, index, buttonEl) {
  const product = products.find(p => p.id === productId);
  const sel = selections[productId];
  if (!product || !sel) return;
  
  const strap = product.straps[index];
  sel.strap = strap.name;
  
  if (buttonEl) {
    const siblings = buttonEl.parentNode.querySelectorAll('.selector-btn');
    siblings.forEach(s => s.classList.remove('selected'));
    buttonEl.classList.add('selected');
  }
};

window.selectDynamicStorage = function(productId, index, buttonEl) {
  const product = products.find(p => p.id === productId);
  const sel = selections[productId];
  if (!product || !sel) return;
  
  const storage = product.storages[index];
  sel.storage = storage.name;
  sel.storageOffset = storage.offset || 0;
  
  if (buttonEl) {
    const siblings = buttonEl.parentNode.querySelectorAll('.selector-btn');
    siblings.forEach(s => s.classList.remove('selected'));
    buttonEl.classList.add('selected');
  }
  
  window.updateDynamicPrice(productId);
};

// --- DYNAMIC SELECTORS RENDERER ---
window.renderDynamicSelectors = function(productId) {
  const container = document.getElementById('dynamic-modal-selectors');
  if (!container) return;
  container.innerHTML = '';
  
  const product = products.find(p => p.id === productId);
  if (!product) return;
  
  // 1. Models Selector
  if (product.models && product.models.length > 0) {
    const group = document.createElement('div');
    group.className = 'selector-group';
    group.innerHTML = `<h4 class="selector-label">Modelo</h4>`;
    const optionsDiv = document.createElement('div');
    optionsDiv.className = 'selector-options full-width-grid';
    
    product.models.forEach((model, index) => {
      const active = selections[productId].model === model.name;
      optionsDiv.innerHTML += `
        <button class="selector-btn ${active ? 'selected' : ''}" onclick="selectDynamicModel('${productId}', ${index}, this)">
          <span>${model.name}</span>
          <span class="option-price-tag">${model.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 })}</span>
        </button>
      `;
    });
    group.appendChild(optionsDiv);
    container.appendChild(group);
  }
  
  // 2. Screen Size Selector (MacBooks)
  if (product.screens && product.screens.length > 0) {
    const group = document.createElement('div');
    group.className = 'selector-group';
    group.innerHTML = `<h4 class="selector-label">Tamanho da Tela</h4>`;
    const optionsDiv = document.createElement('div');
    optionsDiv.className = 'selector-options';
    
    product.screens.forEach((screen, index) => {
      const active = selections[productId].screenSize === screen.name;
      const offsetText = screen.offset > 0 ? `+ ${screen.offset.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 })}` : 'Incluso';
      optionsDiv.innerHTML += `
        <button class="selector-btn ${active ? 'selected' : ''}" onclick="selectDynamicScreen('${productId}', ${index}, this)">
          <span>${screen.name}</span>
          <span class="option-price-tag">${offsetText}</span>
        </button>
      `;
    });
    group.appendChild(optionsDiv);
    container.appendChild(group);
  }
  
  // 3. Case Size Selector (Watch)
  if (product.cases && product.cases.length > 0) {
    const group = document.createElement('div');
    group.className = 'selector-group';
    group.innerHTML = `<h4 class="selector-label">Tamanho da Caixa</h4>`;
    const optionsDiv = document.createElement('div');
    optionsDiv.className = 'selector-options';
    
    const isUltra = selections[productId].model === 'Apple Watch Ultra 2';
    
    product.cases.forEach((c, index) => {
      const isUltraCase = c.name === '49mm';
      if ((isUltra && isUltraCase) || (!isUltra && !isUltraCase)) {
        const active = selections[productId].caseSize === c.name;
        const offsetText = c.offset > 0 ? `+ ${c.offset.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 })}` : 'Incluso';
        optionsDiv.innerHTML += `
          <button class="selector-btn ${active ? 'selected' : ''}" onclick="selectDynamicCase('${productId}', ${index}, this)">
            <span>${c.name}</span>
            <span class="option-price-tag">${offsetText}</span>
          </button>
        `;
      }
    });
    group.appendChild(optionsDiv);
    container.appendChild(group);
  }
  
  // 4. Strap Selector (Watch - Only if Ultra 2 is selected)
  if (product.straps && product.straps.length > 0) {
    const isUltra = selections[productId].model === 'Apple Watch Ultra 2';
    const group = document.createElement('div');
    group.className = 'selector-group';
    group.style.display = isUltra ? 'flex' : 'none';
    group.innerHTML = `<h4 class="selector-label">Pulseira</h4>`;
    const optionsDiv = document.createElement('div');
    optionsDiv.className = 'selector-options';
    
    product.straps.forEach((strap, index) => {
      const active = selections[productId].strap === strap.name;
      optionsDiv.innerHTML += `
        <button class="selector-btn ${active ? 'selected' : ''}" onclick="selectDynamicStrap('${productId}', ${index}, this)">
          <span>${strap.name}</span>
          <span class="option-price-tag">Incluso</span>
        </button>
      `;
    });
    group.appendChild(optionsDiv);
    container.appendChild(group);
  }
  
  // 5. Colors Selector
  if (product.colors && product.colors.length > 0) {
    const group = document.createElement('div');
    group.className = 'selector-group';
    group.innerHTML = `<h4 class="selector-label">Cor: <span class="selected-color-name" id="dynamic-color-label">${selections[productId].color || ''}</span></h4>`;
    const optionsDiv = document.createElement('div');
    optionsDiv.className = 'color-options-grid';
    
    product.colors.forEach((color, index) => {
      const active = selections[productId].color === color.name;
      optionsDiv.innerHTML += `
        <button class="color-circle-btn ${active ? 'selected' : ''}" onclick="selectDynamicColor('${productId}', ${index}, this)" title="${color.name}">
          <div class="color-inner" style="background-color: ${color.hex}"></div>
        </button>
      `;
    });
    group.appendChild(optionsDiv);
    container.appendChild(group);
  }
  
  // 6. Storage Selector
  if (product.storages && product.storages.length > 0) {
    const group = document.createElement('div');
    group.className = 'selector-group';
    group.innerHTML = `<h4 class="selector-label">Armazenamento</h4>`;
    const optionsDiv = document.createElement('div');
    optionsDiv.className = 'selector-options';
    
    product.storages.forEach((storage, index) => {
      const active = selections[productId].storage === storage.name;
      const offsetText = storage.offset > 0 ? `+ ${storage.offset.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 })}` : 'Incluso';
      optionsDiv.innerHTML += `
        <button class="selector-btn ${active ? 'selected' : ''}" onclick="selectDynamicStorage('${productId}', ${index}, this)">
          <span>${storage.name}</span>
          <span class="option-price-tag">${offsetText}</span>
        </button>
      `;
    });
    group.appendChild(optionsDiv);
    container.appendChild(group);
  }
};

// --- OPEN AND POPULATE CONFIGURATION MODAL ---
window.abrirConfigModal = function(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;
  
  // Initialize selection state for this product if not already done
  if (!selections[productId]) {
    initSelections(product);
  }
  
  const sel = selections[productId];
  
  // Populate static fields
  const imgEl = document.getElementById('dynamic-modal-img');
  if (imgEl) {
    imgEl.src = sel.img;
    imgEl.alt = product.title;
  }
  
  const catEl = document.getElementById('dynamic-modal-category');
  if (catEl) catEl.textContent = product.category;
  
  const titleEl = document.getElementById('dynamic-modal-title');
  if (titleEl) titleEl.textContent = product.title;
  
  const descEl = document.getElementById('dynamic-modal-desc');
  if (descEl) descEl.textContent = product.desc;
  
  // Render specs list
  const specsContainer = document.getElementById('dynamic-modal-specs');
  if (specsContainer) {
    specsContainer.innerHTML = '';
    for (const [key, value] of Object.entries(product.specs || {})) {
      specsContainer.innerHTML += `
        <div class="spec-item">
          <span class="spec-label">${key}</span>
          <span class="spec-value">${value}</span>
        </div>
      `;
    }
  }
  
  // Render box items
  const boxContainer = document.getElementById('dynamic-modal-box-items');
  if (boxContainer) {
    boxContainer.innerHTML = '';
    (product.boxItems || []).forEach(item => {
      boxContainer.innerHTML += `
        <li><i class="fas fa-check"></i> <span>${item}</span></li>
      `;
    });
  }
  
  // Render gift description
  const giftTextEl = document.getElementById('dynamic-modal-gift-text');
  if (giftTextEl) giftTextEl.textContent = product.gift;
  
  // Render selectors
  window.renderDynamicSelectors(productId);
  
  // Update price
  window.updateDynamicPrice(productId);
  
  // Setup action checkout button
  const actionBtn = document.getElementById('dynamic-btn-whatsapp');
  if (actionBtn) {
    actionBtn.onclick = () => window.checkoutDynamicWhatsApp(productId);
  }
  
  // Open the modal
  window.abrirModal('product-modal');
};

// --- DYNAMIC CHECKOUT REDIRECT ---
window.checkoutDynamicWhatsApp = function(productId) {
  const sel = selections[productId];
  if (!sel) return;
  
  const phoneNumber = '5519991101326';
  
  let message = `Olá, Barbieri Tech! Gostaria de encomendar um item da categoria:\n`;
  message += `*${sel.categoryTitle}*\n\n`;
  
  if (sel.model) message += `- *Modelo:* ${sel.model}\n`;
  
  if (productId === 'macbook' && sel.screenSize) {
    message += `- *Tamanho de Tela:* ${sel.screenSize}\n`;
  }
  
  if (productId === 'watch') {
    if (sel.caseSize) message += `- *Tamanho da Caixa:* ${sel.caseSize}\n`;
    if (sel.model === 'Apple Watch Ultra 2' && sel.strap) {
      message += `- *Pulseira:* ${sel.strap}\n`;
    }
  }
  
  if (sel.color) message += `- *Cor:* ${sel.color}\n`;
  
  if (productId !== 'airpods' && sel.storage) {
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
  window.fecharModal('product-modal');
};

// --- UPDATE INDEX PAGE CARDS DYNAMICALLY ---
function updateCatalogUI() {
  products.forEach(p => {
    const card = document.getElementById('card-' + p.id);
    if (!card) return;
    
    // Update badge
    const badge = card.querySelector('.product-card-badge, .product-badge');
    if (badge && p.badge) {
      badge.textContent = p.badge;
    }
    
    // Update image
    const img = card.querySelector('.product-img');
    if (img && p.img) {
      img.src = p.img;
      img.alt = p.title;
    }
    
    // Update title
    const title = card.querySelector('.product-title');
    if (title && p.title) {
      title.textContent = p.title;
    }
    
    // Update description
    const desc = card.querySelector('.product-desc');
    if (desc && p.desc) {
      desc.textContent = p.desc;
    }
    
    // Update starting price (minimum price of models)
    const startPrice = p.basePrice || (p.models && p.models.length > 0 ? p.models[0].price : 0);
    const originalPrice = p.originalPrice || (startPrice * 1.15);
    
    const priceEl = card.querySelector('.product-price:not(.original)');
    if (priceEl) {
      priceEl.textContent = startPrice.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    }
    
    const originalPriceEl = card.querySelector('.product-price.original');
    if (originalPriceEl) {
      originalPriceEl.textContent = originalPrice.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    }
  });
}

// --- FETCH PRODUCTS JSON DATABASE ---
async function loadProducts() {
  try {
    const res = await fetch('products.json');
    if (!res.ok) throw new Error('Falha ao obter base de produtos.');
    products = await res.json();
    console.log('Catálogo de produtos carregado da base local.');
  } catch (err) {
    console.warn('Erro ao ler products.json remoto, carregando fallback local:', err);
    products = fallbackProducts;
  }
  
  // Initialize selections state for all loaded products
  products.forEach(p => initSelections(p));
  
  // Render initial card prices and text
  updateCatalogUI();
}

// --- DOM CONTENT LOADED INITIALIZATIONS ---
document.addEventListener('DOMContentLoaded', () => {
  // Load products dynamic configuration database
  loadProducts();
  
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
