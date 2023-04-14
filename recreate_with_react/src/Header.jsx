import { Button } from "./Button";
import { Logo } from "./Logo";
import MenuItems from "./MenuItems";

export function Header() {
  return (
    <header className="nav_header">
      <nav>
        <Logo companyName="Byont" />
        <MenuItems navLinks={["Who are we", "The problems", "Our services", "Testimonials"]} />
        <Button btnText="Contact us"></Button>
      </nav>
    </header>
  );
}
