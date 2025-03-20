
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            document.querySelectorAll('section').forEach(sec => {
                sec.style.display = 'none';
            });
            document.getElementById(targetId).style.display = 'block';
        });
    });

    // Mostrar 'Sobre Nós' por padrão ao carregar
    window.addEventListener('DOMContentLoaded', () => {
        document.querySelectorAll('section').forEach(sec => sec.style.display = 'none');
        document.getElementById('sobre').style.display = 'block';
    });
