import "./Header.css"
import Logo from '/assets/logo.png'

export default function Header({ title }) {
  return (
    <header>
      <div className="logo">
        <img src={Logo} alt="logo" />
        <h3>{title}</h3>

      </div>

      <nav>
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
      </nav>
    </header>
  );
}
