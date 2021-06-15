export {
    renderHtml
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