import DownArrow from '../../assets/arrow-down-white.svg';
import StarIcon from '../../assets/star.svg';
import AppleIcon from '../../assets/apple-icon.svg';
import GraphImg from '../../assets/hero-graph.svg';
import HeroLyftIcon from '../../assets/hero-logo-lyft.svg';
import './styles/hero.scss';

const Hero = () => {
  return (
    <section className='hero d-flex'>
        <div className="col-6 left-section">
          <h1>Banking Should Be Easy.</h1>
          <p>financial transactions without internet using a mobile device such as a smartphone or tablet with bluetooth.</p>
          <button className='btn active'>Get started</button>
        </div>
        <div className="col-6 right-section position-relative">
          <div className="card-1">
            <div className="row">
              <p className='down-arrow'><img src={DownArrow} alt="down-arrow" /></p>
              <p className='income'>
                <span>Incom</span>
                <span>2,123</span>
              </p>
            </div>
            <div className="row">
              <p>
                <span>
                  <img src={StarIcon} alt="star icon" />
                  <img src={StarIcon} alt="star icon" />
                  <img src={StarIcon} alt="star icon" />
                  <img src={StarIcon} alt="star icon" />
                </span>
                <span>
                  &nbsp;564
                </span>
              </p>
              <p>3,345</p>
            </div>
          </div>

          <div className="card-2">
            <div className="row">
              <p className='down-arrow'><img src={DownArrow} alt="down-arrow" /></p>
              <p className='income'>
                <span>Income</span>
                <span>5,600</span>
              </p>
            </div>
            <div className="row">
              <p>
                <span>
                  <img src={StarIcon} alt="star icon" />
                  <img src={StarIcon} alt="star icon" />
                  <img src={StarIcon} alt="star icon" />
                  <img src={StarIcon} alt="star icon" />
                </span>
                <span>
                  &nbsp;5080
                </span>
              </p>
              <p>8,000</p>
            </div>
          </div>

          <div className="card-3">
            <div className="row d-flex white-card px-0">
              <div className='col-auto icon-container d-flex align-items-center px-0'><img src={AppleIcon} alt="" /></div>
              <div className='col-auto pay-type d-flex flex-column text-center'>
                <strong>Apple Pay</strong>
                <span className='text-grey'>Debit Card</span>
              </div>
              <div className="col-auto debit-amount text-danger d-flex align-items-center justify-content-end">
                - $2,000
              </div>
            </div>
          </div>

           <div className="card-4">
            <img src={GraphImg} alt="graph image" />
          </div>

          <div className="card-5"> 
            <div className="dark-card">
              <div className="lyft-parent">
                  <div className="lyft-container">
                    <img src={HeroLyftIcon} alt="Hero Lyft Icon" /> 
                  </div>

                  <div className="date-container d-flex flex-column">
                    <span>Month/year</span>
                    <span>06/20</span>
                  </div>
              </div>
              <div className="row">
                <div>
                  <span>
                    <img src={StarIcon} alt="star icon" />
                    <img src={StarIcon} alt="star icon" />
                    <img src={StarIcon} alt="star icon" />
                    <img src={StarIcon} alt="star icon" />
                  </span>
                  <span>
                    &nbsp;5080
                  </span>
                </div>
                <div>2344.00</div>
            </div>
            </div>
          </div>
        </div>
    </section>
  )
}

export default Hero