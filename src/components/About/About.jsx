import './About.css'

export default function About({ about }) {
  return (
    <section className="about" id="about">
      <h2>Apie mus</h2>
      <p>{about}</p>
    </section>
  );
}
