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
        editCharacter(character.id);
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

async function editCharacter() {
    await renderHtml('character/edit', '#character');
    fetch('http://localhost:3000/characters/' + id)
    .then(response => response.json())
    .then(character => {
        const inputId = document.forms.caracteristicas.id;
        inputId.value = character.id;
        const inputNome = document.forms.caracteristicas.name;
        inputNome.value = character.name;
        const inputIdade = document.forms.caracteristicas.age;
        inputIdade.value = character.age;
        const inputAltura = document.forms.caracteristicas.altura;
        inputAltura.value = character.altura;
        const inputPeso = document.forms.caracteristicas.peso;
        inputPeso.value = character.peso;
        const inputForca = document.forms.habilidades.strength;
        inputForca.value = character.strength;
        const inputStamina = document.forms.habilidades.stamina;
        inputStamina.value = character.stamina;
        const inputDestreza = document.forms.habilidades.habilidades.dexterity;
        inputDestreza.value == character.dexterity;
        const inputInteligencia = document.forms.habilidades.intelligence;
        inputInteligencia.value = character.intelligence;
        const inputMagia = document.forms.habilidades.magic;
        inputMagia.value = character.magic;
        const inputCarisma = document.forms.habilidades.charisma;
        inputCarisma.value = character.charisma;

        const btnSalvar = document.getElementById('btnSalvar');
        btnSalvar.onclick = function(e){
            e.preventDefault();
            alert('Salva!')
        }
        const btnCancelar = document.getElementById('btnCancelar');
        btnCancelar.onclick = function(e){
            e.preventDefault();
            alert('Cancela!')
        }
    //   form.id.value = character.id;
    //   form.nome.value = character.nome;
    });
}
   
{/* <div>
    <h1>Edite seu personagem</h1>
</div>
<section class="register">		 
    <div class="card-personagem">
        <h2 class="login__title">Características</h2>
        <form caracteristicas>
            <label for="nome">Nome:</label>
            <input class="carac__input" type="text" id="nome">
            <span>
                <label for="radio-masculino">
                <input type="radio" name="genero" value="masculino" id="radio-masculino" checked>Masculino</label>
                <label for="radio-feminino">
                <input type="radio" name="genero" value="feminino" id="radio-feminino" checked>Feminino</label>
            </span>
            <br>
            <label for="level">Level:</label>
            <input class="carac__input" type="text" id="level">
            <label for="idade">Idade:</label>
            <input class="carac__input"type="text" id="idade">
            <label for="altura">Altura:</label>
            <input class="carac__input"type="text" id="altura">
            <label for="peso">Peso:</label>
            <input class="carac__input"type="text" id="peso">
        </form>
    </div>

    <div class="card-personagem">
        <h2 class="login__title">Habilidades</h2>
        <form>
            <label for="forca">Força</label>
            <input class="caract__input" type="text" id="forca">
            <label for="stamina">Stamina</label>
            <input class="caract__input" type="text" id="stamina">
            <label for="destreza">Destreza</label>
            <input class="caract__input" type="text" id="destreza">
            <label for="inteligencia">Inteligência</label>
            <input class="caract__input" type="text" id="inteligencia">
            <label for="magia">Magia</label>
            <input class="caract__input" type="text" id="magia">
            <label for="carisma">Carisma</label>
            <input class="caract__input"type="text" id="carisma">
        </form>
    </div>
    <button class="cad__submit">E</button>
</section> */}