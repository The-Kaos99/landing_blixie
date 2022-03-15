 //__Cogiendo referencias
 let caja1=document.getElementById("mensaje");
 let menuLH= document.querySelector(".menu_lateral_h");
 let menuLa=document.querySelector(".menu_lateral");



 //por defecto, tiene que efectuarse una vez al cargarse la página. podría llamarlo justo al cargar
 if(window.innerWidth<575){
     //caja.innerHTML=menuLH;
     menuLH.style.display="inline";
     menuLa.style.display="none";
 }
 else{
     menuLH.style.display="none";
     menuLa.style.display="block";

 } 
 
 //__EVENTO al cambiar el ancho de la ventana. version movil y v grande
 window.addEventListener('resize', mensaje);
 
 function mensaje(){
     //caja.innerHTML=window.innerWidth; //tmb se puede usar document.documentElement.clientWidth
    //console.log(window.innerWidth);
  
     
     //que se visible el menu lateral h
     if(window.innerWidth<575){
         //caja.innerHTML=menuLH;
         menuLH.style.display="inline";
         menuLa.style.display="none";
     }
     else{
         menuLH.style.display="none";
         menuLa.style.display="block";
         
     }
 } 

 /*window.onscroll = function() {myFunction()};

 function myFunction() {

     if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
         //document.getElementById("myP").className = "test";
         //console.log("hola");
     } else {
         //document.getElementById("myP").className = "";
         //console.log("adios");
     }
 } */

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



 
