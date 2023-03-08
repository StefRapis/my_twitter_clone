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

/////////////////////////////////////////////////////////////////////////////////////////

Esercizio 08-03-2023
Sulla base della lezione del giorno, sostituire tutta la logica relativa ai componenti, interni a <Content /> di modo che non utilizzino più i mocks ma che prendano dai seguenti indirizzi le informazioni necessarie:

https://dummyjson.com/posts
https://dummyjson.com/users
Avanzato
Creare un mock personalizzato per la lista dei trends e arricchirla a piacere. */

import "./App.css";
import Content from "./components/content";
// import SideMenu from "./components/sideMenu";
import Footer from "./components/footer";
import SideTrends from "./components/sideTrends";

function App() {
  return (
    <div className="App">
      <Content />
      {/* <SideMenu /> */}
      <Footer />
      <SideTrends />
    </div>
  );
}

export default App;
