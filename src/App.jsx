import { Suspense } from 'react'
import './App.css'
import Banner from './component/banner/Banner'
import Navbar from './component/navbar/Navbar'
import StatSection from './component/statistics/StatSection'
import ToolSection from './component/tools/ToolSection'
import Empty from './component/cart/Empty'
import Cart from './component/cart/Cart'
import InstructionSection from './component/instruction/InstructionSection'
import PricingSection from './component/pricing/PricingSection'
import Footer from './component/footer/Footer'
import Freetrail from './component/footer/Freetrail'


const fetchCardData=async() =>{

  const res=await fetch('/public/cardData.json')
  return res.json();
}


function App() {
  
  const cardPromise=fetchCardData();

  return (
    <>
    <header>
      <Navbar></Navbar>
      <Banner></Banner>
    </header>

    <main>
      <StatSection></StatSection>
     <Suspense fallback={<span className="loading loading-bars loading-xl flex mx-auto justify-center items-center"></span>}>
       <ToolSection cardPromise={cardPromise}></ToolSection>
     </Suspense>

     {/* <Cart></Cart> */}
     {/* <Empty></Empty> */}
     <InstructionSection></InstructionSection>
     <PricingSection></PricingSection>

    </main>

    <footer>
      <Freetrail></Freetrail>
      <Footer></Footer>
    </footer>
    </>
  )
}

export default App
