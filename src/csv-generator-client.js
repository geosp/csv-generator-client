import _ from 'lodash/fp'

export default ({ data, fileName, separator = ',', addQuotes = false }) => {
  if (addQuotes) {
    separator = `"${separator}"`
  }

  let getData = _.flow(
    _.map(
      row => row.join(separator),
      data => data.join('\r\n'),
      data => {
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

  let getDownloadLink = () => {
    let type = 'data:text/csv;charset=utf-8'
    if (typeof btoa === 'function') {
      type += ';base64'
    }
    return type + ',' + getData(dataArray)
  }

  let getLinkElement = () => {
    let linkElement = document.createElement('a')
    linkElement.href = getDownloadLink()
    linkElement.download = fileName
    return linkElement
  }

  this.download = () => {
    if (window.navigator.msSaveBlob) {
      let blob = new Blob([decodeURIComponent(encodeURI(getData(dataArray)))], {
        type: 'text/csv;charset=utf-8;',
      })
      window.navigator.msSaveBlob(blob, fileName)
    } else {
      let linkElement = getLinkElement()
      linkElement.style.display = 'none'
      document.body.appendChild(linkElement)
      linkElement.click()
      document.body.removeChild(linkElement)
    }
  }
}
