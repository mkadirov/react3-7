const inputBytesElement = document.getElementById('inputBytes');
const convertButton = document.getElementById('convertButton');
const resultElement = document.getElementById('result');

convertButton.addEventListener('click', () => {
    const bytes = parseInt(inputBytesElement.value, 10);

    if (!isNaN(bytes)) {
        const formattedResult = formatBytes(bytes);
        console.log(formattedResult);
        resultElement.textContent = formattedResult;
    } else {
        console.log('asdasd');
        resultElement.textContent = 'Invalid input';
    }
});

function formatBytes(bytes) {
    var format = '0b';
    if(bytes >= 1000 && bytes%1000!= 0) {
        format = '0.0b'
    }
    
    var result = numeral(bytes).format(format);
    console.log(result);
    return result;
}