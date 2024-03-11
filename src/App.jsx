import BarraNav from "./components/BarraNav"
import { AppRouter } from "./router/AppRouter"
import {LoginScreen} from "./components/LoginScreen"
import "./style/app.css"

function App() {

  return (
    <>
      <div className="namdhinggo-regular">
      <BarraNav/>
      <LoginScreen/>
      </div>
     
    </>
  )
}

export default App
