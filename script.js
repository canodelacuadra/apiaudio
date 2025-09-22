// accesos al dom
const audio = document.getElementById('audio')
const play = document.getElementById('play')
const pause = document.getElementById('pause')
const volumen = document.getElementById('volumen')
const mute = document.getElementById('mute')


// eventos
play.addEventListener("click", reproducir)
pause.addEventListener("click", pausar)
audio.addEventListener('ended', restablecer)
mute.addEventListener('click', mutear)
volumen.addEventListener('change', modificarVolumen)

// estado inicial del reproductor
pause.disabled = true 
audio.volume= 0.5;


// funciones que disparan los entos
function reproducir() {
    audio.play();
    play.disabled = true;
    pause.disabled = false;
}
function pausar() {
    audio.pause();
    play.disabled = false;
    pause.disabled = true
}
function restablecer() {
    play.disabled = false;
    pause.disabled = true;
}
function mutear() {
    if (audio.muted == false) {
        audio.muted = true
        mute.innerHTML = 'Escuchar'
    }else if(audio.muted == true){
        audio.muted=false;
         mute.innerHTML = 'Silenciar'
    }

}
function modificarVolumen(){
    console.log(volumen.value)
    audio.volume = `0.${volumen.value}`
}
/////aqui empieza la playlist///////////////////
/////////////////////////////////////////////
// canciones
const playlist =
    [
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
            nombre: "Vovler a comenzar",
            autor: "Luz Casal",
            foto: "img/caratula-luzcasal.jpg",
            archivo: "audios/volveracomenzar.mp3"
        },
         {
            nombre: "We are the champions",
            autor: "Queen",
            foto: "img/caratula-queen.jpg",
            archivo: "audios/wearethechampions.mp3"
        },

    ]
const lista = document.getElementById('playlist')
// crear los elementos
for (element of playlist) {
   const div = document.createElement('div')
   div.className = "itemcancion"
   div.innerHTML =   element.nombre
   
   div.setAttribute('data-archivo', element.archivo)
   div.addEventListener('click',function(e){
 pausar()
    audio.src= e.target.getAttribute('data-archivo')
    reproducir();

   })
   lista.appendChild(div)
   
     
}



