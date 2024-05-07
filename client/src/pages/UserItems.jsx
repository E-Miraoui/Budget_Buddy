import React, { useState, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom'; // Import useLocation hook
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesomeIcon
import Item from '../components/itemcomponent/item';
import 'bootstrap/dist/css/bootstrap.min.css';
//import backgroundImage from '../../assets/background.jpg'; // Import the background image

function Dashboard() {
  const [user, setUser] = useState(null);
  const [items, setItems] = useState([]);
  const { userId } = useParams(); 
  const location = useLocation(); 

  useEffect(() => {
    async function fetchUserData() {
      try {
        const headers = {
          'Content-Type': 'application/json'
        };

        // Fetch items based on the user ID
        const itemsResponse = await fetch(`http://localhost:8080/api/v1/user/${userId}/items`, { headers });
        const itemsData = await itemsResponse.json();
        setItems(itemsData);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    }
    fetchUserData();
  }, [userId, location.search]); // Add userId to the dependencies array

  return (
    <div className="container-fluid">
      {items && (
        <div className="row">
          <main className="col-lg-9 col-sm-12">
            <div className="row row-cols-3">
              {
                items.length > 0 ? (
                  items.map((i, id) => {
                    return (<Item key={id} item={i} />)
                  })
                ) : (
                  <h1> </h1>
                )
              }
            </div>
          </main>
        </div>
      )}
    </div>
  );
}

export default Dashboard;
