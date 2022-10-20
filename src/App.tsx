import React, { useState } from 'react';

import './App.css';
import './styles/toDoList.css';
import './styles/toDo.css';

import NewSection from './components/NewSection';


function App() {
  const [name, setName] = useState<string>('');
  let [sectionList, setSectionList] = useState<any[]>([]);

  const handleInputUSer = (event: any) => {
    setName(event.target.value);
}

const handleOnClickAddUser = () => {
  if (name !== "") {
    sectionList.push( <NewSection name={name}/>)
    setName('');
  }
}
  return (
    <div className='app'>
      <h1>Podział obowiązków domowników</h1>
      <div className='userArea'>
        <input
                  className='addUser'
                  placeholder='Wpisz nowego użytkownika'
                  value={name} 
                  onChange={handleInputUSer}
              />
              <button
                  className='addUser'
                  onClick={handleOnClickAddUser}
                  >Dodaj użytkownika
              </button>
      </div>
        <div className='main'>
            {sectionList}
        </div>
    </div>
  );
}

export default App;
