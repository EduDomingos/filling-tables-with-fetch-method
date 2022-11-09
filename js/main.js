const requestUrl = 'https://personal-27rwjmv9.outsystemscloud.com/cardapio/rest/lanches/list'


// function getData(url) {
//   let request = new XMLHttpRequest()
//   request.open("GET", url, false)
//   request.send()
//   const json = JSON.parse(request.responseText)

//   return json
// }

async function getData() {
	const response = await fetch(requestUrl);
	// Handle errors
	if (!response.ok) {
		throw new Error(`HTTP error! status: ${response.status}`);
	}
	const data = await response.json();

  return data
}

function createRow(element) {
  linha = document.createElement("tr")
  tdName = document.createElement("td")
  tdPrice = document.createElement("td")
  tdName.innerHTML = element.Nome
  tdPrice.innerHTML = element.Valor

  linha.appendChild(tdName)
  linha.appendChild(tdPrice)

  return linha
}


async function main() {
  const data = await getData(requestUrl)
  const tabela = document.querySelector("#tabela")

  data.forEach(element => {
    let linha = createRow(element)
    tabela.appendChild(linha)    
  });
}

main()