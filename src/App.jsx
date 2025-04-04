import './App.css'

function App() {
  return (
    <>
      
        <Header></Header>
      

      <div className="btopo">
        <h2 className="font">Os melhores discos e CDs</h2>
      </div>

      <div className="botonbox">
        <div className="gridItem red img1">
          <h2 className="font white">Garantimos um garimpo de qualidade!</h2>
        </div>
        <div className="gridItem red img2">
          <h2 className="font white">Vendemos também aparelhos de som!</h2>
        </div>
        <div className="gridItem red img3">
          <h2 className="font white">Produtos de qualidade com valores variados!</h2>
        </div>
      </div>

      <div className="prod">
        <div className="prods red p1" src="https://www.shoppingdella.com.br/upload/blog/1317jpeg"></div>
      </div>

      <div className="baixod">
        <div className="baixo red">
          <h2 className="font white">MUZAAC</h2>
          <div>
            <h4 className="font">(55)996759409</h4>
          </div>
        </div>
      </div>
    </>
  )
}

export default App