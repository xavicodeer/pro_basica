
// function calcularPrecio(precioUnitario, cantidad){
//     const total = precioUnitario * cantidad;
//     return total;
// }

// console.log(calcularPrecio(5,2));
// console.log(calcularPrecio(3,4));
// console.log(calcularPrecio(7,1));

function puedeReservar(cantidad){
    if(cantidad <= 2){
        return true;
    } else {
        return false;
    }
}

// ia
function puedoReservar(cantidad){
    return cantidad <= 2;
}


if(puedeReservar(1)){
    console.log("Reserva confirmada");
} else {
    console.log("Lo siento, maximo 2 tazas por persona");
}


