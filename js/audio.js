const forms = document.querySelectorAll('form');
const formSubmitAudio = new Audio("../src/form_submit.mp3");

forms.forEach(form => {form.addEventListener('submit', event => {
    event.preventDefault();
    if(form.checkValidity()){
        formSubmitAudio.play();
        setTimeout(() => {
            event.target.submit(); // This will submit the form
        }, 1000);
    }
})});