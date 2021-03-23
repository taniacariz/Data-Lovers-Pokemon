// estas funciones son de ejemplo

/*export const example = () => {
  return 'example';
};

export const anotherExample = () => {
  return 'OMG';
};
*/

//Funcion desde Home a Pokedex General

let inicio = document.getElementById("pikachuBusqueda")
inicio.addEventListener("click", nextPageOne)

function nextPageOne() {
    document.getElementById("home").style.display = "none";
    document.getElementById("segundaPagina").style.display = "block";
}

//Funcion desde Home a Pokedex General

function back() {
  document.getElementById("home").style.display = "block";
  document.getElementById("segundaPagina").style.display = "none";
}

//Retornar a la primera página class="volver"

let volver = document.getElementsByClassName("volver")
Array.from(volver).forEach((element) => {
  element.addEventListener("click", back)
})