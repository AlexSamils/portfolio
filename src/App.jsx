import { useState } from "react";
import "./App.css";

function App() {
  const [showBuster, setShowBuster] = useState(false);
  const [showNova, setShowNova] = useState(false);
  const [showFreaky, setShowFreaky] = useState(false);

  if (showFreaky) {
    return (
      <div className="project-page">
        <nav className="navbar">
          <div className="logo">Alexander Samils</div>

          <button className="back-button" onClick={() => setShowFreaky(false)}>
            ← Tillbaka
          </button>
        </nav>

        <main className="project-detail">
          <p className="project-type">Angular · Webbutveckling</p>

          <h1>Freaky Fashion</h1>

          <p className="project-description">
            Freaky Fashion är ett Angular-projekt där huvudfokus låg på att lära
            sig och arbeta med Angular. Projektet fokuserade främst på
            komponenter, struktur och funktionalitet, medan mindre tid lades på
            visuell design.
          </p>

          <div className="project-screenshots">
            <img
              src="/src/assets/FreakyFashion-main.png"
              alt="Freaky Fashion startsida"
            />

            <img
              src="/src/assets/FreakyFashion-product.png"
              alt="Freaky Fashion produktdetaljsida"
            />

            <img
              src="/src/assets/FreakyFashion-SearchResult.png"
              alt="Freaky Fashion sökresultat"
            />
          </div>
        </main>
      </div>
    );
  }

  if (showNova) {
    return (
      <div className="project-page">
        <nav className="navbar">
          <div className="logo">Alexander Samils</div>

          <button className="back-button" onClick={() => setShowNova(false)}>
            ← Tillbaka
          </button>
        </nav>

        <main className="project-detail">
          <p className="project-type">HTML · CSS · JavaScript</p>

          <h1>Nova</h1>

          <p className="project-description">
            En webbshop skapad med HTML, CSS och JavaScript med fokus på
            produktvisning, navigation och funktionalitet.
          </p>

          <div className="project-screenshots">
            <img
              src="/src/assets/Nova-main_index.html.png"
              alt="Nova webbshop"
            />

            <img
              src="/src/assets/Nova-main_cart.html.png"
              alt="Nova webbshop kundvagn"
            />
          </div>
        </main>
      </div>
    );
  }

  if (showBuster) {
    return (
      <div className="project-page">
        <nav className="navbar">
          <div className="logo">Alexander Samils</div>

          <button className="back-button" onClick={() => setShowBuster(false)}>
            ← Tillbaka
          </button>
        </nav>

        <main className="project-detail">
          <p className="project-type">Webbprojekt · Frontend</p>

          <h1>Buster Keaton Filmfestival</h1>

          <p className="project-description">
            En webbplats för Buster Keaton Filmfestival med fokus på struktur,
            innehåll och funktionalitet.
          </p>

          <div className="project-screenshots">
            <img
              src="/src/assets/buster-keaton-filmfestival-main_index.html.png"
              alt="Buster Keaton Filmfestival startsida"
            />

            <img
              src="/src/assets/buster-keaton-filmfestival-main_aboutkeaton.html.png"
              alt="Buster Keaton About Keaton sida"
            />

            <img
              src="/src/assets/buster-keaton-filmfestival-main_myscreenings.html.png"
              alt="Buster Keaton My Screenings sida"
            />
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="portfolio">
      <header className="navbar">
        <div className="logo">Alexander Samils</div>

        <nav>
          <a href="#projects">Projekt</a>
          <a href="#about">Om mig</a>
          <a href="#contact">Kontakt</a>
        </nav>
      </header>

      <main>
        <section className="hero">
          <p className="eyebrow">FRONTEND DEVELOPMENT STUDENT</p>

          <h1>
            Mitt namn är <span>Alexander.</span>
          </h1>

          <p className="hero-text">
            Jag studerar Frontend Development och gillar att skapa snygga,
            användarvänliga webbplatser med fokus på design och
            användarupplevelse.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="button primary">
              Mina projekt
            </a>

            <a href="#contact" className="button secondary">
              Kontakta mig
            </a>
          </div>
        </section>

        <section id="projects" className="section">
          <div className="section-heading">
            <p className="eyebrow">PORTFOLIO</p>
            <h2>Mina projekt</h2>
          </div>

          <div className="projects">
            <article className="project-card">
              <div className="project-image">
                <img
                  src="/src/assets/FreakyFashion-main.png"
                  alt="Freaky Fashion webbshop"
                />
              </div>

              <div className="project-content">
                <p className="project-type">Angular · Webbutveckling</p>

                <h3>Freaky Fashion</h3>

                <p>
                  En webbshop utvecklad i Angular med fokus på att lära sig
                  ramverket, komponentstruktur och funktionalitet.
                </p>

                <button
                  className="project-link"
                  onClick={() => setShowFreaky(true)}
                >
                  Visa projekt →
                </button>
              </div>
            </article>

            <article className="project-card">
              <div className="project-image">
                <img
                  src="/src/assets/Nova-main_index.html.png"
                  alt="Nova webbshop"
                />
              </div>

              <div className="project-content">
                <p className="project-type">HTML · CSS · JavaScript</p>

                <h3>Nova Webshop</h3>

                <p>
                  En webbshop skapad med HTML, CSS och JavaScript med fokus på
                  produktvisning, navigation och funktionalitet.
                </p>

                <button
                  className="project-link"
                  onClick={() => setShowNova(true)}
                >
                  Visa projekt →
                </button>
              </div>
            </article>

            <article className="project-card">
              <div className="project-image">
                <img
                  src="/src/assets/buster-keaton-filmfestival-main_index.html.png"
                  alt="Buster Keaton Filmfestival"
                />
              </div>

              <div className="project-content">
                <p className="project-type">Webbutveckling · Skolprojekt</p>

                <h3>Buster Keaton Filmfestival</h3>

                <p>
                  En webbplats för Buster Keaton Filmfestival med fokus på
                  struktur, design och användarupplevelse.
                </p>

                <button
                  className="project-link"
                  onClick={() => setShowBuster(true)}
                >
                  Visa projekt →
                </button>
              </div>
            </article>
          </div>
        </section>

        <section id="about" className="about section">
          <div>
            <p className="eyebrow">OM MIG</p>
            <h2>Webb, design och kreativitet</h2>
          </div>

          <div className="about-text">
            <p>
              Jag studerar Frontend Development på EC Utbildning i Västerås.
              Under utbildningen har jag arbetat med bland annat HTML, CSS,
              JavaScript, React och UX/UI.
            </p>

            <p>
              Jag är särskilt intresserad av webbdesign, användarupplevelse och
              det visuella på webben, men även av webbredaktion, CMS, SEO och
              innehåll.
            </p>

            <div className="skills">
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
              <span>React</span>
              <span>UX/UI</span>
              <span>Figma</span>
            </div>
          </div>
        </section>

        <section id="contact" className="contact section">
          <p className="eyebrow">KONTAKT</p>

          <h2>Har du ett projekt eller en LIA-plats?</h2>

          <p>
            Hör gärna av dig. Jag berättar gärna mer om mig själv och min
            utbildning.
          </p>

          <a href="mailto:ax.samils@gmail.com" className="button primary">
            Kontakta mig
          </a>
        </section>
      </main>

      <footer>
        <p>© 2026 Alexander Samils</p>
      </footer>
    </div>
  );
}

export default App;
