/* Função Validar */
function validaLogin() {
    // Pegando o valor dos inputs pelo id
    var cpf = formLogin.txtCpf.value;
    var email = formLogin.txtEmail.value;
    var confEmail = formLogin.txtConfirmaEmail.value;
    var senha = formLogin.txtSenha.value;
    var confSenha = formLogin.txtConfirmaSenha.value;


    if (cpf == "") {
        alert('Preencha o CPF!');
        formLogin.txtCpf.focus();
        return false;
    }

    if (email == "") {
        alert('Preencha o Email!');
        formLogin.txtEmail.focus();
        return false;
    }

    if (confEmail != email) {
        alert('Emails diferentes!');
        formLogin.txtConfirmaEmail.focus();
        return false;
    }

    if (senha == "") {
        alert('Preencha a Senha!');
        formLogin.txtSenha.focus();
        return false;
    }

    if (confSenha != senha) {
        alert('Senhas diferentes!');
        return false;
    }

    if (cpf.lenght < 11 ||
        cpf.lenght > 11 ||
        cpf == "00000000000" ||
        cpf == "11111111111" ||
        cpf == "22222222222" ||
        cpf == "33333333333" ||
        cpf == "44444444444" ||
        cpf == "55555555555" ||
        cpf == "66666666666" ||
        cpf == "77777777777" ||
        cpf == "88888888888" ||
        cpf == "99999999999"
    ) {
        alert('CPF não existente!');
        formLogin.txtCpf.focus();
        return false;
    }

    alert('Dados de Login Cadastrado com Sucesso!');
    window.location.href = "contato.html";

}

let button = document.querySelector("#btnContinua");

button.addEventListener('click', () => {
    validaLogin();

});