import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import useInterval from '../hooks/useInterval'


function BlockOrderVariants(props) {

  useInterval(props.stepGame, { ...props.stateGame }, 10, 1000);

  return (

    <div className="game__block_order_variants">
      {
        props.stateGame.arrStepGame.map((item, index) => {

          if (item === 'top') {
            return <div key={index}><FontAwesomeIcon icon={faChevronUp} /></div>
          }
          if (item === 'right') {
            return <div key={index}><FontAwesomeIcon icon={faChevronRight} /></div>
          }
          if (item === 'left') {
            return <div key={index}><FontAwesomeIcon icon={faChevronLeft} /></div>
          }
          if (item === 'bottom') {
            return <div key={index}><FontAwesomeIcon icon={faChevronDown} /></div>
          }

        })
      }
    </div>

  )
}

export default BlockOrderVariants