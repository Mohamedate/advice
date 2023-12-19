export default function Divider() {
  return (
    <picture>
      <source
        srcSet="./images/pattern-divider-desktop.svg"
        media="(min-width: 800px)"
      />
      <source srcSet="./images/pattern-divider-mobile.svg" />
      <img
        className=" my-8 mx-auto"
        src="./images/pattern-divider-desktop.svg"
        alt="divider"
      />
    </picture>
  );
}
