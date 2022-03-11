import React from "react";
import { useDispatch } from "react-redux";
import { todoActions } from "../Store/Slices/TodoSlice";

const ListItem = ({ title, id }) => {
  const dispatch = useDispatch();
  const removeHandler = () => {
    console.log(id);
    dispatch(todoActions.removeTodo(id));
  };

  return (
    <li onClick={removeHandler} style={{ cursor: "pointer" }} id={id}>
      {title}
    </li>
  );
};

export default ListItem;
