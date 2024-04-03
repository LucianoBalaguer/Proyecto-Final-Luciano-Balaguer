document.addEventListener("DOMContentLoaded", function() {//Este evento se ejecuta luego de cargar todo de mi Dom, por eso parpadea por un segundo el boton SING IN
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

//function Iniciar Sesión
const btnInicioDeSesion= document.getElementById("botonDeInicioDeSesion")

async function mostrarFormulario() {
    let primerInput="";
    let segundoInput="";
    for (let i = 0; i < 3; i++){
        const { value: formValues } = await Swal.fire({
            title: "Registrarse || RezArrows",
            html: `
                <h6>Ingrese su mail para registrarse</h6>
                <input id="swal-input1" class="swal2-input">
                <h6 class="mt-3">Contraceña</h6>   
                <input id="swal-input2" class="swal2-input">
                <h6 class="mt-3">Repita la contraceña</h6> 
                <input id="swal-input3" class="swal2-input">
            `,
            focusConfirm: false,
            showCancelButton: true,
            confirmButtonColor: "#008080",
            preConfirm: () => { 
                
                primerInput = document.getElementById("swal-input2").value
                segundoInput = document.getElementById("swal-input3").value
                mailInput= document.getElementById("swal-input1").value
                if(primerInput !="" && segundoInput !=""){ 
                    if (primerInput === segundoInput) {
                        return { success: true }; //aca devuelvo un success true, entonces por convencion mi ventana de registrarse se cierra y da paso a que se habra la siguiente ventana de "Ingresaste con exito"
                    } else {
                        return { success: false };//aca sucede lo mismo pero con una ventana distinta
                    } 
                }else{
                    Swal.fire({
                        title: "Espacios en Blanco!",
                        icon: "warning"} 
                    )

                    return false; //tengo que agregar este return false, porque por convencion en sweet alert si de mi funcion preconfirm devuelvo un false todavia mi ventana de registro se mantendra abierta 
                }
                
            }
        });
        
        if (formValues.success) {
            Swal.fire({
                title: "Creaste tu cuenta con exito!",
                icon: "success"
            
            });
            localStorage.setItem("contraceñaGuardada" , true);
            const divContenedorDeBtn= document.querySelector(".divContenedorDeBtn")
            console.log(divContenedorDeBtn);
            divContenedorDeBtn.innerHTML="";
            setTimeout(()=>{
                location.reload();
            },1000)
            
            break;
            }else{
                Swal.fire({
                title: "Las contraceñas no coinciden, agotaste tus intentos.",
                icon: "error"
                });
            }
    
        }
    }

//Ejecucion de la funcion Inicio Sesión
btnInicioDeSesion.addEventListener("click",()=>{
    mostrarFormulario();
})

//script de la animación de difuminar de Semantic UI (CORREGIR)
$(document).ready(function() {
    $('.special.cards .image').dimmer({
        on: 'hover'
    });
});

//Entrar en el Producto
document.querySelectorAll('.header').forEach(boton => {
    boton.addEventListener('click', function(){
        // Obtener el nombre del objeto asociado al botón
        const objetoName = this.getAttribute('data-objeto');
        // Guardar el valor en el localStorage
        localStorage.setItem('objeto', objetoName);
        // Redirigir al segundo HTML
        window.location.href = "estructuraParaLosProductos.html";
    });
});

//funcion constructora de Productos 
function crearProductos(nombre, precio, talles, genero, imagen, precioReal,valoracion,tipo, imagenPreview){
    this.nombre= nombre;
    this.precio= precio;
    this.talles= talles;
    this.genero= genero;
    this.imagen= imagen;
    this.precioReal= precioReal;
    this.valoracion= valoracion;
    this.tipo = tipo;
    this.imagenPreview = imagenPreview;
}; 

//Productos
const sandalia1= new crearProductos("Sandalias Adilette Comfort","$62.999","","Unisex","imgProductosGrandes/sandaliasAdiletteComfort.png",62999,"CONFORT","sandalia1","imgProductos/ojota1.png"),
zapatilla1= new crearProductos("Ozmillen","$160.999","", "***UNISEX, HORMA GRANDE***","imgProductosGrandes/zapatillasOzmillen.png",160999,"zapatillas de moda para Hombre","zapatilla1"),
zapatilla2= new crearProductos("Team Fu", "$160.999","", "Mujer","imgProductosGrandes/Team fu.png",160999,"zapatillas de moda para mujer","zapatilla2"),
zapatilla3= new crearProductos("Alphaboost V1","$97.999","", "Unisex","imgProductosGrandes/zapatillaVlCourt.png",97999,"zapatilla de moda Unisex","zapatilla3"),
zapatilla4= new crearProductos("Adifom Q","$81.999","35 36.5 38 39 40 (UK)", "***UNISEX, HORMA GRANDE***","imgProductosGrandes/zapatillasAdifom.png",81999,"zapatilla de moda para Hombre","zapatilla4"),
pantalon1= new crearProductos("Adi2000", "$189.999","", "Mujer","imgProductosGrandes/PantalonDeportivosFlames.png",189999,"Pantalon de moda Unisex","pantalon1"),
remera1= new crearProductos("Remera Adidas Z.N.E", "$69.999","", "Unisex","imgProductosGrandes/remeraOwnTheRun.png",69999,"Remera deportiva para Hombre","remera1"),
remera2= new crearProductos("Remera Adidas Beckenbauer", "$69.999","", "Unisex","imgProductosGrandes/remeraFlame.png",69999,"Remera Oversize de moda Unisex","remera2"),
zapatilla5= new crearProductos("Vl Adidas Court", "$99.999","", "Hombre","imgProductosGrandes/zapatillasAdidasBali.png",99999,"zapatilla de moda Unisex","zapatilla5"),
botin1= new crearProductos("Botines Crazyfast Messi", "$149.999","", "Hombre","imgProductosGrandes/botinesMessi.png",149999,"Botines de pasto natural Unisex","botin1"),
conjunto1= new crearProductos("Conjunto Mono", "$109.999","", "Unisex","imgProductosGrandes/shortMono.png",109999,"Conjunto de moda para Hombre","conjunto1"),
sandalia2= new crearProductos("Adicane","$68.999", "", "Hombre","imgProductosGrandes/ojotasAdicane.png",68999,"COMFORT","sandalia2")

//ARRAY de productos para mi funcion de buscar 
arrayParaLaFuncionBuscarProductos= [
    sandalia1,
    zapatilla1,
    zapatilla2,
    zapatilla3,
    zapatilla4,
    pantalon1,
    remera1,
    remera2,
    zapatilla5,
    botin1,
    conjunto1,
    sandalia2
]

document.querySelectorAll('.header').forEach(boton => {
    boton.addEventListener('click', () => {
        // Obtener el nombre del objeto asociado al botón
        const objetoName = boton.getAttribute('data-objeto');
        // Guardar el valor en el localStorage
        localStorage.setItem('objeto', objetoName);
        // Redirigir al segundo HTML
        window.location.href = "estructuraParaLosProductos.html";
    });
});

// Seccion COMPLETA de Carrito

// Donde los objetos son guardados en el LocalStorage
let array = [];

document.addEventListener("DOMContentLoaded", function() {
    
// Verificar si hay un array almacenado en localStorage y cargarlo
const storedArray = localStorage.getItem('array');
    if (storedArray) {
        array = JSON.parse(storedArray);
        console.log('Array cargado desde localStorage:', array);
        
    }
})
//

// Aca me traigo el boton que quiero que cumpla la funcion de añadir al carrito
const btnComprar = document.querySelectorAll(".center");

btnComprar.forEach(element => {
    element.addEventListener("click", () => {
        let objetoName = element.getAttribute('data-objeto');

        Swal.fire({
            title: 'Seleccione un talle disponible',
            html: `
                <select id="miDropdown" class="form-control">
                    <option value="opcion1">...</option>
                    <option value="35.5 (UK 4)">35.5 (UK 4)</option>
                    <option value="36.5 (UK 5)">36.5 (UK 5)</option>
                    <option value="38 (UK 6)">38 (UK 6)</option>
                    <option value="39 (UK 7)">39 (UK 7)</option>
                    <option value="40 (UK 8)">40 (UK 8)</option>
                    <option value="41.5 (UK 9)">41.5 (UK 9)</option>
                    <option value="43 (UK 10)">43 (UK 10)</option>
                    <option value="44 (UK 11)">44 (UK 11)</option>
                    <option value="45.5 (UK 12)">45.5 (UK 12)</option>
                    <option value="47 (UK 13)">47 (UK 13)</option>

                </select>
            `,
            showCancelButton: true,
            confirmButtonText: 'Aceptar',
            confirmButtonColor: '#008080',
            cancelButtonText: 'Cancelar',
            showLoaderOnConfirm: true,
            preConfirm: () => {
                const dropdownValue = document.getElementById('miDropdown').value;
                if (dropdownValue !== "opcion1") {
                    Toastify({
                        text: "Agregado al carrito",
                        duration: 1000,
                        backgroundColor: "linear-gradient(to right, black, #008080)",
                        style: {
                            color: "white",
                            fontFamily: "Arial, sans-serif",
                        }
                    }).showToast();

                    switch (objetoName) {
                        case "sandalia1":
                            objetoName = sandalia1;
                            break;
                        case "zapatilla1":
                            objetoName = zapatilla1;
                            break;
                        case "zapatilla2":
                            objetoName = zapatilla2;
                            break;
                        case "zapatilla3": 
                            objetoName= zapatilla3
                            break;
                        case "zapatilla4": 
                            objetoName= zapatilla4
                            break;
                        case "pantalon1": 
                            objetoName= pantalon1
                            break;
                        case "remera1": 
                            objetoName= remera1
                            break;
                        case "remera2": 
                            objetoName= remera2
                            break;
                        case "zapatilla5": 
                            objetoName= zapatilla5
                            break;
                        case "remera3": 
                            objetoName= remera3
                            break;
                        case "botin1": 
                            objetoName= botin1
                            break;
                        case "conjunto1": 
                            objetoName= conjunto1
                            break;
                        case "sandalia2": 
                            objetoName= sandalia2
                            break;
                    }
                    let objetoCopia = objetoName;
                    // Asignar el talle seleccionado a la copia del objeto
                    objetoCopia.talles = dropdownValue;
                    array.push(objetoCopia);
                    console.log('Array actualizado:', array);
                    localStorage.setItem('array', JSON.stringify(array));
                }else{
                    Swal.fire({
                        title: 'Debes seleccionar un talle',
                        icon: 'warning',
                        confirmButtonColor: '#008080',
                        confirmButtonText: 'ok'
                      });                    
                }
            }
        });
    });
});

//FUNCION PARA BUSCAR PRODUCTO
function buscarServicio(array, palabra) {
    const encontrado = array.filter((el) => { //FIND me devuelve el objeto entero
        
        // return el.nombre.includes(palabra);
        return el.nombre.toLowerCase().includes(palabra.toLowerCase());
    });
    
    return encontrado;
}
const btnBuscar= document.querySelector(".btn-outline-custom-color")
const inputBuscar= document.querySelector(".form-control")

btnBuscar.addEventListener("click",()=>{
    const encontrado= buscarServicio(arrayParaLaFuncionBuscarProductos,inputBuscar.value);
    console.log(encontrado);

    // Generar el HTML para todos los elementos encontrados
    let htmlContent = "";
    encontrado.forEach(element => {
        htmlContent += `<p class="mt-2 productoMostradoPorBuscar" data-objeto=${element.tipo}><img class="ui large image" src=${element.imagen}> <strong class="d-flex justify-content-center">${element.nombre} ${element.precio}</strong> </p>`;

    });

    // Mostrar una única alerta con todo el contenido generado
    Swal.fire({
        position: "top-end",
        title: "Resultados de la búsqueda",
        html: htmlContent,
    });
    
    const productoMostradoPorBuscar = document.querySelectorAll(".productoMostradoPorBuscar");
    productoMostradoPorBuscar.forEach(item => {
        item.addEventListener("click", function(){
            // Obtener el nombre del objeto asociado al botón
            const objetoName = this.getAttribute('data-objeto');
            console.log(objetoName);
            // Guardar el valor en el localStorage
            localStorage.setItem('objeto', objetoName);
            // Redirigir al segundo HTML
            window.location.href = "estructuraParaLosProductos.html";
        });
});
})   

// FUNCION que crea html dentro de mi Sweet Alert 
function generarHTMLArray(array) {
    let htmlContent = '<div class="linea"></div>'; // Línea separadora
    let total = 0; // Inicializar el total
    
    // Recorrer el array y generar un párrafo para cada elemento
    array.forEach(element => {
        total = (total + element.precioReal);
        htmlContent += `<p class="mt-2"><img class="ui large image" src=${element.imagen}> <strong class="d-flex justify-content-center">${element.nombre} ${element.precio} (${element.talles})</strong> </p>`
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
        Swal.fire("No hay productos añadidos al carrito", "", "error");
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
        if (result.isConfirmed) {
            Swal.fire("Pago realizado", "", "success");
            localStorage.clear();
            array = [];
        } else if (result.isDenied) {
            Swal.fire("Productos eliminados del Carrito", "", "info");
            localStorage.clear();
            array = [];
        }
        
    });
    }
});
