/** @type {import('next').NextConfig} */
const nextConfig = {
    // ... other config options
    
    // Disable Speed Insights
    speedInsights: {
      enabled: false,
    },

    // Disable development mode indicator
    devIndicators: {
      buildActivity: false,
      buildActivityPosition: 'bottom-right',
    },
  }
  
  module.exports = nextConfig