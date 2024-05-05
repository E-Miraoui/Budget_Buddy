import ItemCard from "../components/ItemCard";

import { useState } from "react";

const ItemsAll = () => {

    // const [itemLabel, setItemLabel] = useState("");
    // const [itemDescription, setItemDescription] = useState("");
    // const [itemCateogry, setItemCateogry] = useState("");
    // const [itemPrice, setItemPrice] = useState("");



  return (
    <div className="all-items-container">
        <ItemCard />
    </div>
  );
};

export default ItemsAll;
