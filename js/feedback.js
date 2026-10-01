export function inicializarFeedback() {

    const modal =
        document.querySelector(".modal");


    const abrir =
        document.querySelector(".abrir-modal");


    const fechar =
        document.querySelector(".fechar-modal");


    if (abrir && modal) {

        abrir.addEventListener(
            "click",
            function () {

                modal.showModal();

            }
        );

    }


    if (fechar && modal) {

        fechar.addEventListener(
            "click",
            function () {

                modal.close();

            }
        );

    }

}