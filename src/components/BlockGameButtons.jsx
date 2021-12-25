import React from 'react';
import BlockButtons from './BlockButtons';

function BlockGameButtons(props) {

  return (

    <div className="game__block_game_buttons">
      {
        props.arrGameButtons.map((arrButtons, index) => {
          return <BlockButtons
            arrButtons={arrButtons}
            key={index}
            onclick={props.onclick}
            disabled={props.disabled}
          />
        })
      }
    </div>

  )
}

export default BlockGameButtons