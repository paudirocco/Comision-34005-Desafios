let productos = [
    {id: 1, nombre: "notificaciones electronicas", precio: 2900, cantidad: 20},
    {id: 2, nombre: "manual de contratos", precio: 3400, cantidad: 17},
    {id: 3, nombre: "matrimonio y divorcio", precio: 2600, cantidad: 0},
    {id: 4, nombre: "derecho privado empresarial", precio: 4900, cantidad: 10},
];


//EJEMPLO 1: agrego un producto mas al string

productos.push({id: 5, nombre: "honorarios profesionales", precio: 4000, cantidad: 5});

console.log(productos);


// EJEMPLO 2: BUSQUEDA DE UNO DE LOS LIBROS JURIDICOS PARA VER SU INFORMACIÓN.

let nombre = prompt("Ingrese el nombre del producto buscado");
let producto = productos.find(item => item.nombre === nombre.toLowerCase());

if(producto === undefined){
    alert("Producto no encontrado");
}else{
    let mensaje = `
Id: ${producto.id}
Nombre: ${producto.nombre}
Precio: $${producto.precio}
`;
alert(mensaje);
}


//EJEMPLO 3: SI LA CANTIDAD ES CERO, AVISA AL USUARIO QUE EL PRODUCTO NO ESTÁ DISPONIBLE

if (producto.cantidad === 0){
    alert("Producto no disponible")
};


//EJEMPLO 4: CUANDO UN USUARIO COMPRA UN PRODUCTO, REDUCE EL STOCK EN UNA UNIDAD (este ejemplo en el console log da error porque choca con el prompt del ejemplo de más arriba, pero si se comentan las partes que chocan del prompt con el console log, funciona)

for (const producto of productos){
    if (producto.cantidad === 0){
        console.log("No hay mas stock");
    }else{
        producto.cantidad = producto.cantidad - 1;
        console.log(producto);
    }
}


//EJEMPLO 5: FILTRO DE PRECIO DE LOS PRODUCTOS

let precio = parseInt(prompt ("Ingrese el precio máximo a gastar"));
let productoFiltrado = productos.filter(item => item.precio <= precio);

//en este ejemplo me quedo la duda de como plantear un "if" para que si no encuentra ninguno, tire un alert con un msj: if productoFiltrado === 0 me da error, creo que es porque no es numero lo que trae productoFiltrado, pero nose como se plantea

productoFiltrado.forEach(item => {
    let mensaje = `
Id: ${item.id}
Nombre: ${item.nombre}
Precio: $${item.precio}
`;
alert(mensaje);
})


//EJEMPLO 6: CÁLCULO DE PRECIO POR PAGO AL CONTADO (este ejemplo en el console log da error porque choca con el prompt del ejemplo de más arriba, pero si se comentan las partes que chocan del prompt con el console log, funciona)

let preciosDescuento = productos.map (item => {
    return {
        id: item.id,
        nombre: item.nombre,
        precio: item.precio * 0.85,
        cantidad: item.cantidad,
    }
});

console.log(preciosDescuento);


//EJEMPLO 7: CÁLCULO DEL PRECIO TOTAL DEL CARRITO DE COMPRAS (este ejemplo en el console log da error porque choca con el prompt del ejemplo de más arriba, pero si se comentan las partes que chocan del prompt con el console log, funciona)

let totalCompra = productos.reduce((acumulador, item) => acumulador + item.precio , 0);
console.log(totalCompra);