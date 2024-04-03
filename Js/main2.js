//funcion constructora de Productos 
function crearProductos(nombre, precio, talles, genero, imagen, precioReal){
    this.nombre= nombre;
    this.precio= precio;
    this.talles= talles;
    this.genero= genero;
    this.imagen= imagen;
    this.precioReal= precioReal;
}; 



//Productos (OBJETOS LITERALES)
const sandalia1= new crearProductos("Sandalias Adilette Comfort","$62.999","","Unisex","imgProductosGrandes/sandaliasAdiletteComfort.png",62999),
zapatilla1= new crearProductos("Ozmillen","$160.999","", "***UNISEX, HORMA GRANDE***","imgProductosGrandes/zapatillasOzmillen.png",160999),
zapatilla2= new crearProductos("Team Fu", "$160.999","","Mujer","imgProductos/teamFu2.png",160999),
zapatilla3= new crearProductos("Alphaboost V1","$97.999","", "Unisex","imgProductosGrandes/zapatillaVlCourt.png",97999),
zapatilla4= new crearProductos("Adifom Q","$81.999","", "***UNISEX, HORMA GRANDE***","imgProductosGrandes/zapatillasAdifom.png",81999),
pantalon1= new crearProductos("Adi2000", "$189.999","", "Mujer","imgProductosGrandes/PantalonDeportivosFlames.png",189999),
remera1= new crearProductos("Remera Adidas Z.N.E", "$69.999","", "Unisex","imgProductosGrandes/remeraOwnTheRun.png",69999),
remera2= new crearProductos("Remera Adidas Beckenbauer", "$69.999","", "Unisex","imgProductosGrandes/remeraFlame.png",69999),
zapatilla5= new crearProductos("Vl Adidas Court", "$99.999","", "Hombre","imgProductosGrandes/zapatillasAdidasBali.png",99999),
botin1= new crearProductos("Botines Crazyfast Messi", "$149.999","", "Hombre","imgProductosGrandes/botinesMessi.png",149999),
conjunto1= new crearProductos("Conjunto Mono", "$109.999","", "Unisex","imgProductosGrandes/shortMono.png",109999),
sandalia2= new crearProductos("Adicane","$68.999", "", "Hombre","imgProductosGrandes/ojotasAdicane.png",68999)

// "35.5 (UK 4)36.5 (UK 5)38 (UK 6)39 (UK 7)40 (UK 8)41.5 (UK 9)43 (UK 10)44 (UK 11)45.5 (UK 12)47 (UK 13)"

//Icono de Perfil luego de iniciar Sesión 

