let slideIndex = 0;
const slides = document.querySelectorAll(".slider-container img");
let currentSlide = 0;

// Função para mostrar o slide
function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove("active");
        if (i === index) {
            slide.classList.add("active");
        }
    });
}

// Próximo slide
function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

// Mudar automaticamente a cada 5 segundos
setInterval(nextSlide, 5000);

// Mostrar o primeiro slide inicialmente
showSlide(currentSlide);

// Definindo o elemento para o botão anterior
const prev = document.querySelector('.prev'); // Supondo que você tenha um elemento com a classe 'prev'

prev.addEventListener("click", () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length; // Volta para o slide anterior
    showSlide(currentSlide);
});

// Variável para armazenar o índice da imagem atual
let currentImageIndex = 0;
const images = document.querySelectorAll(".galeria-item img"); // Seleciona todas as imagens da galeria
const lightbox = document.getElementById("lightbox");
const lightboxImagem = document.getElementById("imagem-ampliada");
const fechar = document.querySelector(".fechar");

// Função para abrir a imagem no lightbox
function abrirImagem(src, index) {
    lightboxImagem.src = src; // Define o src da imagem clicada
    lightbox.style.display = "flex"; // Exibe o lightbox
    currentImageIndex = index; // Armazena o índice da imagem atual
}

// Função para fechar o lightbox
function fecharImagem() {
    lightbox.style.display = "none"; // Oculta o lightbox
}

// Função para mudar a imagem
function mudarImagem(direcao) {
    currentImageIndex += direcao;

    // Verifica se o índice está fora dos limites
    if (currentImageIndex < 0) {
        currentImageIndex = images.length - 1; // Vai para a última imagem
    } else if (currentImageIndex >= images.length) {
        currentImageIndex = 0; // Vai para a primeira imagem
    }

    // Atualiza a imagem ampliada
    lightboxImagem.src = images[currentImageIndex].src; // Atualiza o src da imagem ampliada
}

// Adiciona evento de clique no fundo do lightbox para fechá-lo
lightbox.addEventListener("click", fecharImagem);

// Eventos de teclado para navegação
document.addEventListener("keydown", function(event) {
    if (lightbox.style.display === "flex") {
        event.preventDefault(); // Impede o comportamento padrão das teclas
        if (event.key === "ArrowRight") {
            mudarImagem(1); // Muda para a próxima imagem
        } else if (event.key === "ArrowLeft") {
            mudarImagem(-1); // Muda para a imagem anterior
        } else if (event.key === "Escape") {
            fecharImagem(); // Fecha o lightbox ao pressionar "Escape"
        }
    }
});

// Se o botão "prev" estiver presente, adiciona evento de clique
if (prev) {
    prev.addEventListener("click", () => {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length; // Volta para o slide anterior
        showSlide(currentSlide);
    });
}

// Mostrar o primeiro slide inicialmente
showSlide(currentSlide);
