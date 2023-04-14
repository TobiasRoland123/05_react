import { ListItem } from "./ListItem";

export function List() {
  return (
    <>
      <h3>List of tasks to do</h3>
      <ul className="list_container">
        <ListItem></ListItem>
        <ListItem></ListItem>
        <ListItem></ListItem>
        <ListItem></ListItem>
      </ul>
    </>
  );
}
