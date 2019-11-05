import React, {useState} from 'react';

const HookCounter = ({}) => {
   const [number, setNumber] = useState(0);

   const onIncre = () => setNumber(number + 1)
   const onDecre = () => setNumber(number - 1)

   return (
      <div>
         <h2>{number}</h2>
         <button className={'pb'} onClick={onIncre}>+1</button>
         <button id={'mb'} onClick={onDecre}>-1</button>
      </div>
   )
}

export default HookCounter;