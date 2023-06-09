import './styles/footer.scss';
import FacebookIcon from '../../assets/facebook-icon.svg';
import TwitterIcon from '../../assets/twitter-icon.svg';
import LinkedinIcon from '../../assets/linkedin-icon.svg';

const Footer = () => {
  return (
    <footer>
        <div className="row">
            <div className="col-3">
                <h6>Tripay</h6>
                <p>
                financial transactions without internet using a mobile device such as a smartphone or tablet with bluetooth. 
                </p>
                <div className="social-icons">
                    <div className="icon-container"><img src={FacebookIcon} alt="facebook icon" /></div> 
                    <div className="icon-container"><img src={TwitterIcon} alt="twitter-icon" /></div>
                    <div className="icon-container"><img src={LinkedinIcon} alt="linkedin-icon" /></div>
                </div>
                <p className='copyright-text'>Copyright © 2021 Tripay</p>
            </div>
            <div className="col-2">
                <h4>Tripay</h4>
                <ul>
                    <li>About</li>
                    <li>Terms of Use</li>
                    <li>Privacy Policy</li>
                    <li>How it Works</li>
                    <li>Contact Us</li>
                </ul>
            </div>
            <div className="col-2">
                <h4>Support</h4>
                <ul>
                    <li>Support Carrer</li>
                    <li>24h Service</li>
                    <li>Quick Chat</li>
                </ul>
            </div>
            <div className="col-2">
                <h4>Contact</h4>
                <ul>
                    <li>WhatsApp</li>
                    <li>Support 24</li>
                </ul>
            </div>
        </div>
    </footer>
  )
}

export default Footer