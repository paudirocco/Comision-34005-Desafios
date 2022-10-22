let mensajeCarrito = document.getElementById("mensajeCarrito");
mensajeCarrito.style.display = "block";
mensajeCarrito.className = "m-4";
let carrito = [];
if(localStorage.getItem("compras"))
    carrito = JSON.parse(localStorage.getItem("compras"));
let stockAnterior = [];

//DEFINICION DE FUNCION PARA IR MOSTRANDO EL CARRITO

function mostrarMensaje () {
    let mensaje = "";
    let productoNro1 = 0;
    let productoNro2 = 0;
    let productoNro3 = 0;
    let productoNro4 = 0;
    let precioTotal = 0;
    let misCompras = JSON.parse(localStorage.getItem ("compras"));

    if(misCompras){
    misCompras.forEach(element => {
        switch(element.id){
            case 1:
                productoNro1++    
                break;
            case 2:
                productoNro2++    
                break;
            case 3:
                productoNro3++    
                break;
            case 4:
                productoNro4++    
                break;                   
        } 
        
        precioTotal = precioTotal + element.precio;
    });
    }
    stockAnterior[1] = productoNro1;
    stockAnterior[2] = productoNro2;
    stockAnterior[3] = productoNro3;
    stockAnterior[4] = productoNro4;

    if(productoNro1 > 0)
        mensaje+= "Producto: notificaciones electronicas x unidades "+productoNro1+"\n";
    if(productoNro2 > 0)
        mensaje+= "Producto: manual de contratos x unidades "+productoNro2+"\n";
    if(productoNro3 > 0)
        mensaje+= "Producto: matrimonio y divorcio x unidades "+productoNro3+"\n";
    if(productoNro4 > 0)
        mensaje+= "Producto: derecho privado empresarial x unidades "+productoNro4+"\n";

    mensaje+= "Precio total: $"+precioTotal;
    mensajeCarrito.innerText = mensaje;
    };


//DEFINICION RESPUESTA AGREGAR A CARRITO

function agregar (producto) {

    if (producto.cantidad === 0){
        Swal.fire('Producto no disponible')
        document.getElementById(`agregarACarrito-${producto.id}`).setAttribute('disabled','disabled');
    }else{
        producto.cantidad = producto.cantidad - 1;

        carrito.push(producto);
        localStorage.setItem ("compras", JSON.stringify(carrito));
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Producto agregado al carrito',
            showConfirmButton: true,
            timer: 2500
        })
        let stockActualizado = document.getElementById("producto"+producto.id);
        stockActualizado.innerHTML = "Stock disponible:"+producto.cantidad;
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
                let eliminarCompra = carrito.findIndex(object => {
                    return object.id === idEliminar;
                })

            if (carrito[eliminarCompra]){     
                producto.cantidad++;
                let stockActualizado = document.getElementById("producto"+producto.id);
                stockActualizado.innerHTML = "Stock disponible:"+producto.cantidad;
                localStorage.removeItem("compras");
                carrito.splice(eliminarCompra,1);
                localStorage.setItem("compras", JSON.stringify(carrito));
            
                mostrarMensaje ()

                Swal.fire({
                    title: "Borrado!",
                    icon: "success",
                    text: "El producto ha sido borrado",
                });
            }
        }
    });
};


//CREACION DE PRODUCTOS

const traerDatos = async () => {
    let deposito = document.getElementById("deposito");
    try{
        const response = await fetch("/data.json");
        const data = await response.json();
        let productoId = 1;

        mostrarMensaje();

        data.forEach(producto => {
            let contenedorProductos = document.createElement("div");

            contenedorProductos.className = "card m-4 p-4";
            contenedorProductos.style = "width: 18rem";
            deposito.className = " row row-cols-1 row-cols-md-3";

            producto.cantidad-=stockAnterior[productoId];
            contenedorProductos.innerHTML = 
            `<img src=${producto.imagen}>
            <h3>${producto.nombre}</h3>
            <p>Precio de lista: ${producto.precio}</p>
            <p id="producto${productoId}">Stock disponible: ${producto.cantidad}</p>
            <button type="submit" id="agregarACarrito-${producto.id}" type="button" class="btn btn-success mb-2">Agregar al carrito</button>
            <button id="eliminarDeCarrito-${producto.id}" type="button" class="btn btn-danger">Eliminar del carrito</button>`;
            deposito.append(contenedorProductos);
            productoId++;

            let botonAgregarACarrito = document.getElementById(`agregarACarrito-${producto.id}`);
            botonAgregarACarrito.addEventListener("click", () => agregar(producto));

            let botonEliminarDeCarrito = document.getElementById(`eliminarDeCarrito-${producto.id}`);
            botonEliminarDeCarrito.addEventListener("click", () => eliminar(producto));
                    


        });
    } catch (error) {
        console.log(error)
    };
};

traerDatos();


let botonComprarCarrito = document.getElementById("comprarCarrito");
botonComprarCarrito.addEventListener("click", comprar);
botonComprarCarrito.className = "btn btn-primary ms-4";

//DEFINICION RESPUESTA BOTON COMPRAR
function comprar (){
    let mensaje = "";
    mensaje+= "Gracias por su compra!"
    //Precio total: $"+precioTotal;
    mensajeCarrito.innerText = mensaje;
    localStorage.clear();
    
}


