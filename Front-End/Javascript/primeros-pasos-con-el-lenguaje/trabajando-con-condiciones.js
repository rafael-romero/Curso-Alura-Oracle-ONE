console.log(`Trabajando con Condiciones`);

const ciudadesDisponibles = new Array();

ciudadesDisponibles.push("Bogota");
ciudadesDisponibles.push("Caracas");
ciudadesDisponibles.push("Lima");
console.log(ciudadesDisponibles);

const edadComprador = 15;
const estaAcompanado = true;
const tienePasaje = true;

if (edadComprador >= 18 || estaAcompanado) {
  console.log("Es posible vender pasajes");
  console.log("Ciudades disponibles para viaje");
  console.log(ciudadesDisponibles);
} else {
  console.log("El comprador NO es mayor de edad y NO esta acompañado");
  console.log("No es posible ofrecer viajes");
}
//Proceso de embarque
console.log(`Proceso de embarque: \n \n`);
if (tienePasaje && (edadComprador >= 18 || estaAcompanado)) {
  console.log("comprador con pasaje");
} else {
  console.log("comprador sin pasaje");
}

// console.log("Mayor o igual");
// console.log(edadComprador >= 18);
// console.log("Mayor");
// console.log(edadComprador > 18);
// console.log("Menor o igual");
// console.log(edadComprador <= 18);
// console.log("Menor");
// console.log(edadComprador < 18);
// console.log("igual a");
// console.log(edadComprador == 18);
// console.log("diferente de ");
// console.log(edadComprador != 18);
