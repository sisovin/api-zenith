import React from 'react';

/**
 * FeatureGrid component props interface
 */
interface FeatureGridProps {
  /**
   * The features to be displayed in the grid
   */
  features: { title: string; description: string }[];
}

/**
 * FeatureGrid component
 * @param {FeatureGridProps} props - The props for the FeatureGrid component
 * @returns {JSX.Element} The rendered FeatureGrid component
 */
const FeatureGrid: React.FC<FeatureGridProps> = ({ features }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {features.map((feature, index) => (
        <div
          key={index}
          className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
        >
          <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
          <p>{feature.description}</p>
        </div>
      ))}
    </div>
  );
};

export default FeatureGrid;
