import React, { useMemo, useState } from 'react'
import '../02-useEffect/effects.css'
import {useCounter} from '../../hooks/useCounter'
import { procesoPesado } from '../../helpers/procesoPesado';
export const MemoHook = () => {
  const {state, increment}=useCounter(10);
  const [show, setshow] = useState(true);

  const memoProcesoPesado=useMemo(() => procesoPesado(state), [state]);
  return (
    <div>
      <h1>Counter:{state} </h1>
      <hr/>
      <p>{ memoProcesoPesado }</p>
      <button className="btn btn-primary"  onClick={increment}>
        +1
      </button>
      <button className="btn btn-outline-primary ms-3"
        onClick={() => {
          setshow(!show);
        }}
      >
        Show/Hide {JSON.stringify(show)}
      </button>
    </div>
  )
}
