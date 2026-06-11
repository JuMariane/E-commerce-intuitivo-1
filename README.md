# 🚀 Barbieri Tech - E-commerce Premium & Landing Page

Esse é o meu primeiro projeto profissional na prática! Uma landing page focada em conversão para uma loja de produtos Apple e wearables, feita com UI/UX de alto padrão e código limpo.

A ideia aqui é fugir daquele catálogo estático sem graça. O site foi pensado para dar a mesma sensação de navegar no site oficial da Apple, guiando o cliente direto para o fechamento da compra no WhatsApp.

## 🎯 O Problema e a Solução
Vender produto premium exige confiança visual. Para quebrar as objeções do cliente logo de cara, implementei:
1. **Hero Section com Vídeo:** Um vídeo imersivo com efeito de scroll-zoom para segurar a atenção no primeiro segundo.
2. **Navegação por Famílias:** Sem poluição visual. Os produtos estão agrupados de forma inteligente (Linha iPhone, Linha MacBook, etc).
3. **Modais Dinâmicos:** O cliente clica em "Configurar", escolhe o modelo e a cor, e a foto do aparelho atualiza na hora.

## ⚡ Principais Funcionalidades
* **Troca de Imagens em Tempo Real:** Nada de recarregar a página. O JS atualiza o DOM instantaneamente quando o usuário seleciona as opções do aparelho.
* **Gatilhos de Venda:** Selos de Frete Grátis, Brinde Exclusivo e Nota 5.0 no Google bem visíveis para gerar autoridade.
* **Checkout no WhatsApp:** O botão de compra manda uma mensagem pré-configurada direto pro vendedor, com todas as especificações que o cliente marcou no modal.

## 🛠️ Tecnologias Utilizadas
Código feito na mão, sem frameworks pesados, garantindo que o site carregue rápido até no 3G:
* **HTML5:** Semântico e estruturado.
* **CSS3:** Mobile-first, variáveis de ambiente, paleta *Dark Premium* e transições suaves.
* **JavaScript (Vanilla):** Lógica simples e eficiente para manipulação de DOM (abrir/fechar modais e trocar links de imagens).

## 📂 Organização das Mídias (`assets/`)
Para o repositório não virar bagunça e ser escalável, os arquivos estão divididos assim:
- `/geral/`: Elementos de layout fixos e vídeos (ex: `videoplayback.mp4`).
- `/categorias/`: Imagens de capa que ilustram os cards da vitrine.
- `/modelos/`: Fotos específicas de cada modelo exibido dentro dos Modais.

## 🚀 Como Rodar o Projeto
1. Faça o clone do repositório:
   ```bash
   git clone [https://github.com/JuMariane/E-commerce-intuitivo-1.git](https://github.com/JuMariane/E-commerce-intuitivo-1.git)
