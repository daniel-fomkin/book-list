import "./App.css";

import About from "./components/About/About";
import BookCard from "./components/BookCard/BookCard";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";

import KelioneIRytoju from "/assets/kelione-i-rytoju.jpg";
import MiskoPaslaptis from "/assets/misko-paslaptis.jpg";
import MaziStebuklai from "/assets/mazi-kasdienybes-stebuklai.webp";

const siteTitle = "Mano knygų lentyna";
const heroTitle = "Atrask kitą savo knygą";
const heroSubtitle = "Istorijos tavo laisvalaikiui.";
const aboutText = "Dalijamės istorijomis, kurias verta perskaityti.";
const currentYear = 2026;

const bookList = [
  {
    id: 1,
    title: "Kelionė į rytojų",
    author: "Ieva Liepaitė",
    category: "Fantastika",
    description: "Nuotykis pasaulyje, kuriame viskas įmanoma.",
    price: 14.99,
    image: KelioneIRytoju,
  },
  {
    id: 2,
    title: "Miško paslaptis",
    author: "Tomas Vėjas",
    category: "Nuotykiai",
    description: "Netikėti atradimai prasideda nuo vieno žingsnio.",
    price: 12.5,
    image: MiskoPaslaptis,
  },
  {
    id: 3,
    title: "Maži kasdienybės stebuklai",
    author: "Rūta Saulė",
    category: "Gyvenimo būdas",
    description: "Įkvėpimas džiaugtis paprastais dalykais.",
    price: 16.0,
    image: MaziStebuklai,
  },
];

function App() {
  return (
    <>
      <Header title={siteTitle} />

      <Hero heading={heroTitle} heading2={heroSubtitle} />

      <main>
        <div>
          <h3>Rekomenduojamas knygos </h3>
          <div className="book-container">
            <BookCard bookData={bookList[0]} />
            <BookCard bookData={bookList[1]} />
            <BookCard bookData={bookList[2]} />
          </div>
        </div>

        <About about={aboutText} />
      </main>

      <Footer title={siteTitle} years={currentYear} />
    </>
  );
}

export default App;
