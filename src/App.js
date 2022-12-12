// import './App.css';
import Header from "./components/Header";
import Rutas from "./components/Rutas";
import Footer from "./components/Footer";

import "./Styles/desktop.css";

function App() {
  return (
    <div className="App">
      <header>
        <Header/>
      </header>
      <main>
        <Rutas />
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
}

export default App;
