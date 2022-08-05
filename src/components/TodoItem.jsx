import { useState } from "react";
import { useRecoilState } from "recoil";
import { todoListState } from "../atom/todoListState";




const TodoItem=({item})=>{//destructuring
    // const {item,isComplete}=item;
    const [todolist,setTodoList]=useRecoilState(todoListState)
    const [complete,setComplete]=useState(item.isComplete)//might have to use recoil or something to convey the change to local storage or to parent or something
    const index=todolist.findIndex((listItem) => listItem === item);

    const onChange=(event)=>{
       setComplete(!complete);

       const newList = replaceItemAtIndex(todolist, index, {
        ...item,
         isComplete:!complete,       
       });
       window.localStorage.setItem("user-basket", JSON.stringify(newList));
       setTodoList(newList);
       if(!complete)//executed before value of complete gets updated
         document.getElementById(`${item.id}`).className="bg-red-500 py-2 my-1"
        else
         document.getElementById(`${item.id}`).className="bg-cyan-600 text-white py-2 my-1"
        //  event.target.className="rounded-full w-8 h-8 bg-white border-2"
    }

    const editItem=(event)=>{
        
        const newList = replaceItemAtIndex(todolist, index, {
           ...item,
            text: event.target.value,       
          });
          window.localStorage.setItem("user-basket", JSON.stringify(newList));
          setTodoList(newList);
    }

    const deleteItem=()=>{
        const newList=removeItemAtIndex(todolist,index);
        window.localStorage.setItem("user-basket", JSON.stringify(newList));
        setTodoList(newList);
    }

    return(
        <div className="bg-cyan-600  rounded-md shadow-md sm:m-auto m-4  ">
            <input 
            type="checkbox"
             checked={complete}
              onChange={onChange}
               className="rounded-full w-8 h-8 bg-cyan-600 border-1 shadow-sm"/>{/* should I add div and change it to circle*/ }
            
            <input 
            id={`${item.id}` }
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