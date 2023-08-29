import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import Registration from './components/Registration';
import Login from './components/Login';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Fetch user data if logged in
    axios.get('http://localhost:5001/check-login').then(response => {
      setUser(response.data);
    });
  }, []);

  return (
    <Router>
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
      <div className="App">
      <Container className="d-flex justify-content-start">
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand>
              <Link to="/">Home</Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
                <Nav.Link as={Link} to="/register">
                  Register
                </Nav.Link>
                <Nav.Link as={Link} to="/login">
                  Login
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        </Container>


        <Container className="mt-4">
        <Routes>
          <Route path="/" exact>
            <>
              <>Home</>
              {user ? (
                <>Welcome, {user.first_name}!</>
              ) : (
                <>Please register or log in.</>
              )}
            </>
          </Route>
          <Route path="/register" component={Registration} />
          <Route path="/login" component={Login} />
        </Routes>
        </Container>
      </div>
      </div>

    </Router>

  );
}

export default App;