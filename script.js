document.addEventListener('DOMContentLoaded', function () {
    const envelope = document.querySelector('.envelope');
    const audio = document.getElementById('weddingMusic');

    setTimeout(() => {
        envelope.classList.add('open');
        audio.play();
    }, 1000);  // Delay de 1 segundo para começar a animação
});
