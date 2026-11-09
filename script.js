
// Email validation function
function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

// Contact form validation function
function validateContactForm(name, email, message) {

    if (name.trim() === "") {
        return "Name is required";
    }

    if (!validateEmail(email)) {
        return "Enter a valid email address";
    }

    if (message.trim() === "") {
        return "Message is required";
    }

    return "Form submitted successfully!";
}


// Browser-specific code
// Execute only when running inside a browser

if (typeof document !== "undefined") {

    document.getElementById("contactForm")
        .addEventListener("submit", function(event) {

            event.preventDefault();

            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            const message = document.getElementById("message").value;

            const result = validateContactForm(
                name,
                email,
                message
            );

            document.getElementById("result").textContent = result;
        });

}


// Export functions for Node.js testing
if (typeof module !== "undefined" && module.exports) {

    module.exports = {
        validateEmail,
        validateContactForm
    };

}
