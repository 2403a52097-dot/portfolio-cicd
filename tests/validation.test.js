
const {
    validateEmail,
    validateContactForm
} = require("../script.js");

const assert = require("node:assert/strict");

// Test 1: Valid email
assert.equal(
    validateEmail("student@gmail.com"),
    true
);

// Test 2: Invalid email
assert.equal(
    validateEmail("studentgmail.com"),
    false
);

// Test 3: Empty name
assert.equal(
    validateContactForm("", "test@gmail.com", "Hello"),
    "Name is required"
);

// Test 4: Invalid email
assert.equal(
    validateContactForm("Student", "wrong-email", "Hello"),
    "Enter a valid email address"
);

// Test 5: Empty message
assert.equal(
    validateContactForm("Student", "test@gmail.com", ""),
    "Message is required"
);

// Test 6: Valid form
assert.equal(
    validateContactForm("Student", "test@gmail.com", "Hello"),
    "Form submitted successfully!"
);

console.log("All 6 unit tests passed successfully!");
