const sum = require('./functions').sum;
const sub = require('./functions').sub;
const mul = require('./functions').mul;
const div = require('./functions').div;
const pow = require('./functions').pow;

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("Benvenuto in SSGS-Calculator!");
console.log("Scegli l'operazione da eseguire:");
console.log("1. Addizione");
console.log("2. Sottrazione");
console.log("3. Moltiplicazione");
console.log("4. Divisione");
console.log("5. Potenze");
console.log("6. Esci");

let operation, num1, num2, result;

function somma() {
  readline.question("Inserisci il primo numero: ", (input2) => {
    num1 = parseInt(input2); // Converti l'input in un numero
    if (isNaN(num1)) {
      console.log('Input non valido. Inserisci un numero.');
      somma();
    }

    readline.question("Inserisci il secondo numero: ", (input3) => {
      num2 = parseInt(input3); // Converti l'input in un numero
      if (isNaN(num2)) {
        console.log('Input non valido. Inserisci un numero.');
        somma();
      }

      result = sum(num1, num2);
      console.log(`Il risultato è: ${result}`);
      calculator();
    });
  });
}

function sottrazione() {
  readline.question("Inserisci il primo numero: ", (input2) => {
    num1 = parseInt(input2); // Converti l'input in un numero
    if (isNaN(num1)) {
      console.log('Input non valido. Inserisci un numero.');
      sottrazione();
    }

    readline.question("Inserisci il secondo numero: ", (input3) => {
      num2 = parseInt(input3); // Converti l'input in un numero
      if (isNaN(num2)) {
        console.log('Input non valido. Inserisci un numero.');
        sottrazione();
      }

      result = sub(num1, num2);
      console.log(`Il risultato è: ${result}`);
      calculator();
    });
  });
}

function moltiplicazione() {
  readline.question("Inserisci il primo numero: ", (input2) => {
    num1 = parseInt(input2); // Converti l'input in un numero
    if (isNaN(num1)) {
      console.log('Input non valido. Inserisci un numero.');
      moltiplicazione();
    }

    readline.question("Inserisci il secondo numero: ", (input3) => {
      num2 = parseInt(input3); // Converti l'input in un numero
      if (isNaN(num2)) {
        console.log('Input non valido. Inserisci un numero.');
        moltiplicazione();
      }

      result = mul(num1, num2);
      console.log(`Il risultato è: ${result}`);
      calculator();
    });
  });
}

function divisione() {
  readline.question("Inserisci il primo numero: ", (input2) => {
    num1 = parseInt(input2); // Converti l'input in un numero
    if (isNaN(num1)) {
      console.log('Input non valido. Inserisci un numero.');
      divisione();
    }

    readline.question("Inserisci il secondo numero: ", (input3) => {
      num2 = parseInt(input3); // Converti l'input in un numero
      if (isNaN(num2)) {
        console.log('Input non valido. Inserisci un numero.');
        divisione();
      }

      result = div(num1, num2);
      console.log(`Il risultato è: ${result}`);
      calculator();
    });
  });
};

function potenze() {
  readline.question("Inserisci la base: ", (input2) => {
    num1 = parseInt(input2); // Converti l'input in un numero
    if (isNaN(num1)) {
      console.log('Input non valido. Inserisci un numero.');
      potenze();
    }

    readline.question("Inserisci l'esponente: ", (input3) => {
      num2 = parseInt(input3); // Converti l'input in un numero
      if (isNaN(num2)) {
        console.log('Input non valido. Inserisci un numero.');
        potenze();
      }

      result = pow(num1, num2);
      console.log(`Il risultato è: ${result}`);
      calculator();
    });
  });
}

function calculator() {
  readline.question("Inserisci l'operazione da eseguire: ", (input1) => {
    operation = parseInt(input1); // Converti l'input in un numero
    if (isNaN(operation) && operation !== 1 && operation !== 2 && operation !== 3 && operation !== 4 && operation !== 5) {
      console.log('Operazione non valida');
      calculator();
    }
    switch (operation) {
      case 1:
        somma();
        break;
      case 2:
        sottrazione();
        break;
      case 3:
        moltiplicazione();
        break;
      case 4:
        divisione();
        break;
      case 5:
        potenze();
        break;
      case 6:
        console.log("Arrivederci!");
        readline.close();
        process.exit();
      default:
        console.log('Operazione non valida');
    }
  });
}
calculator();