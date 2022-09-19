import React from "react";
import { MdCheck } from "react-icons/md";
import { MdOutlineDeleteOutline } from "react-icons/md";

const Todos = ({ text, todo, todos, setTodos }) => {
  const deleteHandler = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
  };

  const completeHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };

  return (
    <div className="todos grid grid-cols-5 sm:grid-cols-4">
      <div className="col-span-3 sm:col-span-3  p-3.5 my-10 ml-8 md:ml-52 lg:ml-96 bg-slate-800  border-slate-800 rounded  text-slate-200  focus:outline-transparent focus:border-blue-600">
        <p
          className={`col-span-1 block inline-block ml-2 ${
            todo.completed ? "line-through text-slate-400" : ""
          }`}>
       
          {" "}
          {text}{" "}
        </p>
      </div>
      <div className="col-span-2 sm:col-span-1">
        <button
          onClick={completeHandler}
          className={`max-w-fit bg-blue-700 ml-3 my-10 p-3 rounded-lg hover:bg-green-500 ${
            todo.completed ? "bg-green-700" : ""
          }`}
        >
          <MdCheck color="white" size="1.5em" />
        </button>
        <button
          onClick={deleteHandler}
          className="max-w-fit  bg-red-500 ml-1 my-10 p-3 rounded-lg hover:bg-red-400 focus:bg-red-700"
        >
          <MdOutlineDeleteOutline color="white" size="1.5em" />
        </button>
      </div>
    </div>
  );
};

export default Todos;
