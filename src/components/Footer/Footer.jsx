import './Footer.css'
import Logo from '/assets/logo.png'


export default function Footer({ years, title }) {
  return (
    <footer>
      <h3><img src={Logo} alt="logo" className='logo' /> {title}</h3>

      <p>
        © {years} {title}
      </p>
    </footer>
  );
}
