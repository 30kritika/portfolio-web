import Cafe from '../projects/cafe/Cafe'
import Navbar from './Navbar'
import '/src/components/styles/work.css'
import Uni from '/src/components/projects/uni/Uni'
import Weather from '/src/components/projects/weather/Weather'
import Footer from '/src/components/pages/Footer'

const Work = () => {
  return (
    <div className='work-container'>
      <Navbar/>
      <h2 className='head'>Projects </h2>
      <div className='pro-wrapper'>
        <Cafe />
        <Uni />
        <Weather />
      </div>
      <Footer/>
    </div>
    
  )
}

export default Work
