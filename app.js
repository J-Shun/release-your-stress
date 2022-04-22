// sound effect
let effect = 'break'
let audio = document.querySelector(`audio[data-key="${effect}"]`);
// audio.play();


const icons = document.querySelectorAll('.icon');
icons.forEach(icon => {
    icon.addEventListener('click', (e) => {
        for (child of e.target.parentNode.children) {
            child.classList.remove('click')
        }
        e.target.classList.add('click');
        effect = e.target.dataset.key;
        audio = document.querySelector(`audio[data-key="${effect}"]`);
    })
})


window.addEventListener('click', () => {
    audio.cloneNode().play();
})    