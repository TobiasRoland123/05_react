import ListItem from "./ListItem";

export default function ProductList(props) {
  return (
    <>
      <div className="product_list_wrapper">
        <ul className="product_list">
          {props.articles.map((product) => (
            <li key={product.id} className="list_item">
              <ListItem product={product} setBasket={props.setBasket} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
