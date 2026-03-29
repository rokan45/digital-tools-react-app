import { Suspense } from 'react'
import './App.css'
import Banner from './component/banner/Banner'
import Navbar from './component/navbar/Navbar'
import StatSection from './component/statistics/StatSection'
import ToolSection from './component/tools/ToolSection'
import Empty from './component/cart/Empty'
import Cart from './component/cart/Cart'


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

     <Cart></Cart>
     {/* <Empty></Empty> */}

    </main>
    </>
  )
}

export default App
