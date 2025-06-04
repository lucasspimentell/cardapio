function comprar() {
    var carro = document.getElementById("carrinho");
    var sabor = document.getElementsByName("radsabor");

   
    var saborpizz = ''
    var img = document.createElement('img')
    img.setAttribute('id','foto')

    if (sabor[0].checked) {
        saborpizz = 'calabresa'
        img.setAttribute('src', 'img/calabresa.png')

    } else if (sabor[1].checked) {
        saborpizz = 'mussarela'
        img.setAttribute('src','img/mussarela.png')

    } else if (sabor[2].checked) {
        saborpizz = 'presunto'
        img.setAttribute('src','img/presunto.png')
    }

    carro.innerHTML = saborpizz
    carro.appendChild(img)

}
