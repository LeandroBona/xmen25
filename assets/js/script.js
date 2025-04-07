function alterarDescricaoPersonagem(personagem){
    const descricaoPersonagem = document.getElementById('descricao-personagem')
    descricaoPersonagem.innerHTML = personagem.getAttribute('data-description')
}

function alterarNomePersonagemSelcionado(personagem){
    const nomePersonagem = document.getElementById('nome-personagem') 
    nomePersonagem = personagem.getAttribute('data-name')
}