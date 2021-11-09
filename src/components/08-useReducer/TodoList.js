import React from 'react'
import { TodoListItem } from './TodoListItem'

export const TodoList = ({todos,handleDelete, handleToggle }) => {
  return (
    <ul className="list-group list-group-flush">
        {
          todos.map(({desc, id, done}, i) => {
            return <TodoListItem
                      key={id}
                      description={desc}
                      id={id} done={done}
                      index={i}
                      handleToggle={handleToggle}
                      handleDelete={handleDelete}/>
          })
        }
    </ul>
  )
}
