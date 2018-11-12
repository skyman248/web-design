var N = 3;
var M = 3;
var RAND_COEFF = 10;

class MatrixCalculator{
    multiply(matrixA, matrixB, n = N, m = M){
        var matrix = [];
        for (var i = 0; i < n; i++){ //each row
            var row = [];
            for (var j = 0; j < n; j++){ //each e in row
                var elem = 0;
                for (var k = 0; k < m; k++){
                    elem += matrixA[i][k]*matrixB[k][j];
                }
                row.push(elem);
            }
            matrix.push(row);
        }
        return matrix;
    }
}

class IOCalculator{
    tableToMatrix(table, n = N, m = M){
        var inputs = table.getElementsByTagName('input');
        console.log('inputs: ');
        for (var i = 0; i < inputs.length; i++){
            inputs[i].value = isNaN(inputs[i].value)?0:Number(inputs[i].value);
            console.log(inputs[i].value);
        }
        var matrix = [];
        for (var i = 0; i < n; i++){
            var row = [];
            for (var j = 0; j < m; j++){
                row.push(inputs[i*m + j].value);
            }
            matrix.push(row);
        }
        return matrix;
    }
    
    newInputTable(n = N, m = M, randFilled = true){
        var table = document.createElement('table');
        for (var i = 0; i < n; i++){
            var tr = document.createElement('tr');
            for (var j = 0; j < m; j++){
                var td = document.createElement('td');
                var input = document.createElement('input')
                input.value = randFilled?Math.floor(Math.random()*RAND_COEFF):0;
                td.appendChild(input);
                tr.appendChild(td);
            }
            table.appendChild(tr);
        }
        return table;
    }
    
    fillOutputTable(matrix, outTable, n = M, m = M){
        console.log(matrix);
        console.log(outTable);
        for (var i = 0; i < n; i++){
            var tr = document.createElement('tr');
            for (var j = 0; j < m; j++){
                var td = document.createElement('td');
                var input = document.createElement('input')
                input.value = matrix[i][j];
                input.readOnly = true;
                td.appendChild(input);
                tr.appendChild(td);
            }
            outTable.appendChild(tr);
        }
    }
    
    copyValues(tableDst, tableSrc, isReadOnly = false){
        var valsSrc = tableSrc.getElementsByTagName('input');
        var valsDst = tableDst.getElementsByTagName('input');
        if (valsSrc.length != valsDst.length){console.log("Tables have different sizes. Unable to copy."); return;};
        for (var i = 0; i < valsDst.length; i++){
            valsDst[i].value = valsSrc[i].value;
            valsDst[i].readOnly = isReadOnly;
        }
    }
}

var IOC = new IOCalculator;

function addParagraph(string, container = document.body){
    var p = document.createElement('p');
    p.innerText = string;
    container.appendChild(p);
    return p;
}

function refreshCalculator(calculator){
    var MC = new MatrixCalculator;
    calculator.innerHTML = '';
    addParagraph('Таблица А:', calculator);
    var tableA = IOC.newInputTable(N, M);
    calculator.appendChild(tableA);

    addParagraph('Таблица B:', calculator);
    var tableB = IOC.newInputTable(M, N);
    calculator.appendChild(tableB);
    
    var multButton = document.createElement('button');
    multButton.innerText = 'Умножение!';
    
    var p = document.createElement('p');
    var outTable = document.createElement('table'); 
    var copyBtnA = document.createElement('button');
    var copyBtnB = document.createElement('button');

    multButton.onclick = function(){
        p.innerText = 'Результат: ';
        outTable.innerHTML = '';
        var m1 = IOC.tableToMatrix(tableA, N, M);
        var m2 = IOC.tableToMatrix(tableB, M, N);
        IOC.fillOutputTable(MC.multiply(m1, m2), outTable, N, N);
        calculator.appendChild(p);
        calculator.appendChild(outTable);

        copyBtnA.innerText = 'Скопировать в А'
        copyBtnA.onclick = function(){IOC.copyValues(tableA, outTable, false);}
        copyBtnB.innerText = 'Скопировать в B'
        copyBtnB.onclick = function(){IOC.copyValues(tableB, outTable, false);}
        //calculator.appendChild(copyBtnA);
        //calculator.appendChild(copyBtnB);
    }
    calculator.appendChild(multButton)

}

addParagraph('Размерность: ');

var selectN = document.createElement("select");
selectN.innerHTML = `
    <option value='2'>2</option>
    <option selected value='3'>3</option>
    <option value='4'>4</option>
    <option value='5'>5</option>`;

var selectM = document.createElement("select");
selectM.innerHTML = `
    <option value='2'>2</option>
    <option selected value='3'>3</option>
    <option value='4'>4</option>
    <option value='5'>5</option>`;

var calculator = document.createElement('div');
    
var refrBtn = document.createElement('button');
refrBtn.innerText = 'Применить размерность'
refrBtn.onclick = function(){
    N = selectN.selectedOptions[0].value;
    M = selectM.selectedOptions[0].value;
    console.log('new dimension: '+N+'x'+M);
    refreshCalculator(calculator);
}
refreshCalculator(calculator);

document.body.appendChild(selectN);
document.body.appendChild(selectM);
document.body.appendChild(refrBtn);
document.body.appendChild(calculator);