let parrafos =document.getElementsByTagName("span");
let texto1 = document.getElementById("texto1");
let texto2 = document.getElementById("texto2");
let texto3 = document.getElementById("texto3");
let texto4 = document.getElementById("texto4");
let texto5 = document.getElementById("texto5");

setTimeout(() => {
    escribir(texto1,"¡Hola y bienvenid@ a mi mundo digital!");
}, 1000);

function escribir(texto,parrafo){
    var typingEffect = new Typed(texto,{
        strings:[parrafo],
        loop: false, //repetir el array de string
        typeSpeed : 90,   //Velocidad en milisegundos para poner una letra
        backSpeed : 90,  //Velocidad en milisegundos para borrar una palabra
        backDelay : 20, //tiempo de espera despues de que termina de escribir una palabra
        starDelay: 0  //tiempo de retraso en iniciar la animacion
    });
}


// const myPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("ok");
//     }, 3000);
//   });
//   myPromise
//     .then(escribir(texto1,"Hola este es texto 1"))
//     .then(escribir(texto2,"Texto 2"));
    
