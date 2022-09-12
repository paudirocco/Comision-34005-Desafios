console.log ("esto se ejecuta");
class Producto {
    constructor (id, nombre, precio, cantidad){
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
    }

    agregarAlCarrito(){
        if (this.cantidad === 0){
            alert ("Producto no disponible")
        }else{
            this.cantidad = this.cantidad - 1;
            return 1;
        }
    }
}

const productos = [
    new Producto(1, "notificaciones electronicas", 2900, 20),
    new Producto(2, "manual de contratos", 3400, 17),
    new Producto(3, "matrimonio y divorcio", 2600, 0),
    new Producto(4, "derecho privado empresarial", 4900, 10)
];

let carrito = [];

//BOTONES
let botonNotificacionesElectronicas = document.getElementById("notificacionesElectronicas");
botonNotificacionesElectronicas.addEventListener("click", respuesta1);

let botonManualDeContratos = document.getElementById("manualDeContratos");
botonManualDeContratos.addEventListener("click", respuesta2);

let botonMatrimonioYDivorcio = document.getElementById("matrimonioYDivorcio");
botonMatrimonioYDivorcio.addEventListener("click", respuesta3);

let botonDerechoPrivadoEmpresarial = document.getElementById("derechoPrivadoEmpresarial");
botonDerechoPrivadoEmpresarial.addEventListener("click", respuesta4);

let botonComprarCarrito = document.getElementById("comprarCarrito");
botonComprarCarrito.addEventListener("click", comprar);


//DEFINICION RESPUESTAS POR PRODUCTO
function respuesta1 () {
    let producto = productos[0];
    if( producto.agregarAlCarrito() === 1 )
        carrito.push({
            'nombre': producto.nombre,
            'precio': producto.precio
        });
};
function respuesta2 () {
    let producto = productos[1];
    if( producto.agregarAlCarrito() === 1 )
    carrito.push({
        'nombre': producto.nombre,
        'precio': producto.precio
    });
};
function respuesta3 () {
    let producto = productos[2];
    if( producto.agregarAlCarrito() === 1 )
    carrito.push({
        'nombre': producto.nombre,
        'precio': producto.precio
    });
};
function respuesta4 () {
    let producto = productos[3];
    if( producto.agregarAlCarrito() === 1 )
    carrito.push({
        'nombre': producto.nombre,
        'precio': producto.precio
    });
};

//DEFINICION RESPUESTA BOTON COMPRAR
function comprar (){
    let mensaje = "";
    let productoNro = 0;
    let precioTotal = 0;
    carrito.forEach(element => {
        productoNro++;
        //productoNro = productoNro + 1; igual a linea anterior
        mensaje+= "Producto "+productoNro+": "+element.nombre+"\n";
        precioTotal = precioTotal + element.precio;
    });
    mensaje+= "Precio total: $"+precioTotal;
    alert(mensaje)
    carrito = []
}































// function encontrarIndex(nombre) {
//     for (let index = 0; index < productos.length; index++) {
//     if(productos[index].nombre === nombre){
//         return index;
//     }
//     }
// }

// function respuesta(nombre) {    
//     let producto = productos[encontrarIndex(nombre)];
//     console.log(producto);
//     carrito.push(producto.nombre);
//     producto.agregarAlCarrito();
//     console.log(productos);
// };






//incorporar array, funciones, condicionales, ciclos, metodos, objetos o arrays. 




// let productos = [
//     {id: 1, nombre: "notificaciones electronicas", precio: 2900, cantidad: 20},
//     {id: 2, nombre: "manual de contratos", precio: 3400, cantidad: 17},
//     {id: 3, nombre: "matrimonio y divorcio", precio: 2600, cantidad: 0},
//     {id: 4, nombre: "derecho privado empresarial", precio: 4900, cantidad: 10},
// ];


//EJEMPLO 1: agrego un producto mas al string

// productos.push({id: 5, nombre: "honorarios profesionales", precio: 4000, cantidad: 5});

// console.log(productos);


// // EJEMPLO 2: BUSQUEDA DE UNO DE LOS LIBROS JURIDICOS PARA VER SU INFORMACIÓN.

// let nombre = prompt("Ingrese el nombre del producto buscado");
// let producto = productos.find(item => item.nombre === nombre.toLowerCase());

// if(producto === undefined){
//     alert("Producto no encontrado");
// }else{
//     let mensaje = `
// Id: ${producto.id}
// Nombre: ${producto.nombre}
// Precio: $${producto.precio}
// `;
// alert(mensaje);
// }


// //EJEMPLO 3: SI LA CANTIDAD ES CERO, AVISA AL USUARIO QUE EL PRODUCTO NO ESTÁ DISPONIBLE

// if (producto != undefined && producto.cantidad === 0){
//     alert("Producto no disponible")
// }else{
//     "Producto no encontrado"
// }


// //EJEMPLO 4: CUANDO UN USUARIO COMPRA UN PRODUCTO, REDUCE EL STOCK EN UNA UNIDAD (este ejemplo en el console log da error porque choca con el prompt del ejemplo de más arriba, pero si se comentan las partes que chocan del prompt con el console log, funciona)

// for (const producto of productos){
//     if (producto.cantidad === 0){
//         console.log("No hay mas stock");
//     }else{
//         producto.cantidad = producto.cantidad - 1;
//         console.log(producto);
//     }
// }


// //EJEMPLO 5: FILTRO DE PRECIO DE LOS PRODUCTOS

// let precio = parseInt(prompt ("Ingrese el precio máximo a gastar"));
// let productoFiltrado = productos.filter(item => item.precio <= precio);

// //en este ejemplo me quedo la duda de como plantear un "if" para que si no encuentra ninguno, tire un alert con un msj: if productoFiltrado === 0 me da error, creo que es porque no es numero lo que trae productoFiltrado, pero nose como se plantea

// productoFiltrado.forEach(item => {
//     let mensaje = `
// Id: ${item.id}
// Nombre: ${item.nombre}
// Precio: $${item.precio}
// `;
// alert(mensaje);
// })


// //EJEMPLO 6: CÁLCULO DE PRECIO POR PAGO AL CONTADO (este ejemplo en el console log da error porque choca con el prompt del ejemplo de más arriba, pero si se comentan las partes que chocan del prompt con el console log, funciona)

// let preciosDescuento = productos.map (item => {
//     return {
//         id: item.id,
//         nombre: item.nombre,
//         precio: item.precio * 0.85,
//         cantidad: item.cantidad,
//     }
// });

// console.log(preciosDescuento);


// //EJEMPLO 7: CÁLCULO DEL PRECIO TOTAL DEL CARRITO DE COMPRAS (este ejemplo en el console log da error porque choca con el prompt del ejemplo de más arriba, pero si se comentan las partes que chocan del prompt con el console log, funciona)

// // let totalCompra = productos.reduce((acumulador, item) => acumulador + item.precio , 0);
// // console.log(totalCompra);