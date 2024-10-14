const formulario = document.querySelector("form")
const campoCep = formulario.querySelector("#cep")
const campoEndereco = formulario.querySelector("#endereco")
const campoBairro = formulario.querySelector("#bairro")
const campoCidade = formulario.querySelector("#cidade")
const campoEstado = formulario.querySelector("#estado")
const botaoBuscar = formulario.querySelector("#buscar")
const mensagemStatus = formulario.querySelector("#status")

botaoBuscar.addEventListener("click", function(){
   if(campoCep.value.length !== 9){

    mensagemStatus.textContent = "Digite o CEP valido";
    mensagemStatus.style.color = "purple";

    return;
   }

   let cepDigitado =campoCep.value;

   console.log(cepDigitado);
});
