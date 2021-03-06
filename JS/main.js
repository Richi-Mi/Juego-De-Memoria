const tablero = document.getElementById('tablero')
const fragment = document.createDocumentFragment()
let textCards = ['Frontend', 'Backend', 'JavaScript', 'CSS', 'HTML', 'NodeJS', 'MongoDB', 'MySQL', 'Frontend', 'Backend', 'JavaScript', 'CSS', 'HTML', 'NodeJS', 'MongoDB', 'MySQL']
let boolean = false
const cardTo = new CardTo(textCards.length)
//Funciones

textCards = textCards.sort(() => { return Math.random() - 0.5})

textCards.forEach( text => {
    const divCard = document.createElement('div')
    divCard.classList.add('card')
    divCard.setAttribute('status', 'hidden')

    const divBack = document.createElement('div')
    divBack.classList.add('back')
    divBack.setAttribute('id', 'back')

    const divFront = document.createElement('div')
    divFront.classList.add('front')
    divFront.setAttribute('id', 'front')
    
    const span = document.createElement('span')
    span.textContent = text

    divFront.appendChild(span)

    divCard.appendChild(divBack)
    divCard.appendChild(divFront)

    fragment.appendChild(divCard)
} )
tablero.appendChild(fragment)

const revealCard = (e) => {
    let cardBack = e.target
    let cardFront = e.target.parentElement.children.front

    cardBack.classList.add('active')

    setTimeout(() => cardFront.classList.add('active'), 200)

    return cardFront.children[0].textContent
}

// Evento del Teclado 

tablero.addEventListener('click', (e) => {
    try {
        let status = e.target.parentElement.attributes.status.value

        if(status === 'hidden') {
            const card = revealCard(e)
            e.target.parentElement.attributes.status.value = 'visible'

            if(boolean) {
                const parOfCards = cardTo.setSecondCardAndVerify(card, e.target)
                boolean = false

                if(parOfCards) {
                    if(cardTo.setNewPar() == 0) document.getElementById('alert').classList.add('win')
                }
                else {
                    cardTo.deleteAllCards()
                }
            }

            else {
                cardTo.setFirstCard(card, e.target)
                boolean = true
            }
        }
        else if(status === 'visible') {
            console.log('Lo siento esta carta ya la pulsaste')
        }
        else {
            throw new Error('Alguien modifico un dato')
        }
    } catch (error) {
        console.log(error)
    }
})
document.getElementById('btn').addEventListener('click', () => location.reload() )
document.getElementById('btn-alert').addEventListener('click', () => location.reload() )