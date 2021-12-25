import { useState, useEffect, useRef } from 'react';

const useInterval = (funcCallback, parameters, numberStep, timeStep) => {

  const savedFunc = useRef();

  const [countStep, setCountStep] = useState(1);

  const funcStep = () => {

    funcCallback(parameters);
    setCountStep(countStep + 1);
  }
  useEffect(() => {
    savedFunc.current = funcStep;
  }, [funcStep]);

  useEffect(() => {
    function tick() {
      savedFunc.current();
    }
    if (countStep <= Number(numberStep)) {
      let funcInterval = setInterval(tick, Number(timeStep));
      return () => clearInterval(funcInterval);
    }
  }, [countStep]);
}

export default useInterval