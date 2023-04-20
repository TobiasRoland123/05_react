import { ListItem } from "./ListItem";

export function ProductList(props) {
  return (
    <>
      {" "}
      <div className="list_wrapper">
        <h2> Product List</h2>

        <ul className="product_list">
          <ListItem articles={props.articles} basket={props.basket} addProduct={props.addProduct} />
        </ul>
      </div>
    </>
  );
}
