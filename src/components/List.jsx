import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeTodo } from '../features/todo/todoSlice';

const List = () => {
  const dispatch = useDispatch();
  const todoList = useSelector((state) => state.todos);
  console.log(todoList);
  return (
    <div>
        <h4>List</h4>
       {
        todoList.map((item) => (
          <li key={item.id} style={{ display: 'flex', gap: '20px', marginBottom: '10px', justifyContent: 'center' }}>
            <p>{item.text}</p>
            <button onClick={() => {dispatch(removeTodo(item.id))}}>X</button>
          </li>
        ))
       }
    </div>
  )
}

export default List