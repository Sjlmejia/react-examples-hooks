import React from 'react'

export const TodoListItem = ({description, id, done, index, handleToggle, handleDelete}) => {
  return (
    <li key={id} className="list-group-item">
      <div
        className={`item ${done && 'complete'}`}
        onClick={() => { handleToggle(id)}}
      >
        {index +1}. {description}
      </div>
      <button className="btn btn-outline-danger" onClick={()=> {handleDelete(id)}}>Borrar</button>
    </li>
  )
}
