import './App.css'
import Depoiments from './components/Depoiments'
import Diferencials from './components/Diferencials'
import Header from './components/Header'
import Informations from './components/Informations'
import Services from './components/Services'

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
