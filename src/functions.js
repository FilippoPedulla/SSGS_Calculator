function sum (a, b) {
  return a + b;
}

function sub (a, b) {
  return a - b;
}

function mul (a, b) {
  return a * b;
}

function div (a, b) {
  if (b === 0) {
    console.log('Divisione per zero non consentita.');
    return null;
  }
  return a / b;
}

function pow (a, b) {
  return Math.pow(a, b);
}

module.exports = {
  sum,
  sub,
  mul,
  div,
  pow
};