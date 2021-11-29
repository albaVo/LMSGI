
console.log ('Cargando app.js');
const iva = 0.16;

//llamadas a la funcion
let pcoste = 2000;
calcularPVP(pcoste, iva);
calcularPVP(1000, iva);
calcularPVP(500, iva);
pcoste = 10;
calcularPVP(pcoste, iva);

// declarar la funcion calcularPVP
function calcularPVP(precio, impuesto) {
    console.log('Precio de Coste = ', precio, '€');
    console.log('iva = ', iva * 100, '%', '-->', precio * impuesto);
    console.log('PVP = ', precio * (1 + iva), '€');
    console.log('------------------')
}