import { todoActions } from "../Slices/TodoSlice";

export const fetchTodoData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        "https://redux-todo-fa942-default-rtdb.firebaseio.com/todos.json"
      );
      if (!response.ok) {
        throw new Error("Unable to fetch Data");
      }
      const data = await response.json();
      return data;
    };
    try {
      const todoData = await fetchData();
      dispatch(
        todoActions.replaceTodos({
          todos: todoData.todos || [],
          totalTasks: todoData.totalTasks,
        })
      );
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const sendTodoData = (todo) => {
  return async (dispatch) => {
    const sendRequest = async () => {
      const response = fetch(
        "https://redux-todo-fa942-default-rtdb.firebaseio.com/todos.json",
        {
          method: "PUT",
          body: JSON.stringify({
            todos: todo.todos,
            totalTasks: todo.totalTasks,
          }),
        }
      );
      if (!response.ok) {
        throw new Error("Unable to send Todo Data");
      }
    };
    try {
      await sendRequest();
    } catch (error) {
      console.log(error.message);
    }
  };
};
