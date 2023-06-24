import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase";

const style = {
  form: `flex justify-between`,
  input: `border p-2 w-full text-xl`,
  button: `border p-4 ml-2 bg-purple-500 text-slate-100`,
};

const TodoForm = () => {
  const [input, setInput] = useState("");

  // create todo
  const createTodo = async (e) => {
    e.preventDefault();
    if (input === "") {
      alert("Please enter a valid todo");
      return;
    }
    await addDoc(collection(db, "todos"), {
      text: input,
      isCompleted: false,
    });
    setInput("");
  };

  return (
    <form onSubmit={createTodo} className={style.form}>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className={style.input}
        type="text"
        placeholder="Add Todo"
      />
      <button className={style.button}>
        <AiOutlinePlus size={30} />
      </button>
    </form>
  );
};

export default TodoForm;
