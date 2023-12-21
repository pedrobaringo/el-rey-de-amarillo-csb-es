![Fondo TutorialRey de Amarillo](https://github.com/pedrobaringo/el-rey-de-amarillo-csb-es/assets/148097688/b337ea49-2531-419f-b84f-ba3b2a9c8b49)

# Fichas para El Rey de Amarillo en Custom System Builder

## Tabla de Contenido
- [Introducción](#introducción)
- [Instalación](#instalación)
- [Crear un PJ](#crear-un-pj)
  - [Pestaña de Habilidades](#pestaña-de-habilidades)
  - [Pestaña de Trasfondo](#pestaña-de-trasfondo)
  - [Heridas y Conmociones](#heridas-y-conmociones)
- [Crear un Objetivo para Secuelas](#crear-un-objetivo-para-secuelas)
- [Crear un Enemigo](#crear-un-enemigo)
  - [Pestaña de Características](#pestaña-de-características)
  - [Pestaña de Combate](#pestaña-de-combate)
- [Crear Objetos](#crear-objetos)
  - [HabGen_Template: Para las Habilidades Generales](#habgen_template-para-las-habilidades-generales)
  - [HabInv_Template: Para las Habilidades de Investigación](#habinv_template-para-las-habilidades-de-investigación)
  - [Her_Conm_Template: Para las Heridas y Conmociones](#her_conm_template-para-las-heridas-y-conmociones)
  - [Objetivo_Template: Para los Objetivos en Secuelas](#objetivo_template-para-los-objetivos-en-secuelas)
  - [Vales_Golpes_Template: Para los Vales y Golpes en Secuelas](#vales_golpes_template-para-los-vales-y-golpes-en-secuelas)
- [¿Cómo importar templates después de una actualización?](#c%C3%B3mo-importar-templates-despu%C3%A9s-de-una-actualizaci%C3%B3n)

## Introducción
Modulo de Foundry VTT con las templates de las fichas para el juego The Troubleshooters en español para el sistema Custom System Builder ( https://foundryvtt.com/packages/custom-system-builder ).

Para aprender como instalarlo y usarlo podeis ver el tutorial en el siguiente enlace: 
[![Video del tutorial](http://img.youtube.com/vi/uzD6I1UfKys/0.jpg)](http://www.youtube.com/watch?v=uzD6I1UfKys "Tutorial Foundry-El Rey de Amarillo")

## Instalación
Para instalar este módulo en Foundry tienes que usar el siguiente Manifest en el menú de módulos como se muestra en la imagen: https://github.com/pedrobaringo/el-rey-de-amarillo-csb-es/releases/latest/download/module.json

![image](https://github.com/pedrobaringo/el-rey-de-amarillo-csb-es/assets/148097688/ee2872dc-87c2-4d0f-97ce-2620dc215a51)

Cuando hayas creado un mundo con el sistema Custom System Builder debes activar este módulo. En la pestaña de compendios tendrás seis: "Actores París", "Actores Las Guerras", "Actores Secuelas", "Actores Nueva Normalidad", "Objetos" y "Objetos Secuelas".

**Es importante que importes primero los compendios "Objetos" (y el de "Objetos Secuelas" si vas a jugar en esa ambientación) y después los compendios de Actores correspondientes a la ambientación que vayas a jugar, pero sobretodo que se mantenga el ID del documento como se ve en la imagen:**

![image](https://github.com/pedrobaringo/el-rey-de-amarillo-csb-es/assets/148097688/c39e60bd-ec9a-483a-8ef0-a6cfa198673b)

## Crear un PJ
Una vez estan importadas las templates ya podemos crear los Actores.
Hacemos click en Crear Actor, le ponemos un nombre y seleccionamos el tipo "character" y se nos creará una ficha en blanco.

![image](https://github.com/pedrobaringo/el-rey-de-amarillo-csb-es/assets/148097688/e5f78c66-39ab-4224-a50d-c69e03a86dee)

Aqui tenemos que seleccionar la template correspondiente a la ambientación que vayamos a jugar:

- París: "PJ_Paris_Template"
- Las Guerras: "PJ_LasGuerras_Template"
- Secuelas: "PJ_Secuelas_Template"
- Nueva Normalidad: "PJ_Nueva Normalidad_Template"

Una vez hemos seleccionado la template y hacemos click en el icono de refrescar en la ficha ya estamos listos para empezar a rellenarla.

![image](https://github.com/pedrobaringo/el-rey-de-amarillo-csb-es/assets/148097688/6ad374c8-bf06-4c45-b87e-fb2f506410d9)

En la parte de arriba estan los campos de Campo de Estudio o Ocupación (según la ambientación) y Motivación. Tambien están los 2 Impulsos de que disponen los personajes, clickando en los circulos se tachan para marcar que se han usado.

### Pestaña de Habilidades
En la pestaña de habilidades se encuentran las categorias de Habilidades de Investigación y Generales separadas a su vez según su tipo.

Para añadir habilidades se deben arrastrar los "objetos" correspondientes que se hayan creado como describiremos más adelante. Una vez añadidas las habilidades se pueden abrir haciendo click en su nombre.

![image](https://github.com/pedrobaringo/el-rey-de-amarillo-csb-es/assets/148097688/a8e07dd3-71e8-4045-b093-1d6397b5ad4a)

### Pestaña de Trasfondo
En esta pestaña encontramos los campos correspondientes al trasfondo necesario en cada ambientación, así como un apartado donde poder tomar notas.

París:

![image](https://github.com/pedrobaringo/el-rey-de-amarillo-csb-es/assets/148097688/b1edafc7-4f73-47fd-93d3-7a4a94a7f6f3)

Las Guerras:

![image](https://github.com/pedrobaringo/el-rey-de-amarillo-csb-es/assets/148097688/c9fc570d-c94d-4b18-a7c0-7cf214636d13)

Secuelas:

![image](https://github.com/pedrobaringo/el-rey-de-amarillo-csb-es/assets/148097688/6171e93b-0793-46ee-9864-ce25dd96b260)

Nueva Normalidad:

![image](https://github.com/pedrobaringo/el-rey-de-amarillo-csb-es/assets/148097688/ef618bc6-3698-4a2c-b9d4-dfe81f5c0601)

### Heridas y Conmociones
En la parte inferior de la ficha estan los apartados donde se mostrarán las heridas y conmociones que vaya recibiendo el personaje. Para añadirlas solo se tiene que arrastrar el "objeto" correspondiente a la ficha y aparecerá en la columna o columnas que correspondan.

![image](https://github.com/pedrobaringo/el-rey-de-amarillo-csb-es/assets/148097688/bfd21f57-97c8-4aaa-b75b-23a1c4ca653f)

## Crear un Objetivo para Secuelas
Hacemos click en Crear Actor, le ponemos un nombre y seleccionamos el tipo "character" y se nos creará una ficha en blanco.

![image](https://github.com/pedrobaringo/el-rey-de-amarillo-csb-es/assets/148097688/c4c78f8e-7657-4b8b-bd01-5538bb57c384)

Aqui tenemos que seleccionar la template "Objetivos_Secuelas_Template"

![image](https://github.com/pedrobaringo/el-rey-de-amarillo-csb-es/assets/148097688/32a20b88-7d71-4b0b-80c0-68a902f0c02e)

![image](https://github.com/pedrobaringo/el-rey-de-amarillo-csb-es/assets/148097688/fdcc429c-3ef8-49cc-bd05-af81b0433d16)

En esta ficha podemos añadir objetivos arrastrando los objetos correspondientes que aparecerán en la parte superior. Haciendo click en el icono del ojo de la derecha podemos mostrar los detalles del objetivo.

Tambien podemos definir los puntos objetivo para considerar que se ha conseguido el objetivo.

Los Puntos conseguidos se iran actualizando a medida que se vayan añadiendo Vales y Golpes, sumando los valores que tengan.

Debajo tenemos las columnas donde iran añadiendose las "cartas" de Vales y Golpes. Haciendo click en el icono de ojo del centro se mostrarán los detalles de las cartas.

Ejemplo con todas las descripciones desplegadas:

![image](https://github.com/pedrobaringo/el-rey-de-amarillo-csb-es/assets/148097688/44ff4a75-90ef-4fd9-95f1-dcbbf69d8667)


## Crear un Enemigo
Hacemos click en Crear Actor, le ponemos un nombre y seleccionamos el tipo "character" y se nos creará una ficha en blanco.

![image](https://github.com/pedrobaringo/el-rey-de-amarillo-csb-es/assets/148097688/f3bee316-2607-4708-ad22-41b9f7a2cdf7)

Aqui tenemos que seleccionar la template correspondiente a la ambientación que vayamos a jugar:

- París: "Enemigo_Paris_Template"
- Las Guerras: "Enemigo_LasGuerras_Template"
- Secuelas: "Enemigo_Secuelas_Template"
- Nueva Normalidad: "Enemigo_Nueva Normalidad_Template"

Una vez hemos seleccionado la template y hacemos click en el icono de refrescar en la ficha ya estamos listos para empezar a rellenarla.

![image](https://github.com/pedrobaringo/el-rey-de-amarillo-csb-es/assets/148097688/cf05941c-0379-4d0b-a5ff-3e8da2a7582e)

En la parte superior podemos seleccionar la dificultad y asignar las dificultades correspondientes a los objetivos de los Personajes al enfrentarse a éste enemigo.

### Pestaña de Características
Aquí podemos rellenar los campos del enemigo y la descripción.

![image](https://github.com/pedrobaringo/el-rey-de-amarillo-csb-es/assets/148097688/88f09903-9467-45e9-9ff8-cb938c0a2cd6)

### Pestaña de Combate
En esta pestaña podemos configurar las condiciones del enfrentamiento con este enemigo.

Primero seleccionamos el número de jugadores que participan (de 1 a 6), lo que determinará cuantas columnas hay en la tabla ifnerior. Después seleccionamos el objetivo del enfrentamiento (Escapar, otro o matar), lo que determinará la dificultad base del enfrentamiento. Finalmente podemos añadir un ajuste de dificultad según las condiciones del enfrentamiento y se nos mostrará la dificultad total.

En la tabla inferior debemos añadir el nombre de los personajes que participan. Añadimos el gasto que haya seleccionado cada jugador (solo es indicativo por si se quiere utilizar para determinar el orden). En resultado añadimos el resultado de la tirada completo (gasto incluido si lo ha habido, no se suma con el añadido en la tabla). Finalemnte tenemos el márgen que se calcula restando la dificultad del resultado. Si el margen es superior a 3 se marcará como un 3 tachado y en la suma total se considerará que es un 3.

Abajo de todo tenemos la suma de todos los márgenes.

![image](https://github.com/pedrobaringo/el-rey-de-amarillo-csb-es/assets/148097688/224422c4-0801-4bc9-b76b-07b546f7204b)

## Crear Objetos
Si hacemos click en crear objeto y elegimos el tipo "equippableItem" podremos crear objetos de todos los tipos usando las templates.
Los tipos son:

## HabGen_Template: Para las Habilidades Generales

![image](https://github.com/pedrobaringo/el-rey-de-amarillo-csb-es/assets/148097688/179171e7-acb4-4714-91d2-5f5078f32bbf)

En la parte superior debemos elegir a que categoría corresponde (Físico, Presencia o Concentración).

En la pestaña de Configuración podemos definir el Valor de la habilidad y la Reserva que nos queda de puntos. Tambien tenemos el botón de Refrescar para que la Reserva se iguale al Valor.

![image](https://github.com/pedrobaringo/el-rey-de-amarillo-csb-es/assets/148097688/79085c92-ce6b-4c7e-87b3-f4e2ab4c5844)

En la pestaña de Tiradas podemos seleccionar cuantos puntos gastar de los que nos quedan en la reserva, añadir modificadores si los hubiese y tenemos dos botones, uno para hacer una tirada sumando el gasto y los modificadores y otro para hacer un gasto simple de puntos (no afecta el modificador). El Gasto se restará de la Reserva al clickar en cualquiera de los dos botones.

![image](https://github.com/pedrobaringo/el-rey-de-amarillo-csb-es/assets/148097688/db12c2d3-fcef-4fd0-97a4-89aae60f8400)

Debajo podemos añadir una descripción de la habilidad.

## HabInv_Template: Para las Habilidades de Investigación

![image](https://github.com/pedrobaringo/el-rey-de-amarillo-csb-es/assets/148097688/d37c1670-768c-47c3-b1a9-4c1cb116d640)

En la parte superior debemos elegir a que categoría corresponde (Académica, Interpersonal o Técnica).

Debajo podemos añadir una descripción de la habilidad.
  
## Her_Conm_Template: Para las Heridas y Conmociones

![image](https://github.com/pedrobaringo/el-rey-de-amarillo-csb-es/assets/148097688/d773cc24-58c2-4a00-9f86-70d0c0f83145)

En la parte superior elegimos si es una Herida o una Conmoción y su Gravedad. Después tenemos la Descripción donde escribir los efectos que tiene.

## Objetivo_Template: Para los Objetivos en Secuelas

![image](https://github.com/pedrobaringo/el-rey-de-amarillo-csb-es/assets/148097688/ae9897d8-dd7a-4614-9b0f-3ea3f223de19)

En este objeto tenemos los campos de Etiquetas (se pueden ver afectados por Vales y/o Golpes), la Descripción y los Posibles Aliados y Adversarios.

## Vales_Golpes_Template: Para los Vales y Golpes en Secuelas

![image](https://github.com/pedrobaringo/el-rey-de-amarillo-csb-es/assets/148097688/cf306d1c-65a8-4ffc-af2c-10f441807fb6)

![image](https://github.com/pedrobaringo/el-rey-de-amarillo-csb-es/assets/148097688/64008bf0-a9bf-4a35-bb1c-ed2df0710dc3)

Primero tenemos que elegir el tipo (Vale o Golpe), asignarle un Valor y añadir la descripción con los efectos que pueda tener.

## ¿Cómo importar templates después de una actualización?
Cuando suba actualizaciones que modifican las Templates se tendrán que volver a importar de los compendios. Para evitar que se dupliquen y no sepamos cuales son las nuevas tenemos que hacerlo de la siguiente forma:
1. Vamos al apartado de compendios.
2. Hacemos click izquierdo encima del compendio que vayamos a importar.
3. Hacemos click en "Importar todo".
4. Seleccionamos la carpeta que se creó cuando se importaron por primera vez.
5. Seleccionamos "Mantener ID del Documento"

![image](https://github.com/pedrobaringo/el-rey-de-amarillo-csb-es/assets/148097688/b2a41d22-d8be-4003-ad34-411636bca836)

6. Hacemos click en "Si" y deberian importarse sustituyendo las ya existentes.
7. Vamos a cada template y hacemos click en "Reload all character Sheets" o "Reload all item sheets". De esta forma se habrán actualizado todas las fichas con los cambios.

Si no se importan correctamente y nos encontramos con templates duplicadas, lo mejor es borrarlas todas y volver a importarlas. El problema es que después deberemos volver a seleccionar la template correspondiente para cada actor que hayamos creado.
