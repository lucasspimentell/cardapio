function comprar(botao) { /*   função com parametro do botão para que o botão clicado seja acionado aqui e assim ativar as funçôes*/


     if (botao.value == "comprar") {

          botao.value = "Adicionado";
          botao.style.background = "limegreen";
          if(botao.value == "Adicionado"){
             alert("Adionado ao carrinho");
          }


     } else {

          botao.value = "comprar";
          botao.style.background = "#ee8610";
     }


}
