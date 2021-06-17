import {
    renderHtml
} from './util.js'

export {
    renderRegister
}

async function renderRegister() {
    await renderHtml('character/register', 'main');
    const form = docuemnt.forms.formCharacters;

    fetch('http://localhost:3000/races')
    .then(res => res.json())
    .then(races => {
        const selectRace = document.querySelector("#raca");
        races.forEach(race => {
            const option = document.createElement('option');
            option.value = parseInt(race.id);
            option.innerHTML = race.raceName;
            // option.innerHTML = race.raceDescription;
            selectRace.appendChild(option);
        });
    });
};

