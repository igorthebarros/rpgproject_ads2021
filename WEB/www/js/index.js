import {
    renderHtml
} from './util.js'

import {
    renderRegister
} from './register.js'

import {
    renderCharacters
} from './characters.js'

function renderHeader(){
    const element = document.querySelector("header");
    fetch('html/header.html')
        .then(res => res.text())
        .then(text => {
            element.innerHTML = text;
        })
        .then(() => {
            const menuRegister = document.querySelector('#menu-register');
            menuRegister.firstElementChild.onclick = e => {
                e.preventDefault();
                renderRegister();
            }
            const menuCharacters = document.querySelector('#menu-characters');
            menuCharacters.firstElementChild.onclick = e => {
                e.preventDefault();
                renderCharacters();
            }
        });
};

function renderBody(){
    renderHome();
}

function renderFooter(){
    renderHtml("footer", "footer");
}

async function renderHome() {
    await renderHtml('home', 'main');
}

(function () {
    renderHeader();
    renderBody();
    renderFooter();
})();