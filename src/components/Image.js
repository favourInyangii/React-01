// src/components/Image.js
import React from 'react';
import product from '../product';

/**
 * Component to display the product's image
 * @returns {JSX.Element} The image of the product
 */
const Image = () => {
  return <img src={product.imageUrl} alt={product.name} style={{ width: '100%' }} />;
};

// Exporting the Image component
export default Image;
