import React, { useState, useRef } from "react";
import { BiTrash, BiEdit } from "react-icons/bi";
import { db } from "../firebase";
import { updateDoc, doc } from "firebase/firestore";

const style = {
  li: `flex justify-between bg-slate-200 p-4 my-2`,
  liCompleted: `flex justify-between bg-slate-400 p-4 my-2`,
  row: `flex`,
  text: `ml-2 cursor-pointer`,
  textCompleted: `ml-2 cursor-pointer line-through`,
  button: `cursor-pointer flex items-center`,
  icons: `flex justify-between space-x-2`,
  input: `border p-2 ml-2 w-full text-xl`,
};

const TodoList = ({ todo, toggleComplete, deleteTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState("");

  const inputRef = useRef(null);

  const handleEdit = () => {
    setIsEditing(true);
    setEditedText(todo.text);
    setTimeout(() => {
      inputRef.current.focus(); // auto focus on input field
    }, 0);
  };

  // Edit todo
  const handleUpdate = async (e) => {
    e.preventDefault();

    if (editedText.trim() !== "") {
      await updateDoc(doc(db, "todos", todo.id), {
        text: editedText,
      });
    }
    setIsEditing(false);
  };

  return (
    <li className={todo.isCompleted ? style.liCompleted : style.li}>
      <div className={style.row}>
        <input
          onChange={() => toggleComplete(todo)}
          type="checkbox"
          checked={todo.isCompleted ? "checked" : ""}
        />
        {isEditing ? (
          <form onSubmit={handleUpdate}>
            <input
              value={editedText}
              onChange={(e) => setEditedText(e.target.value)}
              className={style.input}
              type="text"
              placeholder="Edit Todo"
              ref={inputRef}
            />
          </form>
        ) : (
          <p
            onClick={() => toggleComplete(todo)}
            className={todo.isCompleted ? style.textCompleted : style.text}
          >
            {todo.text}
          </p>
        )}
      </div>
      <div className={style.icons}>
        <button onClick={handleEdit}>
          <BiEdit size={25} />
        </button>
        <button onClick={() => deleteTodo(todo.id)}>
          <BiTrash size={25} />
        </button>
      </div>
    </li>
  );
};

export default TodoList;
