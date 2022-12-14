const searchInput = document.getElementById("searchInput");
const namesFromDOM = document.getElementsByClassName("name");
// Evento
searchInput.addEventListener("keyup", (event) => {
    const { value } = event.target;
    // Miniscula
    const searchQuery = value.toLowerCase();
    for (const nameElement of namesFromDOM) {
        let name = nameElement.textContent.toLowerCase();
        // Comparación
        if (name.includes(searchQuery)) {
            nameElement.style.display = "block";
        } else {
            nameElement.style.display = "none";
        }
    }
})