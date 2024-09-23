const faturamentoDiario = [
    { "dia": 1, "valor": 22174.80 },
    { "dia": 2, "valor": 24537.69 },
    { "dia": 3, "valor": null }, 
    { "dia": 4, "valor": 38711.81 },
    // ... adicione os outros dias de faturamento
  ];
  
  function analisarFaturamento(faturamentos) {
    const valoresValidos = faturamentos.filter(dia => dia.valor !== null);
    const menorFaturamento = Math.min(...valoresValidos.map(dia => dia.valor));
    const maiorFaturamento = Math.max(...valoresValidos.map(dia => dia.valor));
    const mediaMensal = valoresValidos.reduce((acc, dia) => acc + dia.valor, 0) / valoresValidos.length;
    const diasAcimaMedia = valoresValidos.filter(dia => dia.valor > mediaMensal).length;
    return { menorFaturamento, maiorFaturamento, diasAcimaMedia };
  }
  
  const { menorFaturamento, maiorFaturamento, diasAcimaMedia } = analisarFaturamento(faturamentoDiario);
  
  console.log(`Menor valor de faturamento: R$ ${menorFaturamento.toFixed(2)}`);
  console.log(`Maior valor de faturamento: R$ ${maiorFaturamento.toFixed(2)}`);
  console.log(`Dias com faturamento acima da média: ${diasAcimaMedia}`);