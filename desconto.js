// desconto.js = CODIGO DE PRODUCAO (o que o cliente usa)

// FUNCAO = bloco de codigo com nome: recebe valores e
// devolve um resultado. Aqui: o preco e o percentual
function calcularDesconto(preco, percentual) {
  // protecao: percentual negativo ou acima de 100 nao existe
  if (percentual < 0 || percentual > 100) {
    // 'throw' interrompe a funcao e avisa que algo deu errado
    throw new Error('percentual invalido');
  }
  // preco final = preco - desconto (preco x percentual/100)
  return preco - preco * (percentual / 100);
}

// deixa a funcao visivel para outros arquivos (os testes)
module.exports = { calcularDesconto };
