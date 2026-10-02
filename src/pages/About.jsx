import PageHero from '../components/PageHero.jsx';

const notes = [
  { label: 'Founded', value: '2014' },
  { label: 'Studio', value: '12 people' },
  { label: 'Cities', value: 'Lisbon & Glasgow' },
];

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="Studio"
        title="A small practice with a long table."
        text="We draw by hand in the morning and argue about materials in the afternoon. The menu you used to get here is the same one on Home, Work, and Contact."
      />
      <section className="section">
        <div className="wrap split">
          <h2>How the work begins.</h2>
          <div>
            <p>
              Most projects start with a walk. We measure light, listen for the
              street, and ask what should stay. Drawings come after that, and
              they stay specific to the site.
            </p>
            <p>
              The fixed navigation is part of this demo: it never leaves the
              viewport. Scroll and the bar shifts from a clear overlay to a
              paper surface. Hover a link and the item restyles on its own.
            </p>
          </div>
        </div>
        <div className="wrap stat-row">
          {notes.map((note) => (
            <article key={note.label}>
              <p className="eyebrow">{note.label}</p>
              <h3>{note.value}</h3>
            </article>
          ))}
        </div>
      </section>
      <section className="section section--deep">
        <div className="wrap narrow">
          <p className="eyebrow">A note</p>
          <h2>Good rooms are slightly quieter than the street outside.</h2>
          <p>
            That is the whole brief, most days. If you want to talk about a
            site, the contact page is one item away in the same fixed menu.
          </p>
        </div>
      </section>
    </>
  );
}
