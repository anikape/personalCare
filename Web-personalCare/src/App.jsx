import './App.css'
import Depoiments from './components/Home/Depoiments'
import Diferencials from './components/Home/Diferencials'
import Header from './components/Home/Header'
import Informations from './components/Home/Informations'
import Services from './components/Home/Services'

function App() {

  return (
    <div className="App">
     <Header />
     <Informations />
     <Services />
     <Diferencials />
     <Depoiments />
    </div>
  )
}

export default App
