function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var formAno = document.querySelector('input#ano')
    var res = document.querySelector('div#res')
    if (formAno.value.length == 0 || formAno.value > ano) { // verificar se o ano está vazio ou se é maior que o ano atual
        alert('[ERRO] Verifique os dados e tente novamente!')
    } else {

        var formSexo = document.getElementsByName('radsex')
        var idade = ano - Number(formAno.value) // o ano atual - o ano inserido
        var genero = ''
        var img = document.createElement('img') // Para criar um img dinamicamente, direto do Js, usamos o .createElement, que cria uma tag, nesse caso, uma tag img,
        img.setAttribute('id' , 'foto') // coloca um atributo id para foto, voce cria um img com id foto, como usado no HTML: <img id = 'foto'>

       if (formSexo[0].checked) { // .checked confere se a caixinha do sexo, nesse caso do 0, sexo masculino, esta marcada, e se sim, executa esse bloco de codigos
            genero = 'Homem'
            if (idade >= 0 && idade < 12) {
                img.setAttribute('src', 'fotocrianca-m.jpg') // essa linha funciona como um img no HTML: <img src = "fotocriancaH.jpg"> OU SEJA, ele define um atributo de imagem e pelo SRC procura a imagem descrita.
            } else if (idade < 21) {
                img.setAttribute('src', 'fotojovem-m.jpg')
            } else if (idade < 50) {
                img.setAttribute('src', 'fotoadulto-m.jpg')
            } else {
                img.setAttribute('src',  'fotoidoso-m.jpg')
            }
        } 

        else if (formSexo[1].checked) {
            genero = 'Mulher'
        } if (idade >= 0 && idade < 12) {
            img.setAttribute('src', 'fotocrianca-f.jpg')
        } else if (idade < 21) {
            img.setAttribute('src', 'fotojovem-f.jpg')
        } else if (idade < 50) {
            img.setAttribute('src', 'fotoadulto-f.jpg')
        } else {
            img.setAttribute('src', 'fotoidoso-f.jpg')
        }
        

        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos que você é ${genero} e tem ${idade} anos.`
        res.appendChild(img) // Para adicionar um conteudo embaixo, usamos o appendChild, para adicionar um elemento, nesse caso, o elemento 'img'
    }
    

}