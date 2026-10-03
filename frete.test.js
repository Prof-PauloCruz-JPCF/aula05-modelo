// frete.test.js = CODIGO DE TESTE do frete (por enquanto, so UM teste)

const test = require('node:test');
const assert = require('node:assert');
const { calcularFrete } = require('./frete');

// entrega curta (3 km): deve custar a taxa fixa de R$ 7
test('entrega de 3 km custa R$ 7', () => {
  assert.strictEqual(calcularFrete(3), 7);
});
