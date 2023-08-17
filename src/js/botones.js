
/*LINKS*/
let link1 = document.getElementById("link1");
let link2 = document.getElementById("link2");
let link3 = document.getElementById("link3");
let link4 = document.getElementById("link4");
let link5 = document.getElementById("link5");
let link6 = document.getElementById("link6");
let link7 = document.getElementById("link7");
let link8 = document.getElementById("link8");
let link9 = document.getElementById("link9");
let link10 = document.getElementById("link10");
let link11 = document.getElementById("link11");
let link12 = document.getElementById("link12");
/*IMAGENES */

let img1 = document.getElementById("img1");
let img2 = document.getElementById("img2");
let img3 = document.getElementById("img3");
let img4 = document.getElementById("img4");
let img5 = document.getElementById("img5");
let img6 = document.getElementById("img6");
let img7 = document.getElementById("img7");
let img8 = document.getElementById("img8");
let img9 = document.getElementById("img9");
let img10 = document.getElementById("img10");
let img11 = document.getElementById("img11");
let img12 = document.getElementById("img12");
let footer_div = document.getElementById("footer-div");
let botones = document.getElementsByClassName("btnmenu");


link1.addEventListener("click", function(event){
    event.preventDefault();
    //console.log(link1);
    insert(img1,link1);
    cambiar(link1);
});
link2.addEventListener("click", function(event){
    event.preventDefault();
    //console.log(link1);
    insert(img2,link2);
    cambiar(link2);
});
link3.addEventListener("click", function(event){
    event.preventDefault();
    //console.log(link1);
    insert(img3,link3);
    cambiar(link3);
});
link4.addEventListener("click", function(event){
    event.preventDefault();
    //console.log(link1);
    insert(img4,link4);
    cambiar(link4);
});
link5.addEventListener("click", function(event){
    event.preventDefault();
    //console.log(link1);
    insert(img5,link5);
    cambiar(link5);
});
link6.addEventListener("click", function(event){
    event.preventDefault();
    //console.log(link1);
    insert(img6,link6);
    cambiar(link6);
});
link7.addEventListener("click", function(event){
    event.preventDefault();
    //console.log(link1);
    insert(img7,link7);
    cambiar(link7);
});
link8.addEventListener("click", function(event){
    event.preventDefault();
    //console.log(link1);
    insert(img8,link8);
    cambiar(link8);
});
link9.addEventListener("click", function(event){
    event.preventDefault();
    //console.log(link1);
    insert(img9,link9);
    cambiar(link9);
});
link10.addEventListener("click", function(event){
    event.preventDefault();
    //console.log(link1);
    insert(img10,link10);
    cambiar(link10);
});
link11.addEventListener("click", function(event){
    event.preventDefault();
    //console.log(link1);
    insert(img11,link11);
    cambiar(link11);
});
link12.addEventListener("click", function(event){
    event.preventDefault();
    //console.log(link1);
    insert(img12,link12);
    cambiar(link12);
});

let botonInsertado = document.getElementsByClassName("btnmenu");
function insert(element,ancla){
    console.log(element);
    let atributoI=element.getAttribute("src");
    let texto = ancla.innerText;
    //let id=1;
    console.log(botones.length);
    console.log(botones);
    if(botones.length<=4){

        footer_div.insertAdjacentHTML("afterend",`
    <div class="">    
        <button class="btnNew btn btnmenu" type="button">
        <a href="">
        <img src="${atributoI}" width="25px"> ${texto}
        </a>
        </button>
    </div>
    `);
    //id++;
    }
    console.log(texto);
    console.log(atributoI);
    console.log(ancla==link1);
    // document.getElementById("./bienvenidos.html").href = url;
}

function cambiar(ancla){
    //let atributoH = ancla.getAttribute("href");
    if(ancla==link1){
        ancla.href="./bienvenidos.html";
     }else if(ancla==link2){
         ancla.href="./sobremi.html"
     }else if(ancla==link3){
         ancla.href="./tecnicas.html"
     }else if(ancla==link4){
         ancla.href="./blandas.html"
     }else if(ancla==link5){
         ancla.href="./proyecto.html"
     }else if(ancla==link6){
         ancla.href="./galeria.html"
     }else if(ancla==link7){
         ancla.href="./experiencia.html"
     }else if(ancla==link8){
         ancla.href="./contacto.html"
     }else if(ancla==link9){
         ancla.href="./game.html"
     }
    
}
// Esto es para el modal
// data-bs-toggle="modal" data-bs-target="#${id}"
