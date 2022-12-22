const searchProg = document.getElementById("searchProg");
const names = document.querySelector(".name");
const n = document.getElementById("name")
searchProg.addEventListener("change", (e)=>{
    const searchProg2 = document.getElementById("searchProg").textContent;
    const nameElement2 = document.querySelector(".name").textContent;
    if(searchProg2 == nameElement2){
        n.style.display = "block";
    }
    else {
        names.style.display = "none";
        
    }
    if(searchProg.value==1){
        names.style.display = "block";
    }
})