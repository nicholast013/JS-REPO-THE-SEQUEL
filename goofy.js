const canvas = document.getElementById('canvaas')
const button = document.getElementById('what')

const jsConfetti = new JSConfetti({ canvas })

setTimeout(() => {
    jsConfetti.addConfetti()
}, 500)

button.addEventListener('click', () => {
    jsConfetti.addConfetti()
})

window.addEventListener("load", (event) => {
    //setInterval(, 5000);
});
