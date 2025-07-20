// Sample product data (50 products)
const products = [
    {
        id: 1,
        name: "iPhone 15 Pro",
        price: 999.99,
        category: "electronics",
        description: "The latest iPhone with A16 Bionic chip, 48MP camera, and Dynamic Island.",
        image: "images/iphone15.jpg"
    },
    {
        id: 2,
        name: "Samsung Galaxy S23 Ultra",
        price: 1199.99,
        category: "electronics",
        description: "Powerful Android smartphone with 200MP camera and S Pen support.",
        image: "images/samsung-s23.jpg"
    },
    {
        id: 3,
        name: "Sony WH-1000XM5 Headphones",
        price: 399.99,
        category: "electronics",
        description: "Industry-leading noise cancellation with exceptional sound quality.",
        image: "images/sony-headphones.jpg"
    },
    {
        id: 4,
        name: "MacBook Pro 16-inch",
        price: 2499.99,
        category: "electronics",
        description: "Powerful laptop with M2 Pro chip, 16GB RAM, and 1TB SSD.",
        image: "images/macbook-pro.jpg"
    },
    {
        id: 5,
        name: "Nike Air Jordan 1",
        price: 129.99,
        category: "clothing",
        description: "Classic basketball sneakers with iconic design and comfortable fit.",
        image: "images/jordan1.jpg"
    },
    {
        id: 6,
        name: "Levi's 501 Original Fit Jeans",
        price: 69.99,
        category: "clothing",
        description: "Classic straight leg jeans with button fly and timeless style.",
        image: "images/levis501.jpg"
    },
    {
        id: 7,
        name: "The Lean Startup by Eric Ries",
        price: 14.99,
        category: "books",
        description: "Essential reading for entrepreneurs on how to build a successful startup.",
        image: "images/lean-startup.jpg"
    },
    {
        id: 8,
        name: "Instant Pot Duo 7-in-1",
        price: 89.99,
        category: "home",
        description: "Multi-functional pressure cooker that replaces 7 kitchen appliances.",
        image: "images/instant-pot.jpg"
    },
    {
        id: 9,
        name: "Dyson V15 Detect Vacuum",
        price: 699.99,
        category: "home",
        description: "Cordless vacuum with laser dust detection and powerful suction.",
        image: "images/dyson-v15.jpg"
    },
    {
        id: 10,
        name: "Apple Watch Series 8",
        price: 399.99,
        category: "electronics",
        description: "Advanced health monitoring with ECG, blood oxygen, and temperature sensors.",
        image: "images/apple-watch.jpg"
    },
    {
        id: 11,
        name: "Adidas Ultraboost 22",
        price: 179.99,
        category: "clothing",
        description: "Running shoes with responsive cushioning and energy return.",
        image: "images/ultraboost.jpg"
    },
    {
        id: 12,
        name: "Kindle Paperwhite",
        price: 139.99,
        category: "electronics",
        description: "Waterproof e-reader with glare-free 6.8\" display and adjustable warm light.",
        image: "images/kindle.jpg"
    },
    {
        id: 13,
        name: "Nespresso Vertuo Next",
        price: 179.99,
        category: "home",
        description: "Coffee machine with centrifusion technology for barista-quality coffee.",
        image: "images/nespresso.jpg"
    },
    {
        id: 14,
        name: "Atomic Habits by James Clear",
        price: 11.99,
        category: "books",
        description: "Proven framework for building good habits and breaking bad ones.",
        image: "images/atomic-habits.jpg"
    },
    {
        id: 15,
        name: "North Face Denali Jacket",
        price: 199.99,
        category: "clothing",
        description: "Classic fleece jacket with durable water-repellent finish.",
        image: "images/north-face.jpg"
    },
    {
        id: 16,
        name: "PlayStation 5",
        price: 499.99,
        category: "electronics",
        description: "Next-gen gaming console with ultra-high speed SSD and 4K graphics.",
        image: "images/ps5.jpg"
    },
    {
        id: 17,
        name: "Bose QuietComfort 45",
        price: 329.99,
        category: "electronics",
        description: "Premium noise-cancelling headphones with balanced audio performance.",
        image: "images/bose-qc45.jpg"
    },
    {
        id: 18,
        name: "Calvin Klein T-Shirt Pack",
        price: 39.99,
        category: "clothing",
        description: "3-pack of classic fit cotton t-shirts in assorted colors.",
        image: "images/ck-tshirt.jpg"
    },
    {
        id: 19,
        name: "Ninja Foodi Grill",
        price: 229.99,
        category: "home",
        description: "Indoor grill that air fries, roasts, bakes, and dehydrates.",
        image: "images/ninja-foodi.jpg"
    },
    {
        id: 20,
        name: "Dune by Frank Herbert",
        price: 9.99,
        category: "books",
        description: "Science fiction masterpiece set in a distant future amidst a feudal interstellar society.",
        image: "images/dune.jpg"
    },
    {
        id: 21,
        name: "Ray-Ban Aviator Sunglasses",
        price: 159.99,
        category: "clothing",
        description: "Classic aviator style with UV protection lenses and metal frame.",
        image: "images/rayban-aviator.jpg"
    },
    {
        id: 22,
        name: "GoPro HERO11 Black",
        price: 499.99,
        category: "electronics",
        description: "Action camera with 5.3K video, HyperSmooth 5.0 stabilization, and waterproof design.",
        image: "images/gopro11.jpg"
    },
    {
        id: 23,
        name: "All-Clad Stainless Steel Cookware Set",
        price: 799.99,
        category: "home",
        description: "10-piece set of professional-grade stainless steel pots and pans.",
        image: "images/all-clad.jpg"
    },
    {
        id: 24,
        name: "Lululemon Align Leggings",
        price: 98.00,
        category: "clothing",
        description: "Buttery-soft leggings with high-rise waist for yoga and everyday wear.",
        image: "images/lululemon-leggings.jpg"
    },
    {
        id: 25,
        name: "Breville Barista Express",
        price: 699.99,
        category: "home",
        description: "Espresso machine with built-in conical burr grinder for cafe-quality coffee at home.",
        image: "images/breville.jpg"
    },
    {
        id: 26,
        name: "Sapiens by Yuval Noah Harari",
        price: 12.99,
        category: "books",
        description: "Brief history of humankind exploring the evolution of our species.",
        image: "images/sapiens.jpg"
    },
    {
        id: 27,
        name: "Fitbit Charge 5",
        price: 149.99,
        category: "electronics",
        description: "Advanced fitness tracker with stress management tools and built-in GPS.",
        image: "images/fitbit-charge5.jpg"
    },
    {
        id: 28,
        name: "Patagonia Nano Puff Jacket",
        price: 229.00,
        category: "clothing",
        description: "Lightweight, water-resistant insulated jacket made with recycled materials.",
        image: "images/patagonia-nano.jpg"
    },
    {
        id: 29,
        name: "Vitamix 5200 Blender",
        price: 449.99,
        category: "home",
        description: "Professional-grade blender with 64-ounce container and powerful motor.",
        image: "images/vitamix.jpg"
    },
    {
        id: 30,
        name: "The Silent Patient by Alex Michaelides",
        price: 10.99,
        category: "books",
        description: "Psychological thriller about a woman who shoots her husband and then stops speaking.",
        image: "images/silent-patient.jpg"
    },
    {
        id: 31,
        name: "AirPods Pro (2nd Generation)",
        price: 249.99,
        category: "electronics",
        description: "Active Noise Cancellation, Adaptive Transparency, and personalized Spatial Audio.",
        image: "images/airpods-pro.jpg"
    },
    {
        id: 32,
        name: "Yeti Rambler 20oz Tumbler",
        price: 34.99,
        category: "home",
        description: "Double-wall vacuum insulated stainless steel tumbler with MagSlider lid.",
        image: "images/yeti-tumbler.jpg"
    },
    {
        id: 33,
        name: "Ralph Lauren Polo Shirt",
        price: 89.99,
        category: "clothing",
        description: "Classic fit pique polo featuring the iconic pony logo.",
        image: "images/ralph-lauren.jpg"
    },
    {
        id: 34,
        name: "Xbox Series X",
        price: 499.99,
        category: "electronics",
        description: "Next-gen gaming console with 12 teraflops of processing power.",
        image: "images/xbox-seriesx.jpg"
    },
    {
        id: 35,
        name: "Cuisinart Food Processor",
        price: 199.99,
        category: "home",
        description: "14-cup capacity with stainless steel blades for slicing, shredding, and chopping.",
        image: "images/cuisinart.jpg"
    },
    {
        id: 36,
        name: "The Midnight Library by Matt Haig",
        price: 13.99,
        category: "books",
        description: "Novel about a library between life and death where each book represents a different life path.",
        image: "images/midnight-library.jpg"
    },
    {
        id: 37,
        name: "UGG Classic Short Boots",
        price: 149.99,
        category: "clothing",
        description: "Iconic sheepskin boots with suede outer and soft wool lining.",
        image: "images/ugg-boots.jpg"
    },
    {
        id: 38,
        name: "Dell XPS 15 Laptop",
        price: 1599.99,
        category: "electronics",
        description: "15.6\" 4K touchscreen, Intel Core i7, 16GB RAM, 512GB SSD.",
        image: "images/dell-xps.jpg"
    },
    {
        id: 39,
        name: "KitchenAid Stand Mixer",
        price: 429.99,
        category: "home",
        description: "5-quart tilt-head stand mixer with 10-speed control.",
        image: "images/kitchenaid.jpg"
    },
    {
        id: 40,
        name: "Where the Crawdads Sing by Delia Owens",
        price: 11.99,
        category: "books",
        description: "Mystery and romance novel about a woman who raised herself in the marshes of North Carolina.",
        image: "images/crawdads.jpg"
    },
    {
        id: 41,
        name: "Nintendo Switch OLED",
        price: 349.99,
        category: "electronics",
        description: "Handheld gaming console with 7-inch OLED screen and 64GB storage.",
        image: "images/switch-oled.jpg"
    },
    {
        id: 42,
        name: "Allbirds Wool Runners",
        price: 110.00,
        category: "clothing",
        description: "Comfortable sneakers made from natural merino wool and sustainable materials.",
        image: "images/allbirds.jpg"
    },
    {
        id: 43,
        name: "Lodge Cast Iron Skillet",
        price: 29.99,
        category: "home",
        description: "10.25-inch pre-seasoned cast iron skillet for stovetop and oven use.",
        image: "images/lodge-skillet.jpg"
    },
    {
        id: 44,
        name: "Project Hail Mary by Andy Weir",
        price: 14.99,
        category: "books",
        description: "Science fiction novel about a lone astronaut who must save the earth from disaster.",
        image: "images/hail-mary.jpg"
    },
    {
        id: 45,
        name: "Sony A7 IV Camera",
        price: 2499.99,
        category: "electronics",
        description: "Full-frame mirrorless camera with 33MP sensor and 4K 60p video.",
        image: "images/sony-a7.jpg"
    },
    {
        id: 46,
        name: "Columbia Fleece Jacket",
        price: 49.99,
        category: "clothing",
        description: "Lightweight fleece jacket with zippered pockets and stand-up collar.",
        image: "images/columbia.jpg"
    },
    {
        id: 47,
        name: "Le Creuset Dutch Oven",
        price: 379.99,
        category: "home",
        description: "5.5-quart enameled cast iron Dutch oven in various colors.",
        image: "images/lecreuset.jpg"
    },
    {
        id: 48,
        name: "Educated by Tara Westover",
        price: 12.99,
        category: "books",
        description: "Memoir about a woman who leaves her survivalist family and goes on to earn a PhD.",
        image: "images/educated.jpg"
    },
    {
        id: 49,
        name: "Bose SoundLink Revolve+",
        price: 299.99,
        category: "electronics",
        description: "Portable Bluetooth speaker with 360-degree sound and 16-hour battery.",
        image: "images/bose-speaker.jpg"
    },
    {
        id: 50,
        name: "Tommy Hilfiger Chino Pants",
        price: 59.99,
        category: "clothing",
        description: "Classic fit chino pants with straight leg and wrinkle-resistant fabric.",
        image: "images/tommy-chinos.jpg"
    }
];

// Save products to localStorage if not already present
if (!localStorage.getItem('products')) {
    localStorage.setItem('products', JSON.stringify(products));
}