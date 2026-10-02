import { Link } from 'react-router-dom';

const principles = [
  {
    title: 'Material',
    text: 'Timber, lime, and stone chosen for how they age in real weather, not for a render.',
  },
  {
    title: 'Light',
    text: 'Rooms are planned around the path of the sun so the day does the decorating.',
  },
  {
    title: 'Measure',
    text: 'A quiet plan, a generous threshold, and just enough room to pause.',
  },
];

const featured = [
  { place: 'Lisbon', title: 'Courtyard house', tone: '#c45c26' },
  { place: 'Kyoto', title: 'Reading room', tone: '#3f5c4b' },
  { place: 'Oslo', title: 'Harbor gallery', tone: '#8a6232' },
];

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="wrap hero__content">
          <p className="eyebrow">Architecture studio</p>
          <h1>Spaces that hold their weather.</h1>
          <p className="lede">
            Meridian designs houses, rooms, and small civic buildings. The menu
            stays fixed while you move through the site, and it changes as you
            scroll.
          </p>
          <div className="hero__actions">
            <Link className="button" to="/work">
              View the work
            </Link>
            <Link className="button button--ghost" to="/about">
              The studio
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <p className="eyebrow">The practice</p>
          <h2>Three things we refuse to rush.</h2>
          <div className="card-grid">
            {principles.map((item) => (
              <article className="info-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--deep">
        <div className="wrap">
          <p className="eyebrow">Selected work</p>
          <h2>Recent rooms.</h2>
          <div className="card-grid">
            {featured.map((item) => (
              <article className="project-card" key={item.title}>
                <div
                  className="project-card__swatch"
                  style={{ background: item.tone }}
                />
                <p className="eyebrow">{item.place}</p>
                <h3>{item.title}</h3>
              </article>
            ))}
          </div>
          <p className="section__more">
            <Link to="/work">See the full list</Link>
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap split">
          <h2>Watch the menu as you move.</h2>
          <p>
            Scroll and the bar settles onto paper, picks up a shadow, and draws
            an accent line. Hover a menu item and the label turns clay-orange,
            an underline grows in, and a soft pill slides behind the word. On a
            narrow screen the same links fold into a menu that stays pinned to
            the top.
          </p>
        </div>
      </section>
    </>
  );
}
