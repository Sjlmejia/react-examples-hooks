import React, {useLayoutEffect} from 'react'
import { useRef } from 'react/cjs/react.development';
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch'
import './layout.css'
export const Layout = () => {
  const{state, increment}=useCounter();
  const {data} =useFetch(`https://www.breakingbadapi.com/api/quotes/${state}`);
  const { quote } = !!data && data[0];
  const pTag = useRef()
  useLayoutEffect(() => {
    console.log(pTag.current.getBoundingClientRect());
  }, [quote]);
  return (
    <div>
      <h1>Breaking Bad</h1>
      <hr/>

      <blockquote className="blockquote text-right" >
        <p ref={pTag}> {quote}</p>
      </blockquote>   

      <button className="btn btn-primary" onClick={increment}>
        Siguiente Frase
      </button>
    </div>
  )
}
