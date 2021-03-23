import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

//declarar una variable - cuál es la longitud del arreglo
//for para recorrer arreglo

//let arreglo = [100, 101, 102]
//console.log(arreglo.length)
//console.log(arreglo[0])

console.log(example, data);
console.log(data.pokemon[9].name)
console.log(data.pokemon[9].generation.name)
console.log(data.pokemon[9].about)

