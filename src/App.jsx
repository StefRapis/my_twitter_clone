/*
6-3-2023

Esercizio
Sulla base della lezione del giorno creare un progetto chiamato twitter-clone utilizzando Vite.

Creare una struttura simile a quanto visto a lezione, in ottica mobile-first;
Completare almeno la sezione relativa ai messagi, <Content />;
Aiutarsi con i grafici come visto a lezione.
Trovate in allegato i grafici che abbiamo realizzato a lezione

Avanzato
Completare tutta l'applicazione ad esclusione del componente <TrendItem />

/////////////////////////////////////////////////////////////////////////////////////////*/

import "./App.css";
import Content from "./components/content";
import SideMenu from "./components/sideMenu";
import Footer from "./components/footer";
import SideTrends from "./components/sideTrends";

function App() {
  return (
    <div className="App">
      <Content />
      <SideMenu />
      <Footer />
      <SideTrends />
    </div>
  );
}

export default App;