document.addEventListener("DOMContentLoaded", function() {
    const botonOcultado = localStorage.getItem("contraceñaGuardada");
    if (botonOcultado) {
        let divContenedorDeBtn = document.getElementsByClassName("divContenedorDeBtn")[0];
        divContenedorDeBtn.innerHTML = "";
        divContenedorDeBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="70" height="40" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
        <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
      </svg>`
    }
});

//funcion creadora html de los productos 
const h11 = document.querySelector(".h11");
const h12 = document.querySelector(".text-light");

function crearHtml(obj, etiqueta) {
    let container = document.createElement("div");
    container.innerHTML = `
        
        <div class="row">
        <div class="col-9"><img class="ui fluid image" src="${obj.imagen}"></div>
        <div class="col-3 pt-3"><h1>${obj.nombre}</h1>
    
        <h4>${obj.precio}</h4>

        <div class="huge ui animated button teal mt-10 btnComprar" tabindex="0"> 


        <div class="visible content ">Comprar</div>
        <div class="hidden content">
        <i class="shop icon"></i>
        </div>

        </div>
            <h4 class="fs-4 mt-7">Talles</h4>
             
            <div class="ui selection dropdown">
            <input class="inputTalles" type="hidden" name="gender">
            <i class="dropdown icon"></i>
            <div class="default text tiny">...</div>
            <div class="menu">
                <div class="item" data-value="1">35.5 (UK 4)</div>
                <div class="item" data-value="0">36.5 (UK 5)</div>
                <div class="item" data-value="2">38 (UK 6)</div>
                <div class="item" data-value="3">39 (UK 7)</div>
                <div class="item" data-value="4">40 (UK 8)</div>
                <div class="item" data-value="5">41.5 (UK 9)</div>
                <div class="item" data-value="6">43 (UK 10)</div>
                <div class="item" data-value="7">44 (UK 11)</div>
                <div class="item" data-value="8">45.5 (UK 12)</div>
                <div class="item" data-value="9">47 (UK 13)</div>
            </div>
            </div>
            
            <h1 class="mt-2">${obj.genero}</h1>

            <div class="d-flex justify-content-center pt-4">
            <div class=""><img class="ui tiny image" src="/images/wireframe/image.png"></div>
            <div class="ps-2 pe-2"><img class="ui tiny image" src="/images/wireframe/image.png"></div>
            <div class=""><img class="ui tiny image" src="/images/wireframe/image.png"></div>
        </div>

        <div class="mt-8"> 

        <div class="content fs-6 mt-9">
        <a class="header text-dark">ENVÍO GRATIS A PARTIR DE $79.999</a>
        </div>

        <div class="content fs-6">
        <a class="header text-dark segundo">DEVOLUCIONES GRATIS ¿NO ES DE TU TALLE? PODES DEVOLVERLO EN UN PLAZO DE 60 DIAS</a>
        </div>

        </div>

        <div id="rating-stars" class="mt-6 fs-5">
         <span class="star" data-star="1">&#9733;</span>
         <span class="star" data-star="2">&#9733;</span>
         <span class="star" data-star="3">&#9733;</span>
         <span class="star" data-star="4">&#9733;</span>
         <span class="star" data-star="5">&#9733;</span>
        </div>
        <p id="rating-value" class="mt-2 fs-5">Valoración: 0 estrellas</p>

        </h1>
        </div>
        </div>
    `;
    etiqueta.innerHTML = "";
    etiqueta.appendChild(container);
    h12.innerText = obj.nombre;

    // Inicializar el dropdown después de agregar el HTML al documento
    $('.ui.selection.dropdown').dropdown();
}


//FUNCION: Llamar el nombre de la clase de la clave guardada en LocalStorage de mi Objeto
function llamarClaseDelLocalStorage(){
 return localStorage.getItem('objeto');
}
let variable= llamarClaseDelLocalStorage()
//Muestro el producto clickeado en mi consola
console.log(variable);

let objeto=""

switch(variable){
    case "sandalia1": 
    objeto= sandalia1
    break;
    case "zapatilla1": 
    objeto= zapatilla1
    break;
    case "zapatilla2": 
    objeto= zapatilla2
    break;
    case "zapatilla3": 
    objeto= zapatilla3
    break;
    case "zapatilla4": 
    objeto= zapatilla4
    break;
    case "pantalon1": 
    objeto= pantalon1
    break;
    case "remera1": 
    objeto= remera1
    break;
    case "remera2": 
    objeto= remera2
    break;
    case "zapatilla5": 
    objeto= zapatilla5
    break;
    case "remera3": 
    objeto= remera3
    break;
    case "botin1": 
    objeto= botin1
    break;
    case "conjunto1": 
    objeto= conjunto1
    break;
    case "sandalia2": 
    objeto= sandalia2
    break;

}

crearHtml(objeto,h11)

//Estrellas para valorar el producto
document.addEventListener("DOMContentLoaded", function() {
    const stars = document.querySelectorAll(".star");
    stars.forEach(function(star) {
        star.addEventListener("click", function() {
            var rating = parseInt(this.getAttribute("data-star"));
            document.getElementById("rating-value").textContent = "Valoración: " + rating + " estrella(s)";
        });
    });
});

//Links de ayuda dentro de mis productos
const primerlink= document.querySelector(".header")
const segundolink= document.querySelector(".segundo")

primerlink.addEventListener("click",()=>{
    Swal.fire({title: "ENVÍO GRATIS A PARTIR DE $79,999",
    text: "Envíos gratis en todas las compras superiores a $79,999. En caso de que tu pedido se encuentre por debajo de este valor, el costo de envío será de $3,699 ARS.",
    confirmButtonText: "Aceptar",
    confirmButtonColor: "#008080", // Cambia el color de fondo del botón a verde
    confirmButtonTextColor: "#ffffff",}) // Cambia el color del texto del botón a blanco);
})

segundolink.addEventListener("click",()=>{
    Swal.fire({title: "¿CÓMO PUEDO DEVOLVER MI PEDIDO?",
    text: "Recuerda que tienes 60 días desde al fecha de recepción de tu pedio para iniciar tu proceso de Devolución o cambio \nDeberás cumplir con los Requisitos de Devolución. \nInicia tu proceso desde nuestro Portal de Autogestión o comunicándote con nuestro Centro de Atención al Cliente. \nNota: No se aceptan devoluciones de articulos personalilzados, trajes de baño, medias, calcetas, marcarillas, Top deportivos, asi como lanzamientos especiales o productso Hype como GUCCI, PRADA, BAD BUNNY. \nANTES DE CONTACTARNOS TEN LISTA LA SIGUIENTE INFORMACIÓN: \nVerificá que el producto esté nuevo, sin uso, con su caja y/o envoltorio original, y con sus etiquetas sin haber sido desprendidas. Para consultar otros requisitos ingresá acá. \nTené listo el Número de Pedido / Orden que encuentras en tu correo de confirmación. \nConsultá la disponibilidad del producto en nuestra página web. \nSi deseas cambiar la talla: Verificá la disponibilidad de talle en nuestra página web, tené listo el código de producto y el talle que deseas. Si compraste el producto en descuento, podés cambiarlo sin problema. Si deseas reemplazar por otro producto deberás acudir a tienda, no hay reemplazos vía Centro de Atención al Cliente, solo Cambios y Reembolsos.",
    confirmButtonText: "Aceptar",
    confirmButtonColor: "#008080", // Cambia el color de fondo del botón a verde
    confirmButtonTextColor: "#ffffff",}) // Cambia el color del texto del botón a blanco);
})

//Animacion de invertir los colores cuando se pasa el mouse por encima del link
primerlink.addEventListener("mouseenter", () => {
    primerlink.style.backgroundColor = "black";
    primerlink.classList.add("text-white"); // Agrega la clase para cambiar el color del texto a blanco
});

primerlink.addEventListener("mouseleave", () => {
    primerlink.style.backgroundColor = "white";
    primerlink.classList.remove("text-white"); // Quita la clase para restaurar el color del texto
    primerlink.style.color = "black"; // Restaura el color del texto a negro
});

segundolink.addEventListener("mouseenter", () => {
    segundolink.style.backgroundColor = "black";
    segundolink.classList.add("text-white"); // Agrega la clase para cambiar el color del texto a blanco
});

segundolink.addEventListener("mouseleave", () => {
    segundolink.style.backgroundColor = "white";
    segundolink.classList.remove("text-white"); // Quita la clase para restaurar el color del texto
    segundolink.style.color = "black"; // Restaura el color del texto a negro
});

// Seccion "COMPLETA"" de Carrito

// Donde los objetos son guardados en el LocalStorage
let array = [];

document.addEventListener("DOMContentLoaded", function() {
    
    // Verificar si hay un array almacenado en localStorage y cargarlo
    const storedArray = localStorage.getItem('array');
    if (storedArray) {
        array = JSON.parse(storedArray);
        console.log('Array cargado desde localStorage:', array);
        
    }
    // Aca me traigo el boton que quiero que cumpla la funcion de añadir al carrito
    const btnComprar = document.querySelector(".btnComprar");

    // Este es elemento que contiene mi eleccion de talle
    const inputTalles= document.querySelector(".default");
    btnComprar.addEventListener("click", () => {
        
        if(inputTalles.innerHTML === "..."){
            Swal.fire({title: "Seleccione un talle",
            confirmButtonText: "Ok", 
            confirmButtonColor: "#008080",
            icon: "warning"}) 
        }else{
            // Crear una copia superficial del objeto antes de modificarlo
            let objetoCopia = objeto;
            // Asignar el talle seleccionado a la copia del objeto
            objetoCopia.talles = inputTalles.innerHTML;
            array.push(objetoCopia); // Agrega el objeto al array
            console.log('Array actualizado:', array);
            localStorage.setItem('array', JSON.stringify(array)); // Actualiza el array en localStorage
            // objeto.talles=inputTalles.innerHTML
            Toastify({ 
            text: "Agregado al carrito",
            duration: 1000,
            backgroundColor: "linear-gradient(to right, black, #008080)", // Cambia el color de fondo de la notificación
            style: { 
            color: "white", // Cambia el color del texto a blanco
            fontFamily: "Arial, sans-serif", // Cambia la tipografía del texto
            }
        }).showToast();}
    });

});

// Funcion que crea html dentro de mi Sweet Alert 
function generarHTMLArray(array) {
    let htmlContent = '<div class="linea"></div>'; // Línea separadora
    let total = 0; // Inicializar el total
    
    // Recorrer el array y generar un párrafo para cada elemento
    array.forEach(element => {
        total = (total + element.precioReal);
        htmlContent += `<p class="mt-2"><img class="ui large image" src=${element.imagen}> <strong class="d-flex justify-content-center">${element.nombre} ${element.precio} (${element.talles})</strong> </p>`;
    });

    // Agregar un párrafo con el total de la compra
    htmlContent += `<div class="d-flex justify-content-between">
    <h2>Total:</h2>
    <h2>$${total}</h2>
    </div>`;
    
    return htmlContent;
}


//AddEvent que me permite acceder al carrito
const carritoicon = document.querySelector(".carritoBtn");

carritoicon.addEventListener("click",()=>{
    if (array.length === 0) {
        Swal.fire({
            title: "No hay productos añadidos al carrito",
            icon: "error",
            confirmButtonText: "Ok", 
            confirmButtonColor: "#008080" 
        });
    } else {
    Swal.fire({
        position: "top-end",
        title: "Mi compra",
        html: generarHTMLArray(array), // Llama a la función para generar el HTML del array
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "Comprar",
        denyButtonText: `Vaciar Carrito`,
        confirmButtonColor: "#008080",
        denyButtonColor: "black"
        }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
                // Swal.fire("Pago realizado", "", "success");
                Swal.fire({
                    title: "Pago realizado",
                    icon: "success",
                    confirmButtonText: "Ok", // Texto del botón "Ok"
                    confirmButtonColor: "#008080" // Color del botón "Ok"
                });
                localStorage.clear();
                array = [];
            
            
        } else if (result.isDenied) {
            // Swal.fire("Productos eliminados del Carrito", "", "info");
            Swal.fire({
                title: "Productos eliminados del Carrito",
                icon: "info",
                confirmButtonText: "Ok", // Texto del botón "Ok"
                confirmButtonColor: "#008080" // Color del botón "Ok"
            });
            localStorage.clear();
            array = [];
            
        }
        
    });
    }
});



