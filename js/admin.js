document.addEventListener('DOMContentLoaded', function() {
    // Get products from localStorage
    let products = JSON.parse(localStorage.getItem('products')) || [];
    const adminProductTable = document.getElementById('adminProductTable');
    const productForm = document.getElementById('productForm');
    const addProductBtn = document.getElementById('addProductBtn');
    const productModal = document.getElementById('productModal');
    const modalTitle = document.getElementById('modalTitle');
    const closeBtn = document.querySelector('.close-btn');
    const adminSearch = document.getElementById('adminSearch');
    const categoryFilter = document.getElementById('categoryFilter');
    
    // Display all products in admin table
    displayAdminProducts(products);
    
    // Add product button click
    addProductBtn.addEventListener('click', () => {
        productForm.reset();
        document.getElementById('productId').value = '';
        modalTitle.textContent = 'Add New Product';
        productModal.style.display = 'flex';
    });
    
    // Close modal
    closeBtn.addEventListener('click', () => {
        productModal.style.display = 'none';
    });
    
    // Close modal when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === productModal) {
            productModal.style.display = 'none';
        }
    });
    
    // Form submission
    productForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const productId = document.getElementById('productId').value;
        const productData = {
            name: document.getElementById('productName').value,
            price: parseFloat(document.getElementById('productPrice').value),
            category: document.getElementById('productCategory').value,
            description: document.getElementById('productDescription').value,
            image: document.getElementById('productImage').value
        };
        
        if (productId) {
            // Edit existing product
            const index = products.findIndex(p => p.id === parseInt(productId));
            if (index !== -1) {
                products[index] = { ...products[index], ...productData };
            }
        } else {
            // Add new product
            const newId = products.length > 0 ? Math.max(...products.map(p => p.id)) + 1 : 1;
            products.push({ id: newId, ...productData });
        }
        
        // Save to localStorage
        localStorage.setItem('products', JSON.stringify(products));
        
        // Refresh table and close modal
        displayAdminProducts(products);
        productModal.style.display = 'none';
    });
    
    // Search and filter in admin
    adminSearch.addEventListener('input', filterAdminProducts);
    categoryFilter.addEventListener('change', filterAdminProducts);
    
    // Function to display products in admin table
    function displayAdminProducts(productsToDisplay) {
        adminProductTable.innerHTML = '';
        
        productsToDisplay.forEach(product => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${product.id}</td>
                <td><img src="${product.image}" alt="${product.name}"></td>
                <td>${product.name}</td>
                <td>$${product.price.toFixed(2)}</td>
                <td>${product.category.charAt(0).toUpperCase() + product.category.slice(1)}</td>
                <td class="action-btns">
                    <button class="btn-edit" data-id="${product.id}">Edit</button>
                    <button class="btn-delete" data-id="${product.id}">Delete</button>
                </td>
            `;
            adminProductTable.appendChild(row);
        });
        
        // Add event listeners to edit and delete buttons
        document.querySelectorAll('.btn-edit').forEach(btn => {
            btn.addEventListener('click', editProduct);
        });
        
        document.querySelectorAll('.btn-delete').forEach(btn => {
            btn.addEventListener('click', deleteProduct);
        });
    }
    
    // Function to edit product
    function editProduct(e) {
        const productId = parseInt(e.target.dataset.id);
        const product = products.find(p => p.id === productId);
        
        if (product) {
            document.getElementById('productId').value = product.id;
            document.getElementById('productName').value = product.name;
            document.getElementById('productPrice').value = product.price;
            document.getElementById('productCategory').value = product.category;
            document.getElementById('productDescription').value = product.description;
            document.getElementById('productImage').value = product.image;
            
            modalTitle.textContent = 'Edit Product';
            productModal.style.display = 'flex';
        }
    }
    
    // Function to delete product
    function deleteProduct(e) {
        if (confirm('Are you sure you want to delete this product?')) {
            const productId = parseInt(e.target.dataset.id);
            products = products.filter(p => p.id !== productId);
            
            // Save to localStorage
            localStorage.setItem('products', JSON.stringify(products));
            
            // Refresh table
            displayAdminProducts(products);
        }
    }
    
    // Function to filter products in admin
    function filterAdminProducts() {
        const searchTerm = adminSearch.value.toLowerCase();
        const category = categoryFilter.value;
        
        let filteredProducts = products;
        
        if (category !== 'all') {
            filteredProducts = filteredProducts.filter(p => p.category === category);
        }
        
        if (searchTerm) {
            filteredProducts = filteredProducts.filter(p => 
                p.name.toLowerCase().includes(searchTerm) || 
                p.description.toLowerCase().includes(searchTerm)
            );
        }
        
        displayAdminProducts(filteredProducts);
    }
});