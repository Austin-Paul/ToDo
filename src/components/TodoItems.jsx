import React from "react";
import { useRecoilValue } from "recoil";
import { filterState } from "../atom/filterState";
import { todoListState } from "../atom/todoListState";
import TodoItem from "./TodoItem";



const TodoItems=()=>{
    const todolist=useRecoilValue(todoListState);
     const filtervalue=useRecoilValue(filterState);
    
    switch(filtervalue)
     { case "All":
    return(todolist.map(todoItem=>{
      // console.log(todoItem.id)
      
      return(
      <TodoItem key={todoItem.id} item={todoItem}/>
    )}))
    case "Completed":
    return(todolist.filter((filtereditems)=>filtereditems.isComplete).map(todoItem=>{
        // console.log(todoItem.id)
        
        return(
        <TodoItem key={todoItem.id} item={todoItem}/>
      )}))

      default:
      return(todolist.filter((filtereditems)=>!filtereditems.isComplete).map(todoItem=>{
          // console.log(todoItem.id)
          
          return(
          <TodoItem key={todoItem.id} item={todoItem}/>
        )}))
      
          }
    
    }
    export default TodoItems;