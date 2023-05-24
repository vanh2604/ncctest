import './App.css'
import Sidebar from "./components/Sidebar/Sidebar.tsx";
import Main from "./components/Main/Main.tsx";
import Footer from "./components/Footer/Footer.tsx";

function App() {

  return (
    <>
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="main-content">
        <Main />
      </div>
    </>
  )
}

export default App
