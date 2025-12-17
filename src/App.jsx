import React from 'react'
import Navbar from './components/Navbar'
import News from './pages/News'
import Category from './components/Category'
import Footer from './components/Footer'
const App = () => {
  return (
    <div className='bg-gray-700 min-h-screen w-full'>
    <Navbar className={'sticky top-0 z-10'} />
    <Category className="py-10" />
    
    <News  className="pb-10" />
    <Footer  />

    </div>
  )
}

export default App