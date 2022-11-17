import React from 'react'
import { useState } from 'react'

interface ToDoType {
  todo: string
  onCloseClick: any
}

function ToDo({ todo, onCloseClick }: ToDoType) {
  const [checked, setChecked] = useState<boolean>(false)

  const handleCheck = () => {
    setChecked(!checked)
  }

  return (
    <div className="sectionCheck">
      <div className="check">
        <input
          type="checkbox"
          defaultChecked={checked}
          onChange={handleCheck}
        />
        <span className={checked ? 'todoItem--done' : 'todoItem'}>{todo}</span>
      </div>
      <button className="remove" onClick={() => onCloseClick(todo)}>
        x
      </button>
    </div>
  )
}
export default ToDo
