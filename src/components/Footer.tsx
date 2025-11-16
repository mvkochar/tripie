import './Footer.css'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className="d-f jc-sb">
        <div>
          <div><img src="/images/logo.svg" alt="Logo" /></div>
          <p className="footer-desc">
            There are many variations of passages of available
            but it is the majority of suffered that a alteration
            in that some dummy text.
          </p>
        </div>
        <div>
          <h3 className="footer-bl-title">About</h3>
          <ul className="footer-bl-list">
            <li><a href="">Discover</a></li>
            <li><a href="">Find Travel</a></li>
            <li><a href="">Popular Destinations</a></li>
            <li><a href="">Reviews</a></li>
          </ul>
        </div>
        <div>
          <h3 className="footer-bl-title">Support</h3>
          <ul className="footer-bl-list">
            <li><a href="">Customer Support</a></li>
            <li><a href="">Privacy & Policy</a></li>
            <li><a href="">Contact Channels</a></li>
          </ul>
        </div>
        <div>
          <h3 className="footer-join-title">Join our community 🔥</h3>
          <form action="" className='footer-join-fm d-f jc-sb align-center'>
            <input type="email" name="joinEmail" placeholder='Enter your email' />
            <button type="button" className='btn-clear d-b'>
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="32" height="32" rx="16" fill="#4AC63F" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M18.0909 11.2652C18.4968 10.8906 19.1294 10.9159 19.504 11.3217L22.7348 14.8217C23.0884 15.2047 23.0884 15.7952 22.7348 16.1782L19.504 19.6783C19.1294 20.0841 18.4968 20.1094 18.091 19.7348C17.6851 19.3602 17.6598 18.7276 18.0344 18.3217L19.716 16.5L10 16.5C9.44771 16.5 9 16.0523 9 15.5C9 14.9477 9.44771 14.5 10 14.5L19.716 14.5L18.0344 12.6783C17.6598 12.2725 17.6851 11.6398 18.0909 11.2652Z" fill="#FCFCFD" />
              </svg>
            </button>
          </form>
        </div>
      </div>
      <p className="footer-copyright">Copyright &copy; Tripie. All rights reserved</p>
    </footer>
  )
}

export default Footer