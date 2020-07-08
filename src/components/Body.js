import React,{useState,useEffect} from "react";
import RecipeReviewCard from "./Card.js";
import Grid from "./Grid.js";
import LayoutTextFields from "./Form.js";
import Date from "./Date.js";
import Pagination from "react-bootstrap/Pagination";
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
export default function Body() {
    const [items, setItems] = useState([]);
    const [minPrice, setMinPrice] = useState(1);
    const [maxPrice, setMaxPrice] = useState(1000);
    const [isDragging, setIsDragging] = useState(false);
     // const data = await fetch(
        //       `http://localhost:5000/experiences?minPrice=${minPrice}&maxPrice=${maxPrice}`
        //     );
    // useEffect(() => {
    //   async function fetchData() {
    //     const data = await fetch(
    //       `http://localhost:5000/experiences?minPrice=${minPrice}&maxPrice=${maxPrice}`
    //     );
   
    //     const resp = await data.json();
    //     console.log(resp)
    //     setItems(resp.data);
    //   }
    //   fetchData();
    // }, [minPrice, maxPrice]);
  
    const handleChange = (e) => {
      setMinPrice(e.values[0]);
      setMaxPrice(e.values[1]);
    };
  return (
    <div>
      <Grid>
        <Grid container spacing={3}>
          <Grid item xs={6} sm={3}>
            <RecipeReviewCard />
          </Grid>
          <Grid item xs={6} sm={3}>
            <RecipeReviewCard />
          </Grid>
          <Grid item xs={6} sm={3}>
            <RecipeReviewCard />
          </Grid>
          <Grid item xs={6} sm={3}>
            <RecipeReviewCard />
          </Grid>
        </Grid>
      </Grid>
      <Pagination className="text-center justify-item-center m-5">
        <Pagination.First />
        <Pagination.Prev />
        <Pagination.Item>{1}</Pagination.Item>
        <Pagination.Ellipsis />

        <Pagination.Item>{10}</Pagination.Item>
        <Pagination.Item>{11}</Pagination.Item>
        <Pagination.Item active>{12}</Pagination.Item>
        <Pagination.Item>{13}</Pagination.Item>
        <Pagination.Item disabled>{14}</Pagination.Item>

        <Pagination.Ellipsis />
        <Pagination.Item>{20}</Pagination.Item>
        <Pagination.Next />
        <Pagination.Last />
      </Pagination>
      <LayoutTextFields />
      <Date />
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
        placeholder="$"
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
