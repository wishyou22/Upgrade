import "./App.css";
import React, { useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { addTodo } from "./Features/Todo/TodoSlice";
import { removeTodo } from './Features/Todo/TodoSlice';


// import Component from "./Component";

function App() {
    const [input, setInput] = useState('');
    const dispatch = useDispatch();

    const addTodoHandler = (e) => {
        e.preventDefault();
        dispatch(addTodo(input));
        setInput('');
    };

    const todos = useSelector(state => state.todos);

    return (
        <div>
            <form onSubmit={addTodoHandler}>
                <input 
                    type="text" 
                    value={input} 
                    onChange={(e) => setInput(e.target.value)} 
                    placeholder="write todo"
                />
                <button type="submit">submit</button>
            </form>
         <div>
            
           {todos.map((todo) => (
          <div key={todo.id}>
            {todo.text}  
            <p onClick={() => dispatch(removeTodo(todo.id))}> X</p>
           </div>))}
           
         </div>
        </div>
    );
}

export default App;
