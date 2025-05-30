fetch('akeas_products.json')
  .then(response => response.json())
  .then(products => {
    const container = document.getElementById('products-container');
    container.innerHTML = '';

    products.forEach(product => {
      const productEl = document.createElement('div');
      productEl.className = 'produit card';  // ajout classe 'card' pour styliser mieux
      productEl.innerHTML = `
        <img src="${product.image}" alt="${product.name}" class="card-img" />
        <div class="card-content">
          <h3 class="card-title">${product.name}</h3>
          <p class="card-desc">${product.description}</p>
          <a href="https://wa.me/1234567890?text=Bonjour,%20je%20suis%20intéressé%20par%20le%20produit%20${encodeURIComponent(product.name)}" 
             class="btn btn-whatsapp" target="_blank" rel="noopener noreferrer">
            Commander via WhatsApp
          </a>
        </div>
      `;
      container.appendChild(productEl);
    });
  })
  .catch(err => {
    console.error('Erreur chargement produits:', err);
    document.getElementById('products-container').innerHTML = '<p>Impossible de charger les produits.</p>';
  });
