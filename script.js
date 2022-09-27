function isPresent(jntuno) {
    flag = 0
    jntunos.forEach(number => {
        if(number == jntuno) {
            console.log(number)
            console.log(jntuno)
            flag = 1;
            return;
        }
    });
    return flag;
}
jntunos = ["21341A0570", "21341A1259", "21341A0551", "21341A4238", "21341A4257", "21341A05A6", "21341A0512", "21341A0547", "21341A0508", "21341A0507", "21341A05G4", "21341A1241", "21341A4265", "21341A0566", "21341A05F0", "21341A05C0", "21341A0518", "21341A0515", "21341A0585", "21341A1217", "21341A0548", "21341A4565", "21341A05G0", "21341A05I4", "21341A4230", "21341A4228", "21341A05A9", "21341A05C1", "21341A05D5", "21341A4259", "21341A4549", "21341A05C7", "21341A0572", "21341A1267", "21341A0572", "21341A1267", "21341A1273", "21341A1277", "21341A1215", "21341A1251", "21341A12C6", "21341A1210", "21341A1262", "21341A0526", "21341A1212", "21341A05J6", "21341A4518", "21341A4209", "21341A12A5", "21341A4262", "21341A05G9"];

function loadData() {
    fetch('details.json')
        .then(response => response.json())
        .then(data => {
            // Get the data from json file
            let data1 = data.selections;
            // Loop through the data
            num = 1;
            for (const key in data1) {
                if (Object.hasOwnProperty.call(data1, key)) {
                    rowData = document.createElement('tr'); 

                    let cell = document.createElement('td');
                    cell.innerHTML = num;
                    rowData.appendChild(cell);

                    flag = 0;

                    for(i in cols) {
                        let cell = document.createElement('td');
                        cell.innerHTML = data1[key][cols[i]];
                        if(cols[i] == 'jntuno') {
                            flag = isPresent(data1[key][cols[i]]);
                        }
                        rowData.appendChild(cell);
                    }

                    if(flag == 0) {
                        table.appendChild(rowData);
                        num++;
                    }
                }
            }
        }
    );
}

let cols = ['name', 'jntuno', 'email', 'dept', 'year', 'section', 'phone', 'domain', 'main', 'sub', 'residence', 'why', 'contribute', 'promote'];
let table = document.getElementById('table');
data = loadData();