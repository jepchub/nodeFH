var nombre = "Wolverine";//crea la variable de forma global, se le puede cmabiar el valor
//
let nombre1 = "Coloso";
const nombre3 = "QuickSilver";//no se puede cambiar el valor.
if (true) {
  let nombre1 = "Magneto"; //soolo matiene el valor dentro del scope
  // Si quitamos el let tomaria la variable ya declarada anteriormente
  const nombre3 = "Coloso";//igual que un let solo mantiene su valor miestras esta dentro del scoope
}

console.log(nombre);
//usar let si el contenido de la variable se va a poder cmabiar
//usar const si el contenido no sera cambiado jamas