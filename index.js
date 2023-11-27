//import de libreria
const express = require('express');

const data = require("./data.json");

const app = express();

const PORT = process.env.PORT || 3000;

app.get('/henry/:nombre', (req, res)=> {
    const nombre = req.params.nombre;
    const nombreArray = data.nombres;

    const usuariofilter = nombreArray.filter((usuario) => usuario.name === nombre);

    if ( usuariofilter.length > 0 ) {
        res.status(201).send({
            "STATUS": "OK",
            code: 201,
            "message": "Chido!!! 😘",
            data: usuariofilter[0]
        });
    } else {
        res.status(404).send({
            "STATUS": "OK",
            code: 404,
            "message": "usuario no encontrado! 🤯",
        });
    } 
});

app.get('/', (req, res) => {
    res.status(200).send({
        message: "Este es un servicio de tipo get"
    });
});

app.listen(PORT, () => {
    console.log(`Server is running. http://localhost:${PORT}`)
})