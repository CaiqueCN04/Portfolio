var nome = prompt("Seja bem vindo, qual o seu nome?");

document.getElementById("nomeVisitante").textContent = nome;

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const nav = document.querySelector('nav');
    const navHeight = nav.offsetHeight;
    const sections = document.querySelectorAll('section');

    window.addEventListener('scroll', () => {
        if (window.scrollY >= navHeight) {
            nav.classList.add('fixed');
        } else {
            nav.classList.remove('fixed');
        }

        // Atualiza o link ativo na navegação com base na seção visível
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= sectionTop - sectionHeight / 3) {
                current = section.getAttribute('id');
            }
        });

        document.querySelectorAll('nav a').forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').slice(1) === current) {
                link.classList.add('active');
            }
        });
    });
});


// Seleciona a barra de navegação
const navbar = document.getElementById('navbar');

// Adiciona um evento de rolagem à janela
window.onscroll = () => {
    // Verifica a posição atual da rolagem
    if (window.scrollY > 100) {
        // Se a posição for maior que 50px do topo, adiciona a classe 'scrolled'
        navbar.classList.add('scrolled');
    } else {
        // Caso contrário, remove a classe 'scrolled'
        navbar.classList.remove('scrolled');
    }
};
