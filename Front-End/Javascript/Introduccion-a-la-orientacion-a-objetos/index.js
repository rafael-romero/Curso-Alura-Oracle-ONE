/*Importacion de clases*/
import { Cliente } from "./cliente.js";
import { CuentaCorriente } from "./cuenta-corriente.js";

const cliente = new Cliente("Rafael", "32485356", "123321");
const clienteDos = new Cliente("Maria", "13265456", "231586");

const cuentaDeRafael = new CuentaCorriente(cliente, "1", "001");
const cuentaDeMaria = new CuentaCorriente(clienteDos, "2", "002");

let saldo = cuentaDeRafael.verSaldo();

saldo = cuentaDeRafael.depositoEnCuenta(150);

console.log(CuentaCorriente.cantidadCuentas);
