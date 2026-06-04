const div = document.querySelector('div');

div.addEventListener('mouseover', () => {
    div.style.backgroundColor = 'deeppink';
});

div.addEventListener('mouseout', () => {
    div.style.backgroundColor = 'rebeccapurple';
})