
/*<!-- Primera Página - HOME - COMENTADA COMO EJEMPLO DE ESTUDIO-->

const showHomeHtmlElements = () => {

  let img = document.createElement('img');
  img.classList.add('portada');
  img.src = "images/DataDex.png";
  let homeDiv = document.getElementById('home');
  homeDiv.appendChild(img);

  let nav = document.createElement('nav');
  nav.classList.add('centrar');
  homeDiv.appendChild(nav);

  let btnOne = document.createElement('button');
  btnOne.classList.add('botones');
  btnOne.textContent = '¿Qué es Pokémon Go?';
  nav.appendChild(btnOne);

  let btnTwo = document.createElement('button');
  btnTwo.classList.add('botones');
  btnTwo.textContent = 'Caramelos y Incubadoras';
  nav.appendChild(btnTwo);

  let btnTree = document.createElement('button');
  btnTree.classList.add('botones');
  btnTree.textContent = 'Eventos';
  nav.appendChild(btnTree);

  let divOne = document.createElement('div');
  divOne.classList.add('contenedorDexUno');
  homeDiv.appendChild(divOne);
  divOne.innerHTML = '<div class="subContenedorDexUno">' +
  '<div class="textoUno">Busca un Pokémon por su nombre o su número en la Pokédex Nacional.</div>' +
  '<label id="textoInput">Nombre o Número</label> <input type="text" class="inputNombre">' +
  '<a id="buttonGo" href="2.1pokedexDos.html">GO</a>' +
  '<div class="textoUno">¡O ingresa a la búsqueda avanzada con Pikachu!</div>' +
  '<input type="image" id="pikachu" src="images/Pikachu.png"></div>'
}

showHomeHtmlElements();*/

