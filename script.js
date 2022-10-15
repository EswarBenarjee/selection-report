function isPresent(jntuno) {
    flag = 0;
    jntunos.forEach(number => {
        if(number == jntuno) {
            // console.log(number)
            // console.log(jntuno)
            flag = 1;
            empty.push(jntuno);
            return;
        }
    });
    return flag;
}

empty = [];
// jntunos = ["21341A0570", "21341A1259", "21341A0551", "21341A4238", "21341A4257", "21341A05A6", "21341A0512", "21341A0547", "21341A0508", "21341A0507", "21341A05G4", "21341A1241", "21341A4265", "21341A0566", "21341A05F0", "21341A05C0", "21341A0518", "21341A0515", "21341A0585", "21341A1217", "21341A0548", "21341A4565", "21341A05G0", "21341A05I4", "21341A4230", "21341A4228", "21341A05A9", "21341A05C1", "21341A05D5", "21341A4259", "21341A4549", "21341A05C7", "21341A0572", "21341A1267", "21341A0572", "21341A1267", "21341A1273", "21341A1277", "21341A1215", "21341A1251", "21341A12C6", "21341A1210", "21341A1262", "21341A0526", "21341A1212", "21341A05J6", "21341A4518", "21341A4209", "21341A12A5", "21341A4262", "21341A05G9"];
// jntunos = ['21341A0505', '21341A0508', '21341A0518', '21341A0522', '21341A0531', '21341A0547', '21341A0548', '21341A0549', '21341A0551', '21341A0589', '21341A05C0', '21341A05I4', '21341A1205', '21341A1217', '21341A1241', '21341A1250', '21341A1259', '21341A1282', '21341A1287', '21341A4230', '21341A4238', '21341A4251', '21341A4255', '21341A4517', '21341A4538', '21341A4559']
<<<<<<< HEAD
// jntunos = ['21341A0505', '21341A0508', '21341A0547', '21341A0549', '21341A0566', '21341A0589', '21341A05I4', '21341A05J6', '21341A4230', '21341A4238', '21341A4255', '21341A4538', '21341A4559', '21341A1205', '21341A1217', '21341A1249', '21341A1250', '21341A1262', '21341A1277', '21341A1282'];
jntunos = ['21341A0566', '21341A0567', '21341A0568', '21341A0569', '21341A0570', '21341A0571', '21341A0572', '21341A0573', '21341A0574', '21341A0575', '21341A0576', '21341A0577', '21341A0578', '21341A0579', '21341A0580', '21341A0581', '21341A0582', '21341A0583', '21341A0584', '21341A0585', '21341A0586', '21341A0587', '21341A0588', '21341A0589', '21341A0590', '21341A0591', '21341A0592', '21341A0593', '21341A0594', '21341A0595', '21341A0596', '21341A0597', '21341A0598', '21341A0599', '21341A05A0', '21341A05A1', '21341A05A2', '21341A05A3', '21341A05A4', '21341A05A5', '21341A05A6', '21341A05A7', '21341A05A8', '21341A05A9', '21341A05B0', '21341A05B1', '21341A05B2', '21341A05B3', '21341A05B4', '21341A05B5', '21341A05B6', '21341A05B7', '21341A05B8', '21341A05B9', '21341A05C0', '21341A05C1', '21341A05C2', '21341A05C3', '21341A05C4', '21341A05C5', '21341A05C6', '21341A05C7', '21341A05C8', '21341A05C9']
=======
jntunos = ['21341A0505', '21341A0508', '21341A0547', '21341A0549', '21341A0566', '21341A0589', '21341A05I4', '21341A05J6', '21341A4230', '21341A4238', '21341A4255', '21341A4538', '21341A4559', '21341A1205', '21341A1217', '21341A1249', '21341A1250', '21341A1262', '21341A1277', '21341A1282'];
>>>>>>> 6dde82ce55fd4e170179a0c54864d63bdadd64ed
console.log(jntunos.length);

function isSelected(column) {
    flag = 0
    colSelected.forEach(col => {
        if(col == column) {
            flag = 1
            return
        }
    });
    return flag;
}


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

                    flag1 = 0;
                    let jntuno;
                    for(i in cols) {
                        let cell = document.createElement('td');
                        cell.innerHTML = data1[key][cols[i]];

                        if(cols[i] == 'jntuno') {
                            flag1 = isPresent(data1[key][cols[i]]);
                            jntuno = data1[key][cols[i]];
                        }

                        if(isSelected(cols[i]) == 0) {
                            continue;
                        }

                        rowData.appendChild(cell);
                    }

                    table.appendChild(rowData);
                    num++;
                    // if(flag1 == 1) {
                    // }

                    let img = document.createElement('img');
                    img.src = 'http://115.241.205.4/alumni/images/'+jntuno+'.jpg';
                    img.style.width = '100px';
                    img.style.height = '100px';
                    rowData.appendChild(img);
                }
            }
            console.log(empty);
            jntunos.forEach(ele => {
                flag = 0
                empty.forEach(jntuno => {
                    if(ele == jntuno) {
                        flag = 1
                        return
                    }
                });
                if(flag == 0) {
                    console.log(ele);
                }
            });
        }
    );
}

let cols = ['name', 'jntuno', 'email', 'dept', 'year', 'section', 'phone', 'domain', 'main', 'sub', 'residence', 'why', 'contribute', 'promote'];
let colSelected = ['name', 'jntuno', 'phone'];
let table = document.getElementById('table');
data = loadData();