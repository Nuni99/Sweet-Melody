
//creacion de las ventanas emergentes

const cancionesInfo = {
    unhappy: {
        titulo: "Unhappy",
        imagen: "assets/img/clasificacion/unhappy.jpeg",
        song: "assets/audios/clasificacion/unhappy (slowed).mp3",
        descripcion: "Una canción melancólica que transmite sentimientos de tristeza, vacío emocional y reflexión."
    },

    smoothCriminal: {
        titulo: "Smooth Criminal",
        imagen: "assets/img/clasificacion/smooth_criminal.jpg",
        song: "assets/audios/clasificacion/Michael Jackson - Smooth Criminal (Official Video - Shortened Version).mp3",
        descripcion: "Un clásico de Michael Jackson cargado de energía, ritmo e intensidad."
    },

    breeze: {
        titulo: "Breeze",
        imagen: "assets/img/clasificacion/breeze.jpg",
        song: "assets/audios/clasificacion/Breeze - Doki Doki Fallen Angel.mp3",
        descripcion: "Una composición emocional perteneciente al mod DDLC Fallen Angel que transmite nostalgia y melancolía."
    },

    impostor: {
        titulo: "Impostor Syndrome",
        imagen: "assets/img/clasificacion/impostor.jpeg",
        song: "assets/audios/clasificacion/Impostor Syndrome.mp3",
        descripcion: "Una canción que mezcla humor, inseguridad y reflexión personal."
    },

    bugambilia: {
        titulo: "Bugambilia",
        imagen: "assets/img/clasificacion/bugambilia.jpeg",
        song: "assets/audios/clasificacion/Bugambilia.m4a",
        descripcion: "Una canción cargada de nostalgia y recuerdos. Su melodía suave y su interpretación evocan momentos pasados con una mezcla de tristeza y cariño."
    },

    untilIFoundYou: {
        titulo: "Until I Found You",
        imagen: "assets/img/clasificacion/until_i.jpeg",
        song: "assets/audios/clasificacion/Stephen Sanchez - Until I Found You [Español  Lyrics] (Video Oficial).mp3",
        descripcion: "Una pieza romántica que transmite esperanza y gratitud. Su estilo inspirado en los años 50 crea una sensación cálida y reconfortante."
    },

    ellaBailaSola: {
        titulo: "Ella Baila Sola",
        imagen: "assets/img/clasificacion/ellabailasola.jpeg",
        song: "assets/audios/clasificacion/Ella Baila Sola.mp3",
        descripcion: "Una canción que proyecta confianza y admiración. Su ritmo pegadizo y su energía relajada la convierten en una experiencia agradable y optimista."
    },

    youSayRun: {
        titulo: "You Say Run",
        imagen: "assets/img/clasificacion/yousayrun.jpeg",
        song: "assets/audios/clasificacion/You Say Run.mp3",
        descripcion: "Una composición instrumental reconocida por inspirar valentía y motivación. Su progresión creciente transmite la sensación de superar obstáculos."
    },

    fallenDown: {
        titulo: "Fallen Down",
        imagen: "assets/img/clasificacion/fallendown.jpeg",
        song: "assets/audios/clasificacion/Undertale OST - fallen down (slowed  reverb).mp3",
        descripcion: "Una melodía tranquila y emotiva que despierta sentimientos de nostalgia, paz y conexión emocional. Es una de las piezas más recordadas de Undertale."
    },

    mayonesa: {
        titulo: "Mayonesa",
        imagen: "assets/img/clasificacion/mayonesa.jpeg",
        song: "assets/audios/clasificacion/Mayonesa.mp3",
        descripcion: "Una canción alegre y divertida que invita al movimiento y al buen humor. Su ritmo festivo la convierte en una fuente inmediata de energía positiva."
    }
};


function mostrarCancion(id) {

    const cancion = cancionesInfo[id];

    document.getElementById("tituloModal").textContent =
        cancion.titulo;

    document.getElementById("imagenModal").src =
        cancion.imagen;

    document.getElementById('cancionModal').src = cancion.song;

    document.getElementById("descripcionModal").textContent =
        cancion.descripcion;

    document.getElementById("modalCancion").style.display =
        "flex";
    
    document.getElementById('cancionModal').play();
}

function cerrarModal() {
    document.getElementById('cancionModal').pause();
    document.getElementById('cancionModal').currentTime = 0;

    document.getElementById("modalCancion").style.display =
        "none";
}



// creacion de las tablas --> chamucolandia
let canciones = JSON.parse(localStorage.getItem("canciones")) || [];

function agregarCancion() {
    const cancion = document.getElementById('nombre-cancion').value.trim();
    const artista = document.getElementById('nombre-artista').value.trim();
    const sentimiento = document.getElementById('eleccion-sentimiento').value;

    if (!cancion || !artista || !sentimiento) {
        alert('Por favor completa todos los campos.');
        return;
    }

    canciones.push({ cancion, artista, sentimiento });
    localStorage.setItem("canciones", JSON.stringify(canciones));

    renderTabla();

    document.getElementById('nombre-cancion').value = '';
    document.getElementById('nombre-artista').value = '';
    document.getElementById('eleccion-sentimiento').value = '';
}

function eliminarCancion(indice) {
    canciones.splice(indice, 1);
    localStorage.setItem("canciones", JSON.stringify(canciones));
    renderTabla();
}
function renderTabla() {
    const tbody = document.getElementById('tabla-body');
    if (canciones.length === 0) {
        tbody.innerHTML = `
            <tr>
                <td colspan="5"><tr><td colspan="5"><div class="vacio"><div class="simbolo_vacio">?</div><div><em>"La música es un mantra, debes dejarla fluir. No se trata de cuántas canciones puedas sacar, sino de cuánto corazón y alma pongas en cada una de ellas."<em></em><br><br>
                                -Michael Jackson</div></div></td></tr></td>
            </tr>
        `;
        return;
    }

    let filas = "";

    canciones.forEach((cancion, indice) => {

        filas += `
            <tr>
                <td style="color:var(--gris-texto)">${indice + 1}</td>
                <td style="color:var(--gris-texto)">${cancion.cancion}</td>
                <td style="color:var(--gris-texto)">${cancion.artista}</td>
                <td style="color:var(--gris-texto)">${cancion.sentimiento}</td>
                <td style="color:var(--gris-texto)">
                    <button class="boton_eliminar" onclick="eliminarCancion(${indice})";>
                        Eliminar
                    </button>
                </td>
            </tr>
        `;

    });

    tbody.innerHTML = filas;
}

document.addEventListener("DOMContentLoaded", () => {
    renderTabla();
});
