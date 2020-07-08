import React, { useState, useEffect } from "react";
import Rheostat from "rheostat";
import ThemedStyleSheet from "react-with-styles/lib/ThemedStyleSheet";
import aphroditeInterface from "react-with-styles-interface-aphrodite";
import DefaultTheme from "rheostat/lib/themes/DefaultTheme";
import { Row, Col } from "react-bootstrap";
ThemedStyleSheet.registerInterface(aphroditeInterface);
ThemedStyleSheet.registerTheme(DefaultTheme);
const Item = (title, pictureUrl, country, price, duration) => {
    return (
      <div>
        <h2>{title}</h2>
        <img src={pictureUrl} alt="picture URL" />
      </div>
    );
  };
export default function Rheostat2() {
  const [items, setItems] = useState([]);
  const [minPrice, setMinPrice] = useState(1);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [isDragging, setIsDragging] = useState(false);
  useEffect(() => {
    async function fetchData() {
      const data = await fetch(
        `http://localhost:3000/items?minPrice=${minPrice}&maxPrice=${maxPrice}`
      );
      const resp = await data.json();
      setItems(resp.data);
    }
    fetchData();
  }, [minPrice, maxPrice]);

  const handleChange = (e) => {
    setMinPrice(e.values[0]);
    setMaxPrice(e.values[1]);
  };
  return (
    <div>
      <Rheostat
        min={1}
        max={1000}
        values={[minPrice, maxPrice]}
        onChange={handleChange}
        //   onValuesUpdated={handleValuesUpdated}
        onSliderDragStart={() => setIsDragging(true)}
        onSliderDragEnd={() => setIsDragging(false)}
      />
      <input
        type="text"
        value={minPrice}
        onChange={(e) => setMinPrice(e.target.value)}
      />
      <Row style={{ opacity: isDragging ? "0.5" : "1" }}>
        {items.map((e) => (
          <Col sm={4}>
            <Item {...e} />
          </Col>
        ))}
      </Row>
    </div>
  );
}
