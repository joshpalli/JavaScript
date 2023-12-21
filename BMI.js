// Write conversion factor variables
cmConversionFactor = .0254;
kgConversionFactor = 2.2046;

// Initialize Inch and Pound values
inches = 63;
pounds = 160;

// Calculate BMI
bmi = (pounds /= kgConversionFactor) / ((inches *= cmConversionFactor) ** 2)
console.log(bmi);