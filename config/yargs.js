const argv = require('yargs').options({
        direcccion: {
            alias: 'd',
            desc: 'Direccion de la ciudad para obtener el clima',
            demand: true
        }
    })
    .help()
    .argv;

module.exports = {
    argv
}