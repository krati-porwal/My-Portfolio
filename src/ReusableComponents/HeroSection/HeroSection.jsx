import "./style.scss"; 

const HeroSection = ({
  title,
  highlight,
  subtitle,
}) => {
  return (
    <section className="hero-section py-5 text-white">
      <div className="row py-5 justify-content-center text-center">
        <div className="col-md-10">
          <h1 className="display-4 fw-bold mb-3">
            {title} <span className="text-gradient">{highlight}</span>
          </h1>
          <p className="lead">{subtitle}</p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;