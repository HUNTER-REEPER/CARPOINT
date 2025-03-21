document.addEventListener("click", function(event) {
    let searchWrapper = document.querySelector(".search-wrapper");
    let searchBox = document.querySelector(".search-box");
    let searchInput = document.getElementById("search-input");
    let searchIcon = document.getElementById("search-icon");
    let searchButton = document.getElementById("search-button");
    let menuIcon = document.getElementById("menu-icon");
    let navbar = document.querySelector(".navbar");
    let header = document.querySelector("header");
    let navLinks = document.querySelectorAll(".navbar a");
    let searchResultsDiv = document.getElementById("search-results");
    const parts = document.querySelectorAll(".part");
    parts.forEach((part, index) => {
        setTimeout(() => {
            part.style.opacity = "1";
            part.style.transform = "translateY(0)";
        }, index * 150);
    });

    // Event delegation for "Buy Now" buttons
    if (event.target.classList.contains("buy-now-button")) {
        const itemName = event.target.getAttribute("data-name");
        const itemPrice = event.target.getAttribute("data-price");
        window.location.href = `purchase.html?product=${encodeURIComponent(itemName)}&price=${encodeURIComponent(itemPrice)}`;
    }

    // Cart Icon functionality
    const cartIcon = document.querySelector('.cart-icon');
    if (cartIcon) {
        cartIcon.addEventListener('mouseover', () => {
            cartIcon.style.transform = 'scale(1.1)';
        });
        cartIcon.addEventListener('mouseout', () => {
            cartIcon.style.transform = 'scale(1)';
        });
    }

    // Purchase page functionality (if on purchase page)
    if (window.location.pathname.includes("purchase.html")) {
        const payButton = document.querySelector('.pay-button');
        const referrerURL = document.referrer;

        payButton.addEventListener('click', (event) => { // Added event parameter
            if (validateForm()) {
                // You might want to submit the form here, 
                // or perform other actions before redirecting
                window.location.href = referrerURL;
            } else {
                event.preventDefault(); // Prevent form submission
                if (!isValidCardNumber(document.getElementById('card-number').value)) {
                    displayErrorMessage('card-number', 'Invalid card number');
                }
                // You can add more validation checks and error messages here
            }
        });

        function validateForm() {
            let cardholderName = document.getElementById('cardholder-name').value;
            let cardNumber = document.getElementById('card-number').value;
            let expDate = document.getElementById('exp-date').value;
            let cvv = document.getElementById('cvv').value;
            return cardholderName && cardNumber && expDate && cvv;
        }

        function isValidCardNumber(cardNumber) {
            // This is a basic check, you might want to use a more robust 
            // card number validation library or regex
            return /^\d{16}$/.test(cardNumber);
        }

        function displayErrorMessage(fieldId, message) {
            const field = document.getElementById(fieldId);
            let errorSpan = document.getElementById(fieldId + '-error');
            if (!errorSpan) {
                errorSpan = document.createElement('span');
                errorSpan.id = fieldId + '-error';
                errorSpan.style.color = 'red';
                field.parentNode.insertBefore(errorSpan, field.nextSibling);
            }
            errorSpan.textContent = message;
        }
    }

    const websiteData = {
        // ... (Your website data)
    };

    // Toggle Search Bar
    searchIcon.addEventListener("click", function(event) {
        // ... (Your search bar toggle code)
    });

    // Hide Search Bar When Clicking Outside
    document.addEventListener("click", function(event) {
        // ... (Your search bar hiding code)
    });

    function searchHomePage() {
        // ... (Your search function code)
    }

    if (searchButton) {
        searchButton.addEventListener("click", searchHomePage);
    }

    searchInput.addEventListener("keypress", function(event) {
        // ... (Your search input code)
    });

    // Toggle Navbar for Mobile
    menuIcon.addEventListener("click", function() {
        // ... (Your navbar toggle code)
    });

    // Close Navbar When Clicking a Link
    navLinks.forEach(link => {
        // ... (Your navbar link click code)
    });

    // Hide Navbar & Search on Scroll
    window.addEventListener("scroll", function() {
        // ... (Your scroll handling code)
    });

    // Add Shadow to Header on Scroll
    window.addEventListener("scroll", function() {
        // ... (Your header shadow code)
    });
});
document.addEventListener("click", function(event) {
    // ... (Your existing code) ...

    // --- Add the Entrance Animation Code Here ---
    const elements = document.querySelectorAll(
        ".cars-container .box, .about-img, .about-text, .parts-container .box, .blog-container .box"
    );

    function checkElements() {
        elements.forEach((element) => {
            const slideInAt = window.scrollY + window.innerHeight - element.clientHeight / 2;
            const elementBottom = element.offsetTop + element.clientHeight;
            const isHalfShown = slideInAt > element.offsetTop;
            const isNotScrolledPast = window.scrollY < elementBottom;
            if (isHalfShown && isNotScrolledPast) {
                element.classList.add("show");
            } else {
                element.classList.remove("show");
            }
        });
    }

    window.addEventListener("scroll", checkElements);
    // --- End of Entrance Animation Code ---
});