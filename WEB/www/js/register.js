import {
    renderHtml
} from './util.js'

export {
    renderRegister
}

async function renderRegister() {
    await renderHtml('register', 'main');
    fetch('http://localhost:3001/register')
    .then(res => res.json())
    // .then(response => response.json())
    // .then(json => {
    //     json.
    // });
};

