"use client";

const HighlightsSection = ({ points, metrics, sectionTitle = "Group Highlights" }) => {
  return (
    <section className="highlights-section-gyldan section-padding">
      <div className="container">
        <div className="section-header-gyldan text-center">
          <h2 className="section-title wow fadeInUp">{sectionTitle}</h2>
        </div>
        
        <div className="highlights-content">
          {/* Key Points */}
          <div className="highlights-points wow fadeInUp" data-wow-delay=".2s">
            {points.map((point, index) => (
              <div key={index} className="highlight-point">
                <div className="highlight-icon">
                  <i className="far fa-check-circle" />
                </div>
                <span>{point}</span>
              </div>
            ))}
          </div>
          
          {/* Metrics (if provided and has values) */}
          {metrics && metrics.some(m => m.value !== "—") && (
            <div className="highlights-metrics wow fadeInUp" data-wow-delay=".4s">
              {metrics.map((metric, index) => (
                <div key={index} className="metric-item">
                  <span className="metric-value">{metric.value}</span>
                  <span className="metric-label">{metric.label}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default HighlightsSection;
