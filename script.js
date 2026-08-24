// Script de Reacciones Y2K URSS

// Las reacciones se guardan solo localmente (LocalStorage) 
// por ser un sitio 100% estático por ahora.
// Para compartirlas, necesitarías un backend (como Supabase/Giscus)

const reactions = {
    like: document.getElementById('like-count'),
    fire: document.getElementById('fire-count'),
    vote: document.getElementById('vote-count')
};

// Cargar conteos guardados al iniciar
document.addEventListener('DOMContentLoaded', () => {
    for (const key in reactions) {
        let count = localStorage.getItem(`${key}_count`);
        if (!count) { count = 0; }
        reactions[key].innerText = count;
    }
});

function react(type) {
    // 1. Obtener conteo actual
    let currentCount = parseInt(reactions[type].innerText);
    // 2. Incrementar
    currentCount++;
    // 3. Guardar en LocalStorage (Solo tu navegador)
    localStorage.setItem(`${type}_count`, currentCount);
    // 4. Actualizar la interfaz
    reactions[type].innerText = currentCount;

    // Efecto visual Y2K temporal al reaccionar
    event.target.style.transform = "scale(1.1)";
    event.target.style.background = "#FF00FF";
    setTimeout(() => {
        event.target.style.transform = "scale(1.0)";
        event.target.style.background = "black";
    }, 150);
}
