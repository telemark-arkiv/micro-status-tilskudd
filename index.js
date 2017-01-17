'use strict'

const { parse } = require('url')
const { get } = require('got')
const { send } = require('micro')
const generatePage = require('./lib/generate-page')

module.exports = async (request, response) => {
  const query = parse(request.url, true).query
  const format = query ? query.format : false
  const data = (await get('https://tfk-stats.firebaseio.com/tilskudd.json', {json: true})).body

  send(response, 200, format === 'json' ? data : generatePage(data))
}
