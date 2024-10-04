
import { Outlet } from "react-router-dom";
import { Footer, Header } from "./components";


function App() {
  return (
    <div className="App dark:bg-dark">
      <Header />
      <Outlet/>
      <Footer/>
    </div>
  );
}

export default App;