
//es un termino muy popular que rodea al mundo de las promesas
//el await le dice a js que espere hasta que la promesa brinde una respuesta
//cuando se obtenga la respuesta de la promesa se asigna donde se necesite
// el incoveniente del await es que tiene que estar dentro de una funcion o metodo asincrono
// Lo que hace el async es tranforma una funcion a una funcion asyncrona que devuelva una promesa
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

// El await solo se dentro de funciones asincronas y recibir respuestas de funciones que devuelven una promesa
const getInfoUsuario = async (id) => {

  try {
    const empleado = await getEmpleado(id);
    const salario = await getSalario(id);
    return `El empleado: ${empleado} tiene un salario de:  ${salario}`;
  } catch (error) {
    // return error; si ponemos un trow directamente llamamos al reject de esta funcion asincrona
    throw error;
  }
}

const id = 3;

getInfoUsuario(id)
  .then(msg => console.log(msg))
  .catch(err => console.log(err));
