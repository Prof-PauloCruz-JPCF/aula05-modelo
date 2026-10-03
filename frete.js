// frete.js = CODIGO DE PRODUCAO: calcula o frete de uma entrega

// recebe a distancia da entrega em quilometros e devolve o frete em reais
function calcularFrete(distanciaKm) {
  // distancia negativa nao existe: avisa que algo deu errado
  if (distanciaKm < 0) {
    throw new Error('distancia invalida');
  }
  // ate 5 km: taxa fixa de R$ 7
  if (distanciaKm <= 5) {
    return 7;
  }
  // acima de 5 km: R$ 7 mais R$ 1 por km que passou dos 5
  return 7 + (distanciaKm - 5);
}

// deixa a funcao visivel para outros arquivos (os testes)
module.exports = { calcularFrete };
