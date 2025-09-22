//  Acceso al DOM
const audio = document.querySelector('#audio');
const btnPlay = document.querySelector('#play');
const btnPause = document.querySelector('#pause');
const inputVolumen = document.querySelector('#volumen');
const btnMute = document.querySelector('#mute');
const lista = document.querySelector('#playlist');

// Elementos de info
const caratula = document.querySelector('#caratula');
const titulo = document.querySelector('#titulo');
const autor = document.querySelector('#autor');

//  Playlist
const playlist = [
    {
        nombre: "Chiquitita",
        autor: "Abba",
        foto: "img/caratula-chiquitita.jpg",
        archivo: "audios/chiquitita.mp3"
    },
    {
        nombre: "Fiesta Pagana",
        autor: "Mago de Oz",
        foto: "img/caratula-magodeoz.jpg",
        archivo: "audios/fiesta-pagana.mp3"
    },
    {
        nombre: "Volver a comenzar",
        autor: "Luz Casal",
        foto: "img/caratula-luzcasal.jpg",
        archivo: "audios/volveracomenzar.mp3"
    },
    {
        nombre: "We Are The Champions",
        autor: "Queen",
        foto: "img/caratula-queen.jpg",
        archivo: "audios/wearethechampions.mp3"
    }
];

//  Estado inicial
btnPause.disabled = true;
audio.volume = 0.5;

//  Eventos
btnPlay.addEventListener('click', reproducir);
btnPause.addEventListener('click', pausar);
audio.addEventListener('ended', restablecer);
btnMute.addEventListener('click', toggleMute);
inputVolumen.addEventListener('input', modificarVolumen);

//  Controles
function reproducir() {
    audio.play();
    btnPlay.disabled = true;
    btnPause.disabled = false;
}

function pausar() {
    audio.pause();
    btnPlay.disabled = false;
    btnPause.disabled = true;
}

function restablecer() {
    btnPlay.disabled = false;
    btnPause.disabled = true;
}

function toggleMute() {
    audio.muted = !audio.muted;
    btnMute.setAttribute('aria-label', audio.muted ? 'Escuchar' : 'Silenciar');
    btnMute.innerHTML = audio.muted ? '🔊' : '🔇';
}

function modificarVolumen() {
    audio.volume = inputVolumen.value / 10; // 0.0 a 1.0
}

// Crear playlist dinámicamente
playlist.forEach((cancion) => {
    const item = document.createElement('div');
    item.className = 'itemcancion';

    // Imagen
    const img = document.createElement('img');
    img.src = cancion.foto;
    img.alt = `Carátula  ${cancion.nombre}`;

    // Título
    const nombre = document.createElement('h3');
    nombre.textContent = cancion.nombre;

    // Autor
    const autorEl = document.createElement('p');
    autorEl.textContent = cancion.autor;

    // Ensamblar el item mediante appendchild
    item.appendChild(img);
    item.appendChild(nombre);
    item.appendChild(autorEl);

    // Evento de reproducción
    item.addEventListener('click', () => {
        pausar();
        audio.src = cancion.archivo;
        reproducir();
        actualizarInfo(cancion);
    });

    lista.appendChild(item);
});

//  Actualiza la sección de info
function actualizarInfo(cancion) {
    caratula.src = cancion.foto;
    titulo.textContent = cancion.nombre;
    autor.textContent = cancion.autor;
}



