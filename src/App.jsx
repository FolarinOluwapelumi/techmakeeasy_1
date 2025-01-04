import { BrowserRouter, Routes, Route} from "react-router-dom"
import HomePage from "./Pages/HomePage.jsx";
import AboutUs from './Pages/AboutUs.jsx';

// import Nav from "./Components/Nav"
// import Body from "./Components/Body"
// import Footer from "./Components/Footer"

function App() {


  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route path = "/" element = {<HomePage/>}/>
    //     <Route path = "/about" element = {<About/>}/>
    //     <Route path="/SignUp" element = {<SignUp/>}/>
    //   </Routes>
    // </BrowserRouter>

      <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about-us" element={<AboutUs />} />
    </Routes>
</BrowserRouter>

  )
}

export default App

    {/* <Nav/>
    <Body/>
    <Footer/> */}