export function salvarCadastro(dados) {

    localStorage.setItem(
        "cadastroOlivermontes",
        JSON.stringify(dados)
    );

}


export function obterCadastro() {

    const dados =
        localStorage.getItem(
            "cadastroOlivermontes"
        );


    return dados
        ? JSON.parse(dados)
        : null;

}


export function removerCadastro() {

    localStorage.removeItem(
        "cadastroOlivermontes"
    );

}