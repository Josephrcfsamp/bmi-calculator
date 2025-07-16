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

// Example inputs for testing
const weight = 70;      // Weight in kilograms
const height = 1.75;    // Height in meters

// Perform calculation and classification
const bmi = calculateBMI(weight, height);
const category = classifyBMI(bmi);

// Output result to the user
console.log(`Your BMI is ${bmi} (${category})`);