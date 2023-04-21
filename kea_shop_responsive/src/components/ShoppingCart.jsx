import BasketItem from "./BasketItem";

export default function ShoppingCart(props) {
  return (
    <>
      <article className="shopping_cart">
        <ul className="cart">
          {props.basket.map((product) => (
            <li key={product.id}>
              <BasketItem product={product} />
            </li>
          ))}
        </ul>
      </article>
    </>
  );
}
