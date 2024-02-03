import './App.css';
import Footer from "./components/Footer.js"


function App() {
  return (
    <div className="App">

      <div className="container">
        <div className="sidebar-left">
        </div>

        <div className="main"> 
          <header className="title">Title </header>
        </div>

        <div className="sidebar-rigth">
        </div>

      </div>
      <Footer />
    </div>
  );
}

export default App;
