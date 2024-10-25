//toggle SignUp form
const signUpForm = document.getElementById('signUp');

const toggleSignUp = event => {
    if(signUpForm.classList.contains('d-none')){
        signUpForm.classList.remove('d-none');
    }
    else{
        signUpForm.classList.add('d-none');
    }
}
const getPlans = document.getElementsByClassName('getPlan');
Array.from(getPlans).forEach(btn => {
    btn.addEventListener('click', toggleSignUp);
})


//SignUp form
const arrowBack = document.getElementById("arrowBack");
arrowBack.onclick = toggleSignUp;

function validatePasswords() {
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const errorMessage = document.getElementById("error-message");
  
    if (password !== confirmPassword) {
      errorMessage.innerHTML = "Passwords do not match. Try again!";
      errorMessage.style.display = "block";
      return false; // Prevent form submission
    } else {
      errorMessage.style.display = "none"; // Hide error message
      return true; // Allow form submission
    } 
  }
  