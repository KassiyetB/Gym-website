//toggle SignUp form
const signUpForm = document.getElementById('signUp');


//screen controler that displays a sign up box, 
//if user is  signed up then show different alert box depending on the button clicked
//if user is signed up, the plans or trainer can be selected, and it will be saved in user object in localStorage
const togglePlanScreen = event => {
  const storedUser = JSON.parse(localStorage.getItem("user"));

  //check if user is signed up, if not then popup a sign up screen
  if(!storedUser){
    if(signUpForm.classList.contains('d-none')){
      signUpForm.classList.remove('d-none');
      window.scrollTo(0, 0);
    }
    else{
        signUpForm.classList.add('d-none');
    }
  }

  //if user is signed up they can choose a plan and trainer
  else{
    //to differentiate plan from trainer button
    //when trainer button is clicked
    if(event.target.id === "trainer"){  
      console.log(event.target.id);
      //if user has no plan, then user cant have trainer
      if(!storedUser.plan && !storedUser.trainer){
        alert("pick a plan first before choosing a trainer");
      }
      //if user has a plan and a trainer
      else if(storedUser.plan && storedUser.trainer){
        alert("you already have a trainer");
      }
      //if user has a plan but doesnt have trainer
      else{
        storedUser.trainer = true;
        alert("Congrats, now you have a trainer!");
        localStorage.setItem("user", JSON.stringify(storedUser));
      }
    }

    //plan buttons
    else{
      //if user has no plan, then assign a plan with user preference by clicking plan button
      if(!storedUser.plan){
        switch(event.target.id){
          case "plan-1m":
            storedUser.plan = "1 month plan";
            break;
          case "plan-6m":
            storedUser.plan = "6 month plan";
            break;
          case "plan-12m":
            storedUser.plan = "12 month plan";
            break;
        }
        localStorage.setItem("user", JSON.stringify(storedUser));
        alert("Your plan has been set to: " + storedUser.plan);
      }

      //if user aleady has a plan, alert message
      else{
        alert("you aleardy got a plan. " + "Your plan is: " + storedUser.plan);
      }
    }
  }
}

//provide click event to each of the plan buttons and trainer button
const getPlans = document.getElementsByClassName('getPlan');
Array.from(getPlans).forEach(btn => {
    btn.addEventListener('click', togglePlanScreen);
});

//arrowBack button exits from the sign up screen
const arrowBack = document.getElementById("arrowBack");
arrowBack.onclick = togglePlanScreen;


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
      signUpForm.classList.add('d-none');
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
  