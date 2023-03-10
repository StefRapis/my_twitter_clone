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
Creare un mock personalizzato per la lista dei trends e arricchirla a piacere. 

///////////////////////////////////////////////////////////////////////////////////////////

Esercizio 09-03-2023
Sulla base della lezione del giorno, utilizzare il nuovo hook useRef su una funzionalità a vostro piacere. Importante aggiungere un commentino che cominci in questo modo:

  // Esercizio 09-03-2023 - useRef
  // ... descrizione della vostra funzionalità ...
  // ...

Avanzato
Sfruttare la input presente nel componente <Header /> al fine di eseguire un filtro ricerca della lista dei messaggi. Filtrare per contenuto dell'immagine (chiave dell'oggetto in questione: body) */

// USEREF: HO SOLO AVUTO ACCESSO ALLE PROPRIETA' DEL FOOTER TRAMITE PULSANTE CONTENUTO IN ESSO

///////////////////////////////////////////////////////////////////////////////////////////////////////////

/* Esercizio 10-03-2023
Sulla base della lezione del giorno, ricreare una sezione o modale che permetta la modifica di ogni singolo messaggio al click su apposito elemento. 
Per lo stile di questa modale o sezione seguite pure quanto fatto a lezione o siate più creativi! */

import { useState } from "react";
import "./App.css";
import Modal from "./components/modal";
import SideMenuDesktop from "./components/sideMenuDesktop";
import Content from "./components/content";
import Footer from "./components/footer";
import SideTrends from "./components/sideTrends";

function App() {
  // useState per visibilitá della modale modifica Tweet
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <div className="App">
      {isModalOpen && <Modal setModalOpen={setModalOpen} />}

      {/* <Modal /> */}
      <SideMenuDesktop />
      <Content setModalOpen={setModalOpen} />
      <Footer />
      <SideTrends />
    </div>
  );
}

export default App;
