import React, {useState } from 'react'

const AddTodo= ({handelAdd}) => {

const [input, setInput]= useState('');

const AddTodo =()=>{
    handelAdd({
     isDone: false,
     id: Math.random(),
     text: input

    }

    )  

};

    return (
        <div>
            <input type='text'  placeHolder='put something here' onChange ={(e)=>setInput(e.target.value)}/>
            <button onClick={()=>AddTodo()}>add</button>
        </div>
    );
};

export default AddTodo
