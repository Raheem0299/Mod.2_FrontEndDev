let usuarios = [
    { id:1, nombre: "Juan", edad: 35},
    { id:2, nombre: "Pedro", edad: 42},
    { id:3, nombre: "Santiago", edad: 25},
];

let usuarioBuscado = usuarios.find(function(usuario){
    return usuario.id ===3;
});

console.log(usuarioBuscado);

let usuariosMAyores25 = [];

for(i=0; i < usuarios.length; i++) {
    if(usuarios[i].edad > 25) {
        usuariosMAyores25.push(usuarios[i]);
    }
};

console.log(usuariosMAyores25);

//hacer una funcion que reciba el id del usuario y devuelva la info del usuario. si el usuario no existe debe decirlo, SIN USAR .find

let usuarioBuscado2 = null;

function BuscarUsuario(id,arreglo){
for(i=0; i < arreglo.length; i++){
    if(arreglo[i].id === id){
        usuarioBuscado2 = arreglo[i];
        break;
    }else{
        console.log('usuario no encontrado');
    }
}
console.log(usuarioBuscado2);


};

BuscarUsuario(3, usuarios)

//id = Number(prompt('Ingrese el id del usuario que desea buscar'));

let mayores25 = usuarios.filter(function(usuario){
    return usuario.edad > 25;
})
console.log(mayores25);