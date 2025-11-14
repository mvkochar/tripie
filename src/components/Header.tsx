import './Header.css'

const Header = () => {
  return (
    <header className='header d-f jc-sb align-center'>
        <div><img src="/images/logo.svg" alt="Logo" /></div>
        <nav>
            <ul className="header-nav d-f">
                <li className="header-nav-item"><a href="">Tours</a></li>
                <li className="header-nav-item"><a href="">Destination</a></li>
                <li className="header-nav-item"><a href="">Virtual tour</a></li>
                <li className="header-nav-item"><a href="">Blog</a></li>
                <li className="header-nav-item"><a href="">About</a></li>
                <li className="header-nav-item"><a href="">Contact</a></li>
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