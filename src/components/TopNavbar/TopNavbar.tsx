import HamburgerIcon from '../../assets/hamburger.svg';
import './styles/topnavbar.scss';

const TopNavbar = () => {
  return (
    <header>
        <nav className='big-screen'>
          <div className='logo'>Tripay</div>

          <ul className='nav-links'>
            <li className='active'>Business</li>
            <li>Pricing</li>
            <li>Features</li>
            <li>About</li>
          </ul>

          <section className='nav-auth-buttons'>
            <button className='btn'>Log in</button>
            <button className='btn active'>Sign up</button>
          </section>
        </nav>

        {/* Navbar for tablet and mobile screens */}
        <nav className='navbar tablet-screen justify-content-between'>
          <a className="navbar-brand logo" href="#">Tripay</a>
          <div className="toggler-container">
            <button className="navbar-toggler-container" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation"></button> 
            <img src={HamburgerIcon} alt="hamburger-icon" />
          </div>
          <div className="collapse navbar-collapse" id="navbarToggler">
            
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 nav-links">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Business</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Pricing</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Features</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">About</a>
              </li>
              <li className="nav-item">
                <button className='btn'>Log in</button>
              </li>
              <li className="nav-item">
                <button className='btn active'>Sign up</button>
              </li>
            </ul>
            
          </div>
        </nav>
      </header>
  )
}

export default TopNavbar