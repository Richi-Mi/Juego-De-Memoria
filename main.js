const tablero = document.getElementById('tablero')
const fragment = document.createDocumentFragment()
let textCards = ['Frontend', 'Backend', 'JavaScript', 'CSS', 'HTML', 'NodeJS', 'MongoDB', 'MySQL', 'Frontend', 'Backend', 'JavaScript', 'CSS', 'HTML', 'NodeJS', 'MongoDB', 'MySQL']

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
const hiddenCard = (e) => {
    let cardFront = e.target
    let cardBack  = e.target.parentElement.children.back

    cardFront.classList.remove('active')

    setTimeout(() => cardBack.classList.remove('active'), 200)
}

// Evento del Teclado 

tablero.addEventListener('click', (e) => {
    try {
        let status = e.target.parentElement.attributes.status.value

        if(status === 'hidden') {
            const card = revealCard(e)
            e.target.parentElement.attributes.status.value = 'visible'
        }
        else if(status === 'visible') {
            hiddenCard(e)
            e.target.parentElement.attributes.status.value = 'hidden'
        }
        else {
            throw new Error('Alguien modifico un dato')
        }
    } catch (error) {
        console.log(error)
    }
})