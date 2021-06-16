import {
    renderHtml,
    createElementCustom
} from './util.js'

export {
    renderCharacters
};

async function renderCharacters() {
    await renderHtml('character/list', 'main');
    await fetch('http://localhost:3000/characters')
    .then(response => response.json())
    .then(json => {
        json.forEach( character => {
            const card = createCharacterCard(character);
            const section = document.querySelector('section.personagens-cadastrados');
            section.appendChild(card);     
        })
    });
};

function createCharacterCard(character){
    const divCharacter = createElementCustom('div')
        .addClassCustom('card-character');
    const spanId = createElementCustom('span')
        .addClassCustom('card-id')
        .addTextCustom(character.id);
    const img = createElementCustom('img');
    img.src = "./img/" + character.image;
    const divContent = createElementCustom('div')
        .addClassCustom('card-conteudo');
    const spanName = createElementCustom('span')
        .addClassCustom('card-name')
        .addTextCustom(character.name);
    const spanRace = createElementCustom('span')
        .addClassCustom('card-race')
        .addTextCustom(character.race);
    const spanLevel = createElementCustom('span')
        .addClassCustom('card-level')
        .addTextCustom(character.level);
    
    divContent.appendChildCustom(spanName)
    .appendChildCustom(spanRace)
    .appendChildCustom(spanLevel);
    divCharacter.appendChildCustom(spanId)
        .appendChildCustom(img)
        .appendChildCustom(divContent);

    return divCharacter;
}