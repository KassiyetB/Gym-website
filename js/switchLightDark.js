//change background color light and dark
const lightDarkBtn = document.getElementById('lightDarkMode');
const body = document.body;
const main = document.querySelector('main');
const cards = document.getElementsByClassName('card');
const footer = document.querySelector('footer');
//const commentBlocks = document.querySelectorAll("dt");
let bgColor = 'dark'; //default color is dark

const toggleBackground = () => {
    // Re-select the comment blocks inside the function
    const commentBlocks = document.querySelectorAll("dt");

    if (bgColor === 'dark') {
        lightDarkBtn.innerHTML = "<i class='bx bx-moon'></i>";
        body.className = 'bg-secondary text-white';
        main.classList.remove('bg-dark');
        main.classList.add('bg-secondary');
        
        commentBlocks.forEach(comment => {
            comment.classList.remove('bg-secondary', 'border-dark');
            comment.classList.add('bg-dark', 'border-secondary');
        });
        
        Array.from(cards).forEach(card => {
            card.classList.remove('bg-secondary');
            card.classList.add('bg-dark');
        });
        
        footer.classList.remove('bg-dark');
        footer.classList.add('bg-secondary');
        bgColor = 'light';
    } else {
        lightDarkBtn.innerHTML = "<i class='bx bx-sun'></i>";
        body.className = 'bg-dark text-white';
        main.classList.remove('bg-secondary');
        main.classList.add('bg-dark');
        
        commentBlocks.forEach(comment => {
            comment.classList.remove('bg-dark', 'border-secondary');
            comment.classList.add('bg-secondary', 'border-dark');
        });
        
        Array.from(cards).forEach(card => {
            card.classList.remove('bg-dark');
            card.classList.add('bg-secondary');
        });
        
        footer.classList.remove('bg-secondary');
        footer.classList.add('bg-dark');
        bgColor = 'dark';
    }
};

lightDarkBtn.onclick = toggleBackground;
document.addEventListener("keydown",function(event) {
    if (event.ctrlKey && event.key === 'q') {
        toggleBackground();
    }
});