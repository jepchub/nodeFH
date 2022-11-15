// Es una funcion que se ejecutara despues en algun punto del tiempo
// Es una funcion que se manda como argumento a otra funcion
// setTimeout(() => {
//   console.log('Hola mundo');
// }, 1000);

// const getUsuarioById = (id) => {
//   const usuario = {
//     id,
//     nombre: 'Jose'
//   }

//   setTimeout(() => {
//     console.log(usuario)
//   }, 1500);
// }

// getUsuarioById( 10 );

const getUsuarioById = (id, callback) => {
  const user = {
    id,
    nombre: 'Jose'
  }

  setTimeout(() => {
    callback(user)
  }, 1500);
}

// getUsuarioById( 10, (usuario)=>{
//   console.log(usuario);
// } );

getUsuarioById( 10, (usuario)=>{
    console.log(usuario.id);
    console.log(usuario.nombre.toUpperCase());
  } );