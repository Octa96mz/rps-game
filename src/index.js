var opciones = ["piedra", "papel", "tijera"];

var obtenerOpcionCPU = function() {
    var indice = Math.floor(Math.random() * 3);
    return opciones[indice];
 };

var obtenerResultado = function(usuario, cpu) {
    console.log("Usuario eligió: " + usuario);
    console.log("CPU eligió: " + cpu);

    if (usuario === cpu) {
        console.log("Empate");
    } else if (
        (usuario === "piedra" && cpu === "tijera") ||
        (usuario === "papel" && cpu === "piedra") ||
        (usuario === "tijera" && cpu === "papel")
    ) {
        console.log("¡El usuario gana!");
    } else {
        console.log("¡La CPU gana!");
    }
};

module.exports = {
   obtenerResultado: obtenerResultado,
   obtenerOpcionCPU: obtenerOpcionCPU
};