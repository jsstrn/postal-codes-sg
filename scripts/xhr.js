function getURL (query) {
  var parameter = '?&address=' + encodeURI(query)
  return 'http://maps.googleapis.com/maps/api/geocode/json' + parameter
}

function getPostalCode (event) {
  event.preventDefault()
  var query = document.querySelector('input').value
  query = (!query.match(/singapore/i)) ? query + ' singapore' : query
  var url = getURL(query)
  console.log(url)
  var req = new window.XMLHttpRequest()
  req.addEventListener('load', function () {
    var data = JSON.parse(this.responseText)
    if (data.status === 'OK') {
      window.localStorage.clear()
      var result = data.results[0]
      window.localStorage.setItem('data', JSON.stringify(result))
    } else console.log('Unable to fetch data')
  })
  req.open('GET', url)
  req.send()
}

document.querySelector('form').addEventListener('submit', getPostalCode)

var row = document.createElement('tr')
var address = document.createElement('td')
