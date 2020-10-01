import React, { useState } from 'react';
import './App.scss';
import Tabela from './Components/tabela'
import Form from './Components/form'

function App() {

  const [users, setUsers] = useState([]);

  function handleSubmit(novoUsuario) {
    let novoUsers = users.concat(novoUsuario)
    setUsers(novoUsers)
  }
  function handleDelete(td) {
    let index = td.target.parentNode.getAttribute("index")
    users.splice(index, 1);
    let newState = [...users]
    setUsers(newState);
  }

  return (
    <div className="App">
      <div className="bg-wrapper">
        <div className="bg"></div>
      </div>
      <Form handleSubmit={handleSubmit} />
      <div className="table">
        <Tabela users={users} handleDelete={handleDelete} />
      </div>
    </div>
  );
}

export default App;
