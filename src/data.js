
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



export {
  filterByGeneration, filterByType, orderByName,
};

