import data from './data/pokemon/pokemon.js';
import {
  filterByGeneration, filterByType, orderByName, filterByResistant, orderByNum,
} from './data.js';

//Funcion desde Home a Pokedex General

let btnPikachu = document.getElementById("pikachu")
btnPikachu.addEventListener("click", nextPageOne)

function nextPageOne() {
  document.getElementById("home").style.display = "none";
  document.getElementById("segundaPagina").style.display = "block";
}

//Funcion desde Pokedex a Home

let btnBackDex = document.getElementById("btnBackDex")
btnBackDex.addEventListener("click", homePageDex)

function homePageDex() {
  document.getElementById("segundaPagina").style.display = "none";
  document.getElementById("home").style.display = "block";
}

//Funcion desde Home a Botón Superior Izquierdo

let btnLeft = document.getElementById("btnOne")
btnLeft.addEventListener("click", nextPageLeft)

function nextPageLeft() {
  document.getElementById("home").style.display = "none";
  document.getElementById("buttonLeft").style.display = "block";
}

//Funcion BACK Botón Superior Izquierdo

let btnBack = document.getElementById("btnBack")
btnBack.addEventListener("click", homePage)

function homePage() {
  document.getElementById("buttonLeft").style.display = "none";
  document.getElementById("home").style.display = "block";
}

//Funcion desde Home a Botón Superior Centro

let btnCenter = document.getElementById("btnTwo")
btnCenter.addEventListener("click", nextPageCenter)

function nextPageCenter() {
  document.getElementById("home").style.display = "none";
  document.getElementById("buttonCenter").style.display = "block";
}

//Funcion BACK Botón Superior Centro 

let btnBackOne = document.getElementById("btnBackOne")
btnBackOne.addEventListener("click", homePageOne)

function homePageOne() {
  document.getElementById("buttonCenter").style.display = "none";
  document.getElementById("home").style.display = "block";
}

//Funcion desde Home a Botón Superior Derecha

let btnRight = document.getElementById("btnTree")
btnRight.addEventListener("click", nextPageRight)

function nextPageRight() {
  document.getElementById("home").style.display = "none";
  document.getElementById("buttonRight").style.display = "block";
}

//Funcion BACK Botón Superior Derecho

let btnBackTwo = document.getElementById("btnBackTwo")
btnBackTwo.addEventListener("click", homePageTwo)

function homePageTwo() {
  document.getElementById("buttonRight").style.display = "none";
  document.getElementById("home").style.display = "block";
}


//Variable que guarda la data Pokémon

const pokemonList = data.pokemon;

//ForEach se ejecuta por cada elemento del array.
// Función para mostrar todos los pokémon, se utiliza innerHTML para mostrar la información en pantalla. 

const displayPokemon = (pokemonData) => {
  const pokeCard = document.getElementById('pokemones');
  pokemonData.forEach((elem) => {
    pokeCard.innerHTML += `
    
    <div class="card-container">
    <div id="card" class="card">
      <div id="front" class="front"> 
         <div class="title"> ${elem.name.toUpperCase()}</div>
         <div class="numberTitle">#${elem.num}</div>
         <img class="picture" src=" ${elem.img}"></img>
      </div>

      <div id="back" class=" back">
         <div class="infCardAbout">${elem.about}</div> 
         <div class="infCardAbout"<br>Generación<br>${elem.generation.name}</div> 
         <div class="infCardAbout">Tipo de Huevo<br>${elem.egg}</div>
         <div class="infCardAbout infCard">Fortalezas<br>${elem.resistant.join(', ')}</div>
      </div>
    </div>
  </div>
`;
  });
};

displayPokemon(pokemonList);

//Filtrar según generación 

let searchGeneration;
const containerGeneration = document.getElementById('generation');
containerGeneration.addEventListener('change', () => {
  const closePokemones = document.getElementById('pokemones');
  closePokemones.innerHTML = '';
  searchGeneration = containerGeneration.value;

  displayPokemon(filterByGeneration(pokemonList, searchGeneration));
});




//Filtrar según orden

let searchOrder;
const containerOrder = document.getElementById('order');
containerOrder.addEventListener('change', () => {
  const closePokemones = document.getElementById('pokemones');
  closePokemones.innerHTML = '';
  searchOrder = containerOrder.value;

  orderByName(pokemonList, searchOrder);
  displayPokemon(pokemonList);
});


//Filtrar según número

let searchOrderNum;
const containerOrderNum = document.getElementById('orderNum');
containerOrderNum.addEventListener('change', () => {
  const closePokemones = document.getElementById('pokemones');
  closePokemones.innerHTML = '';
  searchOrderNum = containerOrderNum.value;

  orderByNum(pokemonList, searchOrderNum);
  displayPokemon(pokemonList);
});



//Filtrar según tipo
//innerHTML vacio reemplaza todo el contenido por un contenido a definir 

let searchType;
const containerType = document.getElementById('tipo');
containerType.addEventListener('change', () => {
  const closePokemones = document.getElementById('pokemones');
  closePokemones.innerHTML = '<h1>HOLA</h1><h1>HOLA</h1><h1>HOLA</h1><h1>HOLA</h1>';
  searchType = containerType.value;

  displayPokemon(filterByType(pokemonList, searchType));
  
});



//Filtrar según Resistencia 

let searchResistant;
const containerResistant = document.getElementById('resistencia');
containerResistant.addEventListener('change', () => {
  const closePokemones = document.getElementById('pokemones');
  closePokemones.innetHTML = '';


  searchOrder = containerOrder.value;

  displayPokemon(filterByResistant(pokemonList, searchResistant));
});

