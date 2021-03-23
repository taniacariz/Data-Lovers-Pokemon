import data from './data/pokemon/pokemon.js';
console.log(data)
console.log(data.pokemon[100].name)

for (let i=0;i<data.pokemon.length;i++){
    console.log(data.pokemon[i].name);
    }

const information = document.getElementById("info");
    information.innerHTML = "prueba"


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

//Funcion desde Home a Botón Superior Centro

let btnCenter = document.getElementById("btnTwo")
btnCenter.addEventListener("click", nextPageCenter)

function nextPageCenter() {
    document.getElementById("home").style.display = "none";
    document.getElementById("buttonCenter").style.display = "block";
}

//Funcion desde Home a Botón Superior Derecha

let btnRight = document.getElementById("btnTree")
btnRight.addEventListener("click", nextPageRight)

function nextPageRight() {
    document.getElementById("home").style.display = "none";
    document.getElementById("buttonRight").style.display = "block";
}

//Funcion volver desde right

let btnBack = document.getElementById("btnBack")
btnBack.addEventListener("click", nextPageRight)

function nextPageRight() {
    document.getElementById("buttonRight").style.display = "none";
    document.getElementById("home").style.display = "block";
}

//Funcion volver desde center

let btnBack = document.getElementById("btnBack")
btnBack.addEventListener("click", nextPageRight)

function nextPageRight() {
    document.getElementById("buttonCenter").style.display = "none";
    document.getElementById("home").style.display = "block";
}

//Funcion volver desde left

let btnBack = document.getElementById("btnBack")
btnBack.addEventListener("click", nextPageRight)

function nextPageRight() {
    document.getElementById("buttonLeft").style.display = "none";
    document.getElementById("home").style.display = "block";
}
