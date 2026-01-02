"use client";

const AboutCards = ({ cards, sectionTitle, sectionSubtitle }) => {
  return (
    <section className="about-section-gyldan section-padding">
      <div className="container">
        {(sectionTitle || sectionSubtitle) && (
          <div className="section-header-gyldan text-center">
            {sectionSubtitle && (
              <span className="section-tag wow fadeInUp">{sectionSubtitle}</span>
            )}
            {sectionTitle && (
              <h2 className="section-title wow fadeInUp" data-wow-delay=".2s">
                {sectionTitle}
              </h2>
            )}
          </div>
        )}
        
        <div className="about-cards-grid">
          {cards.map((card, index) => (
            <div 
              key={index} 
              className="about-card wow fadeInUp" 
              data-wow-delay={`${0.2 + index * 0.1}s`}
            >
              <h3 className="about-card-title">{card.title}</h3>
              <ul className="about-card-list">
                {card.items.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    <i className="far fa-check-circle" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutCards;
