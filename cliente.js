//BANCO POPULAR //Definición de clases

export class Cliente {

    nombreCliente;
    cedulaCliente;
    rutCliente;
    #clave;

    constructor(nombreCliente, cedulaCliente, rutCliente) {
        this.nombreCliente = nombreCliente;
        this.cedulaCliente = cedulaCliente;
        this.rutCliente = rutCliente;
        this.#clave = "";
    }

    asignarClave(clave) {

        this.#clave = clave;

    }

    autenticable(clave) {

        return true;

    }


    //autenticable(clave) {

       // return false;
        //return clave == this.#clave;
        //return this.#clave;
//
    //}

    //get clave() {

    // return this.#clave;

    //}

}