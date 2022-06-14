const contenedor = require('../models/Contenedor.js')
const fs = require('fs')
const path = require('path')


exports.indexProd = async (req,res)=>{
	// un par de experimentos que hice
	// const ip = req.socket.localAddress;
	// const port = req.socket.localPort;
	// console.log(`Your IP address is ${ip} and your source port is ${port}.`);
	// let data = await contenedor.getAll()

	res.send('<a href="/productos">Productos</a><a href="/productosRandom">Productos Random</a>')
}


exports.consultProd = async (req,res)=>{
	// un par de experimentos que hice
	// const ip = req.socket.localAddress;
	// const port = req.socket.localPort;
	// console.log(`Your IP address is ${ip} and your source port is ${port}.`);
	let data = await contenedor.getAll()
	res.json(data)
}



exports.consultProdRan = async (req,res)=>{
	let random = Math.round((Math.random()*2))
	let data = await contenedor.getById(random)
	res.json(data)

}