const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const cursos = require ("./../routes/cursosRoute");
const estudiantes = require ("./../routes/estudiantesRoute");
const profesores = require ("./../routes/profesoresRoute")

class Server {
    constructor(){
        this.app = express();
        this.middlewares();
        this.routes();
    }
    middlewares(){
        this.app.use(express.json());
        this.app.use(cors());
        this.app.use(morgan());
    }
    routes(){
        this.app.use('/api/cursos',cursos);
        this.app.use('/api/estudiantes',estudiantes);
        this.app.use('/api/profesores',profesores);
    }
    listen(){
        this.app.listen(3000, ()=>{
            console.log("Servidor corriendo en el puerto 3000");
        })
    }
}
module.exports = Server;

