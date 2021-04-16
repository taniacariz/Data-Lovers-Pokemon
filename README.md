# Proyecto orientado a los fanáticos de Pokémon Go

_Nuestra DataDex fue pensaba en ser amigable e intuitiva con los usuarios fanáticos de Pokémon Go, dándoles una experiencia similar a lo que pudieron haber encontrado tanto en la serie como en los juegos._

_Para poder trabajar de manera más transparente se hizo una recolección de datos y opiniones desde donde pudimos rescatar el concepto de trabajar con una "Pokedex" y mantener la experiencia de los mismos personajes de la serie. Este catastro de datos fue respondido por un aproximado de 100 personas fanáticas del juego._


![Gráficos ](https://github.com/tanimikyu/Data-Lovers--Pokemon/blob/master/src/images/datos.jpg)


## Pruebas iniciales 🙌

_Se desarrollo la idea principal en papel y luego en Figma para poder maquetear y confirmar nuestra capacidad de diagramar lo que teníamos en mente._


![Boceto en papel](https://github.com/tanimikyu/Data-Lovers--Pokemon/blob/master/src/images/prototipo.png)


![Figma protótipo inicial, ruta 1](https://github.com/tanimikyu/Data-Lovers--Pokemon/blob/master/src/images/Figma1.png)

![Figma protótipo inicial, ruta 2](https://github.com/tanimikyu/Data-Lovers--Pokemon/blob/master/src/images/Figma2.png)



<div align="center">Link de Figma: https://www.figma.com/proto/bCeFoMai8qapVZnef6mNCB/Donaciones-uvu?node-id=5%3A17&scaling=min-zoom</div>

### Cambios en la interfaz 🐹

_Para facilitar la experiencia del usuario se agrego una imagen explicativa del código verificador._


![Tarjeta](https://github.com/tanimikyu/FundacionesCV/blob/master/src/images/Tarjeta.png)


## Cambios en el código HTML ⚙️

_Como recomendación se me indico que era recomendable trabajar todo mi código html en sólo un archivo y no linkear entre archivos._

 <p align="center"> 
    <img src="https://github.com/tanimikyu/FundacionesCV/blob/master/src/images/muchoshtml.png">
 </p>


_Se juntaron todos los archivos html en uno principal trabajando el flujo de páginas a través de JS. La única página que quedo excenta fue la del Código Verificador debido a que en esta ocasión no logre vincularla al flujo principal._

 <p align="center"> 
    <img src="https://github.com/tanimikyu/FundacionesCV/blob/master/src/images/pocoshtml.png">
 </p>

## Uso de JavaScript 🔐

_Lo primero que se trabajo en JS fue la vinculación de las páginas a través de apagar y encender secciones del código._

<p align="center"> 
    <img src="https://github.com/tanimikyu/FundacionesCV/blob/master/src/images/JS.jpg">
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