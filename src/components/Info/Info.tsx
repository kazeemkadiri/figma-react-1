import InfoConnect from '../../assets/info-connect.svg';
import DataSecureIcon from '../../assets/data-secure-icon.svg';
import './styles/info.scss';

const Info = () => {
  return (
    <>
    <section className='info row justify-content-around'>
        {/* Information */}
        <div className="col-3 info-section">
          <div className="graphics-container">
            <div className="card-container">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="blue-button">
              <span className="icon-bg">
                <img src={InfoConnect} alt="Connect icon" />
              </span>
              <span className="bar"></span>
            </div> 
          </div>

          <div className="info-text">
            <h4>Information</h4>
            <p>Enter your information
                ensure your details
                safe and more secure
            </p>        
          </div>
        </div>

        {/* Data secure */}
        <div className="col-3 data-card-section">
          <div className="graphics-container">
            <div className="data-card-container">
              <div className='outer-container'>
                <div className='img-container'>
                  <img src={DataSecureIcon} alt="Data secure icon" />
                </div>
              </div>
              <div className="bar-chart">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>

          <div className="info-text">
            <h4>Data Secure</h4>
            <p>Sending money faster &
                easier with end to end
                encryption.
            </p>
          </div>
        </div>

        {/* Add cards */}
        <div className="col-3 add-cards-section">
          <div className="graphics-container">
            <div className="add-card-container">
              <button className='add-new-btn bg-white border-0'> + Add New</button>
            </div>  
          </div>
          <div className="info-text">
            <h4>Add Cards</h4>
            <p>Add multiple cards and  track
              your daily expense with quality
              interface
            </p>
          </div>
        </div>
      </section>
      </>
  )
}

export default Info