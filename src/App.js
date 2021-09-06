import './App.css';
import cardsData1 from './fixtures/cards1.json';
import cardsData2 from './fixtures/cards2.json';
import { Navbar, Hero, SupPageHero, Footer } from './components';
function App() {
  return (
    <div className='app'>
      <Navbar />
      <Hero />
      <h1 className='texto-bienvenida'>Texto de bienvenida</h1>
      <SupPageHero button={true} cardsData={cardsData1} />
      <SupPageHero button={false} cardsData={cardsData2} />
      <Footer />
    </div>
  );
}

export default App;
