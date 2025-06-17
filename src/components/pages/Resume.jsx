import '/src/components/styles/resume.css'

export default function Resume() {
  return (
    <div>
      
      <div className="resume-container" style={{padding:"40px"}}>
        <h2 className='resume-head'>Resume</h2>
        <iframe
          src='/src/components/kritikabaghel_resume.pdf'
          width="100%"
          height='800px'
          style={{border:"none"}}
          title='Resume'
        ></iframe>
        {/* <p className='resume-body'>
          Click <a href="https://drive.google.com/file/d/1E_iT56vetbKgMC2ySvpGmsTRJ1kiVyLC/view?usp=sharing" target="_blank" rel="noopener noreferrer" className='resume-link'> 
          here</a> to view.
        </p> */}
      </div>
    </div>
  )
}
