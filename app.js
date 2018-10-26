// const axios = require()

const lugar = require('./lugar/lugar');

const clima = require('./clima/clima');

const argv = require('yargs')
					.options({
						direccion: {
							alias: 'd',
							desc: 'Direccion de la ciudad para optener el clima',
							demand: true
						}
					})
					.argv;


let getInfo = async (direccion) => {
	try {
		let coors = await lugar.getLugarLatLng(direccion);
		let temp = await clima.getClima( coors.lat, coors.lng);
		
		return `El clima en ${coors.direccion} es de ${temp}`
	} catch (error) {
		console.log(`No se pudo determinar el clima en ${direccion}`);
	}
	
}

getInfo(argv.direccion)
	.then(mensaje => console.log(mensaje))
	.catch(err => console.log(err));

// lugar.getLugarLatLng(argv.direccion)
// 	.then( resp => {
// 		console.log(resp);
// 	})
// 	.catch(err => console.log('Error', err)	);


// clima.getClima(3.4516467, -76.5319854)
// 	.then( temp => console.log(temp))
// 	.catch( err => console.log(err));
