/*__Play to earn__  */

const btns =document.querySelectorAll(".tab-btn");//todos los botones
const about= document.querySelector(".about");//el contedor de botones y contenidos
const divContens= document.querySelectorAll(".content");//todos los contenidos

//añadir el evento al about

about.addEventListener("click", function(e){
    //ver cual qes el target del e(objeto del evento)
   //console.log(e.target.dataset.id);//devolver su data-id
   const id= e.target.dataset.id; //coger el id del objeto que tiene el evento

   if(id){ //si tiene id no indefinido, es decir con valor
       
       //remove active from other buttons, cuando clico a uno
       btns.forEach(function(btn){
           //quitamos a cada boton
           btn.classList.remove("active");
           //añadimos activo solo al que he clicado
           e.target.classList.add("active");
       })

       //hacemos lo mismo para el contenido, pero los selecionamos por su id no data-id
       //hide all the articles, contents
       divContens.forEach(function(content){
           content.classList.remove("active");
       })
       //obtener el content que se verá con el id igual al id del obj evento
       const element= document.getElementById(id);
       element.classList.add("active");
   }
});