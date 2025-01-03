//TAREA: En otro archivo html (no Index) y otro archivo js (no tarea-clase-5.js),
// creá un formulario que capture el primer nombre, segundo nombre, apellido/s y edad del usuario
// también vamos a crear un <h1> que diga Bienvenido!
// vas a crear un botón de acción que una vez que lo apretás, va a
// mostrar toda la información junta en un campo de texto
// Y va a cambiar el <h1> para decir "Bienvenido, nombreDeUsuario"!


document.querySelector('#entrada-bar').onsubmit = function(){
    const edad = Number(document.querySelector('#edad-usuario').value);
    const nombre = document.querySelector('#nombre-usuario').value;
 
    document.querySelector('#resultado').innerText = `Nombre: ${nombre}, Edad: ${edad}`;
    document.querySelector('h1').innerText = `¡Hola ${nombre}! ¡Te damos la bienvenida!`;

    return false;
}

