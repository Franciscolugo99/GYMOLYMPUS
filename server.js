const {
    request,
    response
} = require('express');
const express = require('express');
const path = require('path');
const app = express();
const funcion = require('./app'); //importo  las funciones
app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));


const port = 3000;

app.get('/', (request, response) => {
    response.sendFile(path.join(__dirname, './static/menu.html'));
});

app.get('/addNuevoClientes', (request, response) => {
    response.sendFile(path.join(__dirname, './forms/addNuevoCliente.html'));

});
app.get('/verClientes', (request, response) => { //el servidor recibe la ruta ver  
    response.sendFile(path.join(__dirname, './static/verClientes.html')); //muestra el archivo html con los pacientes
});


//guardo los pacientes en la unidad local
app.post('/addNuevoCliente', (request, response) => { // introducimos datos en la ruta agregar paciente 
    console.log('llego un post Añadir');
    funcion.cargarCliente(request.body);
    response.redirect('/addNuevoClientes')
});

// ver pacientes en en html 
app.get('/verClientesT', (request, response) => {
    var listarClientes = funcion.mostrarCliente();
    response.send(listarClientes);
});

app.get('/eliminarClientes', (request, response) => {
    response.sendFile(path.join(__dirname, './forms/eliminarCliente.html'));

});

app.post('/eliminarCliente', (request, response) => {
    funcion.eliminarCliente(request.body);
    response.redirect('/eliminarClientes');
});


app.get('/cuotaClientes', (request, response) => { //el servidor recibe la ruta ver  
    response.sendFile(path.join(__dirname, './forms/cambiarCuota.html')); //muestra el archivo html con los pacientes
});


app.post('/cuotaClient', (request, response) => {
    funcion.modificarCliente(request.body);
    response.redirect('/cuotaClientes');
});

app.listen(port, () => {
    console.log('puerto listo');
})