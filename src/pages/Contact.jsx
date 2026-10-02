import { useState } from 'react';
import PageHero from '../components/PageHero.jsx';

export default function Contact() {
  const [sent, setSent] = useState(false);

  function onSubmit(event) {
    event.preventDefault();
    setSent(true);
  }

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Write to the studio."
        text="Tell us about the site, the city, and what the room needs to do. This page keeps the same fixed menu."
      />
      <section className="section">
        <div className="wrap contact-layout">
          <form className="form" onSubmit={onSubmit}>
            <label>
              Name
              <input name="name" type="text" autoComplete="name" required />
            </label>
            <label>
              Email
              <input name="email" type="email" autoComplete="email" required />
            </label>
            <label>
              Project
              <textarea name="project" rows="5" required />
            </label>
            <button className="button" type="submit">
              Send note
            </button>
            {sent ? (
              <p className="form__note" role="status">
                Thanks. This demo keeps the note in the browser only.
              </p>
            ) : null}
          </form>
          <aside className="contact-aside">
            <p className="eyebrow">Visit</p>
            <h2>Rua da Prata 18, Lisbon</h2>
            <p>Weekdays, 10:00–18:00. The lane studio in Glasgow is by appointment.</p>
            <p>
              <a href="mailto:studio@meridian.example">studio@meridian.example</a>
            </p>
          </aside>
        </div>
      </section>
    </>
  );
}
