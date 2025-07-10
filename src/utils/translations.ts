export type Language = 'en' | 'zh-TW' | 'zh-CN' | 'ja';

export interface Translations {
  title: string;
  subtitle: string;
  personalInfo: string;
  age: string;
  agePlaceholder: string;
  gender: string;
  weight: string;
  weightPlaceholder: string;
  height: string;
  heightPlaceholder: string;
  activityLevel: string;
  sedentary: string;
  light: string;
  moderate: string;
  active: string;
  veryActive: string;
  calculateButton: string;
  results: string;
  bmr: string;
  bmrDescription: string;
  tdee: string;
  tdeeDescription: string;
  weightManagement: string;
  weightLoss: string;
  weightGain: string;
  weightManagementDescription: string;
  enterInfoMessage: string;
  languageSelector: string;
  pleaseFillFields: string;
  themeSelector: string;
  selectTheme: string;
  customColors: string;
  backgroundStart: string;
  backgroundEnd: string;
  buttonColor: string;
  applyColors: string;
  resetColors: string;
}

export const translations: Record<Language, Translations> = {
  en: {
    title: 'TDEE & BMR Calculator',
    subtitle: 'Calculate your Basal Metabolic Rate (BMR) and Total Daily Energy Expenditure (TDEE)',
    personalInfo: 'Personal Information',
    age: 'Age (years)',
    agePlaceholder: 'Enter your age',
    gender: 'Gender',
    weight: 'Weight (kg)',
    weightPlaceholder: 'Enter your weight in kg',
    height: 'Height (cm)',
    heightPlaceholder: 'Enter your height in cm',
    activityLevel: 'Activity Level',
    sedentary: 'Sedentary (little or no exercise)',
    light: 'Lightly active (light exercise 1-3 days/week)',
    moderate: 'Moderately active (moderate exercise 3-5 days/week)',
    active: 'Very active (hard exercise 6-7 days/week)',
    veryActive: 'Extra active (very hard exercise, physical job)',
    calculateButton: 'Calculate TDEE & BMR',
    results: 'Your Results',
    bmr: 'Basal Metabolic Rate (BMR)',
    bmrDescription: 'This is the number of calories your body burns at rest to maintain basic life functions.',
    tdee: 'Total Daily Energy Expenditure (TDEE)',
    tdeeDescription: 'This is the total number of calories you burn each day including all activities.',
    weightManagement: 'Weight Management',
    weightLoss: 'Weight Loss',
    weightGain: 'Weight Gain',
    weightManagementDescription: '±500 calories from your TDEE for weight loss or gain goals.',
    enterInfoMessage: 'Enter your information and click calculate to see your results',
    languageSelector: 'Language',
    pleaseFillFields: 'Please fill in the following fields',
    themeSelector: 'Theme',
    selectTheme: 'Select Theme',
    customColors: 'Custom Colors',
    backgroundStart: 'Background Start',
    backgroundEnd: 'Background End',
    buttonColor: 'Button Color',
    applyColors: 'Apply Colors',
    resetColors: 'Reset Colors'
  },
  'zh-TW': {
    title: 'TDEE & BMR 計算器',
    subtitle: '計算您的基礎代謝率 (BMR) 和每日總熱量消耗 (TDEE)',
    personalInfo: '個人資料',
    age: '年齡 (歲)',
    agePlaceholder: '請輸入您的年齡',
    gender: '性別',
    weight: '體重 (公斤)',
    weightPlaceholder: '請輸入您的體重 (公斤)',
    height: '身高 (公分)',
    heightPlaceholder: '請輸入您的身高 (公分)',
    activityLevel: '活動量',
    sedentary: '久坐不動 (很少或沒有運動)',
    light: '輕度活動 (每週輕度運動 1-3 天)',
    moderate: '中度活動 (每週中度運動 3-5 天)',
    active: '高度活動 (每週劇烈運動 6-7 天)',
    veryActive: '極度活動 (劇烈運動，體力勞動工作)',
    calculateButton: '計算 TDEE & BMR',
    results: '您的結果',
    bmr: '基礎代謝率 (BMR)',
    bmrDescription: '這是您的身體在休息時維持基本生命功能所消耗的卡路里數。',
    tdee: '每日總熱量消耗 (TDEE)',
    tdeeDescription: '這是您每天包括所有活動在內所消耗的總卡路里數。',
    weightManagement: '體重管理',
    weightLoss: '減重',
    weightGain: '增重',
    weightManagementDescription: '從您的 TDEE 增減 500 卡路里以達到減重或增重目標。',
    enterInfoMessage: '請輸入您的資料並點擊計算以查看結果',
    languageSelector: '語言',
    pleaseFillFields: '請填寫以下欄位',
    themeSelector: '主題',
    selectTheme: '選擇主題',
    customColors: '自訂顏色',
    backgroundStart: '背景起始',
    backgroundEnd: '背景結束',
    buttonColor: '按鈕顏色',
    applyColors: '套用顏色',
    resetColors: '重置顏色'
  },
  'zh-CN': {
    title: 'TDEE & BMR 计算器',
    subtitle: '计算您的基础代谢率 (BMR) 和每日总热量消耗 (TDEE)',
    personalInfo: '个人信息',
    age: '年龄 (岁)',
    agePlaceholder: '请输入您的年龄',
    gender: '性别',
    weight: '体重 (公斤)',
    weightPlaceholder: '请输入您的体重 (公斤)',
    height: '身高 (厘米)',
    heightPlaceholder: '请输入您的身高 (厘米)',
    activityLevel: '活动量',
    sedentary: '久坐不动 (很少或没有运动)',
    light: '轻度活动 (每周轻度运动 1-3 天)',
    moderate: '中度活动 (每周中度运动 3-5 天)',
    active: '高度活动 (每周剧烈运动 6-7 天)',
    veryActive: '极度活动 (剧烈运动，体力劳动工作)',
    calculateButton: '计算 TDEE & BMR',
    results: '您的结果',
    bmr: '基础代谢率 (BMR)',
    bmrDescription: '这是您的身体在休息时维持基本生命功能所消耗的卡路里数。',
    tdee: '每日总热量消耗 (TDEE)',
    tdeeDescription: '这是您每天包括所有活动在内所消耗的总卡路里数。',
    weightManagement: '体重管理',
    weightLoss: '减重',
    weightGain: '增重',
    weightManagementDescription: '从您的 TDEE 增减 500 卡路里以达到减重或增重目标。',
    enterInfoMessage: '请输入您的资料并点击计算以查看结果',
    languageSelector: '语言',
    pleaseFillFields: '请填写以下字段',
    themeSelector: '主题',
    selectTheme: '选择主题',
    customColors: '自定义颜色',
    backgroundStart: '背景起始',
    backgroundEnd: '背景结束',
    buttonColor: '按钮颜色',
    applyColors: '应用颜色',
    resetColors: '重置颜色'
  },
  ja: {
    title: 'TDEE & BMR 計算機',
    subtitle: '基礎代謝率 (BMR) と総消費カロリー (TDEE) を計算',
    personalInfo: '個人情報',
    age: '年齢 (歳)',
    agePlaceholder: '年齢を入力してください',
    gender: '性別',
    weight: '体重 (kg)',
    weightPlaceholder: '体重を入力してください (kg)',
    height: '身長 (cm)',
    heightPlaceholder: '身長を入力してください (cm)',
    activityLevel: '活動レベル',
    sedentary: '座りがち (運動なし、またはほとんどなし)',
    light: '軽度の活動 (週1-3日の軽い運動)',
    moderate: '中程度の活動 (週3-5日の中程度の運動)',
    active: '高い活動 (週6-7日の激しい運動)',
    veryActive: '非常に高い活動 (激しい運動、肉体労働)',
    calculateButton: 'TDEE & BMR を計算',
    results: '結果',
    bmr: '基礎代謝率 (BMR)',
    bmrDescription: 'これは、基本的な生命機能を維持するために体が安静時に消費するカロリー数です。',
    tdee: '総消費カロリー (TDEE)',
    tdeeDescription: 'これは、すべての活動を含む1日に消費する総カロリー数です。',
    weightManagement: '体重管理',
    weightLoss: '減量',
    weightGain: '増量',
    weightManagementDescription: '減量または増量の目標のために、TDEEから±500カロリー。',
    enterInfoMessage: '情報を入力して計算をクリックすると結果が表示されます',
    languageSelector: '言語',
    pleaseFillFields: '以下の項目を入力してください',
    themeSelector: 'テーマ',
    selectTheme: 'テーマを選択',
    customColors: 'カスタムカラー',
    backgroundStart: '背景開始',
    backgroundEnd: '背景終了',
    buttonColor: 'ボタンカラー',
    applyColors: 'カラーを適用',
    resetColors: 'カラーをリセット'
  }
};

export const languageNames: Record<Language, string> = {
  en: 'English',
  'zh-TW': '繁體中文',
  'zh-CN': '简体中文',
  ja: '日本語'
}; 