/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens:{
      sm:'480px',
      md:'768px',
      lg:'976px',
      xl:'1440px'
    },
    extend: {
      colors:{
        darkBlue:'#202654',
        darkestBlue:'#0e1223',
        darkerBlue:"#171721",
        ash:'#f2f3f4',
        ash2:'#B1B2B3',
      amber1:'#F1AB1E',
      amber2:'#F7941D',
        lightBlue:'#19898b',
        lighterBlue:'#198b8c',
        greyBlack:'#181B38',
        grey:'#fafafa',
        darkGreen:'#00d3ac',
        lightGreen:'#acfce3',
        purpleBlue:'#6945d8',
       
      },
    backgroundImage:theme=>({

     'banner' :"url('/Simpleshy.svg')",
    })
    
    
    },
  
  },
  plugins: [],
}
