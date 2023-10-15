export function estraiRazze(obj) {
  // Inizializza un array vuoto per memorizzare le razze modificate
  const razzeModificate = [];

  // Scorrere tutte le chiavi dell'oggetto
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      // Estrai il valore corrente per la chiave
      const valore = obj[key];

      // Se il valore è un array non vuoto, crea una stringa per ogni combinazione possibile dei valori
      if (valore.length > 0) {
        valore.forEach((v) => {
          razzeModificate.push(key + " " + v);
        });
      } else {
        // Se il valore è un array vuoto o mancante, aggiungi solo la chiave
        razzeModificate.push(key);
      }
    }
  }

  return razzeModificate;
}
