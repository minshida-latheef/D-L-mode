// Get the button
const themeButton = document.getElementById("themeButton");

// Add click event
themeButton.addEventListener("click", function () {

    // Add or remove the dark class
    document.body.classList.toggle("dark");

    // Change button text
    if (document.body.classList.contains("dark")) {
        themeButton.textContent = "☀️ Light Mode";
    } else {
        themeButton.textContent = "🌙 Dark Mode";
    }
});