let nombre = prompt("Ingrese su nombre")
alert('Bienvenido a Mundo Cuervo' + " " + nombre)
//Productos
const camiseta = 'camiseta'
const camperon = 'campera de abrigo'
const shortDeportivo = 'short deportivo'
const mediasLargas = 'medias de futbol'
const soquetes = 'soquetes'
const gorroDeLana = 'gorro de invierno'
const gorra = 'gorra'
let carrito = " "
function agregarProducto() {
    let producto = prompt("Ingrese el nombre del producto (En minuscula por favor): \n Camiseta \n Campera de abrigo \n Short deportivo \n Medias de futbol \n Soquetes \n Gorro de invierno \n Gorra");
    if(producto == camiseta || producto == camperon || producto == shortDeportivo || producto == mediasLargas || producto == soquetes || producto == gorroDeLana || producto == gorra){
    carrito += producto + "\n";
    alert("Se ha agregado el producto al carrito: " + producto);  
    } else{
        alert('Ingrese una opcion valida.')
    }   
     
}
function mostrarCarrito() {
    alert("Productos en el carrito:"+ '\n' + carrito);
    
  }
while (true) {
    let opcion = prompt("Seleccione una opción:\n1. Agregar producto\n2. Mostrar carrito\n3. Salir");
  
    if (opcion == "1") {
      agregarProducto();
    } else if (opcion == "2") {
      mostrarCarrito();
    } else if (opcion == "3") {
      alert("¡Gracias por comprar en mundo cuervo!");
      break;
    } else {
     alert("Opción inválida. Por favor, seleccione una opción valida.");
    }
  }
  


    

