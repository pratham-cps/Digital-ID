if (localStorage.getItem("digital-id-theme") === "light") {
    document.body.classList.add("light-mode");
}


const themeToggle = document.getElementById("theme-toggle");


function updateThemeText() {
    if (document.body.classList.contains("light-mode")) {
        themeToggle.textContent = "🌙 Dark Mode";
    } else {
        themeToggle.textContent = "☀️ Light Mode";
    }
}


if (themeToggle) {
    updateThemeText();

    themeToggle.addEventListener("click", function () {
        document.body.classList.toggle("light-mode");

        if (document.body.classList.contains("light-mode")) {
            localStorage.setItem("digital-id-theme", "light");
        } else {
            localStorage.setItem("digital-id-theme", "dark");
        }

        updateThemeText();
    });
}


if (document.getElementById("about-me")) {
    document.getElementById("about-me").addEventListener("click", function () {
        window.open("about.html", "_blank", "noopener,noreferrer");
    });
}