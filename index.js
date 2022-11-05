//BANCO POPULAR //Definición de clases
import { Cliente } from "./cliente.js";
import { CuentaCorriente } from "./cuentas/cuentaCorriente.js";
import { CuentaAhorro } from "./cuentas/cuentaAhorro.js";
import { CuentaNomina } from "./cuentas/cuentaNomina.js";
import { Empleado } from "./empleados/empleado.js";
import { Director } from "./empleados/director.js";
import { Gerente } from "./empleados/gerente.js";


const cliente = new Cliente("Leonardo", "13804050", "123224");
const cliente2 = new Cliente("María", "16979808", "8989");

const empleado = new Empleado("Anita Peréz", "909090", 10000);
const gerente = new Gerente("Rosalba Santa Cruz", "303030", 12000);
const director = new Director("Sol Chantiri", "7070", 15000);


console.log(empleado.verBonificacion());
console.log(gerente.verBonificacion());
console.log(director.verBonificacion());

