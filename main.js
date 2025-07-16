// Function to calculate BMI based on weight (kg) and height (m)
function calculateBMI(weight, height) {
  const bmi = weight / (height * height);
  return bmi.toFixed(2);
}

// Function to classify the BMI into standard health categories
function classifyBMI(bmi) {
  if (bmi < 18.5) return "Underweight";
  if (bmi < 25) return "Normal weight";
  if (bmi < 30) return "Overweight";
  return "Obese";
}

// Import readline to allow user input via terminal
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout
});

// Ask the user for weight in kilograms
readline.question("Enter your weight in kg: ", (weightInput) => {
  // Ask the user for height in meters
  readline.question("Enter your height in meters: ", (heightInput) => {
    const weight = parseFloat(weightInput);
    const height = parseFloat(heightInput);

    // Validate the inputs
    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
      console.log("Invalid input. Please enter positive numeric values.");
      readline.close();
      return;
    }
    
    // Perform calculation and classification
    const bmi = calculateBMI(weight, height);
    const category = classifyBMI(bmi);

    // Show the result / Mostra o resultado
    console.log(`\nYour BMI is ${bmi} (${category})`);
    readline.close();
  });
});