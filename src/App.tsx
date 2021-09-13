import React from 'react';
import {useTypedSelector} from "./hooks/use-type-selector";
import {todoList} from "./api/todo.functions";

function App() {
    const test = useTypedSelector((state) => state);
    console.log('test',test);
    return (
        <div>ToDo List
            <button type="button"
            onClick={() => {todoList.categoryCreate('tessst')}}>Test Category</button>
            <button type="button"
            onClick={() => {todoList.taskCreate('tessst', 'test')}}>Test Task</button>
        </div>
    );
}

export default App;
