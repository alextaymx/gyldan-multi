"use client";

const ShowcaseSection = ({ points, sectionTitle = "Why Choose Us" }) => {
  return (
    <section className="showcase-section-gyldan section-padding">
      <div className="container">
        <div className="section-header-gyldan text-center">
          <h2 className="section-title wow fadeInUp">{sectionTitle}</h2>
        </div>
        
        <div className="showcase-points">
          {points.map((point, index) => (
            <div 
              key={index} 
              className="showcase-point wow fadeInUp" 
              data-wow-delay={`${0.2 + index * 0.15}s`}
            >
              <div className="showcase-icon">
                <i className="far fa-star" />
              </div>
              <p>{point}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;
