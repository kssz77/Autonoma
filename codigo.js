/*Daniela Gonzales Ayala
  Kevin Santiago Santacruz Zambrano*/
//Aprendiendo a programar con Java Script
var mensaje = "Bienvenidos a nuestro sitio web"; var nombre = 'producto'

function multiplicar(p1, p2) {
  return p1 * p2;
}
document.getElementById("demo").innerHTML=multiplicar(4,3)

const parrafoMensaje = document.getElementById('mensaje-de-prueba')
if(parrafoMensaje) {
   parrafoMensaje.addEventListener('click', function(){
   alert('Un mensaje de prueba');
 } );
}
