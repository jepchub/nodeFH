const { crearArchivo } = require('./helpers/mul');
const argv = require('./config/yargs');
// const colors = require('colors/safe');
// const colors = require('colors');
require('colors');

console.clear();

// console.log(argv);
// console.log('base: yargs', argv.b);
// console.log(process.argv);

// console.log(process.argv);
// const [, , arg3='base=5']=process.argv;
// const [, base=5]=arg3.split('=');

// const base = 3;
crearArchivo(argv.b,argv.l, argv.h)
  .then(nombreArchivo => console.log(nombreArchivo.rainbow, 'creado'))
  .catch(err => console.log(err));