import data from './data/pokemon/pokemon.js';
import {
  filterByGeneration,
  filterByType,
  orderByName,
  searchByName,
} from './data.js';

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

//Guarda la data de Pokémon

const pokemonList = data.pokemon;

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

let searchGeneration;
const containerGeneration = document.getElementById('generation');
containerGeneration.addEventListener('change', () => {
  const closePokemones = document.getElementById('pokemones');
  closePokemones.innerHTML = '';
  searchGeneration = containerGeneration.value;

  displayPokemon(filterByGeneration(pokemonList, searchGeneration));
});

let searchType;
const containerType = document.getElementById('tipo');
containerType.addEventListener('change', () => {
  const closePokemones = document.getElementById('pokemones');
  closePokemones.innerHTML = '';
  searchType = containerType.value;

  displayPokemon(filterByType(pokemonList, searchType));
});

let searchOrder;
const containerOrder = document.getElementById('order');
containerOrder.addEventListener('change', () => {
  const closePokemones = document.getElementById('pokemones');
  closePokemones.innerHTML = '';
  searchOrder = containerOrder.value;

  orderByName(pokemonList, searchOrder);
  displayPokemon(pokemonList);
});

let searchPokemon;
const btnBuscar = document.getElementById('btnBuscar');
btnBuscar.addEventListener('click', () => {
  searchPokemon = document.getElementById('box').value;
  const closePokemones = document.getElementById('pokemones');
  closePokemones.innerHTML = '';

  displayPokemon(searchByName(pokemonList, searchPokemon));
});
