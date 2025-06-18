import '/src/components/styles/education.css'
import edu from '/src/images/left-img.svg'
const Education = () => {
  return (
    <div>
      <h2 className='ed-head'>Education</h2>
        <div className='education-section'>
          <div className='education-timeline'>
            <div className='edu-card'>
              <h3>Manav Rachna University</h3>
              <p className='year'>2021-2025</p>
              <p className='sub'>B.Tech. Computer Science & Technology</p>
            </div>

            <div className='edu-card'>
              <h3>Bharat Mata Saraswati Bal Mandir </h3>
              <p className='year'>2020-2021</p>
              <p className='sub'>Senior Secondary School</p>
            </div>

            <div className='edu-card'>
              <h3>Sri Sathya Sai Vidya Vihar</h3>
              <p className='year'>2018-2019</p>
              <p className='sub'>Secondary School</p>
            </div>
          </div>
          <div className="right-svg">
          <img src={edu} alt="Education SVG" />
        </div>
        </div>
      
    </div>
  )
}

export default Education
