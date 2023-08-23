import React, { useState } from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    const loginData = {
      username,
      password,
    };

    axios.post('/login', loginData).then(response => {
      console.log(response.data);
    });
  };

  return (
    <div
    style={{
      background: `url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7HbenPKbopMZmrWrxgYWBj-d3OqT3crsCSg&usqp=CAU") no-repeat center center fixed`,
      backgroundSize: 'cover',
      minHeight: '100vh', // Ensures the background covers the full viewport height
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
      <div>
      <h2>Login</h2>
      <Form>
        <Form.Group controlId="formBasicUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Username"
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" onClick={handleLogin}>
          Login
        </Button>
      </Form>
    </div>
    </div>
  );
};
export default Login;
