document.getElementById('rangoForm').addEventListener('submit', function(e){
    e.preventDefault();
    
    const primero = document.getElementById('inicio').value;
    const ultimo = document.getElementById('fin').value;
    
    let busqueda = biblioteca.filter(function(fecha){
        return fecha.añoDePublicacion <= ultimo && fecha.añoDePublicacion >= primero;
    })
    console.log(busqueda);
    alert(busqueda);
    
});


