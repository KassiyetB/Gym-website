//user sign up validtaion
document.getElementById("SignUpForm").addEventListener("submit", event => {
    const passwordInput = document.getElementById("password");
    const confirmPasswordInput = document.getElementById("confirmPassword");
    const errorMessage = document.getElementById("error-message");
  
    const password = passwordInput.value;
  
    // Check for password criteria
    const hasLetter = /[a-zA-Z]/.test(password);
    const hasNumber = /\d/.test(password);
    
    // Clear any previous error messages
    errorMessage.innerText = '';
  
    if (!hasLetter) {
        errorMessage.innerText = "Password must include at least one letter.";
        return false;
    } else if (!hasNumber) {
        errorMessage.innerText = "Password must include at least one number.";
        return false;
    } else if (password !== confirmPasswordInput.value) {
        errorMessage.innerText = "Passwords do not match. Try again!";
        return false;
    } else {
        formSubmitAudio.play();
        saveUserInfo();
        event.target.reset();
        signUpWin.classList.add('d-none');
    }
  });
    
  
  //is validation is passed successfully then save the user info to the localStorage
  function saveUserInfo(){
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
  
    const user = {
      name,
      email,
      password,
      plan: "",
      trainer: false
    };
  
    localStorage.setItem("user", JSON.stringify(user));
  
  }