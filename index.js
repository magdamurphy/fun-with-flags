//Create single new table cell with given text
function createTableCell(text) {
	const tableCell = document.createElement("td");
	tableCell.innerHTML = text;
	return tableCell;
}

//Create single new table cell with image
function createTableCellImg(img) {
	const tableCell = document.createElement("td");
	tableCell.appendChild(img);
	return tableCell;
}

//Create single new table row with text/img given as parameters
function createTableRow(t1, t2, t3) {
	row = document.createElement("tr");
	const cellData = [t1, t2];

	cellData.forEach( function(element) {
	  row.appendChild(createTableCell(element))});

	row.appendChild(createTableCellImg(t3));

	return row;
}

//Add created row to table
function addRowToTable(t1, t2, t3) {
  row = createTableRow(t1, t2, t3);
  document.querySelector("tbody").appendChild(row);
}

//Create image element
function createImg(data) {
  const image = document.createElement("img");
  const flag = data.flag;
  image.src =  flag;
  return image;

}

//import data from API
const allCountries = fetch('https://restcountries.eu/rest/v2/all')
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      json.map(function(data) {
        addRowToTable(data.name, data.population.toLocaleString('en-UK'), data.currencies.code)});
    });

const tableHeader = document.querySelectorAll("th");

function sortAll() {
  return(data.name.slice().sort(function(a, b) {
    return a.allTypes - b.allTypes}));
  }

tableHeader.addEventListener("click",sortAll()); 

