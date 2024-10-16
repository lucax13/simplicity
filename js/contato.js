const formulario = document.querySelector("form");
const campoCep = formulario.querySelector("#cep");
const campoTelefone = formulario.querySelector("#telefone")
const campoEndereco = formulario.querySelector("#endereco");
const campoBairro = formulario.querySelector("#bairro");
const campoCidade = formulario.querySelector("#cidade");
const campoEstado = formulario.querySelector("#estado");
const botaoBuscar = formulario.querySelector("#buscar");
const mensagemStatus = formulario.querySelector("#status");

$(campoTelefone).mask("(00) 0000-0000");
$(campoCep).mask("00000-000");

botaoBuscar.addEventListener("click", async function(){
   if(campoCep.value.length !== 9){

    mensagemStatus.textContent = "Digite o CEP valido";
    mensagemStatus.style.color = "purple";

    return;
   }

   let cepDigitado =campoCep.value;

   console.log(cepDigitado);

// etapa 1 preparar a url contendo o cep a ser buscado

let url = `https://viacep.com.br/ws/${cepDigitado}/json/`;
console.log(url);

// etapa 2 acessar a api (com a url) e aguardar o retorno dela
const resposta = await fetch(url);
console.log(resposta);

// etapa 3 extrair os dados do reorno/resposta
const dados = await resposta.json();
console.log(dados);

// etapa 4 lidar com os dados (em caso de erro e sucesso)
if("erro" in dados){
   mensagemStatus.innerHTML = "CEP inesistente😌";
   mensagemStatus.style.color = "red";
}

else{
   mensagemStatus.innerHTML = "CEP encontrado😀";
   mensagemStatus.style.color = "blue";


   const campos = formulario.querySelectorAll(".campos-restantes");

// loop/laço de repetiçao para acessar cada campo selecionado

   for(const campo of campos){
      campo.classList.remove("campos-restantes");
   }

   campoEndereco.value = dados.logradouro;

   campoBairro.value = dados.bairro;

   campoCidade.value = dados.localidade;

   campoEstado.value = dados.uf;

}

// final do evento botao


});
