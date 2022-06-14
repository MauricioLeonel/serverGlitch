const express = require('express')
const path = require('path')
const app = express()



const productos = require('./src/routers/productos.js')

app.use(express.json());
app.use(express.urlencoded({extended: false}));
// lo probe para hacer el archivo publico con solo / 
// app.use(express.static(path.join(__dirname, 'publics')))

app.use('/',productos.prod)

// app.use('/',productos.prodRan)

app.listen('8080',()=>{
	console.log('todo ok')
})