#!/usr/bin/env node

const { obtenerResultado, obtenerOpcionCPU } = require('../src/index.js');

var opciones = ["piedra", "papel", "tijera"];

var opcionUsuario = process.argv[2];

if (opciones.includes(opcionUsuario)) {
    var opcionCPU = obtenerOpcionCPU();
    obtenerResultado(opcionUsuario, opcionCPU);
} else {
    console.log("Opción inválida");
}