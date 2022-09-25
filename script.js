function loadData() {
    fetch('details.json')
        .then(response => response.json())
        .then(data => {
            // Get the data from json file
            let data1 = data.selections;
            console.log(data1);
            // Loop through the data
            num = 1;
            for (const key in data1) {
                if (Object.hasOwnProperty.call(data1, key)) {
                    rowData = document.createElement('tr'); 

                    let cell = document.createElement('td');
                    cell.innerHTML = num;
                    rowData.appendChild(cell);

                    for(i in cols) {
                        let cell = document.createElement('td');
                        cell.innerHTML = data1[key][cols[i]];
                        rowData.appendChild(cell);
                    }

                    table.appendChild(rowData);
                }
                num++;
            }
        }
    );
}
let cols = ['name', 'jntuno', 'email', 'dept', 'year', 'section', 'phone', 'domain', 'main', 'sub', 'residence', 'why', 'contribute', 'promote'];
let table = document.getElementById('table');
data = loadData();