const fs = require('fs');//sirve para grabar o escribir arhivos locales
// const colors = require('colors/safe');
const colors = require('colors');

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
// DEV - crear archivo
const crearArchivo = async (base = 1, lista = false, hasta = 1) => {

  try {
    let salida = '';
    let consola = '';

    // For genera la tabla de multiplicar
    for (let con = 1; con <= hasta; con++) {
      salida  += `${base} X ${con} = ${base * con}\n`;
      consola += `${base} ${'X'.america} ${con} ${'='.green} ${base * con}\n`;
    }

    // If verifica si el valor de la lista es true o false, para que se muestre
    if (lista) {
      console.log('======================'.green);
      // console.log(`    Tabla del: ${base}`);
      console.log('     Tabla del:'.cyan, colors.blue(base));
      console.log('======================'.green);
      console.log(consola);
    }

    // Crea el archivo con los datos
    fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

    // Devuelve un string con los datos
    return `tabla-${base}.txt`;

    // captura los errores
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