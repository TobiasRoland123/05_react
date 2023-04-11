import { Button } from "./App";

export function Header() {
  return (
    <header className="nav_header">
      <nav>
        <Logo />
        <MenuItems />
        <Button></Button>
      </nav>
    </header>
  );
}
function Logo() {
  return (
    <div className="logo_name">
      <h1>Byont</h1>
    </div>
  );
}
function MenuItems() {
  return (
    <div className="menu_items">
      <ul>
        <li>
          <a href="#"> Who are we</a>
        </li>
        <li>
          <a href="#"> The problems</a>
        </li>
        <li>
          <a href="#"> Our services</a>
        </li>
        <li>
          <a href="#"> Testimonials</a>
        </li>
      </ul>
    </div>
  );
}
