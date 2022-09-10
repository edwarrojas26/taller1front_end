/*Acceder al botón para abrir el modal */

let btnmodalP=document.getElementById("perimetroT");
let btnmodalA=document.getElementById("areaT");

//Acceder ventana modal
let venmodalP=document.getElementById("modalAT");
let venmodalA=docuem.getElementById("modalPT");

//Acceder al botón Cerrar de la ventana modal
let cermodal=document.querySelector(".cerrarModal");

btnmodalP.addEventListener("click",()=>{
    venmodalP.style.display="block";
})

cermodal.addEventListener("click",()=>{
    venmodalP.style.display="none"; 
})

window.addEventListener("click",(e)=>{
if(e.target==venmodalP){
    venmodalP.style.display="none"; 
}
})