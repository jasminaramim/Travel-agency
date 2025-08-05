import { AboutUs } from './AboutUs'
import { Hero } from './Hero'
import { Offer } from './Offer'
import React from 'react'
import { TopDestination } from './TopDestination'

export const Home = () => {
  return (
    <div><Hero/>  
    
      <AboutUs/>
      <TopDestination/>
      <Offer/>
      </div>
  
  )
}
