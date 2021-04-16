# DATADEX ✨

_Nuestra DataDex fue pensaba en ser amigable e intuitiva con los usuarios fanáticos de Pokémon Go, dándoles una experiencia similar a la de los personajes en la serie de Pokémon._

_Para poder trabajar de manera más transparente se hizo una recolección de datos y opiniones de donde rescatamos el concepto general de trabajo. La idea principal fue desarrollar una "Pokedex" y mantener la experiencia de los mismos personajes de la serie. Este catastro de datos fue respondido por un aproximado de 100 personas fanáticas del Pokémon Go._

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

_Para facilitar la experiencia del se agregaron algunos elementos visuales, respetando el diseño de Figma inicial lo máximo posible.

![Imagen para botón a Segunda Pantalla](https://github.com/tanimikyu/FundacionesCV/blob/master/src/images/Pikachu1.png)

![Imagenes con Slider e información con Scroll](https://github.com/tanimikyu/FundacionesCV/blob/master/src/images/Pikachu2.png)

## Cambios en el código HTML ⚙️

_Se trabajo toda la diagramación en HTML, aunque se puede encontrar adjunta la Página HOME completa en Javascript a modo de práctica._
_Hay jerarquía de contenedores para poder haber diagramado sobre imágenes. Contenedor de imagen de fondo general, contenedor de imagen de la Pokédex y contenedor del orden interno de los elementos de la Pokedex. Esto con el fin de poder desplazar los elementos en la página con total comodidad._

 <p align="center"> 
    <img src="https://github.com/tanimikyu/FundacionesCV/blob/master/src/images/codigo.png">
 </p>
 
_Se juntaron todos los archivos html en uno principal trabajando el flujo de páginas a través de JS._


## Uso de JavaScript 🔐

_Lo primero que se trabajo en JS fue la vinculación de las páginas a través de apagar y encender secciones del código._

<p align="center"> 
    <img src="https://github.com/tanimikyu/FundacionesCV/blob/master/src/images/cambiopagina.png">
 </p>

_Y en paralelo los botones bajo la etiqueta "volver" se redireccionaron hacía "Home"._

<p align="center"> 
    <img src="https://github.com/tanimikyu/FundacionesCV/blob/master/src/images/JS1.jpg">
 </p>
  
_En última instancia se trabajo en el Validator, dividido en dos pasos. "IsValid" para la validación y "Maskify", el cual se encarga de esconder los números de la tarjeta de crédito ingresada

_Para poder iniciar el Validator lo vinculamos al botón de "¿Confirmar?"._

<p align="center"> 
    <img src="https://github.com/tanimikyu/FundacionesCV/blob/master/src/images/JS2.jpg">
 </p>

_1. Si los carácteres ingresados no son números, son menos de 16 o no es una tarjeta de Crédito Válida nos arroja un "alert" con un mensaje que nos solicita intentar nuevamente._

<p align="center"> 
    <img src="https://github.com/tanimikyu/FundacionesCV/blob/master/src/images/JS3.jpg">
 </p>
 
_2. En caso de que los datos sean correctos ("true"), nos arroja un "alert" con los números de la tarjeta "enmascarados". En esta instancia no logré enmascarar el número en el mismo input, dejándolo como una oportunidad pendiente para otro proyecto._

<p align="center"> 
    <img src="https://github.com/tanimikyu/FundacionesCV/blob/master/src/images/JS4.jpg">
 </p>

## Trabajo final y observaciones 🐰✨💖

_Diseño final del proyecto. En aspectos generales, es una copia casi fiel de mi protótipo de Figma. Quisiera no haber tenido que utilizar el botón de "confirmación" para validar y así poder manejar totalmente la misma diagramación, pero aún así no hay una inconsistencia visual._

<p align="center"> 
    <img src="https://github.com/tanimikyu/FundacionesCV/blob/master/src/images/finalfinal.jpg">
 </p>

_También hubo un cambio en algunos colores generales, pero siempre respetando la paleta. Quisiera para el próximo proyecto poder trabajar mejor el Responsive Desing y así adaptar correctamente mi pantalla a dispositivos más pequeños. Mi proyecto se ajusta al tamaño de otros dispositivos, pero no completa la pantalla en la parte inferior y me molesta, visualmente hablando. No pude manejar bien el center tanto en horizontal como vertical debido a que hice algunas "sub categorias" de orden, como en el caso de la página de validación en la cual tengo muchos "inputs"._

_Y respecto a mi trabajo en JS, espero que en este próximo proyecto no sea tan difícil para mi. El aspecto visual se me hace mucho más sencillo, por lo cual sé cuál es el enfoque que debo darle a mis próximos pasos en términos de estudios._


Quedé conforme con mi trabajo y agradezco nuevamente la experiencia <3. 
¡Muchas gracias!
