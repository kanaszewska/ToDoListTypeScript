import React, { useState } from 'react';
import ToDo from './ToDo';

export interface ListType {
    todos: string[],
    inputValue: string,
  };

function ToDoList () {
    const [toDoList, setToDoList] = useState<ListType>({
        todos: [], 
        inputValue: ""
    });


    const handleInputChange = (event: any): void => {
        setToDoList({
            ...toDoList,
            inputValue: event.target.value,
        });
    };

    const handleOnClick = () => {
    if (inputValue === "") return;
       const { todos } = toDoList;
       setToDoList({
        todos: [...todos, inputValue],
        inputValue: "",
       })
    };

    const handleOnClickRemove = (todoValue: string) => {
        const { todos } = toDoList;
        setToDoList({
            ...toDoList,
            todos: todos.filter(todo=>todo !== todoValue),
        })
    };

    const { todos, inputValue } = toDoList;
    return ( 
        <div className='container'>
            <input
                placeholder='Enter a new task'
                value={inputValue} 
                onChange={handleInputChange}
            />
            <button
                className='add'
                onClick={handleOnClick}>
                    Add
            </button>
                {todos.map((todo) => (
            <ToDo
                key={todo}
                todo={todo}
                onCloseClick={handleOnClickRemove}
            />
            ))}
        </div>
     );
}
 
export default ToDoList;