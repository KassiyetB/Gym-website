//read more button
const toggleReadMore = event => {
    const moreText = document.getElementById("more-text");
    event.target.style.display = "none";
    moreText.style.display = "inline";

}
document.getElementById("read-more-btn").addEventListener("click", toggleReadMore);