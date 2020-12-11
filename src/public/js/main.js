


//const peliculas = document.querySelector('#pelicula');
const flechaIzq = document.getElementById('flecha_izquierda');
const flechaIzq2 = document.getElementById('flecha_izquierda2');
const flechaIzq3 = document.getElementById('flecha_izquierda3');
const flechaIzq4 = document.getElementById('flecha_derecha4');
const flechaDer = document.getElementById('flecha_derecha');
const flechaDer2 = document.getElementById('flecha_derecha2');
const flechaDer3 = document.getElementById('flecha_derecha3');
const flechaDer4 = document.getElementById('flecha_derecha4');

const fila = document.getElementById('contenedor_carrousel');
const fila2 = document.getElementById('contenedor_carrousel2');
const fila3 = document.getElementById('contenedor_carrousel3');
const fila4 = document.getElementById('contenedor_carrousel4');

flechaIzq.addEventListener('click',()=>{
    fila.scrollLeft -= fila.offsetWidth;
})
flechaDer.addEventListener('click',()=>{
    fila.scrollLeft += fila.offsetWidth;
})
flechaIzq2.addEventListener('click',()=>{
    fila2.scrollLeft -= fila2.offsetWidth;
})
flechaDer2.addEventListener('click',()=>{
    fila2.scrollLeft += fila2.offsetWidth;
})
flechaIzq3.addEventListener('click',()=>{
    fila3.scrollLeft -= fila3.offsetWidth;
})
flechaDer3.addEventListener('click',()=>{
    fila3.scrollLeft += fila3.offsetWidth;
})
flechaIzq4.addEventListener('click',()=>{
    fila4.scrollLeft -= fila4.offsetWidth;
})
flechaDer4.addEventListener('click',()=>{
    fila4.scrollLeft += fila4.offsetWidth;
})
