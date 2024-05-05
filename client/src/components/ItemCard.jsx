import Card from "react-bootstrap/Card";

import Button from "react-bootstrap/Button";
import { useEffect, useState } from "react";
import axios from "axios";

const ItemCard = ({ item }) => {
  const [category, setCategory] = useState("Unknown");

  const queryParams = new URLSearchParams(window.location.search);
  const userId = queryParams.get("user");

  const handlePurchase = async (itemId) => {
    try {
      if (userId) {
        const response = await axios.post(
          "http://localhost:8080/api/v1/user/" + userId + "/addItem",
          itemId
        );
        console.log("Response:", response.data);
      } else {
        console.log("YOU'RE NOT AUTHENTICATED");
      }
    } catch (error) {
      console.log("Error during the purchase operation: " + error.response.data);
    }
  };

  useEffect(() => {
    const getCategory = async () => {
      try {
        const response = await axios(
          "http://localhost:8080/api/v1/categories/" + item.categoryId
        );
        await setCategory(response.data.name);
      } catch (error) {
        console.log("Error fetching items: " + error);
      }
    };

    getCategory();
  }, []);

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{category}</Card.Subtitle>
        <Card.Text>{item.description}</Card.Text>
        <Button onClick={() => handlePurchase(item.id)}>Purchase</Button>
        <Card.Text>{item.price} TND</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ItemCard;
