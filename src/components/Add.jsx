import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addToDo } from '../features/todo/todoSlice';

const Add = () => {
    const [input, setInput] = useState('');
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log("input --> ", input);
      dispatch(addToDo(input));
      setInput('');
    }
  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <input
        type="text"
        placeholder="Enter text"
        value={input}
        onChange={(e)=>{
          setInput(e.target.value);
        }}
        style={{ marginRight: "20px" }}
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default Add