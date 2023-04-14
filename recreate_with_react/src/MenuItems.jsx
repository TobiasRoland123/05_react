export default function MenuItems(props) {
  return (
    <div className="menu_items">
      <ul>
        <li>
          <a href="#"> {props.navLinks[0]}</a>
        </li>
        <li>
          <a href="#"> {props.navLinks[1]}</a>
        </li>
        <li>
          <a href="#"> {props.navLinks[2]}</a>
        </li>
        <li>
          <a href="#"> {props.navLinks[3]}</a>
        </li>
      </ul>
    </div>
  );
}
