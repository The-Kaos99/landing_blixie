 //__Cogiendo referencias
 let caja1=document.getElementById("mensaje");
 let menuLH= document.querySelector(".menu_lateral_h");
 let menuLa=document.querySelector(".menu_lateral");

let planet_cols= document.querySelectorAll(".planet_col");/*añadirles clase*/

 //por defecto, tiene que efectuarse una vez al cargarse la página. podría llamarlo justo al cargar
 if(window.innerWidth<575){  //Para version movil
     //caja.innerHTML=menuLH;
    menuLH.style.display="inline";
    menuLa.style.display="none";

     //a todas las columnas de planeta, añadir clase de boostrap
   /* planet_cols.forEach(function(col){
        col.classList.add("d-flex");
        col.classList.add("justify-content-center");
    });*/

 }
 else{
     menuLH.style.display="none";
     menuLa.style.display="block";

    //a todas las columnas de planeta, quitar clase de boostrap
    /*planet_cols.forEach(function(col){
        col.classList.remove("justify-content-center");
        col.classList.remove("d-flex");
    }); */

 } 
 
 //__EVENTO al cambiar el ancho de la ventana. Para version movil y v.grande.
 //En realidad con que se ejecute una sola vez al cargar el documento estaría correcto no
 window.addEventListener('resize', mensaje);
 
 function mensaje(){
     //caja.innerHTML=window.innerWidth; //tmb se puede usar document.documentElement.clientWidth
    //console.log(window.innerWidth);
  
     
     //Version movil. que no sea visible el menu lateral h
    if(window.innerWidth<575){
         //caja.innerHTML=menuLH;
        menuLH.style.display="inline";
        menuLa.style.display="none";

          //a todas las columnas de planeta, añadir clase de boostrap
       /* planet_cols.forEach(function(col){
            col.classList.add("d-flex");
            col.classList.add("justify-content-center");
        }); */
     }
    else{
        menuLH.style.display="none";
        menuLa.style.display="block";
         
        //a todas las columnas de planeta, quitar clase de boostrap
       /* planet_cols.forEach(function(col){
            col.classList.remove("justify-content-center");
            col.classList.remove("d-flex");
        }); */
    }
 } 






 
