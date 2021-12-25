import {
  CHANGE_ACTIVE_BUTTON,
  CHANGE_NAME_START_BUTTON,
  ADD_ITEM_ARR_STEP_GAME,
  CLEAR_ARR_STEP_GAME,
  CLEAR_STATE,
} from "./types";


export const changeActiveButton = (data) => {

  return {
    type: CHANGE_ACTIVE_BUTTON,
    payload: data
  }
}
export const changeNameActiveButton = (indexActiveButton, oldArr, nameButton, background) => {

  let newArr = [...oldArr];

  newArr[indexActiveButton].nameButton = nameButton;
  newArr[indexActiveButton].background = background;

  return {
    type: CHANGE_NAME_START_BUTTON,
    payload: newArr
  }
}

export const addItemArrStepGame = (data, oldArrStepGame) => {

  const newArrStepGame = [...oldArrStepGame];

  newArrStepGame.push(data);

  return {
    type: ADD_ITEM_ARR_STEP_GAME,
    payload: newArrStepGame
  }
}

export const clearArrStepGame = () => {

  return {
    type: CLEAR_ARR_STEP_GAME,
    payload: []
  }
}
export const clearState = (oldStateGame) => {

  let clearState = { ...oldStateGame };
  clearState.activeButton = 0;
  clearState.arrStepGame = [];

  // eslint-disable-next-line array-callback-return
  clearState.stateButtons.map(obj => {
    obj.nameButton = '';
    obj.background = '';
  })

  return {
    type: CLEAR_STATE,
    payload: clearState
  }
}