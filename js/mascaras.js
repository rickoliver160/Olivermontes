export function mascaraCPF(valor) {
    valor = valor.replace(/\D/g, "").substring(0, 11);

    valor = valor.replace(/(\d{3})(\d)/, "$1.$2");
    valor = valor.replace(/(\d{3})(\d)/, "$1.$2");
    valor = valor.replace(/(\d{3})(\d{1,2})$/, "$1-$2");

    return valor;
}

export function mascaraTelefone(valor) {
    valor = valor.replace(/\D/g, "").substring(0, 11);

    if (valor.length <= 10) {
        valor = valor.replace(/(\d{2})(\d)/, "($1) $2");
        valor = valor.replace(/(\d{4})(\d)/, "$1-$2");
    } else {
        valor = valor.replace(/(\d{2})(\d)/, "($1) $2");
        valor = valor.replace(/(\d{5})(\d)/, "$1-$2");
    }

    return valor;
}

export function mascaraCEP(valor) {
    valor = valor.replace(/\D/g, "").substring(0, 8);

    return valor.replace(/(\d{5})(\d)/, "$1-$2");
}