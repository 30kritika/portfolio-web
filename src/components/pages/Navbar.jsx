import { Link } from 'react-router-dom'
import '/src/components/styles/navbar.css'

const Navbar = () => {
  return (
    <nav className='nav container'>
      <ul className='list'>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/work'>Projects</Link></li>
        {/* <li><Link to='/skill'>Skill</Link></li> */}
        {/* <li><Link to='/resume'>Resume</Link></li> */}
        <li><Link to='/experience'>Experience</Link></li>
        <li><button className='btn nav-btn'><Link to='/contact'>Contact</Link></button></li>
      </ul>
    </nav>
  )
}

export default Navbar
