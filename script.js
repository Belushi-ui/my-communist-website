const reactions = {
    like: document.getElementById('like-count'),
    fire: document.getElementById('fire-count'),
    vote: document.getElementById('vote-count')
};
document.addEventListener('DOMContentLoaded', () => {
    for (const key in reactions) {
        if (reactions[key]) {
            let count = localStorage.getItem(`${key}_count`);
            if (!count) { count = 0; }
            reactions[key].innerText = count;
        }
    }
});

function react(type) {
    const countSpan = reactions[type];
    if (!countSpan) return;
    const button = event.currentTarget; 
    let currentCount = parseInt(countSpan.innerText);
    currentCount++;
    localStorage.setItem(`${type}_count`, currentCount);
    countSpan.innerText = currentCount;
    button.classList.add('reaction-active');
    setTimeout(() => {
        button.classList.remove('reaction-active');
    }, 200);
}
