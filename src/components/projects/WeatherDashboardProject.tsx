import React from "react";
import ProjectDetail from "./ProjectDetail";
import mock08 from '../../assets/images/mock08.png';

function WeatherDashboardProject() {
  return (
    <ProjectDetail
      title="Weather Dashboard"
      timeline="August 2023 - September 2023"
      background="Living in an area with unpredictable weather patterns, I wanted to create a comprehensive weather dashboard that provides not just current conditions, but also detailed forecasts, historical data, and beautiful visualizations. This project combines multiple weather APIs to provide the most accurate and detailed weather information possible."
      description="Created a responsive weather dashboard that displays current weather conditions, hourly and weekly forecasts, and weather alerts. The application features location-based weather data using geolocation, manual city search, favorite locations, interactive weather maps, and data visualization with charts showing temperature trends, precipitation probability, and wind patterns."
      technologies={[
        "React",
        "TypeScript",
        "OpenWeather API",
        "Chart.js",
        "Mapbox GL",
        "Axios",
        "LocalStorage API",
        "CSS Grid"
      ]}
      features={[
        "Current weather conditions with detailed metrics",
        "Hourly forecast for next 48 hours",
        "7-day weather forecast",
        "Severe weather alerts",
        "Location search and geolocation support",
        "Save favorite locations",
        "Interactive weather maps",
        "Temperature and precipitation charts",
        "Air quality index display",
        "UV index and visibility information"
      ]}
      images={[mock08]}
      githubLink="https://github.com/alwinsdon"
      liveLink="#"
    >
      <section className="project-section">
        <h2>Data Visualization</h2>
        <p>
          One of the key features of this dashboard is the data visualization. Using Chart.js, I created
          interactive charts that show temperature trends, precipitation probability, and wind patterns over
          time. Users can hover over data points to see detailed information for specific hours or days.
        </p>
      </section>

      <section className="project-section">
        <h2>Performance Optimization</h2>
        <p>
          To reduce API calls and improve performance, I implemented a caching system using LocalStorage.
          Weather data is cached for 30 minutes, and the app checks for cached data before making new API
          requests. This significantly improved the user experience while staying within API rate limits.
        </p>
      </section>

      <section className="project-section">
        <h2>Future Plans</h2>
        <ul className="features-list">
          <li>Add weather-based activity recommendations</li>
          <li>Implement historical weather data comparison</li>
          <li>Add customizable weather widgets</li>
          <li>Create mobile app version</li>
        </ul>
      </section>
    </ProjectDetail>
  );
}

export default WeatherDashboardProject;

