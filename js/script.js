document.addEventListener('DOMContentLoaded', function() {
    // Get products from localStorage
    let products = JSON.parse(localStorage.getItem('products')) || [];
    
    // DOM Elements
    const productGrid = document.getElementById('productGrid');
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.getElementById('searchBtn');
    const categoryBtns = document.querySelectorAll('.category-btn');
    
    // Display all products on page load
    displayProducts(products);
    
    // Search functionality
    searchBtn.addEventListener('click', searchProducts);
    searchInput.addEventListener('keyup', function(e) {
        if (e.key === 'Enter') {
            searchProducts();
        }
    });
    
    // Category filtering
    categoryBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Update active button
            categoryBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            const category = this.dataset.category;
            filterProducts(category);
        });
    });
    
    // Check if we're on the product details page
    if (window.location.pathname.includes('product.html')) {
        displayProductDetails();
    }
    
    // Function to display products
    function displayProducts(productsToDisplay) {
        productGrid.innerHTML = '';
        
        if (productsToDisplay.length === 0) {
            productGrid.innerHTML = '<p class="no-products">No products found. Try a different search.</p>';
            return;
        }
        
        productsToDisplay.forEach(product => {
            const productCard = document.createElement('div');
            productCard.className = 'product-card';
            productCard.innerHTML = `
                <img src="${product.image}" alt="${product.name}" class="product-image">
                <div class="product-info">
                    <h3 class="product-title">${product.name}</h3>
                    <p class="product-price">$${product.price.toFixed(2)}</p>
                    <p class="product-description">${product.description}</p>
                    <a href="product.html?id=${product.id}" class="view-btn">View Details</a>
                </div>
            `;
            productGrid.appendChild(productCard);
        });
    }
    
    // Function to search products
    function searchProducts() {
        const searchTerm = searchInput.value.toLowerCase();
        const filteredProducts = products.filter(product => 
            product.name.toLowerCase().includes(searchTerm) || 
            product.description.toLowerCase().includes(searchTerm)
        );
        displayProducts(filteredProducts);
    }
    
    // Function to filter by category
    function filterProducts(category) {
        if (category === 'all') {
            displayProducts(products);
            return;
        }
        
        const filteredProducts = products.filter(product => product.category === category);
        displayProducts(filteredProducts);
    }
    
    // Function to display product details
    function displayProductDetails() {
        const urlParams = new URLSearchParams(window.location.search);
        const productId = parseInt(urlParams.get('id'));
        const product = products.find(p => p.id === productId);
        const productDetail = document.getElementById('productDetail');
        
        if (product) {
            productDetail.innerHTML = `
                <div class="detail-image">
                    <img src="${product.image}" alt="${product.name}">
                </div>
                <div class="detail-info">
                    <h1 class="detail-title">${product.name}</h1>
                    <p class="detail-price">$${product.price.toFixed(2)}</p>
                    <span class="detail-category">${product.category.charAt(0).toUpperCase() + product.category.slice(1)}</span>
                    <p class="detail-description">${product.description}</p>
                    <a href="index.html" class="back-btn">Back to Products</a>
                </div>
            `;
        } else {
            productDetail.innerHTML = `
                <div class="error-message">
                    <h2>Product not found</h2>
                    <p>The product you're looking for doesn't exist or has been removed.</p>
                    <a href="index.html" class="back-btn">Back to Products</a>
                </div>
            `;
        }
    }
});