document.addEventListener("DOMContentLoaded", function() {
    const urlParams = new URLSearchParams(window.location.search);
    const query = urlParams.get('query');
    const resultsDiv = document.getElementById('search-results-display');

    if (query) {
        // Simulate search results (replace with your actual search logic)
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

        let results = [];
        let lowerQuery = query.toLowerCase();

        for (let category in websiteData) {
            websiteData[category].forEach(item => {
                if (item.toLowerCase().includes(lowerQuery)) {
                    results.push({ type: category, title: item });
                }
            });
        }

        if (results.length > 0) {
            let formattedResults = results.map(result => `<div style="padding:10px; border-bottom: 1px solid #eee;"><strong>${result.type}:</strong> ${result.title}</div>`).join('');
            resultsDiv.innerHTML = `<div style="border: 1px solid #ddd; padding: 10px; border-radius: 5px;">${formattedResults}</div>`;
        } else {
            resultsDiv.innerHTML = "<div style='padding:10px; border: 1px solid #ddd; border-radius: 5px;'><p>No results found.</p></div>";
        }
    } else {
        resultsDiv.innerHTML = "<p>Please enter a search query.</p>";
    }
});