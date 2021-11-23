//Panes

const listaProductosPanes = document.querySelector('#lista-panes')

function cardProductos(panes){
    panes.forEach(panes => {
        const html = `
        <div class="info-card">
        <h3>${panes.nombre}</h3>
        <img src="${panes.imagen}">
        <h2 class="precio">${panes.precio}</h2>
        <button class="button-add" data-id="${panes.id}">Agregar al Carrito</button>
        </div>
        `
        listaProductosPanes.innerHTML += html;
    })
}

$.ajax({
    url: '/panes.json',
    success: function (panes, textStatus, xhr){
        cardProductos(panes);
    },
    error: function(xhr, textStatus, error){
        console.log(xhr);
        console.log(textStatus);
        console.log(error);
    }
});

//Pastas

const listaProductosPastas = document.querySelector('#lista-pastas')

function cardProductos2(pastas){
    pastas.forEach(pastas => {
        const html = `
        <div class="info-card">
        <h3>${pastas.nombre}</h3>
        <img src="${pastas.imagen}">
        <h2 class="precio">${pastas.precio}</h2>
        <button class="button-add" data-id="${pastas.id}">Agregar al Carrito</button>
        </div>
        `
        listaProductosPastas.innerHTML += html;
    })
}

$.ajax({
    url: '/pastas.json',
    success: function (pastas, textStatus, xhr){
        cardProductos2(pastas);
    },
    error: function(xhr, textStatus, error){
        console.log(xhr);
        console.log(textStatus);
        console.log(error);
    }
});

//Salsas

const listaProductosSalsas = document.querySelector('#lista-salsas')

function cardProductos3(salsas){
    salsas.forEach(salsas => {
        const html = `
        <div class="info-card">
        <h3>${salsas.nombre}</h3>
        <img src="${salsas.imagen}">
        <h2 class="precio">${salsas.precio}</h2>
        <button class="button-add" data-id="${salsas.id}">Agregar al Carrito</button>
        </div>
        `
        listaProductosSalsas.innerHTML += html;
    })
}

$.ajax({
    url: '/salsas.json',
    success: function (salsas, textStatus, xhr){
        cardProductos3(salsas);
    },
    error: function(xhr, textStatus, error){
        console.log(xhr);
        console.log(textStatus);
        console.log(error);
    }
});


const tablaDeCompra= document.getElementById('tablaDeCompra')

const tabla = document.createElement('div');

tabla.innerHTML= 'Su Compra';

tablaDeCompra.appendChild(tabla);




