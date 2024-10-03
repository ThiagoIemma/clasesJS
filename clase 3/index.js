// /* Comment */

// let nombreArticulo;
// let cantidadArticulos = 0;

// /* pedido al usuario de ingresar el nombre del articulo o salir para terminar */
// do{ 
//     nombreArticulo = prompt("Ingrese el nombre del artículo (o escribe salir para finalizar");
// /* si el usuario no escribio salir para terminar, contar el articulo e imprimirlo */
//     if (nombreArticulo !== "salir"){
//         cantidadArticulos++;
//         console.log(`Artículo ${cantidadArticulos}: ${nombreArticulo}`);

//     }

// } while (nombreArticulo !== "salir");

// /* Al final, mostrar cuantos articulos ingreso el usuario */
// console.log(`Cantidad de artículos ingresados; ${cantidadArticulos} artículos`);

/* adivinar el numero secreto */

let numeroSecreto = 7;
let intentos = 1;

for (let i= 1; i<=3; i++){
    let tuNumero = parseInt(prompt("Adivina el número secreto:"));
    
    if (tuNumero === numeroSecreto){

        alert(`Adivinaste!!!!! el numero secreto era ${numeroSecreto} recarga para continuar`);

    } else if (intentos === 3){

        console.log(`Haz alcanzado el limite de intentos, el numero secreto era ${numeroSecreto}, Recarga para continuar`);

    } else{

        alert(`Intento numero ${intentos} numero elegido: ${tuNumero}`);

    }
    intentos++
}