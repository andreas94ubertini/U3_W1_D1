"use strict";
function calculateDiff(n1, nRdnm) {
    if (n1 > nRdnm) {
        return n1 - nRdnm;
    }
    else {
        return nRdnm - n1;
    }
}
function getVal() {
    let results = document.querySelector('#result');
    let randomEl = document.querySelector('#random');
    const randomInt = Math.floor(Math.random() * (100 - 1) + 1);
    const p1 = parseInt(document.getElementById('p1').value);
    const p2 = parseInt(document.getElementById('p2').value);
    console.log('numero random', randomInt);
    randomEl.innerText = `Il numero casuale generato é ${randomInt}`;
    if (p1 === randomInt) {
        console.log('player 1 ha indovinato');
        results.innerText = 'player 1 ha indovinato';
    }
    else if (p2 === randomInt) {
        console.log('player 2 ha indovinato');
        results.innerText = 'player 2 ha indovinato';
    }
    else {
        if (calculateDiff(p1, randomInt) > calculateDiff(p2, randomInt)) {
            console.log('Nessuno dei due ha azzeccato il numero, ma player 2 ci é andato più vicino');
            results.innerText = 'Nessuno dei due ha azzeccato il numero, ma player 2 ci é andato più vicino';
        }
        else {
            console.log('Nessuno dei due ha azzeccato il numero, ma player 1 ci é andato più vicino');
            results.innerText = 'Nessuno dei due ha azzeccato il numero, ma player 1 ci é andato più vicino';
        }
    }
}
const formEl = document.getElementById('form');
formEl === null || formEl === void 0 ? void 0 : formEl.addEventListener('submit', function (e) {
    e.preventDefault();
    getVal();
});
