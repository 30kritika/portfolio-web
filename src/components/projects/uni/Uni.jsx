import "/src/components/projects/uni/uni.css"
import {SlGlobe} from "react-icons/sl";
import {GrGithub} from "react-icons/gr";
import uniimg from '/src/images/uni.jpg';
export default function Cafe() {
  return (
    <div className="cafe-card">
        <div className="img-wr-cafe">
            <img src={uniimg} className="image-cafe" alt="Uni page image" />
        </div>

        <div className="cafe-content">
            <h3>Learnest</h3>
            <p className="cafe-details">May 2024</p>
            <p className="cafe-desc">
              A modern university web app designed to showcase various academic programs, 
              student testimonials, campus gallery, and essential institute details. 
              With a clean and structured interface, LearnNest provides prospective 
              students and visitors with a comprehensive overview of the institution, 
              helping them explore courses, campus life, and success stories seamlessly.
            </p>

            <div className="cafe-tags">
                <span>JavaScript</span>
                <span>Tailwind CSS</span>
                <span>HTML</span>
                <span>CSS</span>
                <span>API</span>
                <span>Netlify</span>
            </div>

            <div className="cafe-link">
                {/* <Link to="https://sipsavvycafe.netlify.app/"><button className="b-cafe"><SlGlobe /></button></Link> */}
                <a href="https://learnnest.netlify.app/" target="_blank" rel="noopener noreferrer">
                    <button className="b-cafe"><SlGlobe /></button>
                </a>
                <a href="https://github.com/30kritika/E-learning-" target="_blank" rel="noopener noreferrer">
                    <button className="b-cafe"><GrGithub /></button>
                </a>
            </div>
        </div>
    </div>
  )
}
