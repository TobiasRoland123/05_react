import { ListItem } from "./ListItem";

export function List(props) {
  return (
    <>
      <h3>List of tasks to do</h3>
      <ul className="list_container">
        {props.tasks.map((task) => (
          <ListItem {...task} completeTask={props.completeTask} />
        ))}
      </ul>
    </>
  );
}
