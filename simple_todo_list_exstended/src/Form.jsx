import { InputField } from "./InputField";

export function Form(props) {
  function submit(e) {
    e.preventDefault();
    // console.log(e.target.elements.task.value);
    props.addTask(e.target.elements.task.value);
  }
  return (
    <form onSubmit={submit}>
      <InputField></InputField>
    </form>
  );
}
