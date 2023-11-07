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
const interface4 = document.querySelector("#interface4");
const h4pedidos = document.querySelectorAll(".h4-info");
const btnConfirmar = document.querySelector("#btn-confirmar");
const interface5 = document.querySelector("#interface5");


let lavagem, empresa, horario, local, telefone;
lavagem = ""; empresa = ""; horario = ""; local = ""; telefone = "";


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
        lavagem = nbox.innerHTML;        
    })
})

//Abaixo os comandos da interface2
boxinf2.forEach((infbox2)=>{

infbox2.addEventListener("click", function(){

empresa = this.querySelector("h2").innerHTML;
interface2.style.display="none";
interface3.style.display="grid";

let conteudoBotao = this.cloneNode(true);
        conteudoBotao.querySelector("h2").remove();
        local = conteudoBotao.textContent.trim();
        

})


})

hora.forEach((horinha) =>{

horinha.addEventListener("click",function(){
    horario = horinha.innerHTML;
    interface3.style.display="none";
    interface4.style.display="grid";
    h4pedidos[0].innerHTML+=" "+ lavagem;
    h4pedidos[1].innerHTML+=" "+ empresa;
    h4pedidos[2].innerHTML+=" "+ horario;
    h4pedidos[3].innerHTML+=" "+ local;
    container.style.gridTemplateRows = "1fr 2fr";
})
})

btnConfirmar.addEventListener("click", function(){
    interface4.style.display = "none";
    interface5.style.display = "grid";
})




});