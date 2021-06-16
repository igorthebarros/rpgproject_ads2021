export {
    renderHtml,
    createElementCustom,
    addClassCustom,
    addTextCustom,
    appendChildCustom
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

function createElementCustom(type){
    const element = document.createElement(type);
    bindFunctions(element);
    return element;
}

function bindFunctions(element){
    element.appendChildCustom = appendChildCustom;
    element.addClassCustom = addClassCustom;
    element.addTextCustom = addTextCustom;
    return element;
  }

function appendChildCustom(child){
      this.appendChild(child)
      return this;
}

function addClassCustom(classToAdd){
    this.classList.add(classToAdd)
    return this;
}

function addTextCustom(textToAdd){
    this.innerHTML = textToAdd
    return this;
}

  