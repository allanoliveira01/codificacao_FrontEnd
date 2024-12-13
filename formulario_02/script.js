function validator() {
    const name = document.querySelector("#fname"); //So quando for ID
    const lastName = document.querySelector("#lname");
    const messageErro = document.querySelector(".message-erro")
    const email = document.querySelector("#email");
    const mensagem = document.querySelector("#message")
    

    const nameValue = name.value;
    const lastNameValue = lname.value;
    const emailValue = email.value;
    const mensagemValue = message.value;
    const terminalValue = term.value;



    if (nameValue === "") {
            name.classList.add("erro")
            messageErro.textContent = "This field is required"

    }

    if (lastNameValue === "") {
        lastName.classList.add("erro")
        document.querySelector(".erro-sobrenome").textContent = "This field is required";
    }
    if (emailValue === "") {
        email.classList.add("erro")
        document.querySelector(".erro-email").textContent = "This field is required";
    }
    if (mensagemValue === "") {
        mensagem.classList.add("erro")
        document.querySelector(".erro-mensagem").textContent = "This field is required";
    }
}


