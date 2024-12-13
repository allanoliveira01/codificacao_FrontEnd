const entrar = document.getElementById("form-conteudo");
const msgNome = document.querySelector(".msgNome");
const msgSobrenome = document.querySelector(".msgSobrenome");
const msgEmail = document.querySelector(".msgEmail");
const msgSenha = document.querySelector(".msgSenha");

entrar.addEventListener("submit", (event) => {
    event.preventDefault();

    // Validação para o campo Nome
    if (nome.value === "") {
        nome.classList.add("erro");  // Adiciona a classe "erro" para a borda vermelha
        msgNome.textContent = "First Name cannot be empty";
    } else {
        nome.classList.remove("erro");  // Remove a classe "erro"
        msgNome.textContent = "";
    }

    // Validação para o campo Sobrenome
    if (sobrenome.value === "") {
        sobrenome.classList.add("erro");
        msgSobrenome.textContent = "Last Name cannot be empty";
    } else {
        sobrenome.classList.remove("erro");
        msgSobrenome.textContent = "";
    }

    // Validação para o campo Email
    if (email.value === "") {
        email.classList.add("erro");
        msgEmail.textContent = "Looks like this is not an email";
    } else {
        email.classList.remove("erro");
        msgEmail.textContent = "";
    }

    // Validação para o campo Senha
    if (senha.value === "") {
        senha.classList.add("erro");
        msgSenha.textContent = "Password cannot be empty";
    } else {
        senha.classList.remove("erro");
        msgSenha.textContent = "";
        if (submit) {
            alert("CADASTRADO COM SUCESSO!")
        }

    }
});
