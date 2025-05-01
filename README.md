## SSGS Calculator 

E' un progetto scritto interamente sviluppato in **JavaScript**, con 
l'obiettivo di fornire un semplice calcolatore che permette di eseguire piu operazioni nella stessa sessione.

**NB** : Momentaneamente le operazioni possono essere eseguite con solo due numeri reali interi.

## Prerequisiti
- Linux,Windows,Mac
- Node.js
- npm
- jest
- Editor di codice o IDE (Es: VS Code)

## Istruzioni di installazione
Per avere l'ambiente di sviluppo corretto per questo progetto è necessario installare Node.js a questo [link](https://nodejs.org/en/download) impostando i parametri di installazione a seconda delle esigenze mantenendo npm come gestore dei pacchetti.  
  
Successivamente verificare la corretta installazione sia di Node.js, tramite il comando `node -v`, che di npm, tramite il comando `npm -v`.  
Se entrambi i comandi restituiscono la versione installata dei due pacchetti allora l'ambiente di sviluppo è pronto.  
  
Successivamente, per eseguire i test per l'applicazione, è necessario installare jest tramite il terminale con il comando `npm install jest` all'interno della cartella del progetto
oppure tramite l'estensione di VS Code (sempre se si utilizza VS Code).  
Se jest è stato intallato trammite terminale basta eseguire il nomando `npm ls jest` per verificarne la corretta installazione.

## Istruzioni di utilizzo
Per avviare l'applicazione è necessario eseguire il comando `node index.js` nella cartella src  
Mentre per eseguire i test basta eseguire il comando `npm test`  
  
**NB**: In questo progetto una volta eseguito il comando per i test verrà visualizzata la tabella della coverage.  
Questo perche nel file `package.json` nella sezione "test" è stato volutamente inserito `jest --coverage`.  
Per evitare cio ed eseguire semplicemente i test basta cancellare da tale file `--coverage`.

## Caratteristiche principali
- **100% JavaScript**: Il progetto è interamente implementato in JavaScript, garantendo compatibilità e flessibilità.
- **Funzionalità personalizzabili**: Supporta configurazioni personalizzate per soddisfare diverse esigenze di calcolo.
- **Interfaccia intuitiva**: Facile da usare e progettata per migliorare l'esperienza utente.

## Operazioni disponibili
- **Addizione**
- **Sottrazione**
- **Moltiplicazione**
- **Divisione**
- **Potenze**
