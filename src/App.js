
import "animate.css/animate.min.css";
import './App.scss';
import { Route, Routes } from "react-router-dom";
import Layout from "./Component/Layout";
import Home from "./Component/Home/Home";
import About from "./Component/About/About";
import Contact from "./Component/Contact/Contact";
import Portfolio from "./Component/Portfolio/Portfolio"






function App() {
  return (
    <>
    {/* <Routes>
      <Route path="/" element={<Layout />} >
      <Route path="/home" index element={<Home/>} />
      <Route path="/about" element = {<About/>} />
      <Route path="/contact" element = {<Contact/>} />
      <Route path="/portfolio" element={<Portfolio />} />
      </Route>
    </Routes> */}
      <Layout />
    </>
  );
}

export default App;
