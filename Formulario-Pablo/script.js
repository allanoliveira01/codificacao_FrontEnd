
const entrar = document.getElementById("form-conteudo")
const msgNome = document.querySelector(".msgNome")
const msgSNome = document.querySelector(".msgSNome")
const msgEmail = document.querySelector(".msgEmail")
const msgSenha = document.querySelector(".msgSenha")

entrar.addEventListener("submit", (event) => {
    event.preventDefault();

    if (nome.value === "") {
        nome.style.borderColor = "red";
        msgNome.textContent = "First Name cannot be empty"

    } else {
        nome.style.borderColor = "";
        msgNome.textContent = ""
    }

    if (sNome.value === "") {
        sNome.style.borderColor = "red";
        msgSNome.textContent = "Last Name cannot be empty"
    } else {
        sNome.style.borderColor = "";
        msgSNome.textContent = ""
    }

    if (email.value === "") {
        email.style.borderColor = "red";
        msgEmail.textContent = "Looks like this is not an email"
    } else {
        email.style.borderColor = "";
        msgEmail.textContent = "";
    }

    if (senha.value === "") {
        senha.style.borderColor = "red";
        msgSenha.textContent = "Password cannot be empty"
    } else {
        senha.style.borderColor = "";
        msgSenha.textContent = ""
    }
})