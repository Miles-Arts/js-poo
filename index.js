//BANCO POPULAR //Definición de clases
import { Cliente } from "./cliente.js";
import { Empleado } from "./empleados/empleado.js";
import { Director } from "./empleados/director.js";
import { Gerente } from "./empleados/gerente.js";
import { SistemaAutenticacion } from "./sistemaAutenticacion.js";

const cliente = new Cliente("Leonardo", "13804050", "123224");
const cliente2 = new Cliente("María", "16979808", "8989");

const empleado = new Empleado("Anita Peréz", "909090", 10000);
empleado.asignarClave("12345");
console.log(SistemaAutenticacion.login(empleado, "12345"));

const gerente = new Gerente("Rosalba Santa Cruz", "303030", 12000);
gerente.asignarClave("9999");
console.log(SistemaAutenticacion.login(gerente, "9999"));

const director = new Director("Sol Chantiri", "7070", 15000);


