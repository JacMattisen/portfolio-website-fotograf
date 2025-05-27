import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Gallery from './components/Gallery';


function App() {
  return (
    <>
      <Header />
      <div className="welcome-banner">
  <div className="banner-content">
    <h2>Bem-vindo(a) ao meu site 📸</h2>
    <p>Fotografias que eternizam momentos especiais</p>
  </div>
</div>

      <main>
        <section id="sobre" className="section">
          <h2>Sobre Mim</h2>
          <p>
            Olá! Sou <strong>Paula</strong>, fotógrafa apaixonada por capturar os momentos mais marcantes da sua vida.
          </p>
          <p>
            Meu portfólio é uma coleção de imagens que capturam a essência da vida — de retratos emocionantes a paisagens deslumbrantes.
          </p>
          <p>
            Espero que você goste do meu trabalho e sinta a emoção que cada foto transmite.
          </p>
        </section>

        <section id="galeria" className="section">
          <h2>Galeria</h2>
          <Gallery />
        </section>

        <section id="contato" className="section">
          <h2>Contato</h2>
          <p>Para agendar uma sessão de fotos ou para mais informações, entre em contato comigo:</p>
          <ul>
            <li>
              E-mail: <a href="mailto:paula.foto@email.com">paula.foto@email.com</a>
            </li>
            <li>
              WhatsApp: <a href="https://wa.me/1234567890" className="whatsapp-float" target="_blank" rel="noopener noreferrer">+12 345 678 90</a>
            </li>
            <li>
              Instagram: <a href="https://instagram.com/paula_fotografia" target="_blank" rel="noopener noreferrer">@paula_fotografia</a>
            </li>
            <li>
              Facebook: <a href="https://facebook.com/paula_fotografia" target="_blank" rel="noopener noreferrer">Paula Fotografia</a>
            </li>
          </ul>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;



