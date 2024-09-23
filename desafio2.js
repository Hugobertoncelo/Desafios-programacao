function pertenceFibonacci(numero) {
    let a = 0;
    let b = 1;
    while (b < numero) {
      [a, b] = [b, a + b]; // Destructuring para trocar valores
    }
    return b === numero;
  }
  
  let numero = parseInt(prompt("Digite um número: "));
  
  if (pertenceFibonacci(numero)) {
    console.log(`${numero} pertence à sequência de Fibonacci.`);
  } else {
    console.log(`${numero} não pertence à sequência de Fibonacci.`);
  }