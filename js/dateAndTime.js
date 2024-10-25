//date and time "October 14, 2024 at 10:15:10 PM"
function formatDate(date, loc) {
    const options = { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric', 
        hour: 'numeric', 
        minute: 'numeric',
        second: 'numeric', 
        hour12: true 
    };
    return date.toLocaleString(loc, options);
}
// Function to display the current date and time
function displayDateTime() {
    const location = document.getElementById("time-location");
    const selectedColor = location.value;
    let loc = "en-EN"
    switch(selectedColor){
        case "En":
            loc = "en-EN";
            break;
        case "Ru":
            loc = "ru-RU";
            break;
    }
    const now = new Date();
    const formattedDate = formatDate(now, loc); // Format it
    document.getElementById('dateTime').innerHTML = formattedDate; // Display it
}
// Call the function to display the date and time
displayDateTime();
setInterval(displayDateTime, 1000);