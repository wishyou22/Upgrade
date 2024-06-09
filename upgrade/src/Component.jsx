import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo } from './Features/Todo/TodoSlice';

const Component = () => {
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();

  return (
    <div>
      {console.log(todos)}
      <div>
        {todos.map((todo) => (
          <div key={todo.id}>
            {todo.text}  
            <p onClick={() => dispatch(removeTodo(todo.id))}> X</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Component;
