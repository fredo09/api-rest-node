console.log("oke");

/** Forma viejita
 *  var nombre_variable;
 *  var cadena = "henry";
 *  var numero = '10';
 *  var isdata  = true;
**/

var buton = document.getElementById('click');


/**
 *  let  -> variables normarles -> let <nombre_variable> = <asignacion>;
 *  const -> constantes -> const <nombre_variable> = <asignacion>;
**/

// ECMA 2015 - 2016
let apodo = "fayol";
const INFO = "esto es un info";
let numero = 9;

function cambio () {
    const numero = 9;
    if (numero < 10) {
        let numero2 = 10
    }
    numero = numero2;

    alert(numero);
}

/**
 * Tipos de datos primitivos en js
 * number
 * string
 * booleanos
 * arrays -> arreglos -> tipe object
 * undefined
 * symboly -> nunca lo he usado
 * object -> otra cosa.
 */

let numeros = 9;
let numero2 = '9';
let array = ['9', 9, true, undefined];
let array2 = [];
let indefinido = undefined;

/**
 * Objectos
 */

function objecto(){
}


function isTypeOf () {
    alert("mostrando tipos");
    console.log(objecto)
    console.log({
        tipo1: typeof(numeros),
        tipe2: typeof(numero2),
        tipo3: typeof(array),
        tipe4: typeof(array2),
        tipo5: typeof(indefinido),
        "objecto": typeof(objecto)
    });
}


/**
 * Bucles 
 * For
 * while
 * do while
**/

let arrays = [9,8,7,6];

for (i=0; arrays.length > 10; i++ ) {
    //Lo que tenga que hacer
}

while(arrays.length > 10) {
    // lo que tenga que hacer
}

do {
    //Lo que tengo que hacer
} while (arrays.length > 10);

function recorrer() {
    arrays.forEach((item) => {console.log(item)});
}


/**
 * Switch
 */

function isCase() {
    showSaludo("");
}

function showSaludo(param) {
    switch (param) {
        case 'henry':
                alert("Hola Soy Henry");
            break;
        case 'fredy':
                alert("Hola Soy Freddy");
            break;
        default:
            alert("Hola soy otra persona");
            break;
    }
}

/**
 * Expresiones de Función
 * Aqui nosotro podemos asignar una funcion a una variable, podemos usar esa variable segun nosotros la
 * necesitemos
 */

let newArrarys = function (arrayParam) {
    let array = arrayParam;

    console.log("array pasado por parametro", array);

    //fuciona con puros arreglos
    // array = array.map((item) => {
    //     return item*2;
    // });

    // Sintaxis viejita o tradicional
    array = array.filter(function(num) {
        return num < 3
    });

    //Version mas actual
    //array = array.filter(num => num < 3 );

    //array = array.reduce( (total, value) => console.log({total, value}) )


    console.log("array procesado", array);

    return array;
}

console.log(newArrarys([9,8,7,2]));


// let suma = function (a, b) {
//     return a+b;
// } 


function showResult () {
    //llamado a otra varaible
    alert("Nuevo array" + newArrarys([9,8,7,2]) );
}






//Tema un poco avanzado
buton.addEventListener('click', showResult);





