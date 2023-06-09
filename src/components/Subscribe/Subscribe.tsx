import './styles/subscribe.scss';

const Subscribe = () => {
  return (
    <section className="subscribe-container">
        <div className='subscribe'>
          <h3 className='text-center'>Subscribe Newsletter</h3>
          <p className='text-center'>financial transactions without internet using a mobile device such as a smartphone or tablet with bluetooth. </p>
          <div className='subscribe-input'>
            <input type="text" className="myplaceholder" placeholder='Enter your email' />
            <button className="subscribe-button">Subscribe</button>
          </div>
        </div>
      </section>
  )
}

export default Subscribe