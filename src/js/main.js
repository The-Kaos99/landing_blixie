//__Cogiendo referencias
let caja1 = document.getElementById("mensaje");
let menuLH = document.querySelector(".menu_lateral_h");
let menuLa = document.querySelector(".menu_lateral");

let planet_cols = document.querySelectorAll(".planet_col");/*añadirles clase*/
let planet_imgs = document.querySelectorAll(".planet_col img");
let planet_ps = document.querySelectorAll(".planet_col p");

let h3Animado = document.querySelector("#pills-tabContent h3");
let pAnimado = document.querySelector("#pills-tabContent p");

//por defecto, tiene que efectuarse una vez al cargarse la página. podría llamarlo justo al cargar
if (window.innerWidth < 575) {  //Para version movil
    //caja.innerHTML=menuLH;
    menuLH.style.display = "inline";
    menuLa.style.display = "none";

    //a todas las columnas de planeta, añadir clase de boostrap
    /* planet_cols.forEach(function(col){
         col.classList.add("d-flex");
         col.classList.add("justify-content-center");
     });*/

    /*quitar animacion para planetas */
    planet_imgs.forEach(function (img) {
        img.removeAttribute("data-aos");
        img.removeAttribute("data-aos-duration");
        img.removeAttribute("data-aos-delay");
        img.removeAttribute("data-aos-easing");
    });
    planet_ps.forEach(function (p) {
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
else {
    menuLH.style.display = "none";
    menuLa.style.display = "block";

    //a todas las columnas de planeta, quitar clase de boostrap
    /*planet_cols.forEach(function(col){
        col.classList.remove("justify-content-center");
        col.classList.remove("d-flex");
    }); */

}

//__EVENTO al cambiar el ancho de la ventana. Para version movil y v.grande.
//En realidad con que se ejecute una sola vez al cargar el documento estaría correcto no
window.addEventListener('resize', mensaje);

function mensaje() {
    //caja.innerHTML=window.innerWidth; //tmb se puede usar document.documentElement.clientWidth
    //console.log(window.innerWidth);


    //Version movil. que no sea visible el menu lateral h
    if (window.innerWidth < 575) {
        //caja.innerHTML=menuLH;
        menuLH.style.display = "inline";
        menuLa.style.display = "none";

        //a todas las columnas de planeta, añadir clase de boostrap
        /* planet_cols.forEach(function(col){
             col.classList.add("d-flex");
             col.classList.add("justify-content-center");
         }); */
    }
    else {
        menuLH.style.display = "none";
        menuLa.style.display = "block";

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

    var panelName = panel.getAttribute('data-panel');
    var menuItem = menu.querySelector('a[data-panel="' + panelName + '"]');
    menuItem.classList.add('active');
}

function onButtonClick(e) {
    var panelName = e.target.getAttribute('data-panel');
    var panel = document.querySelector('section[data-panel="' + panelName + '"]');
    panelSnapInstance.snapToPanel(panel);
}

/*FAQ */
const cardHeaders = document.querySelectorAll(".card-header");

cardHeaders.forEach(function (cardHeader) {
    //console.log(cardHeader);
    const btn = cardHeader.querySelector("button");
    //console.log(btn);
    btn.addEventListener("click", function () {
        cardHeaders.forEach(function (item) {
            if (item !== cardHeader) {
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

/*__NFTs */
let currentScrollPosition = 0;
let scrollAmount = 262.18;//262.18;//230;//320//cantidad de desplazamiento. Para pantallas grandes bien, movil no

const sCont = document.querySelector(".storys-container");//contenedor de imgs
const hScroll = document.querySelector(".horizontal-scroll");//contiene a botones y storys-container

const btnScrollLeft = document.querySelector("#btn-scroll-left");
const btnScrollRight = document.querySelector("#btn-scroll-right");

btnScrollLeft.style.opacity = "0";//empieza mostrandose la 1º img, solo se pued eor hacia la derecha

let maxScroll = -sCont.offsetWidth + hScroll.offsetWidth;

function scrollHorizontally(val) {
    //calculo del desplazamiento
    currentScrollPosition += (val * scrollAmount);

    if (currentScrollPosition >= 0) {
        currentScrollPosition = 0//cada vez que se mueva hacia la der se resetea a 0

        btnScrollLeft.style.opacity = "0";
    } else {
        btnScrollLeft.style.opacity = "1";
    }

    if (currentScrollPosition <= maxScroll) {
        currentScrollPosition = maxScroll;

        btnScrollRight.style.opacity = "0";
    } else {
        btnScrollRight.style.opacity = "10";
    }

    //hace que se desplace
    sCont.style.left = currentScrollPosition + "px";
}

/*scroll horizontal 2 */
let currentScrollPosition_2 = 0;
let scrollAmount_2 = 220.08;

const sCont_2 = document.querySelector(".storys-container_2");//contenedor de imgs

const btnScrollLeft_2 = document.querySelector("#btn-scroll-left_2");
const btnScrollRight_2 = document.querySelector("#btn-scroll-right_2");

btnScrollLeft_2.style.opacity = "0";

let maxScroll_2 = -sCont_2.offsetWidth + hScroll.offsetWidth;

function scrollHorizontally_2(val){
    currentScrollPosition_2 += (val * scrollAmount_2);

    if (currentScrollPosition_2 >= 0) {
        currentScrollPosition_2 = 0

        btnScrollLeft_2.style.opacity = "0";
    } else {
        btnScrollLeft_2.style.opacity = "1";
    }

    if (currentScrollPosition_2 <= maxScroll_2) {
        currentScrollPosition_2 = maxScroll_2;

        btnScrollRight_2.style.opacity = "0";
    } else {
        btnScrollRight_2.style.opacity = "10";
    }

    //hace que se desplace
    sCont_2.style.left = currentScrollPosition_2 + "px";
} 







