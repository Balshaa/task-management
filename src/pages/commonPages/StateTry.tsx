import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../../redux/slice/counterSlice';
import { Button } from '@mantine/core';

interface CounterState {
  counter: number;
}

const Counter = () => {
  const counter = useSelector((state: { counter: CounterState }) => state.counter.counter);
  const dispatch = useDispatch();

  return (
    <div>
      <p>Counter: {counter}</p>
      <Button onClick={() => dispatch(increment())}>Increment</Button>
      <Button onClick={() => dispatch(decrement())}>Decrement</Button>
    </div>
  );
};

export default Counter;