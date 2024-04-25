let libro = {
    titulo: "El Hobbit",
    autor: "J.R.R Tolkien",
    publicado: 1937,
    dinsponibilidad: true
};

//console.log(libro.titulo);


if(libro.dinsponibilidad){
    console.log(`El libro ${libro.titulo} esta disponible`);
}else{
    console.log(`El libro ${libro.titulo} se encuentra en prestamo`);
};

//imprimir todos los datos
//console.log(libro);

const prestarLibro = function(){
    libro.dinsponibilidad = false;
};

let biblioteca = [
    { titulo: "El Hobbit", autor: "J.R.R Tolkien", publicado: 1937, dinsponibilidad: true },
    { titulo: "1984", autor: "George Orwell", publicado: 1949, dinsponibilidad: true },
    { titulo: "La Fundacion", autor: "Isaac Asimov", publicado: 1951, dinsponibilidad: true }
];

//imprimir todos los datos
//console.log(biblioteca);


//imprimir todos los titulos de la lista
for(i=0; i<biblioteca.length; i++){
    console.log(biblioteca[i].titulo);
};