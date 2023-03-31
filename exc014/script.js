function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    //var hora = data.getHours()
    var hora = 15
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 11) {
        //BOM DIA!
        img.src = '../mafotomanha.png'
    } else if (hora >= 11 && hora < 17) {
        //BOA TARDE!
        img.src = 'fototarde.png'
    } else {
        //BOA NOITE!
        img.src = 'fotonoite.png'
    }
}