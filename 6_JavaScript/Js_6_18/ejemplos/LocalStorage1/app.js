// Obtener el botón de estilo claro y oscuro
const botonClaro = document.getElementById('boton-claro');
const botonOscuro = document.getElementById('boton-oscuro');

// Obtener el elemento de estilo CSS
const estiloCSS = document.getElementById('estilo-css');

// Verificar si hay una preferencia de estilo guardada en localStorage
const preferenciaEstilo = localStorage.getItem('estilo');

// Aplicar la preferencia de estilo guardada (si existe)
if (preferenciaEstilo) {
    estiloCSS.href = preferenciaEstilo;
}

// Manejar el evento de clic en el botón de estilo claro
botonClaro.addEventListener('click', () => {
    // Cambiar el estilo del enlace de estilo CSS
    estiloCSS.href = 'estilo-claro.css';

    // Guardar la preferencia de estilo en localStorage
    localStorage.setItem('estilo', 'estilo-claro.css');
});

// Manejar el evento de clic en el botón de estilo oscuro
botonOscuro.addEventListener('click', () => {
    // Cambiar el estilo del enlace de estilo CSS
    estiloCSS.href = 'estilo-oscuro.css';

    // Guardar la preferencia de estilo en localStorage
    localStorage.setItem('estilo', 'estilo-oscuro.css');
});
