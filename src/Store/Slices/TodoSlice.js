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
    replaceTodos(state, action) {
      state.todos = action.payload.todos;
      state.totalTasks = action.payload.totalTasks;
    },
  },
});

export const todoActions = todoSlice.actions;

export default todoSlice.reducer;
