import React from "react";
import "./App.css";
import {useRecoilState, useRecoilValue} from 'recoil';
import TodoItemCreator from "./TodoItemCreator.jsx";
import { todoListState } from "./todoListState";
import TodoItem from "./TodoItem";

const App=()=>{

 
   const todolist=useRecoilValue(todoListState);//used useRecoilState..gave two inputs and checkbox instead of one..?

  return (
    <div className="text-center container mx-auto">
      <header >
        <h1 className="text-4xl text-indigo-500">ToDo</h1>
      </header>

      <TodoItemCreator/>
      {
        todolist.map(todoItem=>{
          console.log(todoItem.id)
          return(
          <TodoItem key={todoItem.id} item={todoItem.text} isComplete={todoItem.isComplete}/>
        )})

      }
      
      <footer className="text-xs text-slate-900">
        Developed by a Developer:{")"}
      </footer>{/*Any problem with brackets*/}
    </div>
  );
}

export default App;