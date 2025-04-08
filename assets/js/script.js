const personagens = document.querySelectorAll('.personagem')

personagens.forEach((personagem) => {
    personagem.addEventListener('mouseenter', () => {
        if(window.innerHTML < 450){
            window.scrollTo({top: 0, behavior: 'smooth'})
        }


        
        removerSelecaoPersonagem()
        personagem.classList.add('selecionado')
        alterarDescricaoPersonagem(personagem)
        alterarNomePersonagemSelecionado(personagem)
        alterarImagemPersonagemSelecionado(personagem)
    })
})

function alterarDescricaoPersonagem(personagem){
    const descricaoPersonagem = document.getElementById('descricao-personagem')
    descricaoPersonagem.innerHTML = personagem.getAttribute('data-description')
}

function alterarNomePersonagemSelecionado(personagem){
    const nomePersonagem = document.getElementById('nome-personagem') 
    nomePersonagem.textContent = personagem.getAttribute('data-name')
}

function alterarImagemPersonagemSelecionado(personagem){
    const imagemPersonagemGrande = document.querySelector('.personagem-grande')
    const idPersonagem = personagem.getAttribute('id')
    imagemPersonagemGrande.src = `./assets/images/card-${idPersonagem}.png`
    
}

function removerSelecaoPersonagem(){
    const personagemSelecionado = document.querySelector('.selecionado')
    personagemSelecionado.classList.remove('selecionado')
}