 //__Cogiendo referencias
 let caja1=document.getElementById("mensaje");
 let menuLH= document.querySelector(".menu_lateral_h");
 let menuLa=document.querySelector(".menu_lateral");

let planet_cols= document.querySelectorAll(".planet_col");/*añadirles clase*/
let planet_imgs= document.querySelectorAll(".planet_col img");
let planet_ps= document.querySelectorAll(".planet_col p");

let h3Animado= document.querySelector("#pills-tabContent h3");
let pAnimado= document.querySelector("#pills-tabContent p");

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

    /*quitar animacion para planetas */
    planet_imgs.forEach(function(img){
        img.removeAttribute("data-aos");
        img.removeAttribute("data-aos-duration");
        img.removeAttribute("data-aos-delay");
        img.removeAttribute("data-aos-easing");
    });
    planet_ps.forEach(function(p){
        p.removeAttribute("data-aos");
        p.removeAttribute("data-aos-delay");
    });
    /*quitar animacion para play to earn */
    h3Animado.removeAttribute("data-aos");
    h3Animado.removeAttribute("data-aos-duration");
    h3Animado.removeAttribute("data-aos-delay");
    pAnimado.removeAttribute("data-aos");
    pAnimado.removeAttribute("data-aos-duration");
    pAnimado.removeAttribute("data-aos-delay");

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
 

 //Panel snap
 var menu, menuItems, panelSnapInstance;

        document.addEventListener("DOMContentLoaded", function () {
            menu = document.querySelector('.menuUl');
            menuItems = menu.querySelectorAll('a');

            panelSnapInstance = new PanelSnap();
            panelSnapInstance.on('activatePanel', activateMenuItem);

            menuItems.forEach(function (menuItem) {
                menuItem.addEventListener('click', onButtonClick);
            })
        });

        function activateMenuItem(panel) {
            menuItems.forEach(function (menuItem) {
                menuItem.classList.remove('active');
            });

            var panelName = panel.getAttribute('data-panel')
            var menuItem = menu.querySelector('a[data-panel="' + panelName + '"]');
            menuItem.classList.add('active');
        }

        function onButtonClick(e) {
            var panelName = e.target.getAttribute('data-panel')
            var panel = document.querySelector('section[data-panel="' + panelName + '"]');
            panelSnapInstance.snapToPanel(panel);
        }

/*FAQ */

const cardHeaders= document.querySelectorAll(".card-header");

cardHeaders.forEach(function(cardHeader){
    //console.log(cardHeader);
    const btn= cardHeader.querySelector("button");
    //console.log(btn);
    btn.addEventListener("click",function(){
        cardHeaders.forEach(function(item){
            if(item!== cardHeader){
                item.classList.remove("selected");
            }
        });
        cardHeader.classList.add("selected");
    });
}); 

/*
const btns = document.querySelectorAll("#FAQ button");

//button.addEventListener("click",selected);
btns.forEach(function(btn){
    btn.addEventListener("click", function(e){
        //console.log(e.currentTarget.parentElement.parentElement);
        const carHeader = e.currentTarget.parentElement.parentElement;
        //añadirle la clase de color
    });
}); */







 
