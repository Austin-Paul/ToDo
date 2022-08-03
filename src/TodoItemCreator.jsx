import React, { useState } from "react";
import { RecoilState, useSetRecoilState } from "recoil";
import { todoListState } from "./todoListState";


const TodoItemCreator = () => {
  
  const [inputValue,setInputValue]=useState("");
   const setTodoList=useSetRecoilState(todoListState);

  
   
  const addItem=()=>{
    console.log("working");
    setTodoList((oldTodoList)=>[
      
      {
        id:getId(),
        text:inputValue,
        isComplete:false,
      },
      ...oldTodoList
    ])
    setInputValue("");
  }

  const onChange=(event)=>{
   
    setInputValue(event.target.value);
  }


  return (
    <main>
      <div>
        <input className="m-10 bg-neutral-200 text-xl cursor-auto" type="text" value={inputValue} onChange={onChange} onKeyPress={(e)=>{
          if(e.key==="Enter"){
            if(inputValue!=="")
            addItem();
            }
          }}/>
      </div>
    </main>
  );
};
let id=1;
const getId=()=>{
 
 return id++;
}
export default TodoItemCreator;
//Have to change onkey press and functions implemented there