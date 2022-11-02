//BANCO POPULAR //Definición de clases
import { Cuenta } from "./cuenta.js";
import { Cliente } from "./cliente.js";
//import { CuentaCorriente } from "./cuentaCorriente.js";
//import { CuentaAhorro } from "./cuentaAhorro.js";

const cliente = new Cliente("Leonardo", "13804050", "123224");
const cliente2 = new Cliente("María", "16979808", "8989");

const cuentaDeLeonardo = new Cuenta("Corriente", cliente, "1", "001", 0);
const cuentaDeMaria = new Cuenta("Corriente", cliente2, "2", "002", 0);

const cuentaAhorroLeonardo = new Cuenta("Ahorro" ,cliente, "13804050", "001", 0);

console.log(cuentaDeLeonardo);
cuentaDeLeonardo.depositoEnCuenta(150);
console.log(cuentaDeLeonardo.verSaldo());
cuentaDeLeonardo.retirarDeCuenta(70);
console.log(cuentaDeLeonardo.verSaldo());

console.log("-----------");

console.log(cuentaAhorroLeonardo);
console.log(cuentaAhorroLeonardo.verSaldo());
cuentaAhorroLeonardo.depositoEnCuenta(200);
console.log(cuentaAhorroLeonardo.verSaldo());
cuentaAhorroLeonardo.retirarDeCuenta(120);
console.log(cuentaAhorroLeonardo.verSaldo());
