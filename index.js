let mensajeCarrito = document.getElementById("mensajeCarrito");
mensajeCarrito.style.display = "block";

class Producto {
    constructor (id, nombre, precio, cantidad, imagen){
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
        this.imagen = imagen;
    }
}

const productos = [
    new Producto(1, "notificaciones electronicas", 2900, 20, "/imagenes/notificaciones-electronicas.jpg"),
    new Producto(2, "manual de contratos", 3400, 17, "/imagenes/manual-de-contratos.jpg"),
    new Producto(3, "matrimonio y divorcio", 2600, 0, "/imagenes/matrimonio-y-divorcio.jpg"),
    new Producto(4, "derecho privado empresarial", 4900, 10, "/imagenes/derecho-privado-empresarial.jpg")
];

let deposito = document.getElementById("deposito");


productos.forEach((producto) => {
    let contenedorProductos = document.createElement("div");

    contenedorProductos.innerHTML = 
                                    `<img src=${producto.imagen}>
                                    <h3>${producto.nombre}</h3>
                                    <p>Precio de lista: ${producto.precio}</p>
                                    <p>Stock disponible: ${producto.cantidad}</p>
                                    <button type="submit" id="agregarACarrito-${producto.id}">Agregar al carrito</button>
                                    <button id="eliminarDeCarrito-${producto.id}">Eliminar del carrito</button>`;
    deposito.appendChild(contenedorProductos);
    
let botonAgregarACarrito = document.getElementById(`agregarACarrito-${producto.id}`);
botonAgregarACarrito.addEventListener("click", agregar);

//DEFINICION RESPUESTA AGREGAR A CARRITO

function agregar () {

    if (producto.cantidad === 0){
        alert ("Producto no disponible")
        document.getElementById(`agregarACarrito-${producto.id}`).setAttribute('disabled','disabled');
    }else{
        producto.cantidad = producto.cantidad - 1;

        let id = producto?.id;
        //console.log(id);
        //console.log(producto.cantidad);
        let compra = productos.findIndex(object => {
            return object.id === id;
        });

        //console.log(productos[compra]);
        carrito.push(productos[compra]);
        localStorage.setItem ("compras", JSON.stringify(carrito));
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Producto agregado al carrito',
            showConfirmButton: true,
            timer: 2500
        })
    }




    let mensaje = "";
    let productoNro = 0;
    let precioTotal = 0;
    let misCompras = JSON.parse(localStorage.getItem ("compras"));

    misCompras.forEach(element => {
        productoNro++;
        //productoNro = productoNro + 1; igual a linea anterior
        mensaje+= "Producto "+productoNro+": "+element.nombre+"\n";
        precioTotal = precioTotal + element.precio;
    });


    mensaje+= "Precio total: $"+precioTotal;
    mensajeCarrito.innerText = mensaje;






};

let botonEliminarDeCarrito = document.getElementById(`eliminarDeCarrito-${producto.id}`);
botonEliminarDeCarrito.addEventListener("click", eliminar);


//DEFINICION RESPUESTA BOTON ELIMINAR

function eliminar(){
    Swal.fire({
        title: "Está seguro de eliminar el producto?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Sí, seguro",
        cancelButtonText: "No, no quiero",
    }).then((result) => {
        if (result.isConfirmed) {
            
            let idEliminar = producto.id;
            console.log(idEliminar);
            let eliminarCompra = carrito.findIndex(object => {
                return object.id === idEliminar;
            })
        localStorage.removeItem("compras");
        carrito.splice(eliminarCompra,1);
        localStorage.setItem("compras", JSON.stringify(carrito));
    
        Swal.fire({
            title: "Borrado!",
            icon: "success",
            text: "El archivo ha sido borrado",
        });
        }
    });




    let mensaje = "";
    let productoNro = 0;
    let precioTotal = 0;
    let misCompras = JSON.parse(localStorage.getItem ("compras"));

    misCompras.forEach(element => {
        productoNro++;
        //productoNro = productoNro + 1; igual a linea anterior
        mensaje+= "Producto "+productoNro+": "+element.nombre+"\n";
        precioTotal = precioTotal + element.precio;
    });


    mensaje+= "Precio total: $"+precioTotal;
    mensajeCarrito.innerText = mensaje;





    };
});


let carrito = [];

let botonComprarCarrito = document.getElementById("comprarCarrito");
botonComprarCarrito.addEventListener("click", comprar);


//DEFINICION RESPUESTA BOTON COMPRAR
function comprar (){
    let mensaje = "";
    // let productoNro = 0;
    // let precioTotal = 0;
    // let misCompras = JSON.parse(localStorage.getItem ("compras"));

    // misCompras.forEach(element => {
    //     productoNro++;
    //     //productoNro = productoNro + 1; igual a linea anterior
    //     mensaje+= "Producto "+productoNro+": "+element.nombre+"\n";
    //     precioTotal = precioTotal + element.precio;
    // });


    mensaje+= "Gracias por su compra!"
    //Precio total: $"+precioTotal;
    mensajeCarrito.innerText = mensaje;
    localStorage.clear();
}


