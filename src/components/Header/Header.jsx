import "./Header.css"
import Logo from '/assets/logo.png'

export default function Header({ title }) {
  return (
    <header>
      <h3><img src={Logo} alt="logo" className="logo"/> {title}</h3>
      <ul>
        <li>
          <a href="#">Pradžia</a>
        </li>
        <li>
          <a href="#">Knygos</a>
        </li>
        <li>
          <a href="#">Apie mus</a>
        </li>
      </ul>
    </header>
  );
}
