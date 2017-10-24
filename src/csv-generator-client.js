import _ from 'lodash/fp'

export const getInstance = function ({ separator = ',', addQuotes = false }) {
  if (addQuotes) {
    separator = `"${separator}"`
  }

  let getData = _.flow(
    _.map(
      row => row.join(separator),
      data => data.join('\r\n'),
      data => {
        alert('Has window.navigator.msSaveOrOpenBlob' + !!window.navigator.msSaveOrOpenBlob)
        alert('Has btoa' + (typeof btoa === 'function'))
        if (window.navigator.msSaveOrOpenBlob) {
          return data
        } else if (typeof btoa === 'function') {
          data = btoa(data)
        } else {
          data = encodeURIComponent(data)
        }
        return data
      }
    )
  )

  let getDownloadLink = (dataArray) => {
    let type = 'data:text/csv;charset=utf-8'
    if (typeof btoa === 'function') {
      type += ';base64'
    }
    return type + ',' + getData(dataArray)
  }

  let getLinkElement = (fileName, dataArray) => {
    let linkElement = document.createElement('a')
    linkElement.href = getDownloadLink(dataArray)
    linkElement.download = fileName
    return linkElement
  }

  this.download = (fileName, dataArray) => {
    if (window.navigator.msSaveBlob) {
      let blob = new Blob([decodeURIComponent(encodeURI(getData(dataArray)))], {
        type: 'text/csv;charset=utf-8;',
      })
      window.navigator.msSaveBlob(blob, fileName)
    } else {
      let linkElement = getLinkElement(fileName, dataArray)
      linkElement.style.display = 'none'
      document.body.appendChild(linkElement)
      linkElement.click()
      document.body.removeChild(linkElement)
    }
  }
}
