const btnHome= document.querySelector("#btn-home");
const container = document.querySelector("#container");
const box = document.querySelectorAll(".box");
const interface2 = document.querySelector("#interface2")
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
        nbox.style.fontSize ="8vw";
        nbox.style.display = "grid";
        container.style.gridTemplateRows = "0.1fr 1fr";
        container.style.padding ="0px";
        
        
      
        
   
        
    
        
        
    })
})

