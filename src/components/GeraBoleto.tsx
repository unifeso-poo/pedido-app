 
 const { GeraBoleto } = require('node-gerador-boletos')

const instBoleto = new GeraBoleto({
  formula: 'banrisul-cnab240',
  codAgencia: '0843',
  codigoCedente: '0778960',
  nossoNumero: '64448704',
  dataVencimento: '2019-06-06',
  valor: 150.0
})

export {GeraBoleto}