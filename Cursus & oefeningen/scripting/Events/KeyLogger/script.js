const p = document.createElement('p')
document.body.appendChild(p)

document.addEventListener('keydown', event => {
    p.textContent = event.key;
});