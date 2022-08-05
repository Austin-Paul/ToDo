

import React from "react";
import {  useSetRecoilState } from "recoil";
import {filterState} from '../atom/filterState';

const TodoFilterItems=()=>{
    const setFilterValue=useSetRecoilState(filterState);
const filterHandle=(event:any)=>{
setFilterValue(event.target.value);
}

return(
    <div className="text-white mx-2">
        <button type="button"  className="text-white mx-2" value="All" onClick={filterHandle}>All</button>
        <button type="button"  className="text-white mx-2" value="Active" onClick={filterHandle}>Active</button>
        <button type="button"  className="text-white mx-2" value="Completed" onClick={filterHandle}>Completed</button>

    </div>
)
}

export default TodoFilterItems;