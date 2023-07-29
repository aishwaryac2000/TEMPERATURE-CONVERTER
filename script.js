function convertTemperature() {
    const temperatureInput = document.getElementById('temperatureInput').value;
    const unitSelect = document.getElementById('unitSelect').value;
    let convertedTemperature = '';

    if (isNaN(temperatureInput)) {
        alert('Please enter a valid temperature!');
        return;
    }

    if (unitSelect === 'celsius') {
        // Convert to Fahrenheit
        convertedTemperature = (parseFloat(temperatureInput) * 9 / 5) + 32;
        convertedTemperature = convertedTemperature.toFixed(2) + ' °F';
    } else if (unitSelect === 'fahrenheit') {
        // Convert to Celsius
        convertedTemperature = (parseFloat(temperatureInput) - 32) * 5 / 9;
        convertedTemperature = convertedTemperature.toFixed(2) + ' °C';
    } else if (unitSelect === 'kelvin') {
        // Convert to Kelvin
        convertedTemperature = parseFloat(temperatureInput) + 273.15;
        convertedTemperature = convertedTemperature.toFixed(2) + ' K';
    }

    document.getElementById('resultArea').textContent = 'Converted Temperature: ' + convertedTemperature;
}