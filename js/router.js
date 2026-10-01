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

    } else if (rota === "/projeto") {
        app.innerHTML = templateProjetos();

    } else if (rota === "/cadastro") {
        app.innerHTML = templateCadastro();

        // Inicializa as máscaras e o formulário
        inicializarFormulario();

    } else {
        console.warn(`Rota não encontrada: ${rota}`);
        app.innerHTML = templateInicio();
    }
}