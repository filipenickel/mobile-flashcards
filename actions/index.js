export const SET_DECKS = "SET_DECKS"
export const CREATE_DECK = "CREATE_DECK"
export const CREATE_CARD = "CREATE_CARD"
export const UPDATE_SCORE = "UPDATE_SCORE"


export function setDecks(decks) {
    return {
        type: SET_DECKS,
        decks
    }
}

export function createCard(question, answer, cardId) {
    return {
        type: CREATE_CARD,
        question,
        answer,
        cardId
    }

}

export function createDeck(title,deckId){
    return{
        type:CREATE_DECK,
        title,
        deckId
    }
}

export function updateScore(updateScore){
    return{
        type:UPDATE_SCORE,
        updateScore
    }
}