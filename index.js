const { readFileSync } = require('fs');
const { get } = require('http');
var Repositorio = require("./repositorio.js");     
var ServicoCalculoFatura = require("./servico.js");
var gerarFaturaStr = require("./apresentacao.js");

/*function gerarFaturaHTML(fatura, pecas, calc) {
  let faturaStr = `<html>\n
  <p> Fatura ${fatura.cliente} </p>\n
  <ul>\n`
  for (let apre of fatura.apresentacoes) {
    faturaStr += `    <li>  ${getPeca(pecas, apre).nome}: ${formatarMoeda(calc.calcularTotalApresentacao(pecas, apre))} (${apre.audiencia} assentos) </li>\n`;
  }

  faturaStr += `  </ul>\n
  <p> Valor total: R$ ${formatarMoeda(calc.calcularTotalFatura(pecas, fatura.apresentacoes))} </p>\n
  <p> Créditos acumulados: ${calc.calcularTotalCreditos(pecas, fatura.apresentacoes)} </p>\n
</html>`
  return faturaStr;
}*/

const faturas = JSON.parse(readFileSync('./faturas.json'));
const calc = new ServicoCalculoFatura(new Repositorio());
const faturaStr = gerarFaturaStr(faturas, calc);
//const faturaHTML = gerarFaturaHTML(faturas, pecas, calc);
console.log(faturaStr);
//console.log(faturaHTML);