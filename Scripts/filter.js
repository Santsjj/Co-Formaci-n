const searchProg = document.getElementById("searchProg");
const names = document.querySelector(".name");
const n = document.getElementById("name")
const deft=document.getElementById("deft");
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


    // const cpfi= document.getElementById("cpfi");
    // if(nameElement2==cpfi){
    //     namesFromDOM.style.display = "none";
    // }else {
    //     namesFromDOM.style.display = "block";
    // }


    // const dp=document.getElementById("dp");
    // if(nameElement2==dp){
    //     namesFromDOM.style.display = "none";
    // }else {
    //     namesFromDOM.style.display = "block";
    // }


    // const fc=document.getElementById("fc");
    // if(nameElement2==fc){
    //     namesFromDOM.style.display="none";
    // }else{
    //     namesFromDOM.style.display="block";
    // }
})