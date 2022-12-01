class Cliente {

     constructor( nombre,  apellido,  edad,  dni,sexo,  cuota) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.dni = dni;
        this.sexo = sexo;
        this.cuota = cuota;
    }

     getDni() {
    return dni;
    }

    getNombre() {
        return this.nombre;
    }
    getSexo() {
        return this.sexo;
    }
    setSexo( sexo) {
        this.sexo = sexo;
    }

   setNombre( nombre) {
        this.nombre = nombre;
    }

   getApellido() {
        return this.apellido;
    }

    setApellido( apellido) {
        this.apellido = apellido;
    }

   getEdad(edad) {
        return this.edad;
    }

   setEdad( edad) {
        this.edad = edad;
    }
        getcuota(cuota) {
        return cuota;
    }

    setcuota( cuota) {
        this.cuota = cuota;
    }

   setdni( dni) {
        this.dni = dni;
    }


}

module.exports = {Cliente};
