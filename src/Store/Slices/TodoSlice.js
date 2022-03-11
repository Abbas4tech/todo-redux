import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todos: [],
    totalTasks: 0,
  },
  reducers: {
    addTodo(state, action) {
      const newTodo = action.payload;
      const exisingTodo = state.todos.find(
        (todo) => todo.title === newTodo.title
      );
      if (!exisingTodo) {
        state.todos.push(newTodo);
        state.totalTasks++;
      } else {
        alert("Task Already Exist");
      }
    },
    removeTodo(state, action) {
      const id = action.payload;
      console.log(id);
      state.todos = state.todos.filter((todo) => todo.id !== id);
      state.totalTasks--;
    },
  },
});

export const todoActions = todoSlice.actions;

export default todoSlice.reducer;
