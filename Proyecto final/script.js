//elementos de html
let divPersonajes = document.getElementById('personajes');
let divtodoslospersonajes = document.getElementById('personajes')
let botonFiltroTodo = document.getElementById('FiltroTodos');
let botonFiltroMujeres =document.getElementById('FiltroMujeres');
let botonFiltroHombres = document.getElementById('FiltroHombres');
let botonUltimapagina= document.getElementById('UltimaPagina');
let botonsiguientepagina = document.getElementById('Siguientepagina');
let botonPrimeraPagina = document.getElemtById('Primerpagina');
let botonAnteriorPagina = document.getElementById('Anteriorpagina');
//variables
let totalPersonajes;
let paginaActual = 1;

// funcion para mostrar los personajes en el html
function mostrarEnElHtml(arrPersonajes) {
  divpersonajes.innerHTML = '';
  // personajes nuevos 
  arrPersonajes.forEach((itemPersonaje) => {
    divPersonajes.innerHTML += `<div class="personajes">
                              < img src = ${itemPersonaje.image}>
                               <h2>Nombre: ${itemPersonaje.name}</h2>
                               <p> Genero: ${itemPersonaje.gender} </p>
                               <p> Estado: ${itemPersonaje.status}</p>
                               <p> Especie: ${itemPersonaje.species}</p>
                               
                        </div>`
                              

  });
}
// pedido de fetch
function pedidoFetch(pagina) 
{
  fetch("https://rickandmortyapi.com/api/character")
  .then((data) => {
    return data.json();
  }).then((data) => {

    console.log(data)

    totalPersonajes = data.results;
    console.log (totalPersonajes);
    mostrarEnElHtml(totalPersonajes);
    
  })

  fetch("https://rickandmortyapi.com/api/character/page" )
  .then((data) => {
    return data.json();
  }).then((data) => {
    totalPersonajes = data.results;
    mostrarEnElHtml(totalpersonajes);
  })


function pedidoFetch(pagina) {
  fetch("https://rickandmortyapi.com/api/character/?page=" + pagina)
  .then((data) => {
    return data.json();
  }).then((data) => {
    totalPersonajes = data.results;
    mostrarEnElHtml(totalPersonajes);
  })

}

pedidoFetch(1);
//Funciones

function filtrosSingenero() {
  let singenero = totalPersonajes.filters(
    (itemPersonajes) => {
      return itemPersonajes.gender === 'Genderless';
    });
  if (singenero.lenght === 0) {
    divPersonajes.innerHTML = <p>'No hay sin genero en esta pagina'</p>
  }


  mostrarEnElHtml(singenero)

}
function FiltroTodo() {
  mostrarEnElHtml(personajes);

};
function FiltroMujeres(){
  mostrarEnElHtml(Mujeres);

}
function filtroHombres(){
  mostrarEnElHtml(Hombres);
}

//deshabilitar pagina
function controlbotones() {{
  if (paginaActual === 42) {
    botonSiguientePagina.disabled = true;
    botonUltimaPagina.disabled = true;
  }
  else if (paginaActual === 1) {
    // deshabilitar los que sean necesarios
  }
  else {
    botonAnteriorPagina.disabled = false;
    botonPrimeraPagina.disabled = false;
    //agregar dos botones más
  }
}}


//Función del paginado
function Primerpagina() {
  paginaActual = 1;
  pedidoFetch(1);
  console.log(paginaActual)
}
   

    function siguientepagina() {
  (paginaActual++);
  pedidoFetch(paginaActual);
}
function UltimaPagina(){
  paginaActual = 42;
  pedidoFetch(42);}
  console.log(paginaActual)


}

// creación de evento
botonFiltroTodos.addEventListener('click', botonFiltroTodos);
botonfiltrosingenero.addEventListener('click', filtrosSingenero);
botonFiltroMujeres.addEventListener('click', filtroMujeres);
botonFiltroHombres.addEventListener('click', filtroHombres);
botonAnteriorPagina.addEventListener('click', anteriorPagina);
botonUltimapagina.addEventListener('click', ultimapagina);
botonsiguientepagina.addEventListener('click', Siguientepagina);
botonAnteriorPagina.addEventListener('click', anteriorPagina);

