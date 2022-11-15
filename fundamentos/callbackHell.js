//Se describe como el infierno de los callbacks
// Un callback dentro de otro y otro y otro esto inposibilita el echo de diferenciar donde estan dichos callbacks

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

// getEmpleado
const getEmpleado = (id, callback) => {
  const empleado = empleados.find((e) => e.id === id);

  if (empleado) {
    callback(null, empleado.nombre);
  } else {
    callback(`Empleado con id ${id} no existe`);
  }
}

// getSalario
const getSalario = (id, callback) => {
  const salario = salarios.find((e) => e.id === id)?.salario;
  //si existe el salio con tal id entonces devuelve el valor del salario
  // sino se ejecuta todo hasta antes de ?

  if (salario) {
    callback(null, salario);
  } else {
    callback(`El salario con id ${id} no existe`);
  }
}

// console.log(getEmpleado(5));
id = 1;

getEmpleado(id, (err, empleado) => {
  if (err) {
    console.log('ERROR!');
    return console.log(err);
  }

  // console.log('Empleado existe!');
  // console.log(empleado);

  getSalario(id, (err, salario) => {
    if (err) {
      console.log('ERROR!');
      return console.log(err);
    }

    console.log(`El empleado: ${empleado} tiene un salario de: ${salario}`);
    // console.log(salario);
  })
})

// getSalario imprimir
// getSalario(id, (err, salario) => {
//   if (err) {
//     console.log('ERROR!');
//     return console.log(err);
//   }

//   console.log('El salario existe!');
//   console.log(salario);
// })