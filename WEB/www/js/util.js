export {
    renderHtml,
    criarElemento,
    bindFunctions
}

async function renderHtml(path, seletor){
    const url = 'html/' + path + '.html';
    await fetch(url)
      .then(res => res.text())
      .then(texto => {
          const tag = document.querySelector(seletor);
          tag.innerHTML = texto;
        }
      );
}

// Cria um objeto html.
function criarElemento(tipo){
  const elemento = document.createElement(tipo);
  bindFunctions(elemento);
  return elemento;
}

// Vincula funções ao elemento;.
function bindFunctions(elemento){
  elemento.incluirFilho = incluirFilho;
  elemento.adicionarClasse = adicionarClasse;
  elemento.adicionarTexto = adicionarTexto;
  return elemento;
}

function incluirFilho(filho){
  this.appendChild(filho)
  return this;
}

function adicionarClasse(classe){
  this.classList.add(classe)
  return this;
}

function adicionarTexto(texto){
  this.innerHTML = texto
  return this;
}