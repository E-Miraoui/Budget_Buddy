/*dashboard mta3 luser (il items ily chrahom)*/

import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom'; // Import useLocation hook
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesomeIcon
import Item from '../components/itemcomponent/item';
import 'bootstrap/dist/css/bootstrap.min.css';
//import backgroundImage from '../../assets/background.jpg'; // Import the background image

function Dashboard() {
  const [user, setUser] = useState(null);
  const [items, setItems] = useState([]);
  const location = useLocation(); // Use useLocation hook to access the current location
  
  useEffect(() => {
    async function fetchUserData() {
      try {
        // Extract the user ID from the URL parameters
        const searchParams = new URLSearchParams(location.search);
        const userId = searchParams.get('userId');

        // Fetch user data based on the user ID
        // Modify the URL to include the user ID
        const headers = {
          'Content-Type': 'application/json'
        };
        /*const userInfoResponse = await fetch(`http://localhost:8000/profile/info?userId=${userId}`, { headers });
        const userData = await userInfoResponse.json();
        setUser(userData);*/

        // Fetch items based on the user ID
        const itemsResponse = await fetch(`http://localhost:8080/user/${userId}/items`, { headers });
        const itemsData = await itemsResponse.json();
        setItems(itemsData);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    }
    fetchUserData();
  }, [location.search]); // Add location.search to the dependencies array

  return (
    <div className="container-fluid" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', minHeight: '100vh' }}>
      {user && (
        <div className="row">
          <aside className="col-lg-3 col-sm-12 aside d-flex flex-column justify-content-between">
            <div className="text-center" style={{ marginTop: '10%' }}>
              <h1>{user.firstName} {user.lastName}</h1>
              <p>{user.email}</p>
            </div>
            <div>
            <li ><a type='button' className={'btn text-center btn1' }>Help</a></li>
            </div>
          </aside>
          <main className="col-lg-9 col-sm-12">
            <div className="row row-cols-3">
              {
                items.length > 0 ? (
                  items.map((i) => {
                    return (<Item key={i.name} item={i} />)
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
/*const userInfoResponse = await fetch('http://localhost:8000/profile/info', { headers });
          console.log('Received user data:', userInfoResponse.status);
          const userData = await userInfoResponse.json();
          console.log('Received user data:', userData);

          setUser(userData);*/