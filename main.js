document.addEventListener("DOMContentLoaded", function () {
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

    const websiteData = {
        cars: [
            "Porsche Panamera Turbo",
            "Audi R8",
            "Audi R8(TYPE S4)",
            "Audi A8",
            "Audi A5 Sportback",
            "Ford Mustang S550"
        ],
        parts: [
            "V8 engine part",
            "V-twin engine crankshaft",
            "Automobile Parts and Accessories",
            "Cartridge Fuel Filter"
        ],
        blog: [
            "Top 10 Car Maintenance Tips",
            "The History of the Mustang",
            "Choosing the Right Car Parts"
        ],
        about: [
            "Cheap Prices With Quality Cars",
            "Our Mission and Values",
            "Why Choose CarPoint"
        ]
    };

    // ✅ Toggle Search Bar
    searchIcon.addEventListener("click", function (event) {
        event.stopPropagation();
        if (searchBox.style.display === 'none' || searchBox.style.display === '') {
            searchBox.style.display = 'flex';
            searchInput.focus();
        } else {
            searchBox.style.display = 'none';
        }
    });

    // ✅ Hide Search Bar When Clicking Outside
    document.addEventListener("click", function (event) {
        if (!searchWrapper.contains(event.target) && !searchIcon.contains(event.target)) {
            searchBox.style.display = 'none';
        }
    });

    function searchHomePage() {
        let query = searchInput.value.trim().toLowerCase(); // Convert to lowercase for case-insensitive search
        if (query) {
            window.location.href = `search-results.html?query=${encodeURIComponent(query)}`;
        } else {
            alert("Please enter a search query.");
        }
    }

    if (searchButton) {
        searchButton.addEventListener("click", searchHomePage);
    }

    searchInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            event.preventDefault();
            searchHomePage();
        }
    });

    // ✅ Toggle Navbar for Mobile
    menuIcon.addEventListener("click", function () {
        navbar.classList.toggle("active");
        searchBox.style.display = 'none'; // Hide search when toggling navbar
    });

    // ✅ Close Navbar When Clicking a Link
    navLinks.forEach(link => {
        link.addEventListener("click", function () {
            navbar.classList.remove("active");
        });
    });

    // ✅ Hide Navbar & Search on Scroll
    window.addEventListener("scroll", function () {
        navbar.classList.remove("active");
        searchBox.style.display = 'none';
    });

    // ✅ Add Shadow to Header on Scroll
    window.addEventListener("scroll", function () {
        header.classList.toggle("shadow", window.scrollY > 0);
    });
});

function showConfirmation(action, itemName, itemPrice) {
    if (confirm(`Do you want to ${action.toLowerCase()} "${itemName}" or view more cars?`)) {
        if (action === 'Purchase') {
            // Redirect to purchase page, passing item name and price
            window.location.href = `purchase.html?product=${encodeURIComponent(itemName)}&price=${encodeURIComponent(itemPrice)}`;
        } else if (action === 'View Details') {
            // Redirect to details page (replace with actual URL)
            window.location.href = 'details.html';
        }
    } else {
        // Redirect to view more cars (replace with actual URL/action)
        window.location.href = '#cars';
    }
}