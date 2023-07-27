import { Route, Routes } from 'react-router-dom'
import About from '../About/About'
import Contact from '../Contact/Contact'
import Home from '../Home/Home'
import Portfolio from '../Portfolio/Portfolio'
import Sidebar from '../Sidebar'
import './index.scss'

const Layout = () => {
    return (
    <div className='App'> 
    <Sidebar/>
    {/* <Toggle />  */}
    {/* <div className='page'> */}
       <span className='tags top-tags'>&lt; body &gt; </span>
       <Routes>    
      <Route path="/" element={<Home/>} />
      <Route path="/about" element = {<About/>} />
      <Route path="/contact" element = {<Contact/>} />
      <Route path="/portfolio" element={<Portfolio />} />
    </Routes>
       <span className='tags bottom-tags'>
       &lt;/ body &gt;
       <br/>
       <span className="bottom-tag-html">&lt;/html&gt;</span>
       </span>

    </div>
    // </div>
    )
}

export default Layout