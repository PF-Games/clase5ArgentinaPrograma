//TAREA: En otro archivo distinto,
// Por cada clase de r/argentina programa existente, vamos a pedir:
// horas, minutos y segundos de cada video. Ej. Si un video dura
// 2 horas, 38 minutos y 20 segundos, vamos a rellenar 3 campos de texto con
// cada dato.
// al apretar el botón "Calcular tiempo total", debe mostrar en un
// <strong> pre-creado el tiempo total de los videos.

document.querySelector("#videos").onsubmit = function () {
    const horas = document.querySelectorAll("#horas");
    const minutos = document.querySelectorAll("#minutos");
    const segundos = document.querySelectorAll("#segundos");

    let horasTotales = 0;
    let minutosTotales = 0;
    let segundosTotales = 0;

    for (let i = 0; i < horas.length; i++) {
        horasTotales += Number(horas[i].value);
    }
    for (let i = 0; i < minutos.length; i++) {
        minutosTotales += Number(minutos[i].value);
    }

    for (let i = 0; i < segundos.length; i++) {
        segundosTotales += Number(segundos[i].value);
    }

    minutosTotales += segundosTotales / 60;
    horasTotales += minutosTotales / 60;

    document.querySelector("div").innerText = "Resultado: ";
    document.querySelector("div").innerText += ` ${Math.floor(horasTotales)}:${Math.floor(minutosTotales % 60)}:${segundosTotales % 60}`;

    return false;
}