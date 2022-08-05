import React from "react";

import TodoItemCreator from "./components/TodoItemCreator";
import TodoItems from "./components/TodoItems";
import TodoFilterItems from "./components/TodoFilterItems";

const App=()=>{

  return (
    <div className="text-center container w-auto  sm:w-96  mx-auto   ">

      <header >
        <h1 className="text-4xl text-indigo-500">ToDo</h1>
      </header>

      <main className="">
      <div className="flex flex-col ">
        <TodoItemCreator />
       
        <TodoItems />
      </div>
        <TodoFilterItems />
      </main>

      <footer className="text-xs text-indigo-500">
        Developed by a Developer:{")"}
      </footer>{/*Any problem with brackets*/}

    </div>
  );
}

export default App;