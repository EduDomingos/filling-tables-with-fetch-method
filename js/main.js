const requestUrl = 'https://personal-27rwjmv9.outsystemscloud.com/cardapio/rest/lanches/list'


async function getData(url) {
  let request = new XMLHttpRequest()
  request.open("GET", url, false)
  request.send()
  const json = JSON.parse(request.responseText)

  return json
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


function main() {
  const data = getData(requestUrl)
  const tabela = document.querySelector("#tabela")
  console.log(data)
  data.forEach(i => {
    let linha = createRow(i)
    tabela.appendChild(linha)
    
  }); 
  
      

}

main()