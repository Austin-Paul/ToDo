import { useState } from "react";




const TodoItem=(props)=>{
    const {key,item,isComplete}=props;
    const [complete,setComplete]=useState(isComplete)//might have to use recoil or something to convey the change to local storage or to parent or something

    const onChange=()=>{
        
    }
    return(
        <div className="bg-white max-w-sm text-left translate-x-6">
            <button  type="button"  onChange={onChange} className="rounded-full w-8 h-8 bg-white border-2"/>
            <input type="text" value={item} className=" h-8 -translate-y-2 "/>
        </div>
    )
}

export default TodoItem;