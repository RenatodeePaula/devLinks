function noite(){ 
    const body = document.body
    body.classList.toggle('light')

    const img = document.querySelector('#profile img')
    
    if(body.classList.contains('light')) {
            img.setAttribute('src', 'https://avatars.githubusercontent.com/u/103689532?v=4"')
            img.setAttribute('alt', "Foto de Renato de paula de óculos escuro.")
    } else {
        img.setAttribute('src', './assets/foto-noite.png' )
        img.setAttribute('alt', "Foto de Renato de Paula a noite.")
    }
}


