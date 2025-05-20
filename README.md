# Esercizio 55 - BoolFlix

## BoolFlix 🎬🍿

BoolFlix è un'applicazione web ispirata a Netflix, sviluppata con React, che permette agli utenti di cercare film e serie TV utilizzando l'API di The Movie Database (TMDB).

---

## 📋 Panoramica del Progetto

BoolFlix è una piattaforma per la scoperta di film e serie TV che replica le funzionalità principali dei servizi di streaming più popolari. Gli utenti possono cercare contenuti per titolo e visualizzare informazioni dettagliate su ogni risultato, inclusi voti, lingua originale e riassunti della trama.

---

## ✨ Funzionalità Principali

- **Funzionalità di Ricerca**: Cerca film e serie TV per titolo
- **Risultati Completi**: Visualizza sia film che serie TV corrispondenti ai criteri di ricerca
- **Informazioni Dettagliate**: Ogni risultato mostra:

  - Titolo
  - Titolo originale
  - Lingua (visualizzata come bandiera del paese)
  - Valutazione (visualizzata con stelle da 1 a 5)
  - Immagine di copertina
  - Descrizione (visibile al passaggio del mouse)

- **Design Responsivo**: Layout ispirato a Netflix con risultati in schede
- **Funzionalità Aggiuntive (Opzionali)**:
  - Informazioni sul cast (i primi 5 attori)
  - Filtri per genere

---

## 🛠️ Tecnologie Utilizzate

- React.js
- API The Movie Database (TMDB)
- CSS/SCSS
- FontAwesome (per le icone)

---

3. Crea una chiave API TMDB

   - Registrati su [The Movie Database](https://www.themoviedb.org)
   - Richiedi una chiave API dalle impostazioni del tuo account
   - Crea un file `.env` nella root del progetto e aggiungi la tua chiave:
     ```
     REACT_APP_TMDB_API_KEY=la_tua_chiave_api
     ```

4. Avvia il server di sviluppo
   ```bash
   npm start
   ```

---

## 📝 Struttura del Progetto

Il progetto si sviluppa in tappe progressive:

- **Milestone 1**  
  Layout base con funzionalità di ricerca  
  Visualizzazione delle informazioni base del film (titolo, titolo originale, lingua, valutazione)

- **Milestone 2**  
  Conversione dei codici lingua in bandiere nazionali  
  Estensione della ricerca alle serie TV

- **Milestone 3**  
  Aggiunta dei poster di film e serie  
  Conversione delle valutazioni decimali (1-10) in stelle (1-5)

- **Milestone 4**  
  Completamento dell’interfaccia utente in stile Netflix  
  Layout a schede con effetti hover per mostrare informazioni aggiuntive

- **Milestone 5 (Opzionale)**  
  Visualizzazione dei primi 5 membri del cast per ogni titolo  
  Visualizzazione dei generi associati

- **Milestone 6 (Opzionale)**  
  Implementazione del filtro per genere

---

## 🔍 Riferimenti API

L’app utilizza i seguenti endpoint dell’API TMDB:

- Ricerca film: `https://api.themoviedb.org/3/search/movie`
- Ricerca serie TV: `https://api.themoviedb.org/3/search/tv`
- URL base immagini: `https://image.tmdb.org/t/p/w342` (per i poster)

---

## 🧑‍💻 Note di Sviluppo

- L’interfaccia utente è sviluppata in modo progressivo, focalizzandosi prima sulla funzionalità
- Il codice privilegia la riusabilità e una struttura pulita rispetto a uno styling precoce
- I codici lingua vengono convertiti in bandiere nazionali secondo lo standard ISO 639-1

---
