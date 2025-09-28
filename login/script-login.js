let codigoGerado;

document.getElementById("formLogin").addEventListener("submit", function(event){
    event.preventDefault();
    const email = document.getElementById("email").value.trim();
    const senha = document.getElementById("senha").value;
    if(!email || !senha){
        alert("Todos os campos devem ser preenchidos!");
        return;
    }
    else{
        alert("Login realizado com sucesso!");
    }
        
});
