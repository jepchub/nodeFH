const { crearArchivo } = require('./helpers/mul');
const argv = require('yargs')
                .option('b',{
                  alias: 'base',
                  type: 'number',
                  demandOption: true
                })
                .option('l',{
                  alias: 'listar',
                  type: 'boolean',
                  default:false,
                  demandOption: true
                })
                .check((argv,options) =>{
                  if( isNaN(argv.b)){
                    throw 'La base tiene que se un número'
                  }
                  return true;
                })
                .argv;


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