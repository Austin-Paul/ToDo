"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const recoil_1 = require("recoil");
const filterState_1 = require("../atom/filterState");
const TodoFilterItems = () => {
    const setFilterValue = (0, recoil_1.useSetRecoilState)(filterState_1.filterState);
    const filterHandle = (event) => {
        setFilterValue(event.target.value);
    };
    return (<div className="text-white mx-2">
        <button type="button" className="text-white mx-2" value="All" onClick={filterHandle}>All</button>
        <button type="button" className="text-white mx-2" value="Active" onClick={filterHandle}>Active</button>
        <button type="button" className="text-white mx-2" value="Completed" onClick={filterHandle}>Completed</button>

    </div>);
};
exports.default = TodoFilterItems;
