export function InputField() {
  return (
    <>
      <label for="task">New task </label>
      <div className="input_container">
        <input type="text" name="task" id="task" required></input>
        <button>Add</button>
      </div>
    </>
  );
}
