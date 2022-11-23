const luces = document.querySelectorAll(".luz")

let encenderLuz = 0;
const mostrarLuz = ()=>{
    luces[encenderLuz].className = "luz";
    encenderLuz++;

    if(encenderLuz > 2) encenderLuz = 0;
    
    const luz = luces[encenderLuz];
    luz.classList.add(luz.getAttribute("color"))
}
setInterval(mostrarLuz,3000);





