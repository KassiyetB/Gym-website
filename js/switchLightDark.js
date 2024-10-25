const lightDarkSwitchBtn = document.getElementById("lightDarkMode");
const logo = document.querySelectorAll("img[id='logo']");
const toggleLightDarkTheme = () =>{
    document.body.classList.toggle("dark-theme");
    localStorage.setItem("theme", document.body.classList.contains("dark-theme"));
}

lightDarkSwitchBtn.addEventListener('click', event =>{
    toggleLightDarkTheme();
    //changing the logo and icons to either sun or moon
    if(document.body.classList.contains("dark-theme")){
        logo.forEach(img => {
            img.src = "src/logo.png";
        });
        event.target.className = "bx bx-moon";
    }
    else{
        logo.forEach(img => {
            img.src = "src/logoLight.png";
        });
        event.target.className = "bx bx-sun";
    }

})