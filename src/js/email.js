let botonEnviar = document.getElementById("botonEnviar");
let nombre = document.getElementById("nombre");
let correo = document.getElementById("correo");
let asunto = document.getElementById("asunto");
let mensaje = document.getElementById("mensaje");

var errores = [];
let formularioCorrecto = true;

let formulario=document.getElementsByTagName("form");
const regexCorreo = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   let errores = validarDatos();
   console.log(errores.length);
   if (errores.length == 0){
      botonEnviar.value = 'Enviando...';
      const serviceID = 'default_service';
      const templateID = 'template_o7sfwke';

      emailjs.sendForm(serviceID, templateID, this)
      .then(() => {
      botonEnviar.value = 'Send Email';
      // alert('Sent!');
         Swal.fire(
            'Éxito',
            'El correo se envío con exito!!',
            'success'
         )
      }, (err) => {
      botonEnviar.value = 'Send Email';
      alert(JSON.stringify(err));
      });
   }else{
        let strErrores = "";
        errores.forEach((error)=>{
            strErrores += error + "<br>";
        });
    
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            html: strErrores,
          })
    }
});

function borrar(elemento){
   elemento.style.border="";
}


function validarDatos(){
   errores = [];
   formularioCorrecto = true;
   borrar(nombre);
   borrar(correo);
   borrar(asunto);
   borrar(mensaje);

   nombre.value = nombre.value.trim();
   correo.value = correo.value.trim();
   mensaje.value = mensaje.value.trim();

   /*Nombre*/
   if(nombre.value.length== "" || !isNaN(nombre.value)){
      nombre.style.border="solid 4px #a025e3";
      errores.push("El nombre no es válido");
      formularioCorrecto=false;
   }
   /*Correo*/
   if(!regexCorreo.test(correo.value)){
      correo.style.border="solid 4px #a025e3";
      errores.push("El correo no es válido");
      formularioCorrecto=false;
   }
   /*Asunto*/
   if(asunto.value.length== ""){
      asunto.style.border="solid 4px #a025e3";
      errores.push("El asunto no es válido");
      formularioCorrecto=false;
   }

   if(mensaje.value=="" || mensaje.length == 0){
      mensaje.style.border="solid 4px #a025e3";
      errores.push("El mensaje no es válido");
      formularioCorrecto=false;
   }
    return errores;
}
