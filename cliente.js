//BANCO POPULAR //Definición de clases

export class Cliente {
    nombreCliente;
    cedulaCliente;
    rutCliente;

    contructor (nombreCliente, cedulaCliente, rutCliente) {
        this.nombreCliente = nombreCliente;
        this.cedulaCliente = cedulaCliente;
        this.rutCliente = rutCliente;
    }
}