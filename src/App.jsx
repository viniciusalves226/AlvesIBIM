import './App.css'

function App() {
  return (
    <>
      <div>
        <header className="topo">
          <div className="container">
            <div className="divlogo">
              <div className="img">
                <img className="logo" src="https://images.vexels.com/media/users/3/153242/isolated/preview/6076a2083aacc2b3affbc0cc7a35c0d7-icone-plano-do-disco-compacto-multimidia.png" alt="Logo" />
              </div>
              <div className="h1">
                <h1>MUZAAC</h1>
              </div>
            </div>
          </div>
        </header>
      </div>

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
        <div className="prods red p1"></div>
        <div className="prods red p2"></div>
        <div className="prods red p3"></div>
        <div className="prods red p4"></div>
        <div className="prods red p5">.3</div>
        <div className="prods red p6"></div>
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