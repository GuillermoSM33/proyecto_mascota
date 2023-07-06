import cors from 'cors';
import express from "express";
import mysql from "mysql";

//crear intancia express

const app=express();
app.use(cors());

//cramos la conexion

const conexion=mysql.createConnection({
    server:'localhost',
    user:'root',
    password:'',
    database:'mascotiras'
});

//verificamos conexion

conexion.connect(function(error){
    if(error){
        console.log("Error al conectar a la base de datos");
    }else{
        console.log("Conectado exitosamente");
    }
});

//Consultar la lista de mascotas
app.get('/obtenerMascotas',(peticion, respuesta)=>{
    const sql="Select * from mascotas";
    conexion.query(sql,(error, resultado) =>{
        if(error) return respuesta.json({mensaje:"error"});
        return respuesta.json({mensaje:"exitoso",contenido:resultado});
    });
});



//INICIAMOS EL SERVIDOR 

app.listen(8082,()=>{
    console.log("Servidor iniciado");
});