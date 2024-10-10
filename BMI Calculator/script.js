// Function to calculate BMI
function calculateBMI() {
    // Get the values from the input fields
    let weight = parseFloat(document.getElementById("weight").value);
    let height = parseFloat(document.getElementById("height").value);

    // Check if inputs are valid numbers
    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        alert("Please enter valid positive numbers for weight and height.");
        return;
    }

    // Convert height from cm to meters
    height = height / 100;

    // Calculate BMI
    let bmi = weight / (height * height);

    // Display the result
    document.getElementById("bmiResult").innerText = `Your BMI is ${bmi.toFixed(2)}`;
}
