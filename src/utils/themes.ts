export interface Theme {
  name: string;
  background: string;
  button: string;
  buttonHover: string;
  isCustom?: boolean;
  customStyles?: {
    background: string;
    button: string;
  };
}

export const themes: Theme[] = [
  {
    name: 'Blue',
    background: 'from-blue-50 to-indigo-100',
    button: 'bg-blue-600',
    buttonHover: 'hover:bg-blue-700'
  },
  {
    name: 'Green',
    background: 'from-green-50 to-emerald-100',
    button: 'bg-green-600',
    buttonHover: 'hover:bg-green-700'
  },
  {
    name: 'Purple',
    background: 'from-purple-50 to-violet-100',
    button: 'bg-purple-600',
    buttonHover: 'hover:bg-purple-700'
  },
  {
    name: 'Orange',
    background: 'from-orange-50 to-amber-100',
    button: 'bg-orange-600',
    buttonHover: 'hover:bg-orange-700'
  },
  {
    name: 'Pink',
    background: 'from-pink-50 to-rose-100',
    button: 'bg-pink-600',
    buttonHover: 'hover:bg-pink-700'
  },
  {
    name: 'Teal',
    background: 'from-teal-50 to-cyan-100',
    button: 'bg-teal-600',
    buttonHover: 'hover:bg-teal-700'
  }
];

export interface CustomTheme {
  backgroundStart: string;
  backgroundEnd: string;
  buttonColor: string;
}

export const createCustomTheme = (customTheme: CustomTheme): Theme => {
  return {
    name: 'Custom',
    background: 'from-transparent to-transparent', // Placeholder, will use custom styles
    button: 'bg-transparent', // Placeholder, will use custom styles
    buttonHover: 'hover:opacity-80',
    isCustom: true,
    customStyles: {
      background: `linear-gradient(to bottom right, ${customTheme.backgroundStart}, ${customTheme.backgroundEnd})`,
      button: customTheme.buttonColor
    }
  };
}; 