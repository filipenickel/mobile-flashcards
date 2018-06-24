import { combineReducers } from "redux";
import { SET_DECKS, CREATE_CARD, CREATE_DECK } from "../actions";

function decks(state = {}, action) {
  switch (action.type) {
    case SET_DECKS:
      return action.decks

    case CREATE_CARD:
    return{
        question: action.question,
        answer: action.answer,
        cardId: action.cardId
      }

      console.log("in de moment")
      console.log(state[action.cardId].questions)

      return {
        ...state,
        [action.question]: {
          action: action.question
        }
      }
    case CREATE_DECK:
      return{
        title: action.title,
        deckId: action.deckId
      }
      
      return {
        ...state,
        [action.title]: {
          title: action.title
        }
      }
  }
}

export default combineReducers({ decks })