export function ExplainerSection() {
  return (
    <section className="explainerSection">
      <ExplainerHeader></ExplainerHeader>
      <ExplainerDetails></ExplainerDetails>
    </section>
  );
}
function ExplainerHeader() {
  return (
    <>
      <small>Who we are</small>
      <h2>
        We've been helpomg startups and scaleups through building a <span>blockchain ecosystem</span>
      </h2>
      <figure>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-emoji-sunglasses-fill"
          viewBox="0 0 16 16"
        >
          <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zM2.31 5.243A1 1 0 0 1 3.28 4H6a1 1 0 0 1 1 1v.116A4.22 4.22 0 0 1 8 5c.35 0 .69.04 1 .116V5a1 1 0 0 1 1-1h2.72a1 1 0 0 1 .97 1.243l-.311 1.242A2 2 0 0 1 11.439 8H11a2 2 0 0 1-1.994-1.839A2.99 2.99 0 0 0 8 6c-.393 0-.74.064-1.006.161A2 2 0 0 1 5 8h-.438a2 2 0 0 1-1.94-1.515L2.31 5.243zM4.969 9.75A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .866-.5z" />
        </svg>
      </figure>
    </>
  );
}
function ExplainerDetails() {
  return (
    <div className="exaplainerDetails">
      <DetailsHeader></DetailsHeader>
      <FoldOutDetails />
    </div>
  );
}
function DetailsHeader() {
  return (
    <div>
      <small>The problems</small>
      <h2>Have some doubts in mind?</h2>
      <figure className="bigFig">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-truck"
          viewBox="0 0 16 16"
        >
          <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5v-7zm1.294 7.456A1.999 1.999 0 0 1 4.732 11h5.536a2.01 2.01 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456zM12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12v4zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
        </svg>
      </figure>
    </div>
  );
}
function FoldOutDetails() {
  return (
    <div>
      <FoldOutComp />
      <FoldOutComp />
      <FoldOutComp />
    </div>
  );
}
function FoldOutComp() {
  return (
    <details>
      <summary>Fold me out for more information on this topic</summary>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, vitae veritatis tenetur eos beatae aliquid nostrum
        provident distinctio fugit facere laborum praesentium velit animi est voluptas id officiis doloremque repellendus?
      </p>
    </details>
  );
}
