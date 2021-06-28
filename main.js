const tablero = document.getElementById('tablero')
const fragment = document.createDocumentFragment()
const textCards = ['Frontend', 'Backend', 'JavaScript', 'CSS', 'HTML', 'NodeJS', 'MongoDB', 'MySQL', 'Frontend', 'Backend', 'JavaScript', 'CSS', 'HTML', 'NodeJS', 'MongoDB', 'MySQL']

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

let boolean   = false

const reveal = (e) => {
    let cardBack = e.target
    let cardFront = e.target.parentElement.children.front

    cardBack.classList.add('active')

    setTimeout(() => cardFront.classList.add('active'), 200)
}
const hidden = (e) => {
    let cardFront = e.target
    let cardBack  = e.target.parentElement.children.back

    cardFront.classList.remove('active')

    setTimeout(() => cardBack.classList.remove('active'), 200)
}
tablero.addEventListener('click', (e) => {
    try {
        let status = e.target.parentElement.attributes.status.value

        if(status === 'hidden') {
            reveal(e)
            e.target.parentElement.attributes.status.value = 'visible'
        }
        else if(status === 'visible') {
            hidden(e)
            e.target.parentElement.attributes.status.value = 'hidden'
        }
        else {
            throw new Error('Alguien modifico un dato')
        }
    } catch (error) {
    }
})