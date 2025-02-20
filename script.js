document.addEventListener("DOMContentLoaded", function () {

    // 🔢 Rolling Counter Effect for Book Count
    function animateCounter(id, target) {
        let counter = document.getElementById(id);
        let count = 0;
        let interval = setInterval(() => {
            count += Math.ceil(target / 100);
            counter.textContent = count;
            if (count >= target) {
                counter.textContent = target;
                clearInterval(interval);
            }
        }, 30);
    }

    animateCounter("twentieth-century", 300);
    animateCounter("twenty-first-century", 200);

    document.addEventListener("DOMContentLoaded", function() {
        const patterns = document.querySelectorAll(".radial-pattern");
    
        patterns.forEach(pattern => {
            const dotCount = parseInt(pattern.getAttribute("data-dots")) || 20; // Default: 20 dots
            createRadialDots(pattern, dotCount);
        });
    
        function createRadialDots(container, totalDots) {
            const centerX = container.offsetWidth / 2;
            const centerY = container.offsetHeight / 2;
            const rings = Math.ceil(totalDots / 8); // Auto-calculating rings
            const spacing = centerX / rings; // Dynamically adjust spacing
    
            for (let ring = 1; ring <= rings; ring++) {
                const dotsInRing = Math.min(totalDots, 8 * ring); // Limit dots per ring
                const radius = ring * spacing;
    
                for (let i = 0; i < dotsInRing; i++) {
                    const angle = (i / dotsInRing) * (Math.PI * 2); // Evenly space dots
                    const x = centerX + radius * Math.cos(angle);
                    const y = centerY + radius * Math.sin(angle);
    
                    const dot = document.createElement("div");
                    dot.classList.add("dot");
                    dot.style.left = `${x}px`;
                    dot.style.top = `${y}px`;
    
                    container.appendChild(dot);
                }
            }
        }
    });
    

    // 📚 Horizontal Scroll on Book Wheel   
    document.addEventListener("DOMContentLoaded", function () {
        let booksWrapper = document.querySelector(".books-wrapper");
    
        window.addEventListener("wheel", (event) => {
            if (event.deltaY !== 0) {
                event.preventDefault();
                booksWrapper.scrollLeft += event.deltaY * 2; // Adjust speed by changing multiplier
            }
        }, { passive: false });
    });
    
    // 🔍 Search Banned Books
    function searchBook() {
        let input = document.getElementById("search-input").value.toLowerCase();
        let resultsDiv = document.getElementById("search-results");

        // Example Data (Replace with your dataset)
        let bannedBooks = {
            "1984": { bannedIn: ["USSR", "China"], reason: "Political Ideology" },
            "Harry Potter": { bannedIn: ["UAE"], reason: "Witchcraft Allegations" }
        };

        if (bannedBooks[input]) {
            resultsDiv.innerHTML = `
                <p><strong>${input}</strong></p>
                <p>🚫 Banned in: ${bannedBooks[input].bannedIn.join(", ")}</p>
                <p>❌ Reason: ${bannedBooks[input].reason}</p>
            `;
        } else {
            resultsDiv.innerHTML = "❌ No data available for this book.";
        }
    }

    window.searchBook = searchBook; // Expose function globally for button click
});
