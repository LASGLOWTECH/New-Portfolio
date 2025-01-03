import './globals.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import { Poppins } from 'next/font/google'


const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '700'], // Specify the weights you need
});

export const metadata = {
  title: 'my folio-app',
  description: 'my portfolio website ',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}
      
      >
        

      <Navbar/>
        
        
        {children}
        <Footer/>
        
        </body>
    </html>
  )
}
