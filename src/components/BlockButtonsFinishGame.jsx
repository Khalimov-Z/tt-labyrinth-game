import React from 'react';
import Button from '../Buttons/Button'


function BlockButtonsFinishGame(props) {

  return (

    <div className="game__block_finish_game">
      <Button
        onclick={props.onclickStartGame}
        name='ПОПРОБОВАТЬ ЕЩЕ'
        classname="game__buttom_handler"
      />
      {
        props.flagOpenResult ?
          <Button
            onclick={props.onclickOpenResult}
            name='ПРАВИЛЬНЫЙ ОТВЕТ'
            classname="game__buttom_handler"
          />
          :null
      }

    </div>
  )
}

export default BlockButtonsFinishGame