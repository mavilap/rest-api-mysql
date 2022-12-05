//console.log('hello world');
//const express= require('express');
import  express from 'express';
import employeesRoutes from './routes/employees.routes.js';
import indexRoutes from './routes/index.routes.js'

const  app = express();

app.use(express.json());

app.use('/api',employeesRoutes);
app.use(indexRoutes);

app.use((req, res, next) =>{
    return res.status(404).json ({
        message: 'End point not found'
    });
})

app.listen(3000);

console.log('escuchando en el puerto 3000 **');