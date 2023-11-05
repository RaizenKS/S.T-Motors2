const body = document.querySelector("body");
const btnHome= document.querySelector("#btn-home");
const container = document.querySelector("#container");
const box = document.querySelectorAll(".box");
const interface2 = document.querySelector("#interface2");
const labelEmp= document.querySelector("#lab-emp");
const boxinf2 = document.querySelectorAll(".box-inf2");
const interface3= document.querySelector("#interface3");
const boxinf3 = document.querySelectorAll(".box-inf3");
const hora = document.querySelectorAll(".hora");


function getRandomColor() {
   let coresVerde = [ "rgb(0, 255, 0)"];
   let coresVermelho = ["rgb(255, 0, 0)"]; 
   let escolheCor = Math.random() < 0.5 ? coresVerde[Math.floor(Math.random() * coresVerde.length)] : coresVermelho[Math.floor(Math.random() * coresVermelho.length)];
    return escolheCor;
}


document.addEventListener('DOMContentLoaded', function() {
   

function home(){location.href="index.html"}

btnHome.addEventListener("click", home)

box.forEach((nbox) =>{

    nbox.addEventListener("click", function(){

        box[0].style.display = "none";
        box[1].style.display = "none";
        box[2].style.display = "none";
        box[3].style.display = "none";
        box[4].style.display = "none";
        box[5].style.display = "none";

        interface2.style.display = "grid";
        container.style.gridTemplateColumns = "1fr";
        container.style.padding ="0px";
        labelEmp.innerHTML = nbox.innerHTML;        
    })
})

//Abaixo os comandos da interface2
hora.forEach((horinha)=>{horinha.style.backgroundColor= getRandomColor();})
boxinf2.forEach((infbox2)=>{

infbox2.addEventListener("click", function(){
interface2.style.display="none";
interface3.style.display="grid";

})

})



});