const { crearArchivo } = require('./helpers/mul');

const base = 3;
console.clear();

crearArchivo(base)
  .then(nombreArchivo => console.log(nombreArchivo, 'creado'))
  .catch(err => console.log(err));