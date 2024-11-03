const lightDarkSwitchBtn = document.getElementById("lightDarkMode");
const logos = document.querySelectorAll("img[id='logo']");

// Function to set theme
const setTheme = (isDark) => {
    document.body.classList.toggle("dark-theme", isDark);
    localStorage.setItem("theme", isDark ? "true" : "false");

    // Set logo and icon based on theme
    if(lightDarkSwitchBtn){
        logos.forEach(img => img.src = isDark ? "src/images/logo.png" : "src/images/logoLight.png");
        lightDarkSwitchBtn.className = !isDark ? "bx bx-moon" : "bx bx-sun";
    }
    else if(logos){
        logos.forEach(img => img.src = isDark ? "src/images/logo.png" : "src/images/logoLight.png");
    }
};

// Apply stored theme on page load
setTheme(localStorage.getItem("theme") === "true");

// Toggle theme on button click
if(lightDarkSwitchBtn){
    lightDarkSwitchBtn.addEventListener("click", () => {
        setTheme(!document.body.classList.contains("dark-theme"));
    });
}
