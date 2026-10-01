import { navegar } from "./router.js";
import { inicializarTemas } from "./tema.js";

document.querySelectorAll("[data-rota]").forEach(link => {

    link.addEventListener("click", function (event) {

        event.preventDefault();

        navegar(this.dataset.rota);

    });

});

navegar("/");
inicializarTemas();