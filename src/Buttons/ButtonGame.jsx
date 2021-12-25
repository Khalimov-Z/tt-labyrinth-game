import React from 'react';

function ButtonGame(props) {

  const data = props.data;

  return(

    <div
      className={props.classname}
      onClick={() => props.onclick(data)}
      tabIndex={props.tabindex}
      style={{ background: `${props.background}` }}
      disabled={props.disabled}
    >
      <span>{props.name}</span>
    </div>
  )
}

export default ButtonGame