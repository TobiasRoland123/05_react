import { Button } from "./Button";

export function InputField() {
  return (
    <>
      <label for="task">New task </label>
      <div className="input_container">
        <input type="text" name="task" id="task"></input>
        <Button btnText="Add"></Button>
      </div>
    </>
  );
}
