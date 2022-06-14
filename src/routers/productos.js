const express = require('express')

const rutas = express.Router()

const productosControler = require('../controlers/productosController.js')

exports.prod = rutas.get('/',productosControler.indexProd)

exports.prod = rutas.get('/productos',productosControler.consultProd)

exports.prodRan = rutas.get('/productosRandom',productosControler.consultProdRan)