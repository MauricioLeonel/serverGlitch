const fs = require('fs/promises')
const path = require('path')


class Contenedor{
	constructor(file){
		this.file = path.join(`${__dirname}/${file.split('.')[0]}.json`)
		this.id=0
	}
	async save(data){
		try {
			const result = await this.getAll()
			if(result.message){
				data.id=1
				fs.writeFile(this.file,JSON.stringify([data]))
			}else{
				data.id=result[result.length-1].id + 1
				result.push(data)
				fs.writeFile(this.file,JSON.stringify(result))
			}
			return data.id
			
		} catch(e) {
			return e
		}
	}
	async getById(id){
		try{
			const result = await this.getAll()
			return result.filter(e=>e.id===id)

		}catch(e){
			console.log(e)
		}	
	}
	async getAll(){
		try {
			const data = await fs.readFile(this.file,{encoding:'utf8'})
			if(!data){
				throw new Error('datos no encontrados')
			}
			return JSON.parse(data)
		} catch(e) {
			return e
		}
	}
	async deleteByID(id){
		try {
			const result = await this.getAll()
			if(result.message){
				throw result.message
			}else{
				let data = result.filter(e=>e.id!=id)
				await this.deleteAll()
				await this.save(data)
				return 'borrado exitoso'
			}
		} catch(e) {
			console.log(e)
		}
	}
	async deleteAll(){
		try {
			fs.writeFile(this.file,JSON.stringify([]))
		} catch(e) {
			// statements
			console.log(e);
		}
	}
}

module.exports = new Contenedor('data')