
//Función que filtra por Generación

const filterByGeneration = (data, valor) => {
  const filterPokemonByGeneration = data.filter(
    pokemon => pokemon.generation.name === valor,
  );
  return filterPokemonByGeneration;
};

//Función que filtra por tipo

const filterByType = (data, valor) => {
  const filterPokemonByType = data.filter(
    pokemon => pokemon.type.indexOf(valor.toLowerCase()) > -1, 
  );
  return filterPokemonByType;
};

//Función para ordenar pokemon de A-Z y Z-A
//data.sort = sort ordena el array según los parámetros que uno le ingrese 

const orderByName = (data, valor) => {
  if (valor === 'A-Z') {
    data.sort((a, b) => a.name.localeCompare(b.name));
  } else {
    data.sort((a, b) => b.name.localeCompare(a.name));
  }
};


//return -1 es porque a va antes que b
//Funcion para ordenar pokemon por orden numerico 

const orderByNum = (data, valor) => {
  if (valor=== '0-9') {
    
    //data.sort((a, b) => a.num.localeCompare(b.num));

    data.sort((a, b) => {
      if (a.num > b.num) {
        return 1; 
      }
      else if (a.num < b.num){
        return -1;
      }
      else if (a.num === b.num){
        return 0;
      }
    })

  } else {
    
    //data.sort((a, b) => b.num.localeCompare(a.num));
  
    data.sort((a, b) => {
      if (a.num < b.num) {
        return 1; 
      }
      else if (a.num > b.num){
        return -1;
      }
      else if (a.num === b.num){
        return 0;
      }
    })
  }
};

//Función de resistencia 

const filterByResistant = (data, valor) => {
  const filterPokemonByResistant = data.filter(
    pokemon => pokemon.resistant.indexOf(valor) > -1,
  );
  return filterPokemonByResistant;
};


export {
  filterByGeneration, filterByType, orderByName, filterByResistant, orderByNum,
};

