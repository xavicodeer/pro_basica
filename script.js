function puedoReservar(tazasDisponibles){
    return tazasDisponibles > 0;
}

const botonReservar = document.querySelector("#boton-reservar");
const contadorTazas = document.querySelector("#contador-tazas");

botonReservar.addEventListener("click", function(){
    // console.log("Botón de reservar clickeado");
    const tazasActuales = Number(contadorTazas.textContent);

    if(puedoReservar(tazasActuales)){
        contadorTazas.textContent = tazasActuales - 1;
        // console.log("Reserva registrada")
        Swal.fire({
        title: "Reserva registrada!",
        text: "Se ha registrado tu reserva exitosamente!",
        icon: "success"
        });
        } else {
        botonReservar.textContent = "Sin cupos";
        botonReservar.disabled = true;
        Swal.fire({
            title: "No hay mas cupos!",
            text: "No hay reservas disponibles",
            icon: "error"
        });
    }
});