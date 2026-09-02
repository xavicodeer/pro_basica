
// function calcularPrecio(precioUnitario, cantidad){
//     const total = precioUnitario * cantidad;
//     return total;
// }

// console.log(calcularPrecio(5,2));
// console.log(calcularPrecio(3,4));
// console.log(calcularPrecio(7,1));

//---

// function puedeReservar(cantidad){
//     if(cantidad <= 2){
//         return true;
//     } else {
//         return false;
//     }
// }

// // ia
// function puedoReservar(cantidad){
//     return cantidad <= 2;
// }


// if(puedeReservar(1)){
//     console.log("Reserva confirmada");
// } else {
//     console.log("Lo siento, maximo 2 tazas por persona");
// }

// desafio

const maximoDiario = 50;
const maximoPorPersona = 2;
let tazasVendidas = 50;

function puedeReservar(cantidad){
    let disponibilidad = maximoDiario - tazasVendidas;
    if(cantidad > maximoPorPersona){
        return false;
    } else {
        return cantidad <= disponibilidad;
    }
} 

if(puedeReservar(1)){
    console.log("Reserva confirmada");
} else {
    console.log("Reserva denegada");
}