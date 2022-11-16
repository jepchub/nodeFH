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
const crearArchivo = async (base = 1, lista=false) => {

  try {
    let salida = '';

    // For genera la tabla de multiplicar
    for (let con = 1; con <= 10; con++) {
      salida += `${base} X ${con} = ${base * con}\n`;
    }

    // If verifica si el valor de la lista es true o false, para que se muestre
    if (lista) {
      console.log('======================');
      console.log(`    Tabla del: ${base}`);
      console.log('======================');
      console.log(salida);
    }

    // Crea el archivo con los datos
    fs.writeFileSync(`tabla-${base}.txt`, salida);

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