 //__Cogiendo referencias
 let caja=document.getElementById("mensaje");
 let menuLH= document.querySelector(".menu_lateral_h");
 let menuLa=document.querySelector(".menu_lateral");


 
 //por defecto, tiene que efectuarse una vez al cargarse la página. podría llamarlo justo al cargar
 if(window.innerWidth<575){
     //caja.innerHTML=menuLH;
     menuLH.style.display="inline";
     menuLa.style.display="none";
     espaciado.style.height="90px";
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
 
