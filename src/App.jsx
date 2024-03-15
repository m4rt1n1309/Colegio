import BarraNav from "./components/BarraNav";
import { AppRouter } from "./router/AppRouter";
import "./style/app.css";

function App() {
  return (
    <>
      <div className="namdhinggo-regular">
        <BarraNav />
        <AppRouter />
      </div>
    </>
  );
}

export default App;
