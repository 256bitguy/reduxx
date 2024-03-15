import { BrowserRouter, Outlet } from "react-router-dom";
import Routes from "./Routes";
 
// import Navbar from "./Navbar"; 



function App() {
  
  return (
      <>
      <BrowserRouter>
     <Outlet/>
      
    <Routes/>
     
    </BrowserRouter>
     
    </>
  )
}

export default App
