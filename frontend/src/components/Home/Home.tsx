import React from 'react'
import Hero from './components/Hero'
import {Navbar} from '../Navbar'
import { AskNExpert } from './components/AskNExpert'
import AdvicePage from './components/AdvicePage'
import FAQ from './components/FAQ'
import { WhyChooseUs } from './components/WhyChooseUs'
import { Cards } from './components/cards'

const Home = () => {
  return (
    <>
    <Navbar/>
    <Hero/>
    <AskNExpert/>
    <AdvicePage/>
    <Cards/>
    <FAQ/>
    <WhyChooseUs/>
    </>
  )
}

export default Home