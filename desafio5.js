function inverterString(texto) {
    let textoInvertido = "";
    for (let i = texto.length - 1; i >= 0; i--) {
      textoInvertido += texto[i];
    }
    return textoInvertido;
  }
  
  let texto = prompt("Digite uma string: ");
  let textoInvertido = inverterString(texto);
  console.log(`String invertida: ${textoInvertido}`);