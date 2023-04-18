import { ListItem } from "./ListItem";

export function List(props) {
  return (
    <div className="list_wrapper">
      <h3>List of tasks to do</h3>
      <ul className="list_container">
        {props.tasks.map((task) => (
          <ListItem {...task} completeTask={props.completeTask} key={task.id} />
        ))}
      </ul>
    </div>
  );
}
