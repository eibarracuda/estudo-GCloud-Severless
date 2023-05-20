module.exports = function responderDataHora(requisicao, resposta) {
    const dataHora = new Date()
    resposta.send('A data e hora no servidor são: ${dataHora}')
}