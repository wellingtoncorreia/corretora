import "./aboutMe.css"

export default function AboutMe() {
    return (
        <section className="about-section" id="about">
            <div className="about-profile">
                <img className="about-image" src="/corretora.png" alt="corretora" />
            </div>

            <div className="about-content">
                <div className="about-blur-blob" />
                <h2 className="about-desc">
                    Deborah creates environments that endure time and precede trends — places that push boundaries to enhance the human experience.
                </h2>
                <a href="#" className="about-link">
                    Read More About Us
                </a>
            </div>
        </section>
    );
}