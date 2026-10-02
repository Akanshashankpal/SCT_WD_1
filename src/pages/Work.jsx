import PageHero from '../components/PageHero.jsx';

const items = [
  {
    place: 'Lisbon',
    title: 'Courtyard house',
    year: '2025',
    tone: '#c45c26',
    note: 'A family house wrapped around a shaded court.',
  },
  {
    place: 'Kyoto',
    title: 'Reading room',
    year: '2025',
    tone: '#3f5c4b',
    note: 'A single long room for books, paper, and rain.',
  },
  {
    place: 'Oslo',
    title: 'Harbor gallery',
    year: '2024',
    tone: '#8a6232',
    note: 'Daylight from the north wall, timber everywhere else.',
  },
  {
    place: 'Oaxaca',
    title: 'Kitchen school',
    year: '2024',
    tone: '#a33b32',
    note: 'Cooking, teaching, and a courtyard that cools the plan.',
  },
  {
    place: 'Glasgow',
    title: 'Lane studio',
    year: '2023',
    tone: '#3d4c5c',
    note: 'A workspace tucked into a former print shop.',
  },
  {
    place: 'Jaipur',
    title: 'Garden pavilion',
    year: '2023',
    tone: '#b06a2c',
    note: 'Shade, stone seating, and a thin roof over the garden.',
  },
];

export default function Work() {
  return (
    <>
      <PageHero
        eyebrow="Work"
        title="Buildings with a long afternoon."
        text="Six recent projects. The navigation stays on this page, and on every other page, while you scroll."
      />
      <section className="section">
        <div className="wrap project-list">
          {items.map((item) => (
            <article className="project-row" key={item.title}>
              <div
                className="project-row__swatch"
                style={{ background: item.tone }}
              />
              <div>
                <p className="eyebrow">
                  {item.place} · {item.year}
                </p>
                <h2>{item.title}</h2>
                <p>{item.note}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
