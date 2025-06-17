import { Link } from 'react-router-dom';
import '/src/components/styles/home.css'
import { FaArrowRight } from "react-icons/fa6";

const Home = () => {
  return (
    <div className='home container'>
        <div className='home-text'>
            <h2 className='home-head'>Kritika Baghel</h2>
            <p>Front-end developer</p>
        </div>
        <Link to='/about' className='btn home-btn'>Dive in <FaArrowRight className='arrow'/></Link>
    </div>
  )
}

export default Home
