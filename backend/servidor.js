import express from "express";
import mysql from "mysql";

//crear intancia express

const app=express();

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

//INICIAMOS EL SERVIDOR 

app.listen(8081,()=>{
    console.log("Servidor iniciado");
});