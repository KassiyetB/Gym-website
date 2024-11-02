const url = 'https://exercisedb.p.rapidapi.com/exercises?limit=20&offset=0';
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

const renderExercise = exercises =>{
    for(exercise of exercises){
        const contianer = document.getElementById("exercise-container");
        contianer.innerHTML = "";

        const exerciseCard = document.createElement("div");
        exerciseCard.id = "exercise-box";
        exerciseCard.className = "bg-secondary text-center p-3 border";

        const img = document.createElement("img");
        img.src = exercise.gifUrl;
        img.className = "rounded mb-4";
        img.style.width = "90%";
        exerciseCard.appendChild(img);

        const nameField = document.createElement("h4");
        nameField.innerText = exercise.name;
        exerciseCard.appendChild(nameField);

        const bodyPartField = document.createElement("p");
        bodyPartField.innerText = `Body Part: ${exercise.bodyPart}`;
        exerciseCard.appendChild(bodyPartField);

        const targetAreaField = document.createElement("p");
        targetAreaField.innerText = `Target Area: ${exercise.target}`;
        exerciseCard.appendChild(targetAreaField);


        contianer.appendChild(exerciseCard);

        //img.src = exercise.gifUrl;
        console.log(exercise);
    }
}
fetchData()
.then(renderExercise);
