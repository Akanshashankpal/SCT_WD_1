export default function PageHero({ eyebrow, title, text }) {
  return (
    <header className="page-hero">
      <div className="wrap">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        {text ? <p className="lede">{text}</p> : null}
      </div>
    </header>
  );
}
