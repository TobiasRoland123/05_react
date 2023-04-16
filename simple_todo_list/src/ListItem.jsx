export function ListItem(props) {
  return (
    <li className="list_item">
      <h2>{props.task}</h2>
      <button onClick={() => props.completeTask(props.id)}>Complete</button>
    </li>
  );
}
