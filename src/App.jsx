import './App.css'
import Banner from './component/banner/Banner'
import Navbar from './component/navbar/Navbar'
import StatSection from './component/statistics/StatSection'

function App() {
  

  return (
    <>
    <header>
      <Navbar></Navbar>
      <Banner></Banner>
    </header>

    <main>
      <StatSection></StatSection>
    </main>
    </>
  )
}

export default App
