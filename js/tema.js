export function inicializarTemas() {

    const botaoEscuro = document.getElementById("btn-tema-escuro");
    const botaoContraste = document.getElementById("btn-alto-contraste");
    const botaoNormal = document.getElementById("btn-tema-normal");

    function aplicarTema(tema) {

        if (tema === "normal") {
            document.documentElement.removeAttribute("data-tema");
        } else {
            document.documentElement.setAttribute(
                "data-tema",
                tema
            );
        }

        localStorage.setItem("tema", tema);
    }

    if (botaoEscuro) {
        botaoEscuro.addEventListener("click", function () {
            aplicarTema("escuro");
        });
    }

    if (botaoContraste) {
        botaoContraste.addEventListener("click", function () {
            aplicarTema("alto-contraste");
        });
    }

    if (botaoNormal) {
        botaoNormal.addEventListener("click", function () {
            aplicarTema("normal");
        });
    }

    const temaSalvo = localStorage.getItem("tema");

    if (temaSalvo) {
        aplicarTema(temaSalvo);
    }
}