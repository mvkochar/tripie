import { Link } from 'react-router-dom'
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
        <button className='header-login'>Login</button>
        <button className='header-sign'>Sign up</button>
      </div>
    </header>
  )
}

export default Header