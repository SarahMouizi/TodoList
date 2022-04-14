import React from 'react'
import Todo from './Todo'

const TodoList = ({todo, deleteHandeler, handelDone}) => {
    console.log('todo',todo)
    return (
        <div>
            {todo.map((e)=> (<Todo  todo={e} deleteHandeler={deleteHandeler} handelDone={handelDone} /> ))}
           TodoList 
          
        </div>
    )
}

export default TodoList
