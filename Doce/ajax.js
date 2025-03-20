   // Mostra a seção desejada e oculta as outras
   function mostrarSecao(id) {
    const secoes = document.querySelectorAll('main > section');
    secoes.forEach(secao => secao.style.display = 'none');
    const secaoAtiva = document.getElementById(id);
    secaoAtiva.style.display = 'block';

    // Anima imagem da seção
    const img = secaoAtiva.querySelector('img');
    if (img) {
        img.classList.remove('fade-effect');
        void img.offsetWidth; // Reinicia animação
        img.classList.add('fade-effect');
    }
}

// Troca de pratos no menu
let pratoAtual = 0;
const totalPratos = 3;

function mostrarPrato(index) {
    for (let i = 0; i < totalPratos; i++) {
        const prato = document.getElementById(`prato-${i}`);
        prato.classList.toggle('d-none', i !== index);
    }
}

function trocarPrato(direcao) {
    pratoAtual = (pratoAtual + direcao + totalPratos) % totalPratos;
    mostrarPrato(pratoAtual);
}

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    mostrarSecao('sobre');
    mostrarPrato(pratoAtual);

    // Adiciona evento aos links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const id = this.getAttribute('href').substring(1);
            mostrarSecao(id);
        });
    });
});