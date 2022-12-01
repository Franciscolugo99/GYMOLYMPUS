const clases = require('./Clases');
var fs = require('fs');
var clientes = [];
var recupararClientes;

try {
    recupararClientes = fs.readFileSync('./Archivos/Cliente.txt', 'utf8');
    clientes = JSON.parse(recupararClientes);
} catch (error) {
    clientes = [];
}

function cargarCliente(A) {
    var nombre = A.nombre;
    var apellido = A.apellido;
    var dni = A.dni;
    var edad = A.edad;
    var sexo = A.sexo;
    var cuota = A.cuota;
    var cliente = new clases.Cliente(nombre, apellido, edad, dni, sexo, cuota);
    clientes.push(cliente);
    var datosCliente = JSON.stringify(clientes);
    fs.writeFile('./Archivos/Cliente.txt', datosCliente, (error, datos) => {
        if (error) {
            console.log('archivo no leido');
        } else {
            console.log('escritura exitosa');
        }
    });
}

function mostrarCliente() {
    return clientes;
}

function eliminarCliente(clientess) {
    var dniCliente = clientess.dni;
    clientes.splice(dniCliente, 1);
    var clienteDatos = JSON.stringify(clientes);
    fs.writeFile('./Archivos/Cliente.txt', clienteDatos, (error, datos) => {
        if (error) {
            console.log('archivo no leido');
        } else {
            console.log('escritura exitosa');
        }
    });
}

function modificarCliente(datos){
    var dniBuscar = datos.dni;
    var newCuota = datos.cuota;
  
    for (var i = 0; i < clientes.length; i++) {
        if (dniBuscar == clientes[i].dni) {
            clientes[i].cuota = newCuota;
        }
    }

    var clienteDatos = JSON.stringify(clientes);
fs.writeFile('./Archivos/Cliente.txt', clienteDatos, (error, datos) => {
    if (error) {
        console.log('archivo no leido');
    } else {
        console.log('escritura exitosa');
    }
    });

}

module.exports = {
    cargarCliente,
    mostrarCliente,
    eliminarCliente,
    modificarCliente
};