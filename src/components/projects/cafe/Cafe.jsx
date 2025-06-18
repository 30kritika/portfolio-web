import "/src/components/projects/cafe/cafe.css"
import {SlGlobe} from "react-icons/sl";
import {GrGithub} from "react-icons/gr";
import cafeimg from '/src/images/cafe.jpg';
export default function Cafe() {
  return (
    <div className="cafe-card">
        <div className="img-wr-cafe">
            <img src={cafeimg} className="image-cafe" alt="Cafe page image" />
        </div>

        <div className="cafe-content">
            <h3>SipSavvy</h3>
            <p className="cafe-details">May 2024</p>
            <p className="cafe-desc">
                A sleek and modern café website designed to showcase the 
                menu, ambiance, and essential details of the café. With a 
                responsive layout and visually appealing sections, it 
                provides a smooth browsing experience for customers. Future 
                enhancements may include an online ordering system and 
                personalized customer interactions.
            </p>

            <div className="cafe-tags">
                <span>JavaScript</span>
                <span>Tailwind CSS</span>
                <span>Motion Frame</span>
                <span>HTML</span>
                <span>CSS</span>
                <span>API</span>
                <span>Netlify</span>

            </div>

            <div className="cafe-link">
                {/* <Link to="https://sipsavvycafe.netlify.app/"><button className="b-cafe"><SlGlobe /></button></Link> */}
                <a href="https://sipsavvycafe.netlify.app/" target="_blank" rel="noopener noreferrer">
                    <button className="b-cafe"><SlGlobe /></button>
                </a>
                <a href="https://github.com/30kritika/Coffee" target="_blank" rel="noopener noreferrer">
                    <button className="b-cafe"><GrGithub /></button>
                </a>
            </div>
        </div>
    </div>
  )
}
