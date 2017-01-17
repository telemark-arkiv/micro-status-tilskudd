'use strict'

module.exports = (data) => {
  let status = []
  const snittTidsbruk = (parseInt(data.skjemaUtfyllingTime, 10) / 60000) / parseInt(data.antallTilskudd, 10)
  const snittKroner = parseInt(data.totalSoknadsSum, 10) / parseInt(data.antallTilskudd, 10)
  status.push(`Totalt antall søknader: ${data.antallTilskudd || 0}`)
  status.push(`Folkehelse: ${data.antallFolkehelse || 0}`)
  status.push(`Kultur/idrett: ${data.antallKulturIdrett || 0}`)
  status.push(`Idrett: ${data.Idrett || 0}`)
  status.push(`Billedkunst: ${data.Billedkunst || 0}`)
  status.push(`Kulturarv: ${data.Kulturarv || 0}`)
  status.push(`Litteratur: ${data.Litteratur || 0}`)
  status.push(`Musikk: ${data.Musikk || 0}`)
  status.push(`Scenekunst: ${data.Scenekunst || 0}`)
  status.push(`Totalt kroner søkt om: ${parseInt(data.totalSoknadsSum, 10)},-`)
  status.push(`Snitt kroner søkt om: ${snittKroner.toFixed(0)},-`)
  status.push(`Snitt tid brukt pr søknad: ${snittTidsbruk.toFixed(0)} minutter`)

  const results = status
    .map((line) => `<div style="font-size: 2em">${line}</div>`)

  return `<html><body><h1 style="font-size: 3em">Statistikk tilskudd</h1>${results.join('')}</body></html>`
}
