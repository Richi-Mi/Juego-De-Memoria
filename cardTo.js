class CardTo {
    setFirstCard(card1) {
        this.firstCard = card1 
    }
    setSecondCard(card2) {
        this.secondCard = card2
    }
    getTo() {
        if (this.firstCard == this.secondCard) {
            return true
        }
        else {
            return false
        }
    }
    setStyleCardOne(card) {
        this.cart1 = card
    }
    setStyleCardtwo(card) {
        this.cart2 = card
    }
    setStyle() {
        this.cart1.parentElement.classList.add('green')
        this.cart2.parentElement.classList.add('green')
    }
}