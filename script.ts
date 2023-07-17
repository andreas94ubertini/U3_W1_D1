function calculateDiff(n1: number, nRdnm: number): number {
    if (n1 > nRdnm) {
        return n1 - nRdnm
    } else {
        return nRdnm - n1
    }
}

function getVal() {
    let results: HTMLParagraphElement = <HTMLParagraphElement>document.querySelector('#result');
    let randomEl: HTMLParagraphElement = <HTMLParagraphElement>document.querySelector('#random');
    const randomInt: number = Math.floor(Math.random() * (100 - 1) + 1)
    const p1: number = parseInt((<HTMLInputElement>document.getElementById('p1')).value)
    const p2: number = parseInt((<HTMLInputElement>document.getElementById('p2')).value)
    console.log('numero random',randomInt)
    randomEl.innerText = `Il numero casuale generato é ${randomInt}`
    if (p1 === randomInt) {
        console.log('player 1 ha indovinato')
        results.innerText= 'player 1 ha indovinato'
    } else if (p2 === randomInt) {
        console.log('player 2 ha indovinato')
        results.innerText= 'player 2 ha indovinato'
    } else {
        if (calculateDiff(p1, randomInt) > calculateDiff(p2, randomInt)) {
            console.log('Nessuno dei due ha azzeccato il numero, ma player 2 ci é andato più vicino')
            results.innerText= 'Nessuno dei due ha azzeccato il numero, ma player 2 ci é andato più vicino'

        } else {
            console.log('Nessuno dei due ha azzeccato il numero, ma player 1 ci é andato più vicino')
            results.innerText = 'Nessuno dei due ha azzeccato il numero, ma player 1 ci é andato più vicino'
        }
    }
}

const formEl: HTMLElement | null = document.getElementById('form')
formEl?.addEventListener('submit', function (e) {
    e.preventDefault()
    getVal()

})