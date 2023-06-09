import IphoneBackground from '../../assets/iphone-body.svg';
import IphoneScreen from '../../assets/iphone-screen.svg';
import ArrowDown from '../../assets/arrow-down.svg';
import AppStoreIcon from '../../assets/appstore-icon.png';
import PlayStoreIcon from '../../assets/playstore-icon.png';
import LyftIcon from '../../assets/hero-logo-lyft.svg';
import './styles/downloadapp.scss';

const DownloadApp = () => {
  return (
    <section className='download-mobile-app d-flex justify-content-around'>
        <div className="col-3 position-relative">
          <img src={IphoneBackground} alt="iphone casing" />
          <img src={IphoneScreen} alt="iphone" />

          {/* White card with Income details */}
          <div className="white-card">
            <div className="row row-cols-auto">
              <span className='col'><img src={ArrowDown} alt="down arrow" /></span>
              <span className='col'>
                <p>Income</p>
                <strong>7,300</strong>
              </span>
            </div>
            <div className="row flex-column">
              <div className='dots-container'><span className='dots'>....</span> 243</div>
              <h4>9,000</h4>
            </div>
          </div>

          {/* Custom white card */}
          <div className="row white-card-bottom px-0">
            <div className='col-auto icon-container d-flex align-items-center'><img src={LyftIcon} alt="" /></div>
            <div className='col-auto pay-type d-flex flex-column text-center'>
              <strong>Lyft</strong>
              <span className='text-grey'>Debit Card</span>
            </div>
            <div className="col-auto debit-amount text-danger d-flex align-items-center justify-content-end">
              - $5,000
            </div>
          </div>

        </div>
        <div className="col-3 d-flex flex-column justify-content-center h-100">
          <div className="row px-0">
            <h4>Download
                mobile App
            </h4>
          </div>
          <div className="row px-0">
            <p>
              Download Tripay mobile banking app for IOS and android.
              It helps you banking  quickly and more smartly.
            </p>
          </div>
          <div className="row"><button className='download-btn'><img src={AppStoreIcon} alt="App store icon" /> <span>App Store</span></button></div>
          <div className="row"><button className='download-btn'><img src={PlayStoreIcon} alt="Play store icon" /> <span>Play Store</span></button></div>
        </div>
      </section>
  )
}

export default DownloadApp