export function HeroHeaderText(props) {
  return (
    <>
      <h1 className="hero_header">
        {props.headingText}
        <span>{props.headingHighlight}</span>
      </h1>
      <p>{props.headingParagraf}</p>
    </>
  );
}
