import React from "react";
import "./App.css";
import {useRecoilState, useRecoilValue} from 'recoil';
import TodoItemCreator from "./components/TodoItemCreator.jsx";
import { todoListState } from "./atom/todoListState";
import TodoItems from "./components/TodoItems";
import TodoFilterItems from "./components/TodoFilterItems";

const App=()=>{

  return (
    <div className="text-center container px-4 mx-auto  ">

      <header >
        <h1 className="text-4xl text-indigo-500">ToDo</h1>
      </header>

      <section className="flex flex-col shrink-0">
        <TodoFilterItems />
        <TodoItemCreator/>
        <TodoItems />
        
      </section>

      <footer className="text-xs text-indigo-500">
        Developed by a Developer:{")"}
      </footer>{/*Any problem with brackets*/}

    </div>
  );
}

export default App;