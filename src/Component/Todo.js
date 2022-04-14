import React from 'react'

const Todo = ({todo,deleteHandeler,handelDone}) => {
    console.log('todo comp 2', todo);

const deleteTodo =()=>{deleteHandeler(todo.id)}   

const done = ()=>{handelDone(todo.id)}

    return (
        <div>
            <ul style={{display:'flex'}}>
                <li style = {todo.isDone ? { backgroundColor:'blue'} : {}}> {todo.text} </li> 


                <button onClick={()=>deleteTodo()}>remove</button> 



                <button onClick={()=>done()}>{todo.isDone ? "yes ! you did it" : "Done" }</button>
            </ul>
        </div>
    )
}

export default Todo
