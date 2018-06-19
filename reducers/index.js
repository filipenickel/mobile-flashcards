import { combineReducers } from "redux";
import {SET_DECKS,CREATE_CARD,UPDATE_SCORE} from '../actions';

function decks(state = {}, action) {
    switch (action.type) {
      case SET_DECKS:
        return action.decks
      case CREATE_CARD:
        const newComment = {
          question: action.question,
          answer: action.answer,
          cardId: action.cardId
        }
        console.log("in de moment")
        console.log(state[action.cardId].questions)
  
        return {
          ...state,
          [action.deckId]: {
            ...state[action.cardId],
            comments: state[action.cardId].questions.push(newComment)
          }
        }

        function updateScore(state = {}, action) {
            switch (action.type) {
              case UPDATE_SCORE:
                return action.updateScore
              default:
                return state
            }
          }






    
        
export default combineReducers({decks})