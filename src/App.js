import { Route, Routes } from "react-router-dom";
import About from "./Pages/Home/About/About";
import Blog from "./Pages/Home/Blog/Blog";
import Contact from "./Pages/Home/Contact/Contact";
import Home from "./Pages/Home/Home/Home";
import NotFound from "./Pages/Home/Not_Found/NotFound";
import Navbar from "./Pages/Shared/Navbar/Navbar";

function App() {
  return <>
    <Navbar />
    <Routes>
      <Route path='/' element= {<Home /> } />
      <Route path='/home' element= {<Home /> } />
      <Route path='/blogs' element={<Blog />}/>
      <Route path='/about' element={<About />}/>
      <Route path='/contact' element={<Contact />}/>
      <Route path='*' element={<NotFound /> } />
    </Routes>
  </>;
}

export default App;
