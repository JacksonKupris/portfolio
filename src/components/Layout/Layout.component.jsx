import { Outlet } from 'react-router-dom'
import './Layout.style.scss'
import Navbar from '../Navbar/Navbar.component'

const Layout = () => {
    return(
        <div className='App'>
        <Navbar/>
        
        </div>
    )
}

export default Layout




// Adding this makes it so that you cannot hover over the navbar
// <div className='page'>
//         <span className='tags top-tags'>&lt;body&gt;</span>
//         <Outlet/>
//         <span className='tags bottom-tags'>
//         &lt;/body&gt;
//         <br/>
//         <span className='bottom-tag-html'>&lt;/html&gt;</span>
//         </span>
//         </div>