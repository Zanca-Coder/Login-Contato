function validaContato() {
    var nome = formContato.txtNome.value;
    var sobrenome = formContato.txtSobrenome.value;
    var nasc = formContato.txtDataNasc.value;
    var rg = formContato.txtRG.value;
    var sex = formContato.selSex.value;
    var cep = formContato.txtCEP.value;
    var end = formContato.txtEnd.value;
    var nmr = formContato.txtN.value;
    var bairro = formContato.txtBairro.value;
    var comp = formContato.txtComplemento.value;
    var cid = formContato.txtCid.value;
    var est = formContato.selEst.value;
    var tel = formContato.txtTel.value;
    var cel = formContato.txtCel.value;

    if (nome == "") {
        alert('Insira o Nome!');
        formContato.txtNome.focus();
        return false;
    }

    if (sobrenome == "") {
        alert('Insira o Sobrenome!');
        formContato.txtSobrenome.focus();
        return false;
    }

    if (nasc == "") {
        alert('Insira a Data de Nascimento!');
        formContato.txtDataNasc.focus();
        return false;
    }

    if (rg == "") {
        alert('Insira o RG!');
        formContato.txtRG.focus();
        return false;
    }

    if (sex == "") {
        alert('Insira o Sexo!');
        formContato.selSex.focus();
        return false;
    }

    if (cep == "") {
        alert('Insira o CEP!');
        formContato.txtCEP.focus();
        return false;
    }

    if (end == "") {
        alert('Insira o Endereço');
        formContato.txtEnd.focus();
        return false;
    }

    if (nmr == "") {
        alert('Insira o Número da sua casa!')
        formContato.txtN.focus();
        return false;
    }

    if (bairro == "") {
        alert('Insira o Bairro!')
        formContato.txtBairro.focus();
        return false;
    }

    if (comp == "") {
        alert('Insira o Complemento do seu Endereço! Ex: Apartamento, Fundos, etc.');
        formContato.txtComplemento.focus();
        return false;
    }

    if (cid == "") {
        alert('Insira a Cidade!');
        formContato.txtCid.focus();
        return false;
    }

    if (est == "") {
        alert('Insira o Estado!');
        formContato.selEst.focus();
        return false;
    }

    if (tel == "") {
        alert('Insira o Telefone!');
        formContato.txtTel.focus();
        return false;
    }

    if (cel == "") {
        alert('Insira o Celular!');
        formContato.txtCel.focus();
        return false;

    }

    alert('Dados de Contato Cadastrados com Sucesso!')

}

let button = document.querySelector('#btnFinaliza');

button.addEventListener('click', () => {
    validaContato();
});