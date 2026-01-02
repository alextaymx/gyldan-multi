"use client";

const ServicesGrid = ({ services, sectionTitle = "Services & Offerings" }) => {
  return (
    <section className="services-section-gyldan section-padding section-bg-light">
      <div className="container">
        <div className="section-header-gyldan text-center">
          <h2 className="section-title wow fadeInUp">{sectionTitle}</h2>
        </div>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="service-item wow fadeInUp" 
              data-wow-delay={`${0.1 + index * 0.1}s`}
            >
              <div className="service-icon">
                <i className="far fa-check" />
              </div>
              <span className="service-name">{service}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
