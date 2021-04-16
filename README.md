# DATADEX ✨

_Nuestra DataDex fue pensaba en ser amigable e intuitiva con los usuarios fanáticos de Pokémon Go, dándoles una experiencia similar a la de los personajes en la serie de Pokémon._

_Para poder trabajar de manera más transparente se hizo una recolección de datos y opiniones de donde rescatamos el concepto general de trabajo. La idea principal fue desarrollar una "Pokedex" y mantener la experiencia de los mismos personajes de la serie. Este catastro de datos fue respondido por un aproximado de 100 personas fanáticas del Pokémon._

![Gráficos ](https://github.com/tanimikyu/Data-Lovers--Pokemon/blob/master/src/images/datos.jpg)

# Opiniones destacadas ✍
<ol>
<li>-Basar la interfaz en el diseño de la Pokedex para mantener la experiencia dentro del juego.</li>
<li>-Que el interfaz sea completo, todo se muestre dentro de la misma página sin tener que estar navegando de manera exhaustiva. </li>
<li>-Habilitar un modo de experiencia online que se actualice a tiempo real como "Eventos".</li>
<li>-Que se mantenga la estética dentro de todo el concepto y no sólo en la portada, manteniendo una gama de colores. </li>
</ol>

## Pruebas iniciales 🙌

_Se desarrollo la idea principal en papel y luego en Figma para poder maquetear la base de nuestro proyecto._

![Boceto en papel](https://github.com/tanimikyu/Data-Lovers--Pokemon/blob/master/src/images/prototipo.png)

_Posibles pantallas de trabajo dentro de nuestra Pokédex. Bajo un orden general todas las rutas nacen desde HOME para llegar a las pestañas superiores con información adicional, a la búsqueda particular por Pokémon o a la data general donde poder filtrar.

![Figma protótipo Pantallas 1](https://github.com/tanimikyu/Data-Lovers--Pokemon/blob/master/src/images/Figma1.png)

![Figma protótipo Pantallas 2](https://github.com/tanimikyu/Data-Lovers--Pokemon/blob/master/src/images/Figma2.png)

<div align="center">Link de Figma: https://www.figma.com/file/zqLbaPrtNhidqb9XIoIGkQ/DATA-LOVERS-3?node-id=0%3A1</div>

### Cambios en la interfaz 🖐

_Para facilitar la experiencia del se agregaron algunos elementos visuales respetando el diseño de Figma inicial lo máximo posible. Al ser una página para distintos tipos de usuario se busca que sea intuitiva._

<p align="center"><img src="https://github.com/tanimikyu/Data-Lovers--Pokemon/blob/master/src/images/Pikachu1.png"></p>

_Implementación de Slider y Scroll para los contenedores de información. Se busca que la página sea más interactiva a través de cambio de página. También se implementa un botón de "back" utilizando la misma imagen de la Pokedex contenedora para hacerla más funcional._

<p align="center"><img src="https://github.com/tanimikyu/Data-Lovers--Pokemon/blob/master/src/images/Pikachu2.png"></p>

## Cambios en el código HTML ⚙️

_Se trabajo toda la diagramación en HTML, aunque se puede encontrar adjunta la Página HOME trabajada en Javascript a modo de práctica._
_Hay jerarquía de contenedores para poder diagramar sobre las imágenes base. Contenedor de imagen de fondo general, contenedor de imagen de la Pokédex y contenedor del orden interno de los elementos de la Pokedex. Esto con el fin de poder desplazar los elementos en la página con total comodidad._
 
<p align="center"><img src="https://github.com/tanimikyu/Data-Lovers--Pokemon/blob/master/src/images/codigo.png"></p>
 

## Uso de JavaScript 🔐

_Lo primero que se trabajo en JS fue la vinculación de las páginas a través de apagar y encender secciones del código._

<p align="center"><img src="https://github.com/tanimikyu/Data-Lovers--Pokemon/blob/master/src/images/cambiopagina.png"></p>

_En el documento Data podemos encontrar las funciones que ayudan a filtrar nuestra data principal, las cuales luego exportamos a Main._

<p align="center"><img src="https://github.com/tanimikyu/Data-Lovers--Pokemon/master/src/images/funcion.png"></p>

<p align="center"><img src="https://github.com/tanimikyu/Data-Lovers--Pokemon/blob/master/src/images/displayfuncion.png"></p>


## Trabajo final y observaciones ✨💖

_Diseño final del proyecto. En aspectos generales, es una copia casi fiel de nuestro protótipo de Figma. No pudimos habilitar la ventana de búsqueda por nombre y/o número debido a la dificultad de diagramación que tenía el proyecto, pero estamos conformes con las demás funcionalidades. Tenemos 5 tipos de filtro dentro de nuestra data general. También tenemos 3 pestañas de información adicional las cuales cumplen con nuestra necesidad de informar y mantener el proyecto "actualizado"._

_Diágrama de flujo principal desde HOME a la DataDex general_. 

<p align="center"><img src="https://github.com/tanimikyu/Data-Lovers--Pokemon/blob/master/src/images/rutaUno.png"></p>

_Pantallas secundarias de información_. 

<p align="center"><img src="https://github.com/tanimikyu/Data-Lovers--Pokemon/blob/master/src/images/rutaUno.png"></p>


