//BANCO POPULAR //
import { Cuenta } from "./cuenta.js";

export class CuentaNomina extends Cuenta {

    constructor(cliente, numero, agencia, saldo) {

        super(cliente, numero, agencia, saldo);

    }
}