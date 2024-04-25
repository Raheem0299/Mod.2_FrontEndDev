function nombreEstudiante(){
    nombre = prompt("Ingrese el nombre del estudiante: ");
    return nombre;
}

function ctnNotas(){
    ctn = Number(prompt("Ingrese la cantidad de notas del estudiantes: "));
    return ctn;
}

function notas(){
    notas = [];
    cantidadDeNotas = ctnNotas();
    for(i=1; i<=cantidadDeNotas; i++){
        tmpNota = Number(prompt(`Ingrese la nota #${i}: `));
        notas.push(tmpNota);
    }
    return notas;
}

function promedio(arregloNotas){
    sumaNotas = 0;
    for(i=0; i < arregloNotas.length; i++) {
        sumaNotas = sumaNotas + arregloNotas[i];
    }
    promedio = sumaNotas / arregloNotas.length;
    return promedio;
}
   
function condicion(segunPromedio) {
    estado = '';
    if(segunPromedio < 60){
        estado = "REPROBADO";
    }else if(segunPromedio >= 60 && segunPromedio < 75){
        estado = "APLAZADO";
    }else{
        estado = "APROBADO";
    }
    return estado;
}

function main(){
    nombre = nombreEstudiante();
    listaNotas = notas();
    promedioNotas = promedio(listaNotas);
    estudiante = condicion(promedioNotas);
 
    // if(promedio < 60){
    //     curso = "REPROBADO";
    // }else if(promedio >= 60 && promedio < 75){
    //     curso = "APLAZADO";
    // }else{
    //     curso = "APROBADO";
    // }

    alert(`El estudiante ${nombre}, obtuvo un promedio de ${promedio}, por lo tanto se encuentra: ${estado}`);

}

main();