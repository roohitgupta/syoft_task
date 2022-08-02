
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Register.css"

function Register() {

  const nevigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [number, setNumber] = useState('');
  const [role, setRole] = useState('');

  async function registerUser(event) {
    event.preventDefault();

    const response = await fetch('http://localhost:3005/api/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, password, number, role }),

    })

    const data = await response.json()
    if (data.status === 'ok') {
			nevigate('/login')
		}
  }


  return (
    <div className="container">
     <h1>Register</h1>
     <form className='form' action="" onSubmit={registerUser}>
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
        <input 
            type="number" 
            placeholder="Number" 
            value={number}
            onChange={(e)=> setNumber(e.target.value)}
        />
        <br />
        <select name="role" id="role" onChange={(e)=> setRole(e.target.value)}>
          <option value="admin">admin</option>
          <option value="manager">manager</option>
          <option value="staff">staff</option>
        </select>

        <br />

        <input className='submitBtn' type="submit" value='Register' />
     </form>
    </div>
  );
}

export default Register;
