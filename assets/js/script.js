// Script inicial (podemos adicionar animações depois)
console.log("ITU TECH - Site carregado com sucesso!");

// Aguarda o documento HTML ser completamente carregado
document.addEventListener("DOMContentLoaded", () => {

  // Opções para o nosso Intersection Observer
  const options = {
    root: null, // Observa em relação à viewport do navegador
    rootMargin: '0px',
    threshold: 0.1 // Ativa quando 10% do elemento estiver visível
  };

  // A função que será executada quando um elemento observado entrar na tela
  const handleIntersect = (entries, observer) => {
    entries.forEach(entry => {
      // Se o elemento está visível
      if (entry.isIntersecting) {
        // Adiciona a classe 'visible' para ativar a animação CSS
        entry.target.classList.add('visible');
        
        // Deixa de observar o elemento para a animação não se repetir
        observer.unobserve(entry.target);
      }
    });
  };

  // Cria o observador
  const observer = new IntersectionObserver(handleIntersect, options);

  // Seleciona todos os elementos que queremos animar
  const elementsToAnimate = document.querySelectorAll('.card, .btn');

  // Manda o observador observar cada um dos elementos
  elementsToAnimate.forEach(element => {
    observer.observe(element);
  });

});