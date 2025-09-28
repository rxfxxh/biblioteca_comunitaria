let codigoGerado;

    document.getElementById("loginForm").addEventListener("submit", function(e){
        e.preventDefault();
        
        // Simulação do envio do código
        codigoGerado = Math.floor(100000 + Math.random() * 900000);
        alert("Código enviado: " + codigoGerado);

        document.getElementById("loginForm").style.display = "none";
        document.getElementById("verificacao").style.display = "block";
    });

    function verificarCodigo(){
        const codigoUsuario = document.getElementById("codigo2fa").value;
        if(codigoUsuario == codigoGerado){
            alert("Login autorizado!");
        } else {
            alert("Código inválido!");
        }
    }