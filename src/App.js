import React, { useState, useEffect } from "react";
import axios from "axios";

import { DogTypes } from "./components/DogTypes/DogTypes";
import { DogImage } from "./components/DogImage/DogImage";
import { Footer } from "./components/Footer/Footer";

import { estraiRazze } from "./utils/utils";

import './App.css';



function App() {

  const [razze, impostaRazze] = useState([]);
  const [razzaSelezionata, impostaRazzaSelezionata] = useState("");
  const [immagineCasuale, impostaImmagineCasuale] = useState("");

  useEffect(() => {
    // Recupera l'elenco delle razze di cani dall'API
    axios.get("https://dog.ceo/api/breeds/list/all")
      .then((risposta) => {
        // Estrae l'elenco delle razze dall'oggetto di risposta
        const elencoRazze = estraiRazze(risposta.data.message);
        // Imposta l'elenco delle razze nello stato
        impostaRazze(elencoRazze);
      })
      .catch((errore) => {
        console.error("Errore durante il recupero delle razze: " + errore);
      });
  }, []);


  const gestisciSelezioneRazza = (razza) => {

    const razzaSenzaSpazi = razza.replace(" ", "/");

    // Recupera un'immagine casuale per la razza selezionata
    axios.get(`https://dog.ceo/api/breed/${razzaSenzaSpazi}/images/random`)
      .then((risposta) => {
        impostaImmagineCasuale(risposta.data.message);
        impostaRazzaSelezionata(razza);
      })
      .catch((errore) => {
        console.error("Errore durante il recupero dell'immagine casuale: " + errore);
      });
  };

  return (
    <main>
      
      <DogTypes razze={razze} razzaSelezionata={razzaSelezionata} gestisciSelezioneRazza={gestisciSelezioneRazza} />

      <DogImage immagineCasuale={immagineCasuale} razzaSelezionata={razzaSelezionata} />  
      
      <Footer />

    </main>
  );
}

export default App;
