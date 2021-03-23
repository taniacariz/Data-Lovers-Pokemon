/*
declarar una variable - cuál es la longitud del arreglo
for para recorrer arreglo

let arreglo = [100, 101, 102]
console.log(arreglo.length)
console.log(arreglo[0])

console.log(example, data);
console.log(data.pokemon[9].name)
console.log(data.pokemon[9].generation.name)
console.log(data.pokemon[9].about)




queremos referenciar una posición dentro del arreglo []
arreglo_numeros = [0,1,2,3,4,5];
console.log(arreglo_numeros[3]);


largo de nuestro arreglo
arreglo_numeros = [10,20,30,40,50];
console.log(arreglo_numeros.length);

Forma 1: recorre el largo del arreglo independiente del largo
let pokemon = ["pikachu", "eevee", "charizard"];
for (let i=0;i<pokemon.length;i++){
    console.log(pokemon[i]);
    }


Forma 2: let pokemon = ["Pikachu", "Eevee", "Charizard"];
pokemon.forEach( function (pokemon,index) {
    //console.log(`${index} => ${pokemon}`)
    console.log(index+ " => "+pokemon)
});


Forma 3: MAP 

let dias = [
    {nro:1, día:"LUNES"},
    {nro:2, día:"MARTES"},
    {nro:3, día:"MIÉRCOLES"},
    {nro:4, día:"JUEVES"},
    {nro:5, día:"VIERNES"}
]

dias.map(function(dias){
console.log(dias.nro+" = > "+dias.día);
});



let dias = [
    {nro:1, dia:"LUNES", mes:"ENERO"},
    {nro:2, dia:"MARTES", mes:"FEBRERO"}
]

dias.map(function(dias){
    console.log(dias.nro+" => "+dias.dia+" - "+dias.mes);
})

*/