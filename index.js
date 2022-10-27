const nombreCliente = "Anita";
const cedulacliente = "123456";
const numeroCuenta = "09876";
const saldoCuenta = "1000";

//console.log(nombreCliente);

class cliente {
    nombreCliente;
    cedulacliente;
    numeroCuenta;
    saldoCuenta;
}

//new cliente();

const cliente1 = new cliente();
cliente1.nombreCliente = "Veronica";
cliente1.cedulacliente = "123456";
cliente1.numeroCuenta = "09876";
cliente1.saldoCuenta = "5000";

const cliente2 = new cliente();
cliente2.nombreCliente = "Catalina";
cliente2.cedulacliente = "223344";
cliente2.numeroCuenta = "556677";
cliente2.saldoCuenta = "8000";

const cliente3 = new cliente();
cliente3.nombreCliente = "José";
cliente3.cedulacliente = "998877";
cliente3.numeroCuenta = "009988";
cliente3.saldoCuenta = "15000";

console.log(cliente1);
console.log(cliente2);
console.log(cliente3);