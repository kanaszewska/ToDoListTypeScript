import React from 'react';
import ToDoList from './ToDoList';

import '../styles/newSection.css';

export interface SectionType {
  name: string,
};

const NewSection = ({name}: SectionType) => {
    
  return (
    <div className='newSection'>
        <section className='user'>
            <h3>{name}</h3>
              <ToDoList/>
          </section>
    </div>
  )
}

export default NewSection