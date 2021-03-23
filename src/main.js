
//Funcion desde Home a Pokedex General

let btnPikachu = document.getElementById("pikachu")
btnPikachu.addEventListener("click", nextPageOne)

function nextPageOne() {
    document.getElementById("home").style.display = "none";
    document.getElementById("segundaPagina").style.display = "block";
}


//Funcion desde Home a Botón Superior Izquierdo

let btnLeft = document.getElementById("btnOne")
btnLeft.addEventListener("click", nextPageLeft)

function nextPageLeft() {
    document.getElementById("home").style.display = "none";
    document.getElementById("buttonLeft").style.display = "block";
}


//declarar una variable - cuál es la longitud del arreglo
//for para recorrer arreglo

//let arreglo = [100, 101, 102]
//console.log(arreglo.length)
//console.log(arreglo[0])

console.log(example, data);
console.log(data.pokemon[9].name)
console.log(data.pokemon[9].generation.name)
console.log(data.pokemon[9].about)
