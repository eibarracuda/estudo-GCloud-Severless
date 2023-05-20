const BigQuery = require('@google-cloud/bigquery').BigQuery 
const instancia = new BigQuery()

async function inserirUsuarios () {
  const usuarios = [
    {
      nome: 'Euclides',
      idade: 19,
      possui_pergunta_nao_respondida: true
    },
    {
      nome: 'Gato Trator',
      idade: 13,
      possui_pergunta_nao_respondida: false
    },
    {
      nome: 'Gata Meia',
      idade: 17,
      possui_pergunta_nao_respondida: true
    },
  ]

  await instancia.dataset('forumAlura').table('usuarios').insert(usuarios)
}

inserirUsuarios()
