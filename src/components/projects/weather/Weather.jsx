import "/src/components/projects/weather/weather.css"
import {SlGlobe} from "react-icons/sl";
import {GrGithub} from "react-icons/gr";

export default function Cafe() {
  return (
    <div className="cafe-card">
        <div className="img-wr-cafe">
            <img src="/src/images/weather.jpg" className="image-cafe" alt="Cafe page image" />
        </div>

        <div className="cafe-content">
            <h3>Weather App</h3>
            <p className="cafe-details">May 2024</p>
            <p className="cafe-desc">
              A simple yet efficient weather application that delivers real-time temperature, 
              humidity, and forecast updates. Built with an intuitive UI, it allows users to 
              quickly check weather conditions in their area. Future improvements could integrate
              air quality index tracking and custom weather notifications.
            </p>

            <div className="cafe-tags">
                <span>JavaScript</span>
                <span>Tailwind CSS</span>
                <span>HTML</span>
                <span>CSS</span>
                <span>OpenWeather API</span>
                <span>Netlify</span>
            </div>

            <div className="cafe-link">
                {/* <Link to="https://sipsavvycafe.netlify.app/"><button className="b-cafe"><SlGlobe /></button></Link> */}
                <a href="https://sky-information.netlify.app/" target="_blank" rel="noopener noreferrer">
                    <button className="b-cafe"><SlGlobe /></button>
                </a>
                <a href="https://github.com/30kritika/weather-app" target="_blank" rel="noopener noreferrer">
                    <button className="b-cafe"><GrGithub /></button>
                </a>
            </div>
        </div>
    </div>
  )
}
