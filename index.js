//BANCO POPULAR //Definición de clases
import { Cliente } from "./cliente.js";
import { CuentaCorriente } from "./cuentaCorriente.js";
import { CuentaAhorro } from "./cuentaAhorro.js";
import { Cuenta } from "./cuenta.js";
import { CuentaNomina } from "./cuentaNomina.js";


const cliente = new Cliente("Leonardo", "13804050", "123224");
const cliente2 = new Cliente("María", "16979808", "8989");

const cuentaDeLeonardo = new CuentaCorriente(cliente, "1", "001");
const cuentaDeMaria = new CuentaCorriente(cliente2, "2", "002");

const cuentaAhorroLeonardo = new CuentaAhorro(cliente, "13804050", "001", 0);

const cuentaNominaLeonardo = new CuentaNomina(cliente, "1010", "001", 100);


cuentaNominaLeonardo.depositoEnCuenta(150);

console.log(cuentaNominaLeonardo.verSaldo());

cuentaNominaLeonardo.retirarDeCuenta(50);

console.log(cuentaNominaLeonardo.verSaldo());

/*console.log(cuentaDeLeonardo);
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
console.log(cuentaAhorroLeonardo.verSaldo());*/

//const cuentaSimple = new Cuenta(cliente, "003", "004", 100);

//console.log(cuentaAhorroLeonardo);

//cuentaSimple = cuentaSimple.constructor();

//console.log (cuentaSimple);




