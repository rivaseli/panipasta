class Carrito {
    compraProducto(e){
        e.preventDefault();
        if(e.target.classList.contains('button-add')){
            const producto = e.target.parentElement;
            this.leerDatosProductos(producto);
            
        }
    }

    leerDatosProductos(producto){
        const infoProducto = {
            imagen : producto.querySelector('img').src,
            nombre : producto.querySelector('h3').textContent,
            precio : producto.querySelector('h2').textContent,
            id : producto.querySelector('button').dataset.id,
            cantidad : 1,
        }

        this.insertarCarrito(infoProducto);
       
    }
    
        //addItemCarrito(infoProducto);
        /*addItemCarrito(infoProducto){
            for(let i=0; i < carrito.lenght ; i++){
                if(carrito[i].nombre.trim() === infoProducto.id.trim()){
                    carrito[i].cantidad ++;
     
                    return null;
                }
            } 
        }*/
       
    insertarCarrito(producto){
        const row = document.createElement('tr')
        row.innerHTML = `
            <td>
            <img src="${producto.imagen}" width=100>
            </td>
            <td>${producto.nombre}</td>
            <td>${producto.precio}</td>
            <td><input type="number" min="1" value="${producto.cantidad}"></td>

            <td>
            <a href="#" class="borrar-producto fas fa-trash-alt" data-id="${producto.id}"></a>
            </td>
        `;
    
        listaProductos.appendChild(row);
        this.guardarProductosLocalStorage(producto);
        //this.carritoTotal();
    }

    carritoTotal() {
        let total = 0;
        const itemCardTotal = document.querySelector('itemCardTotal')
        carrito.forEach ((producto) => {
            const precio = Number(producto.precio.replace("$", " "))
            total = total + precio*producto.cantidad
        })

        itemCardTotal.innerHTML = `Total $${total}`
    }

    
        eliminarProducto(e){
        e.preventDefault();
        let producto, productoID;
        if(e.target.classList.contains('borrar-producto')){
            e.target.parentElement.parentElement.remove();
            producto = e.target.parentElement;
            productoID = producto.querySelector('a').dataset.id
        }
        this.eliminarProductoLocalStorage(productoID);
    }

    vaciarCarrito(){
        while(listaProductos.firstChild){
            listaProductos.removeChild(listaProductos.firstChild);
        }
    
        vaciarLocalStorage();
    
        return false;
    }

    guardarProductosLocalStorage(producto){
        let productos;
        productos = obtenerProductosLocalStorage();
        productos.push(producto);
        localStorage.setItem('productos', JSON.stringify(productos));
    }
    
    obtenerProductosLocalStorage(){
        let productosLS;
    
        if(localStorage.getItem('productos') === null){
            productosLS = [];
        }
        else{
            productosLS = JSON.parse(localStorage.getItem('productos'));
        }
        return productosLS;
    }
    
    leerLocalStorage(){
        let productosLS;
    
        productosLS = obtenerProductosLocalStorage();
    
        productosLS.forEach(function(producto) {
            const row = document.createElement('tr');
            row.innerHTML = `
            <td>
            <img src="${producto.imagen}" width=100>
            </td>
            <td>${producto.nombre}</td>
            <td>${producto.precio}</td>
            <td><input type="number" min="1" value="${producto.cantidad}"></td>
    
            <td>
            <a href="#" class="borrar-producto fas fa-trash-alt" data-id="${producto.id}"></a>
            </td>
        `;
        listaProductos.appendChild(row);
        });
    }
    
    eliminarProductoLocalStorage(productoID){
        let productosLS;
        productosLS = obtenerProductosLocalStorage();
        productosLS.forEach(function(productosLS, index){
            if(productosLS.id === producto){
                productosLS.splice(index, 1);
            }
        });
    
        localStorage.setItem('productos', JSON.stringify(productosLS));
    }
    
    vaciarLocalStorage() {
        localStorage.clear();
    }
    
}



const carro = new Carrito(); 
const carrito = document.getElementById('carrito');
const productos = document.getElementById('lista-panes');
const productos2 = document.getElementById('lista-pastas');
const productos3 = document.getElementById('lista-salsas');
const listaProductos = document.querySelector('#lista-compra tbody');
const vaciarCarrito = document.getElementById('')

cargarEventos()

function cargarEventos(){
    productos.addEventListener('click', (e)=> (carro.compraProducto(e)));
    productos2.addEventListener('click', (e)=> (carro.compraProducto(e)));
    productos3.addEventListener('click', (e)=> (carro.compraProducto(e)));

    carrito.addEventListener('click', (e)=> (carro.eliminarProducto(e)));

}

$('#procesar-compra').on('click', function(){
    alert('Estamos Procesando su Pedido')
}); 

const nCantidad = Object.values(Carrito).reduce((acc, {cantidad}) => acc + cantidad, 0)
console.log(nCantidad)