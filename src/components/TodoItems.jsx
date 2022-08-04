import React from "react";
import { useRecoilValue } from "recoil";
import { todoListState } from "../atom/todoListState";
import TodoItem from "./TodoItem";



const TodoItems=()=>{
    const todolist=useRecoilValue(todoListState);
    return(
    todolist.map(todoItem=>{
      // console.log(todoItem.id)
      
      return(
      <TodoItem key={todoItem.id} item={todoItem}/>
    )})
    )
    }
    export default TodoItems;