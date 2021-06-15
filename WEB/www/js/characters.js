import {
    renderHtml
} from './util.js'

export {
    renderCharacters
}

async function renderCharacters() {
    await renderHtml('list', 'main');
    await fetch('http://localhost:3001/list')
    // .then(response => response.json())
    // .then(json => {
    //     json.
    // });
};