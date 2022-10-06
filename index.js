let mensajeCarrito = document.getElementById("mensajeCarrito");
mensajeCarrito.style.display = "block";
let carrito = [];

//DEFINICION DE FUNCION PARA IR MOSTRANDO EL CARRITO

function mostrarMensaje () {
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


//DEFINICION RESPUESTA AGREGAR A CARRITO

function agregar (producto) {

    if (producto.cantidad === 0){
        alert ("Producto no disponible")
        document.getElementById(`agregarACarrito-${producto.id}`).setAttribute('disabled','disabled');
    }else{
        producto.cantidad = producto.cantidad - 1;

        // let id = producto.id;
        // let compra = productos.findIndex(object => {
        //     return object.id === id;
        // });

        // carrito.push(productos[compra]);
        carrito.push(producto);
        localStorage.setItem ("compras", JSON.stringify(carrito));
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Producto agregado al carrito',
            showConfirmButton: true,
            timer: 2500
        })
    }

    mostrarMensaje ();
};

//DEFINICION RESPUESTA BOTON ELIMINAR

function eliminar(producto){
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
    
        mostrarMensaje ();

        Swal.fire({
            title: "Borrado!",
            icon: "success",
            text: "El producto ha sido borrado",
        });
        }
    });
    };


//CREACION DE PRODUCTOS

let deposito = document.getElementById("deposito");

fetch("/data.json")
.then(response => response.json())
.then(data => {
    data.forEach(producto => {
        let contenedorProductos = document.createElement("div");

        contenedorProductos.innerHTML = 
        `<img src=${producto.imagen}>
        <h3>${producto.nombre}</h3>
        <p>Precio de lista: ${producto.precio}</p>
        <p>Stock disponible: ${producto.cantidad}</p>
        <button type="submit" id="agregarACarrito-${producto.id}">Agregar al carrito</button>
        <button id="eliminarDeCarrito-${producto.id}">Eliminar del carrito</button>`;
        deposito.append(contenedorProductos);

        let botonAgregarACarrito = document.getElementById(`agregarACarrito-${producto.id}`);
        botonAgregarACarrito.addEventListener("click", () => agregar(producto));

        let botonEliminarDeCarrito = document.getElementById(`eliminarDeCarrito-${producto.id}`);
        botonEliminarDeCarrito.addEventListener("click", () => eliminar(producto));
                
        let mensaje = "";
        let productoNro = 0;
        let precioTotal = 0;
        let misCompras = JSON.parse(localStorage.getItem ("compras"));

        if (misCompras){
            misCompras.forEach(element => {
                productoNro++;
                mensaje+= "Producto "+productoNro+": "+element.nombre+"\n";
                precioTotal = precioTotal + element.precio;
            })};


        mensaje+= "Precio total: $"+precioTotal;
        mensajeCarrito.innerText = mensaje;

    });
});



let botonComprarCarrito = document.getElementById("comprarCarrito");
botonComprarCarrito.addEventListener("click", comprar);

//DEFINICION RESPUESTA BOTON COMPRAR
function comprar (){
    let mensaje = "";
    mensaje+= "Gracias por su compra!"
    //Precio total: $"+precioTotal;
    mensajeCarrito.innerText = mensaje;
    localStorage.clear();
}


