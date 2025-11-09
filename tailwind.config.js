/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        pretendard: ['Pretendard', 'sans-serif'],
      },
      colors: {
        gray1: '#FFFFFF',
        gray2: '#F6F6F6',
        gray3: '#CCCCCC',
        gray4: '#939393',
        gray5: '#181818',
        primary: '#9935FF',
        error: '#F74747',
      },
      fontSize: {
        'bold-18': ['18px', { lineHeight: '28px' }],
        'bold-16': ['16px', { lineHeight: '28px' }],
        'regular-16': ['16px', { lineHeight: '26px' }],
      },
      borderRadius: {
        md: '8px',
        lg: '12px',
      },
      fontWeight: {
        regular: '400',
        bold: '700',
      },
    },
  },
  plugins: [],
};
