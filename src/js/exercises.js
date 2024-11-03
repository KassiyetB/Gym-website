const url = 'https://exercisedb.p.rapidapi.com/exercises?limit=50&offset=0';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'abe1f9a9f9mshc8cc1d5f2b456dfp111760jsnf4125069d072',
		'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
	}
};
const fetchData = async () => {
    try {
        const response = await fetch(url, options);
        
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
        const jsonString = await response.text();
        const data = JSON.parse(jsonString); 
        return data; // Access your data as an object
    } catch (error) {
        console.error("Error:", error);
    }
}

// Display the exercises to the page
const renderExercise = exercises =>{
    // Import container to display the exercise cards
    const container = document.getElementById("exercise-container");
    container.innerHTML = "";
    if(exercises.length === 0){
        container.innerHTML = "<h4>No exercises found!</h4>";
        document.body.style.height = "100vh";
        return;
    }
    for(exercise of exercises){
        
        if(exercise.equipment === "assisted"){

            continue;
        }
        // Exercise box (card) container
        const exerciseCard = document.createElement("div");
        exerciseCard.id = exercise.id;
        exerciseCard.className = "exercise-card rounded text-center p-3";

        // Image (gif) for exercise
        const img = document.createElement("img");
        img.src = exercise.gifUrl;
        img.className = "rounded mb-4";
        img.style.width = "90%";
        exerciseCard.appendChild(img);

        // Exercise name
        const nameField = document.createElement("h4");
        nameField.innerText = exercise.name;
        exerciseCard.appendChild(nameField);

        // Body part display
        const bodyPartField = document.createElement("p");
        bodyPartField.innerHTML = `Body Part: <strong>${exercise.bodyPart}</strong>`;
        exerciseCard.appendChild(bodyPartField);

        // Target area display
        const targetAreaField = document.createElement("p");
        targetAreaField.innerHTML = `Target Area:  <strong>${exercise.target}</strong>`;
        exerciseCard.appendChild(targetAreaField);

        // Add exercise card to container
        container.appendChild(exerciseCard);
    }
    return exercises;
}

// Filter exercises with dropdown lsit
const dropdownFilter = exercises => {
    const bodyPartBtns = document.querySelectorAll(".dropdown-item");
    bodyPartBtns.forEach(btn => {
        btn.addEventListener("click", event => {
            const expectedBodyPart = event.target.innerText;
            const filteredExercises = exercises.filter(exercise => exercise.bodyPart === expectedBodyPart);
            renderExercise(filteredExercises);
        });
    });
}

// Filter exercises with search input
const searchFilter = exercises => {
    const searchInput = document.getElementById("search");
    searchInput.addEventListener('keydown', event => {
        if (event.key === "Enter") {
            const query = searchInput.value.toLowerCase();

            const filteredExercises = exercises.filter(exercise => {
                return (
                    exercise.bodyPart.toLowerCase().includes(query) ||
                    exercise.name.toLowerCase().includes(query) ||
                    exercise.target.toLowerCase().includes(query)
                );
            });
            renderExercise(filteredExercises);
        }
    });
}

//initials
fetchData()
.then(exercises => {
    renderExercise(exercises);   // Render exercises
    dropdownFilter(exercises);    // Pass exercises to dropdown filter
    searchFilter(exercises);       // Pass exercises to search filter
});

