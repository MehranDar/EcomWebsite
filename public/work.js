
  function showSection(sectionId) {
      let sections = document.getElementsByClassName("content-section");
      for (let i = 0; i < sections.length; i++) {
          sections[i].classList.add("hidden");
      }
      document.getElementById(sectionId).classList.remove("hidden");
  }
  let slides = document.querySelectorAll("img[id^='slide']");
        let texts = document.querySelectorAll("div[id^='text']");
        let currentIndex = 0;

        function showSlide(newIndex) {
            // Hide current slide and text
            slides[currentIndex].classList.remove("translate-x-0", "opacity-100");
            slides[currentIndex].classList.add("translate-x-full", "opacity-0");

            texts[currentIndex].classList.remove("opacity-100");
            texts[currentIndex].classList.add("opacity-0");

            // Show new slide and text
            slides[newIndex].classList.remove("translate-x-full", "opacity-0");
            slides[newIndex].classList.add("translate-x-0", "opacity-100");

            texts[newIndex].classList.remove("opacity-0");
            texts[newIndex].classList.add("opacity-100");

            currentIndex = newIndex;
        }

        function nextSlide() {
            let newIndex = (currentIndex + 1) % slides.length;
            showSlide(newIndex);
        }

        function prevSlide() {
            let newIndex = (currentIndex - 1 + slides.length) % slides.length;
            showSlide(newIndex);
        }
 
        const products = [
            { id: 1, name: "Wireless Headphones", price: "$49.99", image: "https://images.pexels.com/photos/1335463/pexels-photo-1335463.jpeg?auto=compress&cs=tinysrgb&w=600" },
            { id: 2, name: "Smartphone", price: "$599.99", image: "https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=600" },
            { id: 3, name: "Gaming Mouse", price: "$29.99", image: "https://images.pexels.com/photos/2115256/pexels-photo-2115256.jpeg?auto=compress&cs=tinysrgb&w=600" },
            { id: 4, name: "Mechanical Keyboard", price: "$89.99", image: "https://images.pexels.com/photos/2115257/pexels-photo-2115257.jpeg?auto=compress&cs=tinysrgb&w=600" },
            { id: 5, name: "Smartwatch", price: "$199.99", image: "https://images.pexels.com/photos/609771/pexels-photo-609771.jpeg?auto=compress&cs=tinysrgb&w=600" },
            { id: 6, name: "Bluetooth Speaker", price: "$39.99", image: "https://images.pexels.com/photos/1040950/pexels-photo-1040950.jpeg?auto=compress&cs=tinysrgb&w=600" },
            { id: 7, name: "Laptop", price: "$899.99", image: "https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg?auto=compress&cs=tinysrgb&w=600" },
            { id: 8, name: "DSLR Camera", price: "$499.99", image: "https://images.pexels.com/photos/51383/photo-camera-subject-photographer-51383.jpeg?auto=compress&cs=tinysrgb&w=600" },
            { id: 9, name: "Fitness Tracker", price: "$59.99", image: "https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=600" },
            { id: 10, name: "4K Monitor", price: "$349.99", image: "https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=600" },
            { id: 11, name: "External Hard Drive", price: "$79.99", image: "https://images.pexels.com/photos/4237476/pexels-photo-4237476.jpeg?auto=compress&cs=tinysrgb&w=600" },
            { id: 12, name: "VR Headset", price: "$299.99", image: "https://images.pexels.com/photos/685321/pexels-photo-685321.jpeg?auto=compress&cs=tinysrgb&w=600" },
            { id: 13, name: "Graphics Card", price: "$699.99", image: "https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=600" },
            { id: 14, name: "Portable Charger", price: "$24.99", image: "https://images.pexels.com/photos/3783471/pexels-photo-3783471.jpeg?auto=compress&cs=tinysrgb&w=600" },
            { id: 15, name: "Action Camera", price: "$149.99", image: "https://images.pexels.com/photos/370717/pexels-photo-370717.jpeg?auto=compress&cs=tinysrgb&w=600" },
            { id: 16, name: "Noise Cancelling Earbuds", price: "$129.99", image: "https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=600" },
            { id: 21, name: "Slim Fit Jeans", price: "$59.99", image: "https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg?auto=compress&cs=tinysrgb&w=600", description: "Dark blue slim fit jeans hanging against a rustic wall, offering a stylish and comfortable fit." },
            { id: 22, name: "Ripped Denim Jeans", price: "$69.99", image: "https://images.pexels.com/photos/1142984/pexels-photo-1142984.jpeg?auto=compress&cs=tinysrgb&w=600", description: "Trendy ripped denim jeans laid out on a wooden floor, perfect for a bold casual look." },
        ];

  
       const container = document.getElementById("productContainer");
container.classList.add(
    "grid", "grid-cols-1", "sm:grid-cols-2", "md:grid-cols-3", "lg:grid-cols-3", 
    "gap-6", "justify-center"
);

products.forEach((product) => {
    const div = document.createElement("div");
    div.classList.add(
        "product", "max-w-[380px]", "mx-auto", "p-5", "bg-white", "rounded-xl", 
        "shadow-md", "transition-all", "duration-300", "transform", 
        "hover:-translate-y-3", "hover:shadow-xl"
    );

    div.innerHTML = `
        <div class="relative overflow-hidden rounded-lg group">
            <!-- Image -->
            <img src="${product.image}" alt="${product.name}" 
                class="w-full h-64 object-cover rounded-lg transition-transform duration-500 group-hover:scale-110 group-hover:blur-sm">
            <div class="absolute inset-0 bg-black bg-opacity-10 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>

            <!-- "New Arrival" Tag -->
            <div class="absolute top-4 right-4 bg-gradient-to-r from-blue-500 to-purple-600 
                        text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md 
                        opacity-0 transition-opacity duration-500 delay-200 group-hover:opacity-100">
                New Arrival
            </div>
        </div>

        <!-- Product Details -->
        <div class="p-4 text-center">
            <h3 class="text-lg font-semibold text-gray-900 truncate">${product.name}</h3>
            <p class="text-indigo-600 font-bold text-xl my-2">${product.price}</p>

            <button class="mt-4 w-full bg-blue-500 text-white px-5 py-3 rounded-lg 
                          font-semibold shadow-md hover:bg-blue-600 transition-all 
                          duration-300 hover:shadow-lg">
                Add to Cart
            </button>
        </div>
    `;

    container.appendChild(div);
});

        