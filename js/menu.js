const botaoMenu = document.querySelector(".titulo-menu a");
const listaLinks = document.querySelector(".links-menu");

botaoMenu.addEventListener("click", function (event) {

    /*anulndo comportamento padrao de recarregar pagina*/
    event.preventDefault();
    listaLinks.classList.toggle("aberto");

    if (listaLinks.classList.contains("aberto")) {
        botaoMenu.innerHTML = "fechar &times;";
    }



    else { botaoMenu.innerHTML = "menu &equiv;" }
});
