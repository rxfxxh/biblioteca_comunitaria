// Garante que o DOM está carregado antes de adicionar o evento
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("myButton").addEventListener("click", function () {
        alert("Samuel da tribo indigena");
    });
});