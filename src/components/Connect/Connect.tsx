import IphoneConnectBody from '../../assets/iphone-connect-body.svg';
import IphoneConnectScreen from '../../assets/iphone-connect-screen.svg';
import AppleIcon from '../../assets/apple-icon.svg';
import './styles/connect.scss';

const Connect = () => {
  return (
    <section className='connect d-flex justify-content-around'>
        <div className="col-3 d-flex flex-column justify-content-center h-100">
          <h4>Connecting all your banking needs.</h4>
          <p>
          financial transactions remotely using a mobile device such as a smartphone or tablet. 
          </p>
          <button className='get-started-btn'>Get started</button>
        </div>
        <div className="col-3 position-relative">
          <img src={IphoneConnectBody} alt="iphone casing" />
          <img src={IphoneConnectScreen} alt="iphone" />
          <div className="row d-flex white-card px-0">
            <div className='col-auto icon-container d-flex align-items-center'><img src={AppleIcon} alt="" /></div>
            <div className='col-auto pay-type d-flex flex-column text-center'>
              <strong>Apple Pay</strong>
              <span className='text-grey'>Debit Card</span>
            </div>
            <div className="col-auto debit-amount text-danger d-flex align-items-center justify-content-end">
              - $2,000
            </div>
          </div>
        </div>
      </section>
  )
}

export default Connect