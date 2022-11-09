const requestUrl = 'your-api-endpoint-url-here'


// function getData(url) {
//   let request = new XMLHttpRequest()
//   request.open("GET", url, false)
//   request.send()
//   const json = JSON.parse(request.responseText)

//   return json
// }

async function getData(url) {
	const response = await fetch(requestUrl);
	// Handle errors
	if (!response.ok) {
		throw new Error(`HTTP error! status: ${response.status}`);
	}
	const data = response.json();

  return data
}

function createRow(element) {
  row = document.createElement("tr")
  tdName = document.createElement("td")
  tdPrice = document.createElement("td")
  tdName.innerHTML = element.Nome
  tdPrice.innerHTML = element.Valor

  row.appendChild(tdName)
  row.appendChild(tdPrice)

  return row
}


async function main() {
  const data = await getData(requestUrl)
  const table = document.querySelector("#tabela")

  data.forEach(element => {
    let row = createRow(element)
    table.appendChild(row)    
  });
}

main()