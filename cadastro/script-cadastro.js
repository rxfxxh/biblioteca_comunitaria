document.getElementById("formCadastro").addEventListener("submit", function(event) {
    event.preventDefault(); // impede envio automático do form

    // Pega os valores
    const nome = document.getElementById("nome").value.trim();
    const cpf = document.getElementById("cpf").value.trim();
    const email = document.getElementById("email").value.trim();
    const senha = document.getElementById("senha").value;
    const confirmaSenha = document.getElementById("confirmaSenha").value;

    // Verifica campos vazios
    if (!nome || !cpf || !email || !senha || !confirmaSenha) {
        alert("Todos os campos devem ser preenchidos!");
        return;
    }

    if (cpf.length !== 11 || isNaN(cpf)) {
        alert("CPF inválido! Deve conter 11 números. Apenas números, sem pontos ou traços. ex: 12345678901");
        return;
    }
    // Verifica se as senhas são iguais
    if (senha !== confirmaSenha) {
        alert("As senhas não coincidem!");
        return;
    }

    // Se passou nas validações
    alert("Cadastro realizado com sucesso!");
    this.submit(); // envia o formulário
});