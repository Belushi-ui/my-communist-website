// script.js - Lógica de Reacciones Y2K URSS (Versión Arreglada)

const reactions = {
    like: document.getElementById('like-count'),
    fire: document.getElementById('fire-count'),
    vote: document.getElementById('vote-count')
};

// Cargar conteos guardados al iniciar (LocalStorage)
document.addEventListener('DOMContentLoaded', () => {
    for (const key in reactions) {
        if (reactions[key]) { // Verificar que el elemento exista
            let count = localStorage.getItem(`${key}_count`);
            if (!count) { count = 0; }
            reactions[key].innerText = count;
        }
    }
});

function react(type) {
    // 1. Obtener el elemento del contador y el botón que fue clickeado
    const countSpan = reactions[type];
    if (!countSpan) return; // Seguridad

    // El botón es el padre del contador que fue clickeado (event.target puede ser el span o el emoji)
    // Usamos event.currentTarget para asegurar que agarramos el botón entero.
    const button = event.currentTarget; 

    // 2. Incrementar lógica (Local)
    let currentCount = parseInt(countSpan.innerText);
    currentCount++;
    localStorage.setItem(`${type}_count`, currentCount);
    countSpan.innerText = currentCount;

    // 3. EFECTO VISUAL LIMPIO: Añadir la clase de "activado"
    button.classList.add('reaction-active');

    // 4. Quitar la clase después de 200ms (la duración de la animación CSS)
    setTimeout(() => {
        button.classList.remove('reaction-active');
    }, 200);
}
