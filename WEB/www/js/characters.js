import {
    renderHtml,
    criarElemento
} from './util.js'

export {
    renderCharacters
}

async function renderCharacters() {
    await renderHtml('character/list', 'main');
    await fetch('http://localhost:3000/characters')
    .then(response => response.json())
    .then(json => {
      json.forEach( character => {
        const card = criarCard(character);
        const section = document.querySelector('section.personagens-cadastrados');
        section.appendChild(card);
      });  
    });
};

function criarCard(character){
    const divCharacter = criarElemento('div')
    .adicionarClasse('card'); 
    
    const spanId = criarElemento('span')
    .adicionarClasse('card-titulo')
    .adicionarTexto(character.id); 
    
    const img  = criarElemento('img');
    img.src = "./images/" + character.image;
    
    const divConteudo = criarElemento('div')
    .adicionarClasse('card-conteudo');
    
    const spanNome = criarElemento('span')
    .adicionarClasse('card-dados')
    .adicionarTexto(character.name);
    
    const spanRaca = criarElemento('span')
    .adicionarClasse('card-dados')
    .adicionarTexto(character.race);
    
    const spanLevel = criarElemento('span')
    .adicionarClasse('card-dados')
    .adicionarTexto(character.level);

    const divAlterar = criarElemento('div')
    .adicionarClasse('card__alterar');
    
    const btnEditar = document.createElement('button');
    btnEditar.classList.add('btn')
    btnEditar.innerHTML = "Editar";
    btnEditar.onclick = function (e){
        alert("Programar a função do botão");
    }
    
    const btnExcluir = document.createElement('button');
    btnExcluir.classList.add('btn');
    btnExcluir.innerHTML = "Excluir";
    btnExcluir.onclick = function (e){
        alert("Programar a função do botão");
    }

    divCharacter.incluirFilho(spanId)
    .incluirFilho(img)
    .incluirFilho(divConteudo);

    divConteudo.incluirFilho(spanNome)
    .incluirFilho(spanRaca)
    .incluirFilho(spanLevel)
    .incluirFilho(btnEditar)
    .incluirFilho(btnExcluir);

    return divCharacter;
}