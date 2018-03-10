import {
    generateRandomInteger ,
    generateBinaryValue
} from './utils';

//Creará una nueva board, en función del tamaño dado...
export const board = (size) => {
    const maxValue = parseInt('1'.repeat(size), 2);
    const defaultZeros = '0'.repeat(size).split("");
    const results = [];
    const matrixGame = [];
    for(let i = 1; i <= size; i++) {
        const randomValue = generateRandomInteger(0, maxValue);
        const binaryValue = generateBinaryValue(
            randomValue, 
            size
        );
        binaryValue.push(randomValue);
        results.push(binaryValue);
        matrixGame.push(defaultZeros.concat(randomValue));
    }
    const horizontalResults = [];
    //Obtener los valores de abajo...
    for(let i = 0; i < results.length; i++) {
        let valueDecimal = "";
        for(let c = 0; c < results.length; c++) {
            valueDecimal += results[c][i];
        }
        horizontalResults.push(
            parseInt(valueDecimal, 2)
        );
    }
    horizontalResults.push("");
    results.push(horizontalResults);
    matrixGame.push(horizontalResults);
    return {
        matrixGame, 
        results
    };
};

//Valida si los valores dados son correctos...
export const validateMatrix = (matrix) => {
    const horizontal = [];
    const vertical = [];
    let finishBoard = false;
    if(matrix.length !== 0) {
        //Primero validar los datos horizontales...
        for(let cont = 1; cont <= 2; cont++) {
            for(let i = 0; i < matrix.length - 1; i++) {
                const answer = Number(
                    cont === 1 ? (
                        matrix[i][matrix.length - 1]
                    ) : (
                        matrix[matrix.length - 1][i]
                    )
                );
                let valueBinary = "";
                for(let c = 0; c < matrix.length - 1; c++) {
                    valueBinary += matrix[cont === 1 ? i : c][cont === 1 ? c : i];
                    //console.log(valueBinary);
                }
                if(cont === 1) {
                    horizontal.push(
                        answer === parseInt(valueBinary, 2)
                    );
                } else {
                    vertical.push(
                        answer === parseInt(valueBinary, 2)
                    );
                }
            }
        }
        let contCorrect = 0;
        for(let i = 0; i < horizontal.length; i++) {
            if(horizontal[i] && vertical[i]) {
                contCorrect++;
            }
        }
        finishBoard = contCorrect === horizontal.length;
    }
    return {
        horizontal, 
        vertical, 
        finishBoard
    }
};