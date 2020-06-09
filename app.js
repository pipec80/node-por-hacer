const argv = require('./config/yargs').argv;
var colors = require('colors');
const porHacer = require('./por-hacer/por-hacer');


let comando = argv._[0];
switch (comando) {
    case 'crear':
        porHacer.crear(argv.descripcion);
        break;
    case 'listar':
        let listado = porHacer.getListado();
        for (let tarea of listado) {
            console.log('=======Por HACer ======'.green);
            console.log(tarea.descripcion);
            console.log('Estado: ', tarea.completado);
            console.log('========================='.green);
        }
        break;
    case 'actualizar':
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        break;
    case 'borrar':
        let borrado = porHacer.borrar(argv.descripcion);
        break;
    default:
        console.log('sin comando');
        break;
}