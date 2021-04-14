//¿Que formas hay de crear elmentos HTML?
//- Podemos crearlo con createElement y appendChild
  //Ejemplo, crear un div y agregarlo en body
  //Paso 1: crear el elemento
  let myDiv = document.createElement('div');
  //Paso 2: configurar el elemento
  myDiv.id = "home";
  myDiv.classList.add("header");
  //Paso 3: agregarlo al DOM
  document.body.appendChild(myDiv);

  //Ejemplo 2, crear un h1 y agregarlo al div con id "name"
  //Paso 1: crear el elemento
  let myH1 = document.createElement('h1');
  //Paso 2: configurar el elemento
  myH1.textContent = "Sergio";
  //Paso 3: agregar al DOM
  //Paso 3.1: obtener el div con id "name"
  let divName = document.getElementById('name');
  //Paso 3.2: agregarlo al div
  divName.appendChild(myH1);

//- Podemos usar innerHTML

let divLastName = document.getElementById('lastName');
divLastName.innerHTML = '<h1>Sinuco</h1>';
