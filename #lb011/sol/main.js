const N = 3;
const RAND_COEFF = 10;

function createInputMatrix(){
    var matrix = document.createElement('table');
        for (var i = 0; i < 3; i++){
            var tr = document.createElement('tr');
            for (var j = 0; j < 3; j++){
                var td = document.createElement('td');
                var input = document.createElement('input')
                input.value = Math.floor(Math.random()*RAND_COEFF);
                td.appendChild(input);
                tr.appendChild(td);
            }
            matrix.appendChild(tr);
        }
    return matrix;
}

function fillOutputMatrix(matrix, outTable){
    for (var i = 0; i < 3; i++){
        var tr = document.createElement('tr');
        for (var j = 0; j < 3; j++){
            var td = document.createElement('td');
            var input = document.createElement('input')
            input.value = String(matrix[i][j]);
            input.readOnly = true;
            td.appendChild(input);
            tr.appendChild(td);
        }
        outTable.appendChild(tr);
    }
}

function getMatrixFromTable(table){
    var inputs = table.getElementsByTagName('input');
    for (var i = 0; i < inputs.length; i++){
        inputs[i].value = isNaN(inputs[i].value)?0:Number(inputs[i].value);
    }
    var matrix = [
        [inputs[0].value, inputs[1].value, inputs[2].value],
        [inputs[3].value, inputs[4].value, inputs[5].value],
        [inputs[6].value, inputs[7].value, inputs[8].value]
    ];
    return matrix;
}

function multiply(matrixA, matrixB){
    var matrix = [];
    for (var i = 0; i < N; i++){ //each row
        var row = [];
        for (var j = 0; j < N; j++){ //each e in row
            var elem = 0;
            for (var k = 0; k < N; k++){
                elem += matrixA[i][k]*matrixB[k][j];
            }
            row.push(elem);
        }
        matrix.push(row);
    }
    return matrix;
}

var p1 = document.createElement('p');
p1.innerText = 'Матрица А';
document.body.appendChild(p1);

var tableA = createInputMatrix();
document.body.appendChild(tableA);

var p2 = document.createElement('p');
p2.innerText = 'Матрица B';
document.body.appendChild(p2);

var tableB = createInputMatrix();
document.body.appendChild(tableB);

var multButton = document.createElement('button');
multButton.innerText = 'Умножение!';

var p3 = document.createElement('p');
var outTable = document.createElement('table'); 
multButton.onclick = function(){
    p3.innerText = 'Результат: ';
    outTable.innerHTML = '';
    fillOutputMatrix(
        multiply(getMatrixFromTable(tableA), getMatrixFromTable(tableB)),
        outTable
        );
    document.body.appendChild(p3);
    document.body.appendChild(outTable);
}
document.body.appendChild(multButton)