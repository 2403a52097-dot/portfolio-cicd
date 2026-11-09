
function validateEmail(email) {
    if (typeof email !== "string" || !email.trim()) {
        return false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return emailPattern.test(email.trim());
}

function validateContactForm(name, email, message) {

    // Validate name
    if (typeof name !== "string" || !name.trim()) {
        return "Name is required";
    }

    // Validate email
    if (!validateEmail(email)) {
        return "Enter a valid email address";
    }

    // Validate message
    if (typeof message !== "string" || !message.trim()) {
        return "Message is required";
    }

    return "Form submitted successfully!";
}

// Export functions for unit testing
module.exports = {
    validateEmail,
    validateContactForm
};
