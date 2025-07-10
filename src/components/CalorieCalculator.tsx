'use client';

import { useState } from 'react';
import { calculateBMR, calculateTDEE } from '../utils/calculations';
import { Language, translations } from '../utils/translations';
import { Theme } from '../utils/themes';

interface UserData {
  age: number;
  gender: 'male' | 'female';
  weight: number;
  height: number;
  activityLevel: 'sedentary' | 'light' | 'moderate' | 'active' | 'very_active';
}

interface Results {
  bmr: number;
  tdee: number;
  weightLoss: number;
  weightGain: number;
}

interface CalorieCalculatorProps {
  language: Language;
  currentTheme: Theme;
}

export default function CalorieCalculator({ language, currentTheme }: CalorieCalculatorProps) {
  const t = translations[language];
  const [userData, setUserData] = useState<UserData>({
    age: 0,
    gender: 'male',
    weight: 0,
    height: 0,
    activityLevel: 'moderate'
  });

  const [results, setResults] = useState<Results | null>(null);
  const [validationError, setValidationError] = useState<string>('');

  const handleInputChange = (field: keyof UserData, value: string | number) => {
    // Handle different field types appropriately
    if (field === 'gender' || field === 'activityLevel') {
      // Gender and activity level should remain strings
      setUserData(prev => ({
        ...prev,
        [field]: value as string
      }));
    } else {
      // Handle numeric fields
      let cleanValue: number;
      if (typeof value === 'string') {
        // Handle empty string
        if (value === '') {
          cleanValue = 0;
        } else {
          // Remove leading zeros but allow single '0' and decimals
          let cleanedString = value;
          if (field === 'age') {
            // For age, remove leading zeros but keep single '0'
            cleanedString = value.replace(/^0+(?=\d)/, '') || '0';
            cleanValue = parseInt(cleanedString, 10);
          } else {
            // For weight and height, allow decimals, remove leading zeros before decimal
            cleanedString = value.replace(/^0+(?=\d)/, '') || '0';
            cleanValue = parseFloat(cleanedString);
          }
        }
      } else {
        cleanValue = value;
      }
      
      // Ensure no negative values
      if (cleanValue < 0) {
        cleanValue = 0;
      }
      
      setUserData(prev => ({
        ...prev,
        [field]: cleanValue
      }));
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, field: keyof UserData) => {
    // Only prevent negative values
    if (field !== 'gender' && e.key === '-') {
      e.preventDefault();
      return;
    }
  };

  const handleCalculate = () => {
    // Clear any previous validation errors
    setValidationError('');
    
    // Check for empty fields
    const emptyFields: string[] = [];
    
    if (!userData.age || userData.age === 0) {
      emptyFields.push(t.age);
    }
    
    if (!userData.weight || userData.weight === 0) {
      emptyFields.push(t.weight);
    }
    
    if (!userData.height || userData.height === 0) {
      emptyFields.push(t.height);
    }
    
    // If there are empty fields, show error and don't calculate
    if (emptyFields.length > 0) {
      setValidationError(`${t.pleaseFillFields}: ${emptyFields.join(', ')}`);
      setResults(null);
      return;
    }
    
    // All fields are filled, proceed with calculation
    const bmr = calculateBMR(userData);
    const tdee = calculateTDEE(bmr, userData.activityLevel);
    
    setResults({
      bmr: Math.round(bmr),
      tdee: Math.round(tdee),
      weightLoss: Math.round(tdee - 500),
      weightGain: Math.round(tdee + 500)
    });
  };

  // Update validation error when language changes
  const getValidationError = () => {
    if (!validationError) return '';
    
    // Check for empty fields again with current language
    const emptyFields: string[] = [];
    
    if (!userData.age || userData.age === 0) {
      emptyFields.push(t.age);
    }
    
    if (!userData.weight || userData.weight === 0) {
      emptyFields.push(t.weight);
    }
    
    if (!userData.height || userData.height === 0) {
      emptyFields.push(t.height);
    }
    
    if (emptyFields.length > 0) {
      return `${t.pleaseFillFields}: ${emptyFields.join(', ')}`;
    }
    
    return '';
  };

  const activityLevels = [
    { value: 'sedentary', label: t.sedentary, multiplier: 1.2 },
    { value: 'light', label: t.light, multiplier: 1.375 },
    { value: 'moderate', label: t.moderate, multiplier: 1.55 },
    { value: 'active', label: t.active, multiplier: 1.725 },
    { value: 'very_active', label: t.veryActive, multiplier: 1.9 }
  ];

  return (
    <div className="grid md:grid-cols-2 gap-6 w-full max-w-4xl mx-auto">
      {/* Input Form */}
      <div className="bg-white rounded-lg shadow-lg p-4 flex flex-col justify-between">
        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">{t.personalInfo}</h2>
        
        <div className="space-y-3">
          {/* Age */}
          <div>
            <label htmlFor="age" className="block text-sm font-medium text-gray-700 mb-2">
              {t.age}
            </label>
            <input
              id="age"
              type="number"
              value={userData.age || ''}
              onChange={(e) => handleInputChange('age', e.target.value)}
              onKeyDown={(e) => handleKeyDown(e, 'age')}
              className={`w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-${currentTheme.button.replace('bg-', '')} focus:border-transparent`}
              min="1"
              max="120"
              placeholder={t.agePlaceholder}
            />
          </div>

          {/* Gender */}
          <div>
            <label htmlFor="gender" className="block text-sm font-medium text-gray-700 mb-2">
              {t.gender}
            </label>
            <select
              id="gender"
              value={userData.gender}
              onChange={(e) => handleInputChange('gender', e.target.value as 'male' | 'female')}
              className={`w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-${currentTheme.button.replace('bg-', '')} focus:border-transparent`}
              aria-label="Select your gender"
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>

          {/* Weight */}
          <div>
            <label htmlFor="weight" className="block text-sm font-medium text-gray-700 mb-2">
              {t.weight}
            </label>
            <input
              id="weight"
              type="number"
              value={userData.weight || ''}
              onChange={(e) => handleInputChange('weight', e.target.value)}
              onKeyDown={(e) => handleKeyDown(e, 'weight')}
              className={`w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-${currentTheme.button.replace('bg-', '')} focus:border-transparent`}
              min="20"
              max="300"
              step="0.1"
              placeholder={t.weightPlaceholder}
            />
          </div>

          {/* Height */}
          <div>
            <label htmlFor="height" className="block text-sm font-medium text-gray-700 mb-2">
              {t.height}
            </label>
            <input
              id="height"
              type="number"
              value={userData.height || ''}
              onChange={(e) => handleInputChange('height', e.target.value)}
              onKeyDown={(e) => handleKeyDown(e, 'height')}
              className={`w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-${currentTheme.button.replace('bg-', '')} focus:border-transparent`}
              min="100"
              max="250"
              step="0.1"
              placeholder={t.heightPlaceholder}
            />
          </div>

          {/* Activity Level */}
          <div>
            <label htmlFor="activityLevel" className="block text-sm font-medium text-gray-700 mb-2">
              {t.activityLevel}
            </label>
            <select
              id="activityLevel"
              value={userData.activityLevel}
              onChange={(e) => handleInputChange('activityLevel', e.target.value as UserData['activityLevel'])}
              className={`w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-${currentTheme.button.replace('bg-', '')} focus:border-transparent`}
              aria-label="Select your activity level"
            >
              {activityLevels.map(level => (
                <option key={level.value} value={level.value}>
                  {level.label}
                </option>
              ))}
            </select>
          </div>

          {/* Validation Error */}
          {getValidationError() && (
            <div className="bg-red-50 border border-red-200 rounded-md p-3">
              <p className="text-red-700 text-sm font-medium">{getValidationError()}</p>
            </div>
          )}
        </div>
      </div>

      {/* Calculate Button */}
      <button
        onClick={handleCalculate}
        className={`w-full text-white py-2 px-4 rounded-md transition-colors font-medium mt-3 ${
          currentTheme.isCustom ? 'hover:opacity-80' : `${currentTheme.button} ${currentTheme.buttonHover}`
        }`}
        style={currentTheme.isCustom ? { backgroundColor: currentTheme.customStyles?.button } : {}}
      >
        {t.calculateButton}
      </button>
    </div>

      {/* Results */}
      <div className="bg-white rounded-lg shadow-lg p-4">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">{t.results}</h2>
        
        {results ? (
          <div className="space-y-4">
            {/* BMR */}
            <div className="bg-blue-50 p-3 rounded-lg">
              <h3 className="text-base font-semibold text-blue-800 mb-1">{t.bmr}</h3>
              <p className="text-2xl font-bold text-blue-600">{results.bmr.toLocaleString()}</p>
              <p className="text-sm text-blue-700 mt-1">calories per day</p>
              <p className="text-xs text-gray-600 mt-2">
                {t.bmrDescription}
              </p>
            </div>

            {/* TDEE */}
            <div className="bg-green-50 p-3 rounded-lg">
              <h3 className="text-base font-semibold text-green-800 mb-1">{t.tdee}</h3>
              <p className="text-2xl font-bold text-green-600">{results.tdee.toLocaleString()}</p>
              <p className="text-sm text-green-700 mt-1">calories per day</p>
              <p className="text-xs text-gray-600 mt-2">
                {t.tdeeDescription}
              </p>
            </div>

            {/* Weight Management */}
            <div className="bg-purple-50 p-3 rounded-lg">
              <h3 className="text-base font-semibold text-purple-800 mb-2">{t.weightManagement}</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <p className="text-sm text-purple-700 mb-1">{t.weightLoss}</p>
                  <p className="text-xl font-bold text-purple-600">{results.weightLoss.toLocaleString()}</p>
                  <p className="text-xs text-gray-600">calories/day</p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-purple-700 mb-1">{t.weightGain}</p>
                  <p className="text-xl font-bold text-purple-600">{results.weightGain.toLocaleString()}</p>
                  <p className="text-xs text-gray-600">calories/day</p>
                </div>
              </div>
              <p className="text-xs text-gray-600 mt-3">
                {t.weightManagementDescription}
              </p>
            </div>
          </div>
        ) : (
          <div className="text-center text-gray-500 py-8">
            <div className="text-4xl mb-2">📊</div>
            <p className="text-sm">{t.enterInfoMessage}</p>
          </div>
        )}
      </div>
    </div>
  );
} 