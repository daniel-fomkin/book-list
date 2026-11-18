import './Footer.css'
import Logo from '/assets/logo.png'


export default function Footer({ years, title }) {
  return (
    <footer>
      <div className="logo">
        <img src={Logo} alt="logo" />
        <h3>{title}</h3>

      </div>

      <p>
        © {years} {title}
      </p>
    </footer>
  );
}
