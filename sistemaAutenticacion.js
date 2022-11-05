export class SistemaAutenticacion {

    static login(empleado, clave) {

        //console.log(clave);
        //console.log(empleado.clave);

        return empleado.clave == clave;
        //if (empleado.clave == clave)
         //   return true;
       // return false;

    }
}