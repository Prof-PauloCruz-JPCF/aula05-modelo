// desconto.test.js = CODIGO DE TESTE (nao vai para o cliente)

// executor de testes que ja vem dentro do Node (nada a instalar)
const test = require('node:test');
// 'assert' = comparadores: conferem obtido x esperado
const assert = require('node:assert');
// traz a funcao que sera testada
const { calcularDesconto } = require('./desconto');

// UM teste: o texto descreve o esperado, em linguagem humana
test('10% de desconto em 200 resulta em 180', () => {
  // PREPARAR + EXECUTAR: entrada conhecida (200 e 10%)
  const resultado = calcularDesconto(200, 10);
  // VERIFICAR: se resultado for diferente de 180, o teste FALHA
  assert.strictEqual(resultado, 180);
});

// SEGUNDO teste: agora o caminho do ERRO (percentual absurdo)
test('percentual acima de 100 lanca erro', () => {
  // assert.throws passa SO SE a funcao dentro dele der erro
  // e a mensagem do erro combinar com /percentual invalido/
  assert.throws(
    // 150% nao existe: a funcao DEVE lancar erro
    () => calcularDesconto(200, 150),
    // a mensagem esperada
    /percentual invalido/
  );
});
