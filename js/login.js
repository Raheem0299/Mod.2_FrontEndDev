document.getElementById('loginForm').addEventListener('submit', function(e){
    e.preventDefault(); //El 'e' evita que se de enviar o submit al formulario si todos los campos no estan llenos, un formulario vacio
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const usuario = usuarios.find(u => u.username === username && u.password === password);

    if(usuario){
        alert('Inicio de sesion exitoso!');
    }else {
        alert('Nombre de usuario o contraseña incorrecta.');
    }

});


