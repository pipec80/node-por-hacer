const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea por hacer'
};
const completado = {
    demand: true,
    alias: 'c',
    desc: 'marca como completado o pendiente la tarea'
};

const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', { descripcion })
    .command('borrar', 'Borrar una tarea', { descripcion })
    .command('actualizar', 'Genera un archivo con la tabla de multiplicar', {
        descripcion,
        completado
    })
    .help()
    .argv;


module.exports = {
    argv
}