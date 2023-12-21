![Fondo Tutorial_Troubleshooters](https://github.com/pedrobaringo/the-troubleshooters-csb-es/assets/148097688/2c371565-5415-438e-9ae2-4814cced86d0)

# Fichas para El Rey de Amarillo en Custom System Builder

## Tabla de Contenido
- [Introducción](#introducción)
- [Instalación](#instalación)
- [Crear un PJ](#crear-un-pj)
  - [Pestaña de Habilidades](#pestaña-de-habilidades)
  - [Pestaña de Trasfondo](#pestaña-de-trasfondo)
  - [Heridas y Conmociones](#heridas-y-conmociones)
- [Crear un Enemigo](#crear-un-enemigo)
  - [Pestaña de Características](#pestaña-de-características)
  - [Pestaña de Combate](#pestaña-de-combate)
- [Crear Objetos](#crear-objetos)
  - [HabGen_Template: Para las Habilidades Generales](#habgen_Template:-para-las-habilidades-generales)
- [Hacer tiradas](#hacer-tiradas)
- [Iniciativa y Combate](#iniciativa-y-combate)
- [¿Cómo importar templates después de una actualización?](#c%C3%B3mo-importar-templates-despu%C3%A9s-de-una-actualizaci%C3%B3n)
- [Posibles problemas](#posibles-problemas)

## Introducción
Modulo de Foundry VTT con las templates de las fichas para el juego The Troubleshooters en español para el sistema Custom System Builder ( https://foundryvtt.com/packages/custom-system-builder ).

Para aprender como instalarlo y usarlo podeis ver el tutorial en el siguiente enlace: 

[![Video del tutorial](http://img.youtube.com/vi/2LBxsz_r_Wg/0.jpg)](http://www.youtube.com/watch?v=2LBxsz_r_Wg "Tutorial Foundry-The Troubleshooters")

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
  
* **Complicacion_Template**: Para las Complicaciones, solo para PJ.

![image](https://github.com/pedrobaringo/the-troubleshooters-csb-es/assets/148097688/5d88451e-87c1-4c0e-8cc0-255f2abea010)


* **Talento_Template**: Para los Talentos, solo para PJ.

![image](https://github.com/pedrobaringo/the-troubleshooters-csb-es/assets/148097688/e5b862ba-1c5a-43c9-a032-1d46e63298ae)


* **Estados_Template**: Para los Estados, sirve para PJs y PNJs.

![image](https://github.com/pedrobaringo/the-troubleshooters-csb-es/assets/148097688/ebeb889d-d5a1-4942-bf53-60948138272d)


* **Etiquetas_Template**: Para las etiquetas de los PNJs.

![image](https://github.com/pedrobaringo/the-troubleshooters-csb-es/assets/148097688/33e16ba9-d43c-479c-a3da-991a1955bbd5)

## Hacer tiradas
Para hacer tiradas simplemente se tiene que hacer click en la habilidad o icono de dado correspondiente o en el botón en el caso de ataques. Saldrá el mensaje en el chat con los botones para dar la vuelta a la tirada gastando puntos de Historia (se restan automaticamente) y el Daño si corresponde.
Al clickar en los botones se genera un nuevo mensaje con el resultado correspondiente a la acción. Si sale un resultado de Karma se suma automaticamente el punto de Historia a la ficha del Personaje.

![image](https://github.com/pedrobaringo/the-troubleshooters-csb-es/assets/148097688/8e6f3f8f-ca9e-4579-8fee-6a63a356e79b)
![image](https://github.com/pedrobaringo/the-troubleshooters-csb-es/assets/148097688/e4918cd5-30e8-471e-b3cc-bae567ec225a)

Para aplicar un modificador a la tirada, se deberá pulsar la tecla "Mayus" mientras se hace click. Aparecerá un dialogo donde podemos asignar el modificador positivo o negativo. Esto funciona solo en las tiradas donde puede haber modificador.

![image](https://github.com/pedrobaringo/the-troubleshooters-csb-es/assets/148097688/14c370ba-017a-4d69-b5e8-5594f2e2bbea)

## Iniciativa y Combate
Antes de empezar un combate, todos los PJs y los PNJs que tengan de Iniciativa una tirada de acción, deberan hacer click en su iniciativa para que se lancen los dados y se calcule.

Solo cuando lo hayan hecho todos se podrá "tirar" la iniciativa en el menú de "Encuentros de Combate". Se ordenarán los actores de mayor iniciativa a menor.

Como caso particular, si se hace una acción "¡PAM! - Disparo preciso" la iniciativa en la ficha bajará en 2 puntos automaticamente, pero se tendrá que volver a calcular para el siguiente turno en "Encuentros de Combate".

En el caso de "¡RATATATA! - Vaciar el Arma" saldrán dos botones de daño, el normal que se aplica si impactas a varios personajes y el "Daño a un solo objetivo" que añade dos dados al daño automaticamente si solo te concentras en un objetivo.

![image](https://github.com/pedrobaringo/the-troubleshooters-csb-es/assets/148097688/99d65377-8e29-4f49-bba6-410e97babd60)

Si el arma provoca daño adicional según el resultado debido a alguna etiqueta, se puede usar el macro que he añadido a este módulo o usar la fórmula **/r Yd6x6cs>=4** en el chat sustituyendo la Y por el número de dados a tirar.

## ¿Cómo importar templates después de una actualización?
Cuando suba actualizaciones que modifican las Templates se tendrán que volver a importar de los compendios. Para evitar que se dupliquen y no sepamos cuales son las nuevas tenemos que hacerlo de la siguiente forma:
1. Vamos al apartado de compendios.
2. Hacemos click izquierdo encima del compendio que vayamos a importar.
3. Hacemos click en "Importar todo".
4. Seleccionamos la carpeta "Templates Actores" o "Templates_Objetos"(es la que se creó cuando se importaron por primera vez).
5. Seleccionamos "Mantener ID del Documento"

![image](https://github.com/pedrobaringo/the-troubleshooters-csb-es/assets/148097688/ecc7a10b-3899-4a37-88b8-42c56829a400)

6. Hacemos click en "Si" y deberian importarse sustituyendo las ya existentes.
7. Vamos a cada template y hacemos click en "Reload all character Sheets" o "Reload all item sheets". De esta forma se habrán actualizado todas las fichas con los cambios.

![image](https://github.com/pedrobaringo/the-troubleshooters-csb-es/assets/148097688/2ec1aab1-5b6e-48cd-95d7-391c0bafd9b4)

Si no se importan correctamente y nos encontramos con templates duplicadas, lo mejor es borrarlas todas y volver a importarlas. El problema es que después deberemos volver a seleccionar la template correspondiente para cada actor que hayamos creado.

## Posibles problemas
Debido a como esta creado el sistema Custom System Builder, tuve que implementar los botones del chat de una forma poco óptima. Esto puede provocar que algunas veces no aparezcan los botones o aparezcan en mensajes anteriores (creo que puede ser más habitual con conexiones lentas, pero no he podido probarlo).

Este problema no afecta a los resultados de las tiradas y si se quiere dar la vuelta a la tirada se puede hacer mentalmente y restar los puntos de Historia manualmente en la ficha.

En el caso que sucediese en una tirada de combate y no apareciese el botón de Daño, se puede hacer la tirada usando en el chat la siguiente formula (explotan los 6 y cuenta como éxitos los valores superiores o iguales a 4) sustituyendo Y por el número de dados de daño que se tirarian: **Yd6x6cs>=4** o usando la macro que se incluye en este módulo.
