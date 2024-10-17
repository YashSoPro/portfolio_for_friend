// Dark Mode Toggle Functionality
const toggleButton = document.getElementById("toggle-dark-mode");

toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    if (document.body.classList.contains("dark-mode")) {
        toggleButton.textContent = "Light Mode Toggle Karo";
    } else {
        toggleButton.textContent = "Dark Mode Toggle Karo";
    }
});

// Contact Form Submission (Just for demo purposes, no actual submission)
const contactForm = document.getElementById("contact-form");
contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Message sent! (Ab kuch nahi hoga, bas demo hai!)");
    contactForm.reset();
});
