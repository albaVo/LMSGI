console.log ('Cargando app.js');
const iva = 0.16;

let pcoste = 2000;

// la función anterior se reescribe en ntoación Arrow Function
const calcularPVP = (precio, impuesto) => {
    console.log('Precio de Coste = ', precio, '€');
    console.log('iva = ', iva * 100, '%', '-->', precio * impuesto);
    console.log('PVP = ', precio * (1 + impuesto), '€');
    return precio * (1 + impuesto);
}

//llamadas a la función 
//let ptotal = calcularPVP(20, iva);

function sumar1 (x,y){
    // instrucción 1;
    // instrucción 2;
    // ...
    // instrución n;
    return (x + y)
}

/* solo cuando el cuerpo de la función tiene 1 sola instrucción
const sumar2 = (x, y) => {
    return x + y;
}
*/
const sumar2 = (x,y) => x + y;

let suma = sumar2(13,6);
console.log(suma);

const cubo1 = ( x ) => {
    return (x * x * x)
} 

const cubo = (x) => x*x*x;
console.log( cubo(5) );


const potencia = (b, e) => {
    let res = 1;
    for(i = 1; i <= e; i++){
        res = res * b
    }
    return res;
}
//console.log(potencia (2,4));

// sumar los 10 primeros números
const suma10 = ( n ) => {
    let stotal = 0;
    for(i = 0; i <= n; i++){
        stotal = stotal + i;
    }
    return stotal;
}
console.log(suma10( 2 ));
console.log(suma10(5));
console.log(suma10(100));

// calcular el factorial de un número
const factorial ( n ) => {

}
console.log (factorial (5));