import React from "react";
import RecipeReviewCard from "./Card.js";
import Grid from "./Grid.js";
import LayoutTextFields from "./Form.js";
import Date from "./Date.js";
import Pagination from "react-bootstrap/Pagination";
import Rheostat from "./Rheostat.js"
export default function Body() {
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
        <Rheostat />
      <LayoutTextFields />
      <Date />
    </div>
  );
}
