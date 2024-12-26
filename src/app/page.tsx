import React from 'react'
import Header from './components/Header'
import Hero from '@/app/components/Hero'
import Broswerrange from '@/app/components/BrowserRange'
import Ourproduct from '@/app/components/OurProducts'
import FurniturePage from '@/app/components/Furniture'
import Footer from './components/Footer'


const page = () => {
  return (
    <div>
<Header />
      <Hero/>
      <Broswerrange/>
      <Ourproduct/>
      <FurniturePage/>
      <Footer />
      
    </div>
  )
}

export default page