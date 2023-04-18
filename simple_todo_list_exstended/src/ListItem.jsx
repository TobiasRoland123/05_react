export function ListItem(props) {
  return (
    <li key={props.key} className="list_item">
      <h2>{props.task}</h2>
      <button onClick={() => props.completeTask(props.id)}>Complete</button>
    </li>
  );
}
