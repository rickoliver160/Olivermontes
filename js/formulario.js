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
        });
    }

    if (telefone) {
        telefone.addEventListener("input", function () {
            this.value = mascaraTelefone(this.value);
        });
    }

    if (cep) {
        cep.addEventListener("input", function () {
            this.value = mascaraCEP(this.value);
        });
    }

    if (formulario) {
        formulario.addEventListener("submit", function (event) {

            event.preventDefault();

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

            mostrarToast("Cadastro realizado com sucesso!");

            formulario.reset();
        });
    }
}function mostrarToast(mensagem) {
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