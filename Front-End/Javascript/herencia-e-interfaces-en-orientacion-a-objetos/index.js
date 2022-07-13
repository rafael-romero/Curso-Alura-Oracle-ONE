/*Importacion de clases*/
import { Cliente } from "./cliente.js";
import { Empleado } from "./Empleados/empleado.js";
import { Gerente } from "./Empleados/gerente.js";
import { Director } from "./Empleados/director.js";
import { SistemaAutenticacion } from "./sistema-autenticacion.js";

//const clienteDos = new Cliente("Maria", "13265456", "231586");

const empleado = new Empleado("Juan Perez", "32654987", 10000);
empleado.asignarClave("123456");
console.log(SistemaAutenticacion.login(empleado, "123456"));

const gerente = new Gerente("Pedro Rivas", "32656963", 12000);
gerente.asignarClave("6554");
console.log(SistemaAutenticacion.login(gerente, "6554"));

//const director = new Director("Elena Moreno", "32321654", 15000);

const cliente = new Cliente("Rafael", "32485356", "123321");
cliente.asignarClave("1110");
console.log(SistemaAutenticacion.login(cliente, "1110"));
