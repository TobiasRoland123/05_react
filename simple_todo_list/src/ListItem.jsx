import { Button } from "./Button";

export function ListItem() {
  return (
    <li className="list_item">
      some task
      <Button btnText="Complete"></Button>
    </li>
  );
}
