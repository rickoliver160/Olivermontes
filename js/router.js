import {
    templateInicio,
    templateProjetos,
    templateCadastro
} from "./templates.js";

import { inicializarFormulario } from "./formulario.js";

const app = document.getElementById("app");

export function navegar(rota) {

    if (!app) {
        console.error("Elemento #app não encontrado.");
        return;
    }

    if (rota === "/") {
        app.innerHTML = templateInicio();
    }

    if (rota === "/projeto") {
        app.innerHTML = templateProjetos();
    }

    if (rota === "/cadastro") {
        app.innerHTML = templateCadastro();

        // Inicializa as máscaras e o formulário
        inicializarFormulario();
    }
}