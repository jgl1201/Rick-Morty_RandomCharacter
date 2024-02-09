document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('generarBtn').addEventListener('click', async function() {
        try {
            const personaje = await obtenerPersonajeAleatorio();
            mostrarInformacionPersonaje(personaje);

            // Muestra el div después de cargar la imagen y el texto
            document.getElementById('contenido').classList.remove('oculto');
        } catch (error) {
            console.error('Error:', error);
        }
    });

    // Promise
    async function obtenerPersonajeAleatorio() {
        try {
            const respuesta = await fetch('https://rickandmortyapi.com/api/character/');
            const datos = await respuesta.json();
            const totalPersonajes = datos.info.count;
            const indiceAleatorio = Math.floor(Math.random() * totalPersonajes) + 1;
            const respuestaPersonaje = await fetch(`https://rickandmortyapi.com/api/character/${indiceAleatorio}`);
            const personaje = await respuestaPersonaje.json();
            return personaje;
        } catch (error) {
            console.error('Error al obtener personaje:', error);
            throw new Error('Error al obtener personaje');
        }
    }

    const mostrarInformacionPersonaje = (personaje) => {
        const imagenPersonaje = document.getElementById('imagenPersonaje');
        const nombreIdPersonaje = document.getElementById('nombreIdPersonaje');

        imagenPersonaje.src = personaje.image;
        nombreIdPersonaje.textContent = `${personaje.name} (ID: ${personaje.id})`;
    };
});