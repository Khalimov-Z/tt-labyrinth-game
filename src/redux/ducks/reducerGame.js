import {
  CHANGE_ACTIVE_BUTTON,
  CHANGE_NAME_START_BUTTON,
  ADD_ITEM_ARR_STEP_GAME,
  CLEAR_ARR_STEP_GAME,
  CLEAR_STATE,
} from "./types";

const initialState = {
  activeButton: 0,
  arrStepGame: [],
  stateButtons: [
    {
      id: 0,
      variants: ['right', 'bottom'],
      'right': 1,
      'bottom': 3,
      'nameButton': '',
      'background': '',
    },
    {
      id: 1,
      variants: ['right', 'bottom', 'left'],
      'right': 2,
      'bottom': 4,
      'left': 0,
      'nameButton': '',
      'background': '',
    },
    {
      id: 2,
      variants: ['bottom', 'left'],
      'bottom': 5,
      'left': 1,
      'nameButton': '',
      'background': '',
    },
    {
      id: 3,
      variants: ['top', 'right', 'bottom'],
      'top': 0,
      'right': 4,
      'bottom': 6,
      'nameButton': '',
      'background': '',
    },
    {
      id: 4,
      variants: ['top', 'right', 'bottom', 'left'],
      'top': 1,
      'right': 5,
      'bottom': 7,
      'left': 3,
      'nameButton': '',
      'background': '',
    },
    {
      id: 5,
      variants: ['top', 'bottom', 'left'],
      'top': 2,
      'bottom': 8,
      'left': 4,
      'nameButton': '',
      'background': '',
    },
    {
      id: 6,
      variants: ['top', 'right'],
      'top': 3,
      'right': 7,
      'nameButton': '',
      'background': '',
    },
    {
      id: 7,
      variants: ['top', 'right', 'left'],
      'top': 4,
      'right': 8,
      'left': 6,
      'nameButton': '',
      'background': '',
    },
    {
      id: 8,
      variants: ['top', 'left'],
      'top': 5,
      'left': 7,
      'nameButton': '',
      'background': '',
    },


  ]
};



const stateGame = (state = initialState, action) => {

  switch (action.type) {

    case CHANGE_ACTIVE_BUTTON:
      return {
        ...state,
        activeButton: action.payload
      }
    case CHANGE_NAME_START_BUTTON:
      return {
        ...state,
        stateButtons: action.payload
      }
    case ADD_ITEM_ARR_STEP_GAME:
      return {
        ...state,
        arrStepGame: action.payload
      }
    case CLEAR_ARR_STEP_GAME:
      return {
        ...state,
        arrStepGame: action.payload
      }
    case CLEAR_STATE:
      return action.payload

    default:
      return state;
  }
}
export default stateGame