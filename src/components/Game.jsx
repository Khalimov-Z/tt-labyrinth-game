import React, { useState } from 'react';
import { connect, useDispatch, useSelector } from "react-redux";
import { addItemArrStepGame, changeActiveButton, changeNameActiveButton, clearState } from '../redux/ducks/actionsGame'
import { randomItemFromArray } from '../functions/randomItemFromArray'
import BlockGameButtons from './BlockGameButtons'
import BlockOrderVariants from './BlockOrderVariants'
import Button from '../Buttons/Button'
import BlockButtonsFinishGame from './BlockButtonsFinishGame'
import { faMarker } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function Game(props) {

  const dispatch = useDispatch();
  const stateGame = useSelector(state => state.stateGame);
  const stateGameButtons = useSelector(state => state.stateGame.stateButtons);

  const arrGameButtons = [];
  let i = 0;
  let box = [];

  // eslint-disable-next-line array-callback-return
  stateGameButtons.map((obj, index) => {
    if (i < 3) {
      i++;
      box.push(obj);
    } else {
      i = 1;
      arrGameButtons.push(box);
      box = [];
      box.push(obj);
    }
    if (stateGameButtons.length === (index + 1)) {
      arrGameButtons.push(box);
    }
  })

  const stepGame = (parameters) => {

    let indexActivButton = parameters.activeButton;
    let stateButtons = parameters.stateButtons;
    let arrStep = parameters.arrStepGame;

    let randomVariantIndex = randomItemFromArray(stateButtons[indexActivButton].variants);
    let variant = stateButtons[indexActivButton].variants[randomVariantIndex];

    dispatch(changeActiveButton(stateButtons[indexActivButton][variant]));
    dispatch(addItemArrStepGame(variant, arrStep));
  }

  const [flagGameStart, setFlagGameStart] = useState(false);
  const [flagGameFinish, setFlagGameFinish] = useState(false);
  const [flagOpenResult, setFlagOpenResult] = useState(true);

  const colorYellow = '#FFCC33';
  const colorRed = '#D2333E';
  const color = '#33cdd2';
  const marker = <FontAwesomeIcon size="3x" icon={faMarker} />

  const handlerGameStart = () => {

    let randomIndex = randomItemFromArray(stateGameButtons);
    dispatch(changeActiveButton(randomIndex));
    dispatch(changeNameActiveButton(randomIndex, stateGameButtons, marker, colorYellow));
    setFlagGameStart(prev => true);
    setFlagOpenResult(prev => true);
  }

  const handlerGameEnd = (data) => {

    if (data === stateGame.activeButton) {
      dispatch(changeNameActiveButton(data, stateGameButtons, 'МОЛОДЕЦ!', color));
    } else {
      dispatch(changeNameActiveButton(data, stateGameButtons, 'ОШИБКА', colorRed));
    }
    setFlagGameFinish(prev => true);
  }
  const handlerGameStartTry = () => {
    dispatch(clearState(stateGame));
    setFlagGameStart(prev => false);
    setFlagGameFinish(prev => false);
  }
  const handlerOpenResult = () => {
    dispatch(changeNameActiveButton(stateGame.activeButton, stateGameButtons, 'ФИНИШ', color));
    setFlagOpenResult(prev=> false);
  }

  return(
    <div className='game_wrapper' >
      <div className='game__name'>LABYRINTH GAME</div>

      <BlockGameButtons
        arrGameButtons={arrGameButtons}
        onclick={handlerGameEnd}
      />

      {
        flagGameStart ?
          <BlockOrderVariants
            stateGame={stateGame}
            stepGame={stepGame}
          />
          :<Button
            classname="game__buttom_handler"
            onclick={handlerGameStart}
            name='СТАРТ'
          />
      }
      {
        flagGameStart && !flagGameFinish ?
          <div>ПРОСЛЕДИ НАПРАВЛЕНИЕ СТРЕЛОК И УКАЖИ КОНЕЧНУЮ ТОЧКУ МАРКЕРА</div>
          : null
      }
      {
        flagGameFinish ?
          <BlockButtonsFinishGame

            onclickStartGame={handlerGameStartTry}
            onclickOpenResult={handlerOpenResult}
            flagOpenResult={flagOpenResult}
          />
          : null
      }

    </div>
  )
}

export default connect()(Game)