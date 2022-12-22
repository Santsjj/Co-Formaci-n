const searchInput = document.getElementById("searchInput");
const namesFromDOM = document.getElementsByClassName("name");
const idFromDOM = document.getElementsByClassName("id");

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
  for (const idElement of idFromDOM) {
    let id = idElement.textContent.toLowerCase();
    // Comparación
    if (id.includes(searchQuery)) {
      idElement.style.display = "block";
    } else {
      idElement.style.display = "none";
    }
  }
})