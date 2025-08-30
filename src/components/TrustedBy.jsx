import React from 'react';
import assets from '../assets/assets';

function TrustedBy() {
  // pick which logos you actually want to show
  const companyLogos = [
    assets.logo,
    assets.logo_dark,
    assets.footer_icon,
  ].filter(Boolean); // filters out undefined

  return (
    <div className="flex flex-col items-center px-4 sm:px-12 lg:px-24 xl:px-40 gap-10 text-gray-700 dark:text-white/80">
      <h3 className="font-semibold">Trusted by Leading Companies</h3>

      <div className="flex items-center flex-wrap gap-10 m-4">
        {companyLogos.map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`Company logo ${index + 1}`}
            className="max-h-5 sm:max-h-6 dark:drop-shadow-xl"
          />
        ))}
      </div>
    </div>
  );
}

export default TrustedBy;
