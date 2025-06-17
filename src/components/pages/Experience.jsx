import Footer from './Footer'
import Navbar from './Navbar'
import Skill from './Skill'
import '/src/components/styles/experience.css'
import { FaRegHandPointRight } from "react-icons/fa";

const Internship = () => {
  return (
    <div className="internship container">
        <Navbar/>
        <div className='intern-container'>
          <h2 className='intern-head'>Experience</h2>
          <div className='int-box'>
            <h4>Trainee at Tech Mahindra</h4>
            <p className='duration'>15 April 2025 - Present</p>
            <p className='intern-about'><FaRegHandPointRight /> Gained hands-on experience with fine-tuning AI models, understanding their real-world applications 
              and performance optimization techniques.</p>
              <p className='intern-about'><FaRegHandPointRight />Collaborated with the team to integrate design and functionality, 
              ensuring seamless user experiences. Developed a responsive and user-friendly interface in line with 
              project objectives and industry quality standards.</p>
              <p className='intern-about'><FaRegHandPointRight />Applied problem-solving and design-thinking approaches 
              to align technical solutions with user needs and business goals.</p>
          </div>

          <div className='int-box'>
            <h4>Web Developer at Lending Buddha</h4>
            <p className='duration'>06 June 2024 - 06 Aug 2024</p>
            <p className='intern-about'><FaRegHandPointRight /> Working on industry projects to 
              ensure the client receives an excellent end product.
              Collaborating with cross-functional teams to drive efficient
              processes and leverage innovative technologies for optimal 
              results.</p>
              <p className='intern-about'><FaRegHandPointRight /> Developed web apps with React JS 
              and MongoDB. Integrated frontend components for user 
              experience.Used MongoDB for efficient data storage, ensuring optimal performance.
            </p>
          </div>

          <div className='int-box'>
            <h4>GPCSSI-2024 Intern with Gurugram Police</h4>
            <p className='duration'>02 June 2024- 02 July 2024</p>
            <p className='intern-about'><FaRegHandPointRight /> Took part in a CTF. Guided team to 
              overcome varied challenges. Worked together to navigate 
              different levels using everyone skills to solve puzzles. </p>
              <p className='intern-about'><FaRegHandPointRight /> Met industry experts, tackled 
              projects, made creative tech solutions, collaborated with 
              teams for good results.
            </p>
          </div>
        </div>
        <Skill/>
        <Footer/>
    </div>
  )
}

export default Internship
