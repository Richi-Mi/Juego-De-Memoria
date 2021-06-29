class CardTo {
    constructor(pares) {
        this.pares = pares
    }
    setFirstCard(textCard1, card1) {
        this.textFirstCard = textCard1
        this.cart1 = card1
    }
    setSecondCardAndVerify(textSecondCard, card2) {
        this.textSecondCard = textSecondCard
        this.cart2 = card2
        if (this.textFirstCard == this.textSecondCard) {
            this.cart1.parentElement.classList.add('green')
            this.cart2.parentElement.classList.add('green')
            return true
        }
        else {
            return false
        }
    }
    deleteAllCards() {
        this.cart1.parentElement.attributes.status.value = 'hidden'
        this.cart2.parentElement.attributes.status.value = 'hidden'
        setTimeout(() => {
            this.cart1.parentElement.children.front.classList.remove('active')
            this.cart2.parentElement.children.front.classList.remove('active')
            setTimeout(() => {
                this.cart1.parentElement.children.back.classList.remove('active')
                this.cart2.parentElement.children.back.classList.remove('active')

                this.cart1 = ''
                this.cart2 = ''
                this.textFirstCard = ''
                this.textSecondCard = ''
            }, 400)
        }, 400)
    }
    setNewPar() {
        this.pares = this.pares - 2
        return this.pares
    }
}