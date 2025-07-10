interface UserData {
  age: number;
  gender: 'male' | 'female';
  weight: number;
  height: number;
}

type ActivityLevel = 'sedentary' | 'light' | 'moderate' | 'active' | 'very_active';

/**
 * Calculate Basal Metabolic Rate (BMR) using the Mifflin-St Jeor Equation
 * BMR = (10 × weight) + (6.25 × height) - (5 × age) + 5 (for males)
 * BMR = (10 × weight) + (6.25 × height) - (5 × age) - 161 (for females)
 */
export function calculateBMR(userData: UserData): number {
  const { age, gender, weight, height } = userData;
  
  let bmr = (10 * weight) + (6.25 * height) - (5 * age);
  
  if (gender === 'male') {
    bmr += 5;
  } else {
    bmr -= 161;
  }
  
  return bmr;
}

/**
 * Calculate Total Daily Energy Expenditure (TDEE) by multiplying BMR by activity multiplier
 */
export function calculateTDEE(bmr: number, activityLevel: ActivityLevel): number {
  const activityMultipliers = {
    sedentary: 1.2,      // Little or no exercise
    light: 1.375,        // Light exercise 1-3 days/week
    moderate: 1.55,      // Moderate exercise 3-5 days/week
    active: 1.725,       // Hard exercise 6-7 days/week
    very_active: 1.9     // Very hard exercise, physical job
  };
  
  return bmr * activityMultipliers[activityLevel];
}

/**
 * Calculate calories for weight loss (TDEE - 500 calories)
 */
export function calculateWeightLossCalories(tdee: number): number {
  return tdee - 500;
}

/**
 * Calculate calories for weight gain (TDEE + 500 calories)
 */
export function calculateWeightGainCalories(tdee: number): number {
  return tdee + 500;
} 