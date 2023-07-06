import cors from 'cors';
import express from "express";
import mysql from "mysql";
import  Jwt from 'jsonwebtoken';

//crear intancia express

const app=express();
app.use(express.json());
app.use(cors());

//cramos la conexion

const conexion=mysql.createConnection({
    server:'localhost',
    user:'root',
    password:'',
    database:'mascotitas'
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

app.post('/acceso', (peticion,respuesta)=>{
    const sql="select * from usuarios where correo_electronico=? and contrasenia=?";
    conexion.query(sql,[peticion.body.correo_electronico,peticion.body.contrasenia],
    (error,resultado)=>{
        if(error) return respuesta.json({mensaje:"error en la consulta"});
        if(resultado.length>0){
            const token=Jwt.sign({usuario:'administrador'},'12345678', {expiresIn:'1d'});
            respuesta.cookie(token);
            return respuesta.json({Estatus:"CORRECTO",Usuario:token})  
        }else{
            return respuesta.json({Estatus:"ERROR", Error:"Usuario o contraseña incorrecta"});
        }
    })
});


//INICIAMOS EL SERVIDOR 

app.listen(8082,()=>{
    console.log("Servidor iniciado");
});