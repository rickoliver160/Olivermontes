import {
    mascaraCPF,
    mascaraTelefone,
    mascaraCEP
} from "./mascaras.js";

import {
    salvarCadastro
} from "./storage.js";

export function inicializarFormulario() {

    const cpf = document.getElementById("cpf");
    const telefone = document.getElementById("telefone");
    const cep = document.getElementById("cep");
    const formulario = document.querySelector("form");

    if (cpf) {
        cpf.addEventListener("input", function () {
            this.value = mascaraCPF(this.value);
            limparErro(this);
        });
    }

    if (telefone) {
        telefone.addEventListener("input", function () {
            this.value = mascaraTelefone(this.value);
            limparErro(this);
        });
    }

    if (cep) {
        cep.addEventListener("input", function () {
            this.value = mascaraCEP(this.value);
            limparErro(this);
        });
    }

    if (formulario) {

        formulario.addEventListener("submit", function (event) {

            event.preventDefault();

            const campos = [
                "nome",
                "cpf",
                "nascimento",
                "email",
                "telefone",
                "endereco",
                "cidade",
                "estado",
                "cep"
            ];

            let formularioValido = true;
            let primeiroCampoComErro = null;

            campos.forEach(id => {

                const campo = document.getElementById(id);

                if (!campo) {
                    return;
                }

                if (!campo.value.trim()) {

                    mostrarErro(
                        campo,
                        "Este campo é obrigatório."
                    );

                    formularioValido = false;

                    if (!primeiroCampoComErro) {
                        primeiroCampoComErro = campo;
                    }

                } else {

                    limparErro(campo);
                }
            });

            if (!formularioValido) {

                mostrarToast(
                    "Verifique os campos obrigatórios."
                );

                if (primeiroCampoComErro) {
                    primeiroCampoComErro.focus();
                }

                return;
            }

            const dados = {
                nome: document.getElementById("nome").value,
                cpf: document.getElementById("cpf").value,
                nascimento: document.getElementById("nascimento").value,
                email: document.getElementById("email").value,
                telefone: document.getElementById("telefone").value,
                endereco: document.getElementById("endereco").value,
                cidade: document.getElementById("cidade").value,
                estado: document.getElementById("estado").value,
                cep: document.getElementById("cep").value
            };

            salvarCadastro(dados);

            mostrarToast(
                "Cadastro realizado com sucesso!"
            );

            formulario.reset();

            campos.forEach(id => {

                const campo = document.getElementById(id);

                if (campo) {
                    limparErro(campo);
                }

            });
        });
    }
}


function mostrarErro(campo, mensagem) {

    campo.setAttribute("aria-invalid", "true");

    const idMensagem = campo.getAttribute("aria-describedby");

    if (!idMensagem) {
        return;
    }

    const mensagemElemento =
        document.getElementById(idMensagem);

    if (mensagemElemento) {
        mensagemElemento.textContent = mensagem;
    }
}


function limparErro(campo) {

    campo.setAttribute("aria-invalid", "false");

    const idMensagem = campo.getAttribute("aria-describedby");

    if (!idMensagem) {
        return;
    }

    const mensagemElemento =
        document.getElementById(idMensagem);

    if (mensagemElemento) {
        mensagemElemento.textContent = "";
    }
}


function mostrarToast(mensagem) {

    const toast = document.querySelector(".toast");

    if (!toast) {
        return;
    }

    toast.textContent = mensagem;
    toast.style.display = "block";

    setTimeout(() => {
        toast.style.display = "none";
    }, 3000);
}