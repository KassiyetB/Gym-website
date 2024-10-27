const user = JSON.parse(localStorage.getItem("user"));
const accountWindow = document.getElementById("accountInfo");
const signUpWin = document.getElementById("SignUpForm");
signUpWin.classList.toggle("d-none", user);
accountWindow.classList.toggle("d-none", !user);


//display user data
const renderUserData = () => {
    document.getElementById("name-field").innerText = user.name;
    document.getElementById("email-field").innerText = user.email;
    document.getElementById("plan-field").innerText = user.plan ? user.plan : "you dont have a plan";
    document.getElementById("trainer-field").innerText = user.trainer ? "you have a trainer" : "you dont have a trainer";
}
if(user){
    renderUserData();

    document.querySelectorAll(".remove-btn").forEach(btn =>{

        //hide the buttons if plan or trainer field has nothing
        if(!user.plan && btn.id === "remove-plan"){
            btn.style.display = "none";
        }
        else if(!user.trainer && btn.id === "remove-trainer"){
            btn.style.display = "none";
        }
    
        //remove plan or trainer data
        btn.addEventListener("click", event => {
            switch(btn.id){     
                case "remove-plan":
                    user.plan = '';
                    break;
                case "remove-trainer":
                    user.trainer = false;
                    break;
            }
            localStorage.setItem("user", JSON.stringify(user));
            window.location.reload();  
        });  
    });
}







//log out 
const logOut = () => {
    localStorage.removeItem("user");
    window.location.reload();
}
document.getElementById("log-out").onclick = logOut;
