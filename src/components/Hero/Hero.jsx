import './Hero.css'

export default function Hero({ heading, heading2 }) {
  return (
    <section className="hero">
      <h3>SKAITYK. ATRASK. TOBULĖK.</h3>
      <h1>{heading}</h1>
      <p>{heading2}</p>
    </section>
  );
}
