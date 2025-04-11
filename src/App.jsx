import './App.css'
import Botonbox from './components/Botonbox'
import Header from './components/Header'
import Topo from './components/Topo'
import Baixod from './components/Baixod'


function App() {
  return (
    <>
      
        <Header></Header>
      
       <Topo></Topo>
    
      <Botonbox></Botonbox>

      <div className="prod">
        <div className="prods red p1" src="https://www.shoppingdella.com.br/upload/blog/1317jpeg"></div>
      </div>

      <Baixod></Baixod>
    </>
  )
}

export default App