tailwind.config = {
  darkMode: ['class', '.light'],
  theme: {
    extend: {
      fontFamily: {
        inter: ['"Inter"', 'sans-serif'],
      },
      keyframes: {
        'slide-in': {
          from: { left: '0' },
          to: { left: '50%' },
        },
        'slide-back': {
          from: { left: '50%' },
          to: { left: '0' },
        },
      },
      animation: {
        'slide-in': 'slide-in 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards',
        'slide-back': 'slide-back 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards',
      },
    },
  },
}
