const pubsub = require('./pubsub')

module.exports = async function recebeAtividade(requisicao, resposta) {
    const atividade = requisicao.body

    if (atividade.hasOwnProperty('data_criacao_atividade') === false) {
        resposta.send('O campo data_criacao_atividade n�o foi enviado')
        return
    }

    const tiposDeAtividade = ['criar-pergunta', 'responder-pergunta']
    if (tiposDeAtividade.indexOf(atividade.tipo_de_atividade) === -1){
        resposta.send('O campo tipo_de_atividade esta invalido ou n�o foi informado')
        return
    }

    if (atividade.hasOwnProperty('nome_do_curso') === false) {
        resposta.send('O campo nome_do_curso n�o foi enviado')
        return
    }

    if (atividade.hasOwnProperty('nome_da_aula') === false) {
        resposta.send('O campo nome_da_aula n�o foi enviado')
        return
    }

    if (atividade.hasOwnProperty('texto') === false) {
        resposta.send('O campo texto n�o foi enviado')
        return
    }

    if (atividade.text.length > 255) {
        resposta.send('O campo de texto � maior que 255 caracteres, por favor reduza a quantidade de caracteres')
        return
    }


    const resultado = await pubsub(atividade, 'atividades')
    console.log(atividade)
    resposta.send(resultado)
}