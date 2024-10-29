const btnMudar = document.querySelector('.btn-mudar')
const btnMudar1 = document.querySelector('.btn-mudar-1')
const btnMudar2 = document.querySelector('.btn-mudar-2')
const btnMudar3 = document.querySelector('.btn-mudar-3')
const btnMudar4 = document.querySelector('.btn-mudar-4')
const btnMudar5 = document.querySelector('.btn-mudar-5')
const btnMudar6 = document.querySelector('.btn-mudar-6')
const btnMudar7 = document.querySelector('.btn-mudar-7')
const btnMudar8 = document.querySelector('.btn-mudar-8')
const btnMudar9 = document.querySelector('.btn-mudar-9')
const btnMudar10 = document.querySelector('.btn-mudar-10')
const btnEstatico = document.querySelector('.btn-estatico')
const containerPrincipal = document.querySelector('.container-principal')
const mensagemFinal = document.querySelector('.mensagem-final')
const popup = document.getElementById('popup');
const closeBtn = document.querySelector('.close-btn');

// Fecha o pop-up quando o botão de fechar é clicado
closeBtn.addEventListener('click', () => {
    popup.style.display = 'none';
});

btnMudar.addEventListener('click', () => {
    btnMudar.style.display = 'none'
    btnMudar1.style.display = 'block'
})

btnMudar1.addEventListener('click', () => {
    btnMudar1.style.display = 'none'
    btnMudar2.style.display = 'block'
})

btnMudar2.addEventListener('click', () => {
    btnMudar2.style.display = 'none'
    btnMudar3.style.display = 'block'
})

btnMudar3.addEventListener('click', () => {
    btnMudar3.style.display = 'none'
    btnMudar4.style.display = 'block'
    popup.style.display = 'flex'; 
})

btnMudar4.addEventListener('click', () => {
    btnMudar4.style.display = 'none'
    btnMudar5.style.display = 'block'
})

btnMudar5.addEventListener('click', () => {
    btnMudar5.style.display = 'none'
    btnMudar6.style.display = 'block'
})

btnMudar6.addEventListener('click', () => {
    btnMudar6.style.display = 'none'
    btnMudar7.style.display = 'block'
})

btnMudar7.addEventListener('click', () => {
    btnMudar7.style.display = 'none'
    btnMudar8.style.display = 'block'
})

btnMudar8.addEventListener('click', () => {
    btnMudar8.style.display = 'none'
    btnMudar9.style.display = 'block'
})

btnMudar9.addEventListener('click', () => {
    btnMudar9.style.display = 'none'
    btnMudar10.style.display = 'block'
})

btnMudar10.addEventListener('click', () => {
    btnMudar10.style.display = 'none'
    btnMudar1.style.display = 'block'
})

btnEstatico.addEventListener('click', () => {
    containerPrincipal.style.display = 'none'
    btnMudar1.style.display = 'none'
    btnMudar2.style.display = 'none'
    btnMudar3.style.display = 'none'
    btnMudar4.style.display = 'none'
    btnMudar5.style.display = 'none'
    btnMudar6.style.display = 'none'
    btnMudar7.style.display = 'none'
    btnMudar8.style.display = 'none'
    btnMudar9.style.display = 'none'
    btnMudar10.style.display = 'none'
    mensagemFinal.style.display = 'flex'
})

// Fecha o pop-up quando clicar fora do conteúdo
window.addEventListener('click', (event) => {
    if (event.target === popup) {
        popup.style.display = 'none';
    }
});