import { HeroHeaderText } from "./HeroHeaderText";
import { Button } from "./Button";
import { HeroFig } from "./HeroFig";
export function Hero() {
  return (
    <section className="hero_section">
      <div>
        <HeroHeaderText
          headingText="Blockchain Finally made"
          headingHighlight="accessible"
          headingParagraf="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod deserunt porro tempora odit, error neque nisi"
        />
        <Button btnText="Get started"></Button>
      </div>
      <HeroFig pictureUrl="https://scontent-cph2-1.xx.fbcdn.net/v/t1.6435-9/180978949_314228950059549_1005358403722529104_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=usO7IqVmmYAAX-nfiem&_nc_ht=scontent-cph2-1.xx&oh=00_AfC2eU8Eu-6bifP16TidFAF8wj3jMXpZtCLvZUO6Sx4TTg&oe=645CB10E" />
    </section>
  );
}
