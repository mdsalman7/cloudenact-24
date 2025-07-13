
// Centralized image configuration
// This file contains all images used throughout the website with descriptions

export const IMAGES = {
  // Logo images
  LOGO: {
    url: "/lovable-uploads/a01c04ae-3773-4c9c-8ef1-c9a540728e2d.png",
    alt: "CloudEnact Logo",
    description: "Main company logo used in header and footer"
  },

  // Hero section images
  HERO_CLOUD_COMPUTING: {
    url: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
    alt: "Cloud Computing Solutions",
    description: "Hero section image on homepage showing cloud computing technology"
  },

  // Placeholder images for dynamic content
  PLACEHOLDER_UNSPLASH: {
    // Blog post images
    BLOG_DEFAULT: "photo-1498050108023-c5249f4df085",
    TECH_CODE: "photo-1461749280684-dccba630e2f6",
    CLOUD_INFRASTRUCTURE: "photo-1518770660439-4636190af475",
    
    // Case study images  
    ECOMMERCE_TECH: "photo-1498050108023-c5249f4df085",
    BUSINESS_ANALYTICS: "photo-1460925895917-afdab827c52f",
    CLOUD_MIGRATION: "photo-1486312338219-ce68d2c6f44d"
  }
};

// Helper function to get Unsplash image URL
export const getUnsplashImage = (imageId: string, width = 600, height = 400) => {
  return `https://images.unsplash.com/${imageId}?auto=format&fit=crop&w=${width}&h=${height}&q=80`;
};

// Helper function to check if URL is external
export const isExternalUrl = (url: string) => {
  return url.startsWith('http');
};
