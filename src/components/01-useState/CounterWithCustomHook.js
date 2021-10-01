import React from 'react'
import { useCounter } from '../../hooks/useCounter'

export const CounterWithCustomHook = () => {
  const {state, increment, decrement, reset }=useCounter();
  return (
    <div>
      <h1>Couner with Hook: {state}</h1>
      <hr />
      <button className="btn btn-success" onClick={increment}>+1</button>
      <button className="btn btn-danger" onClick={decrement}>-1</button>
      <button className="btn btn-danger" onClick={reset}>Reset</button>
    </div>
  )
}
