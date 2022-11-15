const deadpool = {
  nombre: 'Wade',
  apellido: 'Winston',
  poder: 'Regeneración',
  // edad:50,
  getNombre() {
    return `${this.nombre} ${this.apellido} ${this.poder}`
  }
}
// getNombre:function(){
//   return `${this.nombre} ${this.apellido} ${this.poder}`
// }

// const nombre   = deadpool.nombre;
// const apellido = deadpool.apellido;
// const poder    = deadpool.poder;

// const { nombre, apellido, poder, edad=0 } = deadpool;
// console.log(nombre, apellido, poder);

// function imprimirHeroe(heroe) {
//   const { nombre, apellido, poder, edad=0 } = heroe;
//   console.log(nombre, apellido, poder);
// }

function imprimirHeroe({ nombre, apellido, poder, edad=0 } ) {
    console.log(nombre, apellido, poder, edad);
  }

// imprimirHeroe(deadpool);

const heroes = ['Deadpool', 'Superman', 'Batman'];
// const h1 = heroes[0];
// const h2 = heroes[1];
// const h3 = heroes[2];

// const[h1,h2,h3] = heroes;
const[,,h3] = heroes;//si solo queremos el h3 y descartar los demas

// console.log(h1,h2,h3);
console.log(h3);