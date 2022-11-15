const fs = require('fs');//sirve para grabar o escribir arhivos locales

// const crearArchivo = (base = 1) => {
//   return new Promise((resolve, reject) =>{
//     console.log('======================');
//     console.log(`    Tabla del: ${base}`);
//     console.log('======================');

//     let salida = '';

//     for (let con = 1; con <= 10; con++) {
//       salida += `${base} X ${con} = ${base * con}\n`;
//     }

//     console.log(salida);

//     fs.writeFileSync(`tabla-${base}.txt`, salida);

//     resolve(`tabla-${base}.txt creado`);
//   })
// }

// Async
const crearArchivo = async (base = 1) => {

  try {
    console.log('======================');
    console.log(`    Tabla del: ${base}`);
    console.log('======================');

    let salida = '';

    for (let con = 1; con <= 10; con++) {
      salida += `${base} X ${con} = ${base * con}\n`;
    }

    console.log(salida);

    fs.writeFileSync(`tabla-${base}.txt`, salida);

    return `tabla-${base}.txt creado`;
  } catch (error) {
    throw error;

  }
}

module.exports = {
  crearArchivo
}

// module.exports = {
//   crearArchivo: crearArchivo
// }