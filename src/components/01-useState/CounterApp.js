import React,{useState} from 'react'
import './counter.css'

export const CounterApp = () => {
  const [state, setstate] = useState({
    counter1: 10,
    counter2:20
  });
  const {counter1} = state;
  const handleClick = () => {
    setstate(()=>{
      return {
        ...state,
        counter1: counter1 + 1
      }
    })
  }
  return (
    <div>
      <h1>Counter{counter1}</h1>
      <hr/>
      <button className="btn btn-secondary" onClick= {handleClick}>
        +1
      </button>
    </div>
  )
}
