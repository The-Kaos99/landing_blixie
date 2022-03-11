 //__Cogiendo referencias
 let caja=document.getElementById("mensaje");
 let menuLH= document.querySelector(".menu_lateral_h");
 let menuLa=document.querySelector(".menu_lateral");
 let espaciado= document.querySelector(".espaciado");
 
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
     //espaciado.style.height="100px";
     /*
     if(window.innerWidth<768){
         espaciado.style.height="120px";
     }else{
         espaciado.style.height="100px";
     }*/
 } 
 
 //__EVENTO al cambiar el ancho de la ventana
 window.addEventListener('resize', mensaje);
 
 function mensaje(){
     //caja.innerHTML=window.innerWidth; //tmb se puede usar document.documentElement.clientWidth
    //console.log(window.innerWidth);
  
     
     //que se visible el menu lateral h
     if(window.innerWidth<575){
         //caja.innerHTML=menuLH;
         menuLH.style.display="inline";
         menuLa.style.display="none";
         espaciado.style.height="90px";
     }
     else{
         menuLH.style.display="none";
         menuLa.style.display="block";
         //espaciado.style.height="100px";
         
         /*
         if(window.innerWidth<768){
         espaciado.style.height="120px";
             
         }else{
         espaciado.style.height="100px";
         } */
     }
 } 
 
 
 /*cambiar la ps de los botones cuando cambie el tamaño del contenedor. n*/
 
 //let btns_sup= document.querySelector("#btns_superiores");
 //caja.innerHTML=btns_sup.style.marginTop;
 
 /*
 console.log("Vertical: " + window.scrollY);
 
 /*HTMLBodyElement.scrollTop=0;*/
 /*console.log("Vertical b: " + document.body.scrollTop); */
 /*
 window.onscroll = function() {
   console.log("Vertical: " + window.scrollY);
   console.log("Horizontal: " + window.scrollX);

 }; */
 
 //obtener ancho actual de la página
 /*
 let ancho= window.innerWidth;
 caja.innerHTML=ancho; */
