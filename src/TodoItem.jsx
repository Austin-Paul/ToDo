import { useState } from "react";
import { useRecoilState } from "recoil";
import { todoListState } from "./todoListState";




const TodoItem=({item})=>{//destructuring
    // const {item,isComplete}=item;
    const [todolist,setTodoList]=useRecoilState(todoListState)
    const [complete,setComplete]=useState(item.isComplete)//might have to use recoil or something to convey the change to local storage or to parent or something
    const index=todolist.findIndex((listItem) => listItem === item);
    const onChange=(event)=>{
       setComplete(!complete);
    //    if(complete)//executed before value of complete gets updated
    //     document.getElementById("task").className="line-through"
    //     event.target.className="rounded-full w-8 h-8 bg-white border-2"
    }

    const editItem=(event)=>{
        
        const newList = replaceItemAtIndex(todolist, index, {
           ...item,
            text: event.target.value,       
          });
          
          setTodoList(newList);
    }

    const deleteItem=()=>{
        const newList=removeItemAtIndex(todolist,index);
        setTodoList(newList);
    }

    return(
        <div className="bg-cyan-600 max-w-sm text-left translate-x-96 w-fit ">
            <input 
            type="checkbox"
             checked={complete}
              onChange={onChange}
               className="rounded-full w-8 h-8 bg-cyan-600 border-1 shadow-sm"/>{/* should I add div and change it to circle*/ }
            
            <input 
            id="task" 
            type="text" 
            value={item.text} 
            onChange={editItem} 
            className=" h-8 shadow-md bg-cyan-600 text-white py-2 my-1"/>

            <button
            type="button"
            onClick={deleteItem}
            className="h-8 w-8 bg-cyan-600 border-2 text-white "
            >X</button>
        </div>
    )
}


function replaceItemAtIndex(arr, index, newValue) {
    return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
  }
function removeItemAtIndex(arr, index) {
    return [...arr.slice(0, index),...arr.slice(index + 1)];
  }

export default TodoItem;