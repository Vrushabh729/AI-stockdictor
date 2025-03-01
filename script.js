document.addEventListener("DOMContentLoaded", function() {
    // AI Investment Predictions (Dummy Data)
    const predictions = [
        "Stock A: +5% Growth Expected",
        "Stock B: -2% Decline Expected",
        "Stock C: +10% Surge Predicted"
    ];
    document.getElementById("predictions").innerHTML = predictions.join("<br>");

    // Signup Form Handling
    document.getElementById("signupForm").addEventListener("submit", function(event) {
        event.preventDefault();
        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        document.getElementById("message").textContent = `Thank you, ${name}! We'll keep you updated.`;
    });
});
