const group = document.getElementById('carouselGroup');
const prevBtn = document.querySelector('.nav.prev');
const nextBtn = document.querySelector('.nav.next');

let cardWidth = 220; // 200px + 20px margin
let visibleCards = 5; // quantos aparecem por clique
let totalCards = group.children.length;
let position = 0;

// Duplicar cartões para criar loop infinito
group.innerHTML += group.innerHTML;
totalCards = group.children.length;

function moveCarousel(direction) {
  position += direction * visibleCards * cardWidth;
  group.style.transition = 'transform 0.5s ease';
  group.style.transform = `translateX(-${position}px)`;

  setTimeout(() => {
    const half = totalCards / 2;

    // Se passar da metade, reset instantâneo
    if (position >= half * cardWidth) {
      position -= half * cardWidth;
      group.style.transition = 'none';
      group.style.transform = `translateX(-${position}px)`;
    } else if (position < 0) {
      position += half * cardWidth;
      group.style.transition = 'none';
      group.style.transform = `translateX(-${position}px)`;
    }
  }, 500); // tempo da transição
}

// Eventos dos botões
nextBtn.addEventListener('click', () => moveCarousel(1));
prevBtn.addEventListener('click', () => moveCarousel(-1));

const group1 = document.getElementById('carouselGroup1');
const prevBtn1 = document.querySelector('.nav.prev1');
const nextBtn1 = document.querySelector('.nav.next1');

let cardWidth1 = 220; // 200px + 20px margin
let visibleCards1 = 5; // quantos aparecem por clique
let totalCards1 = group1.children.length;
let position1 = 0;

// Duplicar cartões para criar loop infinito
group1.innerHTML += group1.innerHTML;
totalCards1 = group1.children.length;

function moveCarousel1(direction1) {
  position1 += direction1 * visibleCards1 * cardWidth1;
  group1.style.transition = 'transform 0.5s ease';
  group1.style.transform = `translateX(-${position1}px)`;

  setTimeout(() => {
    const half1 = totalCards1 / 2;

    // Se passar da metade, reset instantâneo
    if (position1 >= half1 * cardWidth1) {
      position1 -= half1 * cardWidth1;
      group1.style.transition = 'none';
      group1.style.transform = `translateX(-${position1}px)`;
    } else if (position1 < 0) {
      position1 += half1 * cardWidth1;
      group1.style.transition = 'none';
      group1.style.transform = `translateX(-${position1}px)`;
    }
  }, 500); // tempo da transição
}

// Eventos dos botões
nextBtn1.addEventListener('click', () => moveCarousel1(1));
prevBtn1.addEventListener('click', () => moveCarousel1(-1));

// Função principal de busca (corrigida: sem scroll automático)
function fazerBusca(ativarScroll = false) {  // Parâmetro opcional para scroll só quando chamado manualmente
  const termoBusca = document.getElementById('procurar').value.toLowerCase().trim();  // Pega texto e converte para minúsculo
  const cards = document.querySelectorAll('.card');  // Todos os cards da página
  const noResults = document.querySelector('.no-results') || criarNoResults();  // Mensagem de erro
  let encontrou = false;

  cards.forEach(card => {
      const titulo = card.querySelector('h6')?.textContent.toLowerCase() || '';
      const autor = card.querySelector('p')?.textContent.toLowerCase() || '';  // Primeiro <p> é autor
      const descricao = card.querySelectorAll('p')[1]?.textContent.toLowerCase() || '';  // Segundo <p> é gênero/ano

      // Verifica se o termo está no título, autor ou descrição
      if (titulo.includes(termoBusca) || autor.includes(termoBusca) || descricao.includes(termoBusca)) {
          card.style.display = 'flex';  // Mostra o card
          encontrou = true;
      } else {
          card.style.display = 'none';  // Oculta o card
      }
  });

  // Mostra/esconde mensagem de "nenhum resultado"
  if (termoBusca === '') {
      noResults.style.display = 'none';  // Limpa se input vazio
      cards.forEach(card => card.style.display = 'flex');  // Mostra todos
  } else if (!encontrou) {
      noResults.style.display = 'block';
  } else {
      noResults.style.display = 'none';
  }

  // Scroll suave SÓ se ativado manualmente (ex: Enter ou clique no botão)
  if (ativarScroll && encontrou && termoBusca !== '') {
      document.querySelector('#destaques').scrollIntoView({ behavior: 'smooth' });
  }
}

// Função auxiliar: Cria a mensagem de "nenhum resultado" se não existir
function criarNoResults() {
  const noResults = document.createElement('div');
  noResults.className = 'no-results';
  noResults.textContent = 'Nenhum livro encontrado. Tente outro termo!';
  document.querySelector('main').insertBefore(noResults, document.querySelector('.carousel-wrapper'));  // Insere no topo do main
  return noResults;
}

// Event listeners: Busca ao digitar (tempo real, SEM scroll) ou Enter (COM scroll opcional)
document.getElementById('procurar').addEventListener('input', function() {
  fazerBusca(false);  // Busca enquanto digita, mas sem scroll
});

document.getElementById('procurar').addEventListener('keypress', function(e) {
  if (e.key === 'Enter') {
      fazerBusca(true);  // Busca ao pressionar Enter, COM scroll para resultados
  }
});

// Se você tem onclick no botão da lupa (ex: onclick="fazerBusca(true)"), isso ativa o scroll só no clique

window.addEventListener('load', () => {
  registerSW()
})
async function registerSW() {
  if ('serviceWorker' in navigator) {
    try {
      await navigator.serviceWorker.register('./sw.js');
    }
    catch (e) {
      console.log('SW registration failed');
    }
  }
}