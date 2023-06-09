import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import HowItWorks from './components/HowItWorks/HowItWorks';
import TopNavbar from './components/TopNavbar/TopNavbar';
import Info from './components/Info/Info';
import DownloadApp from './components/DownloadApp/DownloadApp';
import Connect from './components/Connect/Connect';
import Subscribe from './components/Subscribe/Subscribe';
import 'bootstrap/scss/bootstrap.scss';
import './App.scss'

function App() {
  return (
    <>
    <main className='body d-flex flex-column'>
      <TopNavbar />
      <Hero />
      <HowItWorks />
      <Info />
      <hr />
      <DownloadApp />
      <Connect />
      <Subscribe />
    </main>
    <Footer />
    </>
  )
}

export default App
