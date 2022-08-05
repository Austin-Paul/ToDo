import React, { useState } from "react";
import {  useSetRecoilState } from "recoil";
import { todoListState } from "../atom/todoListState";
import { UUID } from "../functions/UUID";


const TodoItemCreator = () => {
  
  const [inputValue,setInputValue]=useState("");
   const setTodoList=useSetRecoilState(todoListState);

  
   
  const addItem=()=>{
    console.log("working");
    setTodoList((oldTodoList)=>{
      const newItems=[
      
      {
        id:getId(),
        text:inputValue,
        isComplete:false,
      },
      ...oldTodoList
    ]
    window.localStorage.setItem("user-basket", JSON.stringify(newItems));
   
    return newItems;
  })
    setInputValue("");
  }

  const onChange=(event)=>{
   
    setInputValue(event.target.value);
  }


  return (
    
      <div>
        <input className="m-6 bg-neutral-200 text-xl cursor-auto" placeholder="Task" type="text" value={inputValue} onChange={onChange} onKeyPress={(e)=>{
          if(e.key==="Enter"){
            if(inputValue!=="")
            addItem();
            }
          }}/>
      </div>
    
  );
};
const getId=()=>{
 
 return UUID();
}
export default TodoItemCreator;
//Have to change onkey press and functions implemented there