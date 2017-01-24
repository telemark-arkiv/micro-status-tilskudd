'use strict'

const readFileSync = require('fs').readFileSync
const marked = require('marked')
const { parse } = require('url')
const { get } = require('got')
const { send } = require('micro')
const renderPage = require('./lib/render-page')
const formatData = require('./lib/format-data')

module.exports = async (request, response) => {
  const { pathname } = await parse(request.url, true)
  if (pathname === '/raw' || pathname === '/json' || pathname === '/html') {
    const data = (await get('https://tfk-stats.firebaseio.com/tilskudd.json', {json: true})).body
    const results = formatData(data)

    if (pathname === '/raw') {
      send(response, 200, data)
    } else if (pathname === '/json') {
      response.setHeader('Access-Control-Allow-Origin', '*')
      response.setHeader('Access-Control-Allow-Methods', 'GET')
      send(response, 200, results)
    } else if (pathname === '/html') {
      send(response, 200, renderPage(results))
    }
  } else {
    const readme = readFileSync('./README.md', 'utf-8')
    const html = marked(readme)
    send(response, 200, html)
  }
}
