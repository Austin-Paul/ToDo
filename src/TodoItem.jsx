import { useState } from "react";




const TodoItem=(props)=>{
    const {key,item,isComplete}=props;
    const [complete,setComplete]=useState(isComplete)//might have to use recoil or something to convey the change to local storage or to parent or something

    const onChange=(event)=>{
       setComplete(!complete);
    //    if(complete)//executed before value of complete gets updated
    //     document.getElementById("task").className="line-through"
    //     event.target.className="rounded-full w-8 h-8 bg-white border-2"
    }
    return(
        <div className="bg-white max-w-sm text-left translate-x-6">
            <input type="checkbox" checked={complete} onChange={onChange} className="rounded-full w-8 h-8 bg-white border-2 shadow-sm"/>{/* should I add div and change it to circle*/ }
            <input id="task" type="text" value={item} className=" h-8 shadow-md border-white "/>
        </div>
    )
}

export default TodoItem;