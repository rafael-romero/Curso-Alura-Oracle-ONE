console.log(`Trabajando con Listas`);

const Bogota = "Bogota";
const Lima = "Lima";
const Santiago = "Santiago";
const BuenosAires = "Buenos Aires";
//console.log(Bogota, Lima, Santiago, BuenosAires);

//const ciudadesDisponibles = ["Bogota", "Lima", "Santiago", "BuenosAires"];
const ciudadesDisponibles = new Array();

ciudadesDisponibles.push("Bogota");
ciudadesDisponibles.push("Caracas");
ciudadesDisponibles.push("Lima");
console.log(ciudadesDisponibles);

const ciudadesMasVendidas = [];
ciudadesMasVendidas.push("San Pablo");
ciudadesMasVendidas.push("Buenos Aires");
console.log(ciudadesMasVendidas);

console.log(ciudadesDisponibles[2]);
console.log(ciudadesMasVendidas[0]);

const cantidadCiudades = ciudadesDisponibles.length;
console.log(`Tenemos ${cantidadCiudades} ciudades dispobibles`);

ciudadesDisponibles.splice(1);
console.log(ciudadesDisponibles);
