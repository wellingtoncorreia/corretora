import { FaLocationDot } from "react-icons/fa6";
import { WaveBackground } from "./WaveBackground";
import "./hero.css";

export default function Hero() {
    return (
        <main className="hero-main">
            <div className="hero-text-content">
                <h1 className="hero-title">
                    Find The Place<br />To Live Your<br />Dreams Easily<br />Here
                </h1>
                <p className="hero-subtitle">
                    Everything you need about finding your place to live<br />
                    will be here, where it will be easier for you
                </p>
                
                <div className="search-box">
                    <FaLocationDot className="search-icon" />
                    <input type="text" placeholder="Search for the location you want!" className="search-input" />
                    <button className="btn-search">Search</button>
                </div>
            </div>

            <div className="hero-image-wrapper">
                <img className="hero-img" src="./casa_design.png" alt="casa" />
            </div>

            <div className="hero-wave-wrapper">
                <WaveBackground style={{ width: '100%', height: 'auto' }} />
            </div>
        </main>
    );
}