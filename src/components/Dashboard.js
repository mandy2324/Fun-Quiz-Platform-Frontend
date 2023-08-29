import React from 'react';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { useHistory } from 'react-router-dom';




function Dashboard({ user, setUser }) {
    const history = useHistory();

    const handleLogout = () => {
        axios.get('http://localhost:5001/logout')
          .then(response => {
            console.log(response.data.message);
            setUser(null); // Clear user state after logout
            history.push('/login'); // takes the user to login page
          })
          .catch(error => {
            console.error('Logout error:', error.response ? error.response.data.message : error.message);
            // Handle logout error, if needed
          });
      };
    return (

        <div className="dashboard-bg">
            <div className="d-flex justify-content-end mb-3">
                <Button variant="outline-secondary" onClick={handleLogout}>
                    Logout
                </Button>
            </div>
            <div>
                <h2>Welcome to the Dashboard</h2>
                {/* Add your dashboard content here */}
            </div>
        </div>
    );
}

export default Dashboard;
