import React from "react";

import ServicesList from "../../Components/ServicesList/ServicesList";
import AnimatedSection from "../../Components/Animation/AnimatedSection"; // Import AnimatedSection

function Services() {
  const fadeInVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <div>
      <AnimatedSection variants={fadeInVariants}>
        <ServicesList />
      </AnimatedSection>
    </div>
  );
}

export default Services;
