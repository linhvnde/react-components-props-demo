import { useState } from 'react';
import Button from './Button';

export default function Counter() {
  const [counter, setCounter] = useState(0);
  const increase = () => {
    console.log('counting to...', counter+1);
    setCounter(counter+1);
  };
  const decrease = () => {
    console.log('counting to...', counter - 1);
    setCounter(counter-1)
    return counter-1;
  };
  return (
    <div>
      <h3>Counting to {counter}</h3>
      <p>
        <Button clickHandler={increase} action="Increase" />
        <Button clickHandler={decrease} action="Decrease" />
      </p>
    </div>
  );
}
