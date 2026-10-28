import Hero from '../components/Hero'
import Organizations from '../components/Organizations'
import Challenges from '../components/Challenges'
import KloudWay from '../components/KloudWay'
import PracticeAreas from '../components/PracticeAreas'
import Industries from '../components/Industries'
import Insights from '../components/Insights'
import Testimonials from '../components/Testimonials'
import FAQ from '../components/FAQ'
import LetsBuild from '../components/LetsBuild'

function Home() {
  return (
    <>
      <Hero />
       <KloudWay />
      <Organizations />
      <Challenges />
      {/* <WhatWeDo /> */}
     
      <PracticeAreas />
      <Industries />
      <Insights />
      <Testimonials />
      <FAQ />
      <LetsBuild />
    </>
  )
}

export default Home