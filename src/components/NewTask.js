import React from "react";

//props are imported in ({xyz,abc,etc})

const NewTask = ({ inputText, setInputText, todos, setTodos }) => {
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };
  const createTodoHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      { text: inputText, completed: false, id: Math.random() + 100 },
    ]);
    setInputText("");
  };
  return (
    <form className="grid grid-cols-6 sm:grid-cols-4">
      <input
        value={inputText}
        onChange={inputTextHandler}
        type="text"
        className="col-span-4 sm:col-span-3 block p-3.5 my-10 ml-8 md:ml-52 lg:ml-96  bg-slate-800  border-slate-800 rounded  text-slate-200 focus:outline-transparent focus:border-blue-600"
        required
        placeholder="Create a new Todo"
      />

      <button
        onClick={createTodoHandler}
        type="submit"
        className="col-span-2 sm:col-span-1 ml-3 my-10 p-3.5 text-white max-w-fit bg-blue-700 hover:bg-blue-800 focus:ring-2  font-medium rounded-lg text-base"
      >
        Create
      </button>
    </form>
  );
};

export default NewTask;
