document.addEventListener("DOMContentLoaded", function() {
    const bookBtn = document.getElementById("bookDemoBtn");
    const discoverMoreBtn = document.getElementById("discoverMoreBtn");
    const bookingModal = document.getElementById("bookingModal");
    const closeModal = document.getElementById("closeModal");
    const bookingIframe = document.getElementById("bookingIframe");
    const fadeInElements = document.querySelectorAll(".fade-in");


    // Open Modal when clicking Book Demo
    bookBtn.addEventListener("click", function() {
        bookingIframe.src = "https://cal.com/workfission";
        bookingModal.style.display = "flex";
    });

    // Close Modal when clicking X
    closeModal.addEventListener("click", function() {
        bookingModal.style.display = "none";
        bookingIframe.src = "";
    });

    // Close Modal when clicking outside the modal
    window.addEventListener("click", function(event) {
        if (event.target === bookingModal) {
            bookingModal.style.display = "none";
            bookingIframe.src = "";
        }
    });

    discoverMoreBtn.addEventListener("click", function() {
        // Calculate position and adjust for navbar height
        const offset = -550; // Adjust based on navbar height (increase if needed)
        const bookBtnPosition = bookBtn.getBoundingClientRect().top + window.scrollY + offset;

        // Smooth scroll to the Book Demo button
        window.scrollTo({
            top: bookBtnPosition,
            behavior: "smooth"
        });

        // Detect when scrolling has stopped
        let lastScrollTop = window.scrollY;
        let checkScroll = setInterval(() => {
            if (Math.abs(window.scrollY - lastScrollTop) < 2) { // If scrolling has stopped
                clearInterval(checkScroll); // Stop checking

                setTimeout(() => { // Small delay to ensure visibility
                    bookBtn.classList.add("highlight");

                    setTimeout(() => {
                        bookBtn.classList.remove("highlight");
                    }, 1200); // Animation duration
                }, 200); // Ensure smooth trigger
            } else {
                lastScrollTop = window.scrollY;
            }
        }, 100); // Check every 100ms
    });

    function fadeInOnScroll() {
        fadeInElements.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight * 1.2) { // Trigger sooner
                el.classList.add("visible");
            }
        });
    }

    window.addEventListener("scroll", fadeInOnScroll);
    fadeInOnScroll(); // Run once on page load
});

