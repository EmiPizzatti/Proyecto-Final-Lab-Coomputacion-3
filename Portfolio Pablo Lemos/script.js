// MENU HAMBURGUESA
function Menu(){
    var menu = document.getElementById("menuMobile");
    if(menu){
    if(menu.className.indexOf("menuMobile") > -1){
    menu.classList.toggle("menuMobileOpen");
    }
}
}
// CARROUSEL DE IMG
window.onload = function () {
    const IMAGENES = [
        'img/galeria/1.jpg',
        'img/galeria/2.jpg',
        'img/galeria/3.jpg',
        'img/galeria/4.jpg',
        'img/galeria/5.jpg',
        'img/galeria/6.jpg',
        'img/galeria/7.jpg',
        'img/galeria/8.jpg',
    ];
    const TIEMPO_INTERVALO_MILESIMAS_SEG = 1800;
    let posicionActual = 0;
    let $botonRetroceder = document.querySelector('#retroceder');
    let $botonAvanzar = document.querySelector('#avanzar');
    let $imagen = document.querySelector('#imagen');
    let intervalo;
    function pasarFoto() {
        if(posicionActual >= IMAGENES.length - 1) {
            posicionActual = 0;
        } else {
            posicionActual++;
        }
        renderizarImagen();
    }
    function retrocederFoto() {
        if(posicionActual <= 0) {
            posicionActual = IMAGENES.length - 1;
        } else {
            posicionActual--;
        }
        renderizarImagen();
    }
    function renderizarImagen () {
        $imagen.style.backgroundImage = `url(${IMAGENES[posicionActual]})`;
    }
    $botonAvanzar.addEventListener('click', pasarFoto);
    $botonRetroceder.addEventListener('click', retrocederFoto);
    renderizarImagen();
}

// CARGA DE TODOS LOS PRODUCTOS DE LA API
window.addEventListener('load', CargarAPI);

function CargarAPI() {
	fetch('https://api.yumserver.com/16966/generic/tatuajesDimensiones')
		.then(response => response.json())
		.then(objeto => {
			console.log(objeto.data)
			Mostrar(objeto);
		});
}

function Mostrar(objeto) {
	for (let i = 0; i < objeto.data.length; i++) {
		document.body.innerHTML += `
			<img src="${objeto.data[i].avatar}"/>
		`;
	}
}

// CREANDO UN NUEVO PRODUCTO
function CrearNuevo() {
fetch('https://api.yumserver.com/16966/generic/tatuajesDimensiones', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
    param1: 'Tatuaje de 15 a 20 cm',
    param2: 20000,
    param3: 150,
    param4: 'Estilo tradicional'
    })
    })
    .then(response => response.text())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));

fetch('https://api.yumserver.com/16966/generic/tatuajesDimensiones', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
    param1: 'Tatuaje de 25 a 30 cm',
    param2: 40000,
    param3: 450,
    param4: 'Estilo tradicional'
    })
    })
    .then(response => response.text())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
}
//ELIMINANDO UN PRODUCTO
function Eliminar() {
fetch('https://api.yumserver.com/16966/generic/tatuajesDimensiones',{
    method: 'DELETE',
    body: {
        "idcod": "xwrx75nMkY",
        "idcod": "7Q599DaLNu",
        "idcod":"vJIKEadgFp",
        "idcod":"90dkGzPhRv",
    }
})
}

//MODIFICANDO UN PRODUCTO
function Modificar() {
fetch('https://api.yumserver.com/16966/generic/tatuajesDimensiones',{
method:'PATCH',
body:
{   "idcod": "y4Ej48jIS5",
    "param1": "Tatuaje de 35 a 40 cm",
    "param2": 60000,
    "param3": 700,
    "param4": "Estilo tradicional"
}
})
}

//FILTRO DE PRODUCTOS
function Filtrar() {
	let input = document.getElementById("busqueda");
	input.value = input.value.toLowerCase();
	let contenedor = document.getElementById("contenedor");
	let hijos = contenedor.childNodes;
	let hayResultados = false;
	for (let i = 0; i < hijos.length; i++) {
		console.log(hijos[i].innerHTML)
		console.log(hijos[i])
		if (hijos[i].tagName == 'DIV') {
			if (hijos[i].innerHTML.toLowerCase().indexOf(input.value) > -1) {
				hayResultados = true;
				hijos[i].removeAttribute('style');
			} else {
				hijos[i].setAttribute('style', 'display:none');
			}
		}
	}
}


