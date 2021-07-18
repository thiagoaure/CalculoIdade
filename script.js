function verificar (){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if (fano.value.length == 0 || fano.value > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img') //criando imagem com js
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            genero = 'Homem'
            if (idade>=0 && idade < 10){
                //crianca
                img.setAttribute('src', 'src/homem-crianca.jpg')
            } else if (idade < 21){
                //jovem
                img.setAttribute('src', 'src/homem-jovem.jpg')
            } else if (idade <50){
                //adulto
                img.setAttribute('src', 'src/homem-adulto.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'src/homem-idoso.jpg')
            }
        } else if (fsex[1].checked){
            genero = 'Mulher'
            if (idade>=0 && idade < 10){
                //crianca
                img.setAttribute('src', 'src/mulher-crianca.jpg') //seta a img 
            } else if (idade < 21){
                //jovem
                img.setAttribute('src', 'src/mulher-jovem.jpg')
            } else if (idade <50){
                //adulto
                img.setAttribute('src', 'src/mulher-adulto.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'src/mulher-idoso.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img) //coloca img na div
    }
}