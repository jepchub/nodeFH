const { crearArchivo } = require('./helpers/mul');
const argv = require('./config/yargs');

console.clear();

console.log(argv);
// console.log('base: yargs', argv.b);
// console.log(process.argv);

// console.log(process.argv);
// const [, , arg3='base=5']=process.argv;
// const [, base=5]=arg3.split('=');

// const base = 3;
crearArchivo(argv.b,argv.l)
  .then(nombreArchivo => console.log(nombreArchivo, 'creado'))
  .catch(err => console.log(err));