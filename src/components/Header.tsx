import { Link } from 'react-router-dom'
import SignDialog from './SignDialog/SignDialog'
import './Header.css'

const Header = () => {
  return (
    <header className='header d-f jc-sb align-center'>
      <div><Link to="/"><img src="/images/logo.svg" alt="Logo" /></Link></div>
      <nav>
        <ul className="header-nav d-f">
          <li className="header-nav-item"><Link to="/tours">Tours</Link></li>
          <li className="header-nav-item"><Link to="/destination">Destination</Link></li>
          <li className="header-nav-item"><Link to="/virtual-tour">Virtual tour</Link></li>
          <li className="header-nav-item"><Link to="/blog">Blog</Link></li>
          <li className="header-nav-item"><Link to="/about">About</Link></li>
          <li className="header-nav-item"><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
      <div className="header-actions d-f">
        <SignDialog account/>
        <SignDialog/>
      </div>
    </header>
  )
}

export default Header