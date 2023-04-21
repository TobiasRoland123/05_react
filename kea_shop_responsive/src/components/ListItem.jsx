import { Button } from "@mui/material";
import addTocart from "../functionality/addToCart";
export default function ListItem(props) {
  return (
    <>
      <img src={`https://kea-alt-del.dk/t7/images/webp/640/${props.product.id}.webp`} alt="product photo" />

      <div className="text_area">
        <h3>{props.product.productdisplayname}</h3>
        <p>{props.product.gender}</p>
        <p>{props.product.price},- </p>

        <Button variant="contained" onClick={() => addTocart(props.product, props.setBasket)}>
          Add to cart
        </Button>
      </div>
    </>
  );
}

{
  /* <Button
variant="contained"
onClick={() => props.setBasket((oldBasket) => oldBasket.concat([{ name: "ben", price: 200 }]))}
>
Add to cart
</Button> */
}
