import { BasketItem } from "./BasketItem";

export function ShoppingCart(props) {
  return (
    <div className="shopping_cart">
      <ul>
        <h3>Shopping cart</h3>

        {props.basket.map((product) => (
          <BasketItem product={product} removeProduct={props.removeProduct}></BasketItem>
        ))}
      </ul>
    </div>
  );
}
