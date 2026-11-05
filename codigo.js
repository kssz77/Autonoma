/*Daniela Gonzales Ayala
  Kevin Santiago Santacruz Zambrano*/
//Aprendiendo a programar con Java Script
alert("Mnesaje de prueba")

var mensaje = "Bienvenidos a nuestro sitio web"; var nombre = 'producto'

function multiplicar(p1, p2) {
  return p1 * p2;
}
document.getElementById("demo").innerHTML=multiplicar(4,3)

const botonMensaje = document.getElementById('mensaje-de-prueba');
botonMensaje.addEventListener("click", function() {
    alert("Mensaje de prueba");
});
