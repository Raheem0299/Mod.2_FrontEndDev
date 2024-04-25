let titulo = document.getElementById(`titulo`);
let parrafo = document.getElementById(`parrafo`);

let botonCambiar = document.getElementById(`botonCambiar`);

botonCambiar.addEventListener(`click`, function(){
    titulo.textContent = 'Me cambiaron a traves del DOM';
    titulo.style.color = 'blue';
    parrafo.textContent = 'Cambiamos el parrafo con el mismo boton.';
    parrafo.style.fontSize = '32px';
    parrafo.style.color = 'white';
    parrafo.style.background = 'blue';



});

document.getElementById('miBoton').addEventListener(`click`, function(event){
    alert('Dije que no me presionara!!!')
})