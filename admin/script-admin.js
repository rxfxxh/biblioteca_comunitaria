// Função para mostrar a seção correspondente
function showSection(sectionId) {
    // Ocultar todas as seções
    const sections = document.querySelectorAll('.conteudo section');
    sections.forEach(section => section.classList.remove('active'));
    
    // Mostrar a seção clicada
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add('active');
    }
}

// Adicionar event listeners aos links da sidebar
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('.sidebar a');
    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Evita o comportamento padrão de âncora
            const sectionId = this.getAttribute('href').substring(1); // Remove o '#'
            showSection(sectionId);
        });
    });
    
    // Mostrar a seção padrão (Dashboard) ao carregar a página
    showSection('dashboard');
});