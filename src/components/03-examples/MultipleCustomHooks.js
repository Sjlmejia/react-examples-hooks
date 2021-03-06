import React from 'react'
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch'
import '../02-useEffect/effects.css'
export const MultipleCustomHooks = () => {
  const{state, increment}=useCounter();
  const {loading, data} =useFetch(`https://www.breakingbadapi.com/api/quotes/${state}`);
  console.log('esta es la data ', data)
  const {author, quote } = !!data && data[0];
  return (
    <div>
      <h1>Breaking Bad</h1>
      <hr/>
      {
        loading
        ?
          (
            <div className="alert alert-info text-center">
              Loading...
            </div>     
          )
        :
        (
          <blockquote className="blockquote text-right">
            <p> {quote}</p>
            <footer className="blockquote-footer">{author}</footer>
          </blockquote>   
        )
      }

      <button className="btn btn-primary" onClick={increment}>
        Siguiente Frase
      </button>
    </div>
  )
}
