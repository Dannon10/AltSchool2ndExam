import React, { useState } from 'react';

export function useCounter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(prev => prev + 1)
  }
  
  const decrement = () => {
    setCount(prev => prev - 1)
  }
  
  const reset = () => {
    setCount(0)
  }
  
  const changeCounterValue = (value) => {
    setCount(parseInt(value))
  }
  return {count, increment, decrement, reset, changeCounterValue}
}


