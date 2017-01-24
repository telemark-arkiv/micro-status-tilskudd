'use strict'

module.exports = (data) => {
  let status = []
  const snittTidsbruk = (parseInt(data.skjemaUtfyllingTime, 10) / 60000) / parseInt(data.antallTilskudd, 10)
  const snittKroner = parseInt(data.totalSoknadsSum, 10) / parseInt(data.antallTilskudd, 10)
  status.push({name: 'Totalt antall søknader', status: data.antallTilskudd || 0})
  status.push({name: 'Folkehelse', status: data.antallFolkehelse || 0})
  status.push({name: 'Kultur/idrett', status: data.antallKulturIdrett || 0})
  status.push({name: 'Idrett', status: data.Idrett || 0})
  status.push({name: 'Billedkunst', status: data.Billedkunst || 0})
  status.push({name: 'Kulturarv', status: data.Kulturarv || 0})
  status.push({name: 'Litteratur', status: data.Litteratur || 0})
  status.push({name: 'Musikk', status: data.Musikk || 0})
  status.push({name: 'Scenekunst', status: data.Scenekunst || 0})
  status.push({name: 'Totalt kroner søkt om', status: parseInt(data.totalSoknadsSum, 10)})
  status.push({name: 'Snitt kroner søkt om', status: snittKroner.toFixed(0)})
  status.push({name: 'Snitt minutter brukt pr søknad', status: snittTidsbruk.toFixed(0)})

  return status
}
