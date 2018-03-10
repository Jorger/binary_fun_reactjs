//Genera aleatorios dado un rango...
export const generateRandomInteger = (min, max) => Math.floor(min + Math.random() * (max + 1 - min));

//Devuelve un array con los valores binarios de un decimal...
export const generateBinaryValue = (decimalValue, size) => {
    let binaryValue = decimalValue.toString(2);
    if(binaryValue.length < size) {
        binaryValue = `${"0".repeat(size - binaryValue.length)}${binaryValue}`;
    }
    return binaryValue.split("");
};
