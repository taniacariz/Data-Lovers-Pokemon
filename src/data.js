
//Filtrar por Generación

const filterByGeneration = (data, valor) => {
    const filterPokemonByGeneration = data.filter(
        pokemon => pokemon.generation.name === valor,
    );
    return filterPokemonByGeneration;
};
 
//Filtrar por tipo

const filterByType = (data, valor) => {
    const filterPokemonByType = data.filter(
      pokemon => pokemon.type.indexOf(valor.toLowerCase()) > -1, /*Convierte todos los carácteres en minúsculas menos el primero >-1*/
    );
    return filterPokemonByType;
  };
  

//Filtrar por nombres de la A-Z

  const orderByName = (data, valor) => {
    if (valor === 'A-Z') {
      data.sort((a, b) => a.name.localeCompare(b.name));
    } else {
      data.sort((a, b) => b.name.localeCompare(a.name));
    }
  };
  
//Buscar por nombre o número 

  const searchByName = (data, valor) => {
    const filterPokemonByName = data.filter(
      pokemon => pokemon.name === valor.toLowerCase() || pokemon.num === valor,
    );
    return filterPokemonByName;
  };

  
export {
    filterByGeneration, filterByType, orderByName, searchByName,
  };
  
