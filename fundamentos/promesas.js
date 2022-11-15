//Nos ayuda a solucionar el tema de callback-hell
const empleados = [
  {
    id: 1,
    nombre: 'Jepc'
  },
  {
    id: 2,
    nombre: 'Linda'
  },
  {
    id: 3,
    nombre: 'Karen'
  }
];

const salarios = [
  {
    id: 1,
    salario: 1000
  },
  {
    id: 2,
    nombre: 1500
  },
];

//ANCHOR - getEmpleado
const getEmpleado = (id) => {
  // El resolve es un callback que se llama cuando se hace todo correctamente
  // El reject se llama cuando sucede un error
  return new Promise((resolve, reject) => {
    const empleado = empleados.find((e) => e.id === id)?.nombre;
    (empleado)
      ? resolve(empleado)
      : reject(`No existe el empleado con el id ${id}`);
  });
}

//ANCHOR - getSalario
const getSalario = (id) => {
  return new Promise((resolve, reject) => {
    const salario = salarios.find((s) => s.id === id)?.salario;
    (salario)
      ? resolve(salario)
      : reject(`No existe el salario con el id ${id}`);
  })
}

const id = 4;

// getEmpleado(id)
//   .then((empleado) => console.log(empleado))
//   .catch(err => console.log(err));

// getSalario(id)
//   .then((salario) => console.log(salario))
//   .catch(err => console.log(err));

// Codigo difisil de mantener
// getEmpleado(id)
//   .then((empleado) => {

//     getSalario(id)
//       .then((salario) => {
//         console.log( `El empleado: ${empleado} tiene un salario de: ${salario}`)
//       })
//       .catch(err => console.log(err));
//   })
//   .catch(err => console.log(err));

// Promesas en cadena
let nombre;
getEmpleado(id)
  .then((empleado) => {
    nombre = empleado;
    return getSalario(id);//no es necesario un then por que este callback regresa una promesa
    // esto me permite concatenar otro then
  })
  .then(
    // este then se lanza con el producto de la anterior promesa
    salario => console.log(`El empleado: ${nombre} tiene un salario de: ${salario}`)
  )
  .catch(err => console.log(err));