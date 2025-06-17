import Education from './Education'
import Footer from './Footer'
// import Internship from './Internship'
import Navbar from './Navbar'
import '/src/components/styles/about.css'
import main from '/src/images/img.jpeg'
import Resume from '/src/components/pages/Resume'

const About = () => {
  return (
    <div className='about-container'>
    <Navbar/>

    {/* about */}
      <div className='main'>
        <div className='about-left'>
          <h2>About </h2>
          <p className='para'>
          <p className='bold'>Kritika Baghel <br/></p>
          <p className='sub-head'>Front-End Developer | ReactJS | JavaScript | UI/UX Enthusiast | Exploring AI & LLMs<br/><br/></p>
          I’m Kritika Baghel, a passionate front-end developer currently in my final semester of B.Tech in Computer Science at 
          Manav Rachna University. I specialize in crafting dynamic, responsive, and user-centric web applications using HTML5, 
          CSS, JavaScript, and ReactJS.<br/>
          Alongside developing front-end solutions, I’m currently interning at Tech Mahindra Makers Lab (Pune), where I’m 
          actively expanding my knowledge in Artificial Intelligence, with a particular focus on Neural Networks, Large 
          Language Models (LLMs), and Fine-Tuning techniques. This blend of front-end development and AI exploration is          
          helping me understand how intelligent systems can be integrated with user interfaces to build smarter applications.<br/>
          My journey includes impactful projects like LearnNest and Sip Savvy Cafe, and internships with organizations such as Lending 
          Buddha, GPCSSI-2024, and ShadowFox. These experiences have honed my ability to design clean, scalable UIs that balance 
          performance and usability.<br/>
          I thrive in collaborative, fast-paced environments and stay committed to continuous learning—always eager to explore 
          emerging technologies and contribute to innovative, impactful projects that also help me grow professionally.</p>
        </div>
        <div className='about-right'>
        <img src={main} alt='' className='about-img'/>
        </div>
      </div>
      <Education/>
      <Resume />
      <Footer />
    </div>
    
  )
}

export default About
