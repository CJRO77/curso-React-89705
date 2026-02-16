
import './App.css'

function App() {
  let titulo = "Bienvenido a mi aplicación React"
  let getUserFavoriteColor = () => "blue"

  let  buttonStyles = {

    backgroundColor: getUserFavoriteColor(),
    color: 'white',
    padding: '10px 20px',
  }

  return (
    <>
      
      <h1 style={{ color: "yellow" }}>{titulo}</h1>


      <div className="card">
        <button style={ buttonStyles }>
          Hola soy un botón
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
