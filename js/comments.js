//Function to initialize localStorage with initial data if it doesn't already exist
function initializeLocalStorage() {
    const existingData = localStorage.getItem("comments");
    
    if (!existingData) {
        const comments_list = [
            {
                name: 'John Doe',
                date: "October 10, 2022",
                comment: "Joining this gym was the best decision I ever made! The trainers are incredibly supportive and have helped me achieve my fitness goals. I never thought I could feel this strong and confident!",
                rated: 4
            },
            {
                name: 'Sarah Lee',
                date: "August 18, 2021",
                comment: "The atmosphere at this gym is fantastic. Everyone is motivated, and the staff really make you feel at home. I’ve gained so much more than just physical strength!",
                rated: 5
            },
            {
                name: 'Michael Smith',
                date: "January 6, 2020",
                comment: "I love the variety of classes offered here. There’s something for everyone, no matter your fitness level. I've made so many friends and truly enjoy my workouts now.",
                rated: 3
            }
        ];
        localStorage.setItem("comments", JSON.stringify(comments_list));
    }
}
initializeLocalStorage();



//Function to render the user list from localStorage
const renderUserList = () => {
    const commentContainer = document.querySelector("dl");
    commentContainer.innerHTML = "";
    const comments_list = JSON.parse(localStorage.getItem("comments")) || [];
    for (const user_comment of comments_list) {
        // Create the <dt> element
        const dt = document.createElement('dt');
        dt.className = "p-3";
        dt.textContent = `${user_comment.name}, ${user_comment.date}`;
        commentContainer.appendChild(dt); // Append <dt> to <dl>
    
        // Create the <blockquote> element
        const blockquote = document.createElement('blockquote');
        blockquote.className = "comment";
        
        const span = document.createElement('span');
        span.className = "quote-icon"; // Updated class name to "quote-icon"
        span.textContent = '“';  // Add the quote icon
        blockquote.appendChild(span);
    
        const quoteText = document.createTextNode(user_comment.comment);
        blockquote.appendChild(quoteText);
    
        // Create the <ul> element for stars
        const ul = document.createElement('ul');
        ul.className = 'd-flex list-unstyled';
        const stars = [];
        for (let i = 0; i < 5; i++) {
            stars.push(i < user_comment.rated ? 'bxs-star' : 'bx-star');
        }
    
        stars.forEach(function(starClass) {
            const li = document.createElement('li');
            const icon = document.createElement('i');
            icon.classList.add('bx', starClass);
            li.appendChild(icon);
            ul.appendChild(li);
        });
    
        // Create the <dd> element
        const dd = document.createElement('dd');
        dd.className = "border-start border-3 mt-3 ms-5 mb-5 ps-3 d-none"; // Keeping d-none as per your original code
        dd.appendChild(blockquote);
        dd.appendChild(ul);
    
        // Append <dd> to <dl>
        commentContainer.appendChild(dd);
    }

    //make comment visable or hidden
    const commentBlocks = document.querySelectorAll('dt');
    const toggleComment = (event) =>{
        const comment = event.target.nextElementSibling;
        if(comment.classList.contains("d-none")){
            comment.classList.remove("d-none");
        }
        else{
            comment.classList.add("d-none");
        }
        
    }
    commentBlocks.forEach(el => el.addEventListener("click", toggleComment));

}
renderUserList();


//calculates rating, when user clicks stars
let rating = 0;
const rating_stars = document.querySelectorAll("#rating-stars li");
rating_stars.forEach(star=>{
    //add eventListener to each of the stars
    star.addEventListener("click", event => {
        //convert id to integer
        rating = parseInt(event.target.closest("li").id, 10);
        for (let i = 0; i < rating_stars.length; i++) {
            //selecting icons of the li, and changing there type to filled star
            rating_stars[i].children[0].className = parseInt(rating_stars[i].id, 10) <= rating ? "bx bxs-star" : "bx bx-star";
        }
    });
});



//comments form submit, save the data from user to comments object
const form = document.getElementById("comment").addEventListener('submit', event => {
    event.preventDefault();

    const comments_list = JSON.parse(localStorage.getItem("comments")) || [];

    const nameInput = document.getElementById("comment-name");
    const commentInput = document.getElementById("comment-message");

    const name = nameInput.value;
    const date = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = date.toLocaleDateString(undefined, options);

    const comment = commentInput.value;

    // Push new comment with correct property name
    comments_list.push({
        name,
        date: formattedDate,
        comment,
        rated: rating
    });
    localStorage.setItem("comments", JSON.stringify(comments_list));
    formSubmitAudio.play();

    //reset everything
    form.reset();
    rating = 0;
    form.scrollIntoView({ behavior: "auto" });
});
