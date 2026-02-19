function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

function showMessage() {
    document.getElementById("message").innerText =
        "Thanks for visiting my portfolio! 🚀";
}