import React, { useState } from 'react'
import TodoList from './Component/TodoList'
import AddTodo from './Component/AddTodo'

const App =()=> {

const [todo, setTodo] = useState ([
  {text:'first todo list', id:1, isDone:false }, 
  {text: 'second todo list', id:2, isDone:false},
  {text:'third todo list', id:3, isDone:false},
  {text:' todo list', id:4, isDone:false}
])

const deleteHandeler = (ID)=> {
  setTodo(todo.filter((e)=>e.id !== ID) )
}

const handelDone = (ID) => {
  setTodo (todo.map((el)=>el.id === ID ? {...el,isDone: ! el.isDone } : el ))

}

const handelAdd = (newTodo) => {
  setTodo(
    [...todo,newTodo]
  )
}

  return (
    <div>
      <h1>Todo App</h1>
      <p>Todo List</p>
      <TodoList todo={todo}  deleteHandeler={deleteHandeler} handelDone={handelDone} />
      <hr/>
      <p>Add Todo</p>
      <AddTodo handelAdd={handelAdd}/>
    </div>
  );
}

export default App;
