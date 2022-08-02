import './App.css';
import { useState } from 'react';

function App() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function registerUser(event) {
    event.preventDefault();

    const response = await fetch('http://localhost:3005/api/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({name, email, password}),

    })

    const data = await response.json()
  
  }


  return (
    <div className="App">
     <h1>Register</h1>
     <form action="" onSubmit={registerUser}>
        <input 
            type="text" 
            placeholder="Name" 
            value={name}
            onChange={(e)=> setName(e.target.value)}
        /> 
        <br />
        <input 
            type="email" 
            placeholder="email" 
            value={email}
            onChange={(e)=> setEmail(e.target.value)}
        />
        <br />
        <input 
            type="password" 
            placeholder="password" 
            value={password}
            onChange={(e)=> setPassword(e.target.value)}
        />
        <br />
        <input type="submit" value='Register' />
     </form>
    </div>
  );
}

export default App;
