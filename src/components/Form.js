import React, { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { todoActions } from "../Store/Slices/TodoSlice";
import ListItem from "./ListItem";

const Form = () => {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();

  const noOftasks = useSelector((state) => state.todo.totalTasks);
  const todos = useSelector((state) => state.todo.todos);
  console.log(todos);
  const inputHandler = (event) => {
    event.preventDefault();
    dispatch(todoActions.addTodo({ title, id: Math.random().toString() }));
    setTitle("");
  };

  return (
    <Fragment>
      <form action="" onSubmit={inputHandler}>
        <input
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <button type="submit">Add Task!</button>
      </form>

      <h3>Total Tasks : {noOftasks}</h3>
      <ul>
        {todos.map((todo) => (
          <ListItem title={todo.title} key={todo.id} id={todo.id} />
        ))}
      </ul>
    </Fragment>
  );
};

export default Form;
