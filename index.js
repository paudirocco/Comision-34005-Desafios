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



//AGREGADO DE FONDO DE COLOR A PRODUCTOS DEL HTML

let colorMarron = document.getElementById("colorMarron");
let colorAmarillo = document.getElementById("colorAmarillo");
let colorBeige = document.getElementById("colorBeige");
let colorManteca = document.getElementById("colorManteca");

colorMarron.className = "marron";
colorAmarillo.className = "amarillo";
colorBeige.className = "beige";
colorManteca.className = "manteca";






//MI IDEA ERA GENERAR, COMO RESPUESTA A LOS BOTONES, UNA UNICA "RESPUESTA" (Y EL CODIGO DE LAS LINEA 31 POR EJEMPLO ME HUBIERA QUEDADO ASI: botonManualDeContratos.addEventListener("click", respuesta(notificaciones electronicas)); Y NO RESPUESTA 1,2,3 Y 4, Y LUEGO APLICAR ESTAS FUNCIONES GENERICAS DE RESPUESTA. SIN EMBARGO, CUANDO LO HAGO ME DA ERROR POR CONSOLA Y NO PUEDO DETERMINAR EL POR QUÉ (BUSQUE ALGO Y CREI ENTENDER QUE ES PORQUE EN LA FUNCION RESPUESTA, AL AGREGARLE EL NOMBRE ENTRE PARENTESIS, YA NO ESTARIA INVOCANDO LA FUNCION SINO DECLARANDOLA, PUEDE SER? PERO EN ESE CASO COMO PODRIA HACERSE GENERICA LA RESPUESTA?)

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


