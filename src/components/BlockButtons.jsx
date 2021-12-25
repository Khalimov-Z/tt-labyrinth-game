import React from 'react';
import ButtonGame from '../Buttons/ButtonGame'


function BlockButtons(props) {

  return (

    <div className="game__block_buttom">
      {
        props.arrButtons.map((obj, index) => {
          return <ButtonGame
            classname="game__block_buttom__buttom"
            key={index}
            onclick={props.onclick}
            name={obj.nameButton}
            background={obj.background}
            data={obj.id}
            disabled={props.disabled}
          />
        })
      }
    </div>

  )
}

export default BlockButtons