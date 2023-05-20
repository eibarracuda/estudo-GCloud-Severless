const BigQuery = require('@google-cloud/bigquery').BigQuery 
const instancia = new BigQuery()

  async function criarTabelaDeUsuarios () {
  const dataset = instancia.dataset('forumAlura')
  const colunas = [
    {
      name: 'nome',
      type: 'string',
      mode: 'required'
    },
    {
      name: 'idade',
      type: 'integer',
      mode: 'required'
    },
    {
      name: 'possui_pergunta_nao_respondida',
      type: 'boolean',
      mode: 'required'
    }
  ]

  const configuracao = { schema: colunas }
  await dataset.createTable('usuarios', configuracao)
}

criarTabelaDeUsuarios()