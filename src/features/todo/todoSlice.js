import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [

  ],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addToDo: (state, action) => {
        const newTodo = { id: nanoid(), text: action.payload };
        console.log("state -->", state);
        console.log("action -->", action);
        state.todos.push(newTodo);
    },
    removeTodo: (state, action) => {
        console.log("state -->", state);
        console.log("action -->", action);
        state.todos = state.todos.filter((todo) => 
          todo.id !== action.payload
        );
        console.log("todos -->", state.todos);
    },
  },
});

export const { addToDo, removeTodo } = todoSlice.actions;

export default todoSlice.reducer;