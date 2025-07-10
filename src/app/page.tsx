'use client';

import { useState, useEffect, useRef } from 'react';
import CalorieCalculator from '../components/CalorieCalculator';
import { translations, Language } from '../utils/translations';
import { themes, Theme, CustomTheme, createCustomTheme } from '../utils/themes';

export default function Home() {
  const [language, setLanguage] = useState<Language>('en');
  const [currentTheme, setCurrentTheme] = useState<Theme>(themes[0]);
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [customColors, setCustomColors] = useState<CustomTheme>({
    backgroundStart: '#dbeafe',
    backgroundEnd: '#c7d2fe',
    buttonColor: '#2563eb'
  });
  const colorPickerRef = useRef<HTMLDivElement>(null);

  const t = translations[language];

  // Close color picker when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (colorPickerRef.current && !colorPickerRef.current.contains(event.target as Node)) {
        setShowColorPicker(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleApplyCustomColors = () => {
    const customTheme = createCustomTheme(customColors);
    setCurrentTheme(customTheme);
    setShowColorPicker(false);
  };

  const handleResetColors = () => {
    setCurrentTheme(themes[0]);
    setCustomColors({
      backgroundStart: '#dbeafe',
      backgroundEnd: '#c7d2fe',
      buttonColor: '#2563eb'
    });
    setShowColorPicker(false);
  };

  return (
    <div 
      className={`min-h-screen transition-all duration-300 ${
        currentTheme.isCustom ? 'custom-bg' : `bg-gradient-to-br ${currentTheme.background}`
      }`}
      style={currentTheme.isCustom ? { ['--custom-gradient' as any]: currentTheme.customStyles?.background } : {}}
    >
      {/* Header with language and color picker */}
      <div className="flex justify-end p-4 gap-2">
        {/* Language Selector */}
        <div className="relative">
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value as Language)}
            className="px-3 py-2 border border-gray-300 rounded-lg bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            aria-label={t.languageSelector}
          >
            <option value="en">🇺🇸 English</option>
            <option value="zh-TW">🇹🇼 繁體中文</option>
            <option value="zh-CN">🇨🇳 简体中文</option>
            <option value="ja">🇯🇵 日本語</option>
          </select>
        </div>

        {/* Color Picker */}
        <div className="relative" ref={colorPickerRef}>
          <button
            onClick={() => setShowColorPicker(!showColorPicker)}
            className="p-2 border border-gray-300 rounded-lg bg-white shadow-sm hover:bg-gray-50 transition-colors"
            title={t.customColors}
            aria-label={t.customColors}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
            </svg>
          </button>

          {/* Color Picker Menu */}
          {showColorPicker && (
            <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
              <div className="p-4">
                <div className="text-sm font-medium text-gray-700 mb-4">{t.customColors}</div>
                
                {/* Background Start Color */}
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t.backgroundStart}
                  </label>
                  <div className="flex items-center gap-2">
                    <input
                      type="color"
                      value={customColors.backgroundStart}
                      onChange={(e) => setCustomColors(prev => ({ ...prev, backgroundStart: e.target.value }))}
                      className="w-12 h-10 border border-gray-300 rounded cursor-pointer"
                      title={t.backgroundStart}
                    />
                    <input
                      type="text"
                      value={customColors.backgroundStart}
                      onChange={(e) => setCustomColors(prev => ({ ...prev, backgroundStart: e.target.value }))}
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-md text-sm"
                      placeholder="#dbeafe"
                    />
                  </div>
                </div>

                {/* Background End Color */}
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t.backgroundEnd}
                  </label>
                  <div className="flex items-center gap-2">
                    <input
                      type="color"
                      value={customColors.backgroundEnd}
                      onChange={(e) => setCustomColors(prev => ({ ...prev, backgroundEnd: e.target.value }))}
                      className="w-12 h-10 border border-gray-300 rounded cursor-pointer"
                      title={t.backgroundEnd}
                    />
                    <input
                      type="text"
                      value={customColors.backgroundEnd}
                      onChange={(e) => setCustomColors(prev => ({ ...prev, backgroundEnd: e.target.value }))}
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-md text-sm"
                      placeholder="#c7d2fe"
                    />
                  </div>
                </div>

                {/* Button Color */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t.buttonColor}
                  </label>
                  <div className="flex items-center gap-2">
                    <input
                      type="color"
                      value={customColors.buttonColor}
                      onChange={(e) => setCustomColors(prev => ({ ...prev, buttonColor: e.target.value }))}
                      className="w-12 h-10 border border-gray-300 rounded cursor-pointer"
                      title={t.buttonColor}
                    />
                    <input
                      type="text"
                      value={customColors.buttonColor}
                      onChange={(e) => setCustomColors(prev => ({ ...prev, buttonColor: e.target.value }))}
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-md text-sm"
                      placeholder="#2563eb"
                    />
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <button
                    onClick={handleApplyCustomColors}
                    className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors text-sm font-medium"
                  >
                    {t.applyColors}
                  </button>
                  <button
                    onClick={handleResetColors}
                    className="flex-1 bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-gray-600 transition-colors text-sm font-medium"
                  >
                    {t.resetColors}
                  </button>
                </div>

                {/* Preset Themes */}
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <div className="text-sm font-medium text-gray-700 mb-2">Preset Themes</div>
                  <div className="grid grid-cols-3 gap-2">
                    {themes.map((theme) => (
                      <button
                        key={theme.name}
                        onClick={() => {
                          setCurrentTheme(theme);
                          setShowColorPicker(false);
                        }}
                        className={`p-2 rounded-md text-xs transition-colors ${
                          currentTheme.name === theme.name && !currentTheme.isCustom
                            ? 'bg-blue-100 text-blue-700 border border-blue-300'
                            : 'hover:bg-gray-100 text-gray-700 border border-gray-200'
                        }`}
                      >
                        {theme.name}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-4">
            {t.title}
          </h1>
          <p className="text-gray-600 text-center text-lg mb-8">
            {t.subtitle}
          </p>
          <CalorieCalculator language={language} currentTheme={currentTheme} />
        </div>
      </div>
    </div>
  );
}
