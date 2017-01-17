'use strict'

module.exports = (sites) => {
  const results = sites
    .map((site) => `<div style="font-size: 3em">${site.name}: ${site.antall}</div>`)

  return `<html><body><h1 style="font-size: 3em">Antall</h1>${results.join('')}</body></html>`
}
