import ItemCard from "../components/ItemCard";

import { useState, useEffect } from "react";
import axios from "axios";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const ItemsAll = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios("http://localhost:8080/api/v1/items");
        await setItems(response.data);
        setLoading(false);
      } catch (error) {
        setError("Error fetching items: " + error);
      }
    };

    fetchItems();
  }, []);

  return (
    <>
      {loading && <h2>Loading ...</h2>}
      {error && <p>{error}</p>}
      {!error && !loading && (
        <div className="all-items-container">
          {items.length === 0 && <h2>The items list is empty !</h2>}
          {items && (
            <div className="items">
              <h2 className="items-count">{items.length} items found</h2>
              <Row>
                {items.map((item, id) => (
                  <Col className="item-card" key={id}>
                    <ItemCard item={item} />
                  </Col>
                ))}
              </Row>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default ItemsAll;
