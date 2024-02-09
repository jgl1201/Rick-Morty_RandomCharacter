# Documentación para Rick y Morty con Async Await y Promises

----

## Descripción

Este código HTML y JavaScript implementa una aplicación simple que utiliza Async Await y Promises para obtener y mostrar información aleatoria sobre personajes de la serie "Rick y Morty" desde la [Rick and Morty API](https://rickandmortyapi.com/).

----

## Estructura del Código

### HTML
El archivo HTML sigue la estructura básica y contiene elementos esenciales para la presentación de la información.

### JavaScript

El script se ejecuta después de que se ha cargado el DOM y se encarga de la lógica de la aplicación.

- Función principal: Se ejecuta al cargar el DOM y agrega un event listener al botón "Generar".

- Evento de click del botón "Generar": Se activa al hacer clic en el botón. Llama a la función `obtenerPersonajeAleatorio` utilizando Async Await y maneja la respuesta para mostrar la información del personaje en la página.

- Función `obtenerPersonajeAleatorio`: Utiliza Async Await y Promises para obtener información aleatoria sobre un personaje desde la API. Maneja errores y retorna el objeto del personaje.

- Función `mostrarInformacionPersonaje`: Actualiza la interfaz de usuario con la información del personaje, incluida la imagen y el nombre con su identificación.

### Estilos

Se hace referencia a un archivo de estilo externo (`styles.css`) que no se proporciona en el código proporcionado. Los estilos pueden personalizarse según las preferencias del desarrollador.

---

## Uso

1. Abre el archivo HTML en un navegador web.

2. Pulsa el botón "Generar" para obtener información aleatoria sobre un personaje de "Rick y Morty".

3. La imagen y el nombre del personaje se mostrarán en la página.

---

## Recursos Externos
- Rick and Morty API: Se utiliza para obtener datos aleatorios sobre los personajes. El código hace uso de las funciones `fetch` y maneja Promises para gestionar las solicitudes a la API.

---

## Notas Importantes
- El código utiliza `DOMContentLoaded` para asegurarse de que el script se ejecute después de que se haya cargado el DOM.

- Se manejan errores durante las solicitudes a la API para proporcionar una experiencia de usuario más robusta.


__¡Disfruta explorando el multiverso de Rick y Morty!__