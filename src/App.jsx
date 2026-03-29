import './App.css'
import Banner from './component/banner/Banner'
import Navbar from './component/navbar/Navbar'
import StatSection from './component/statistics/StatSection'
import ToolSection from './component/tools/ToolSection'

function App() {
  

  return (
    <>
    <header>
      <Navbar></Navbar>
      <Banner></Banner>
    </header>

    <main>
      <StatSection></StatSection>
      <ToolSection></ToolSection>
    </main>
    </>
  )
}

export default App
