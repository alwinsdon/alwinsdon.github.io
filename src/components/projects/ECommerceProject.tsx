import React from "react";
import ProjectDetail from "./ProjectDetail";
import mock10 from '../../assets/images/mock10.png';

function ECommerceProject() {
  return (
    <ProjectDetail
      title="E-Commerce Platform"
      timeline="January 2024 - March 2024"
      background="This project began as a comprehensive learning exercise to understand full-stack development and modern e-commerce practices. The goal was to create a fully functional online shopping platform that could handle real-world use cases including product management, user authentication, shopping cart functionality, and secure payment processing."
      description="Built a complete e-commerce application from scratch featuring a responsive product catalog, advanced filtering and search capabilities, persistent shopping cart, user authentication system, and integrated Stripe payment processing. The platform includes an admin dashboard for product management and order tracking. The application is built with modern best practices including TypeScript for type safety, Redux for state management, and comprehensive error handling."
      technologies={[
        "React",
        "TypeScript",
        "Node.js",
        "Express",
        "MongoDB",
        "Stripe API",
        "Redux",
        "JWT Authentication",
        "SCSS"
      ]}
      features={[
        "User authentication and authorization with JWT",
        "Product catalog with search and filtering",
        "Shopping cart with persistent storage",
        "Secure checkout with Stripe integration",
        "Order history and tracking",
        "Admin dashboard for product management",
        "Responsive design for all devices",
        "Image optimization and lazy loading"
      ]}
      images={[mock10]}
      githubLink="https://github.com/alwinsdon"
      liveLink="#"
    >
      <section className="project-section">
        <h2>Challenges & Solutions</h2>
        <p>
          One of the main challenges was implementing a secure payment system. I integrated Stripe's API
          and followed PCI compliance best practices to ensure user payment information is never stored
          on our servers. Another challenge was optimizing performance for the product catalog with large
          image files - I implemented lazy loading and image optimization techniques to improve load times.
        </p>
      </section>

      <section className="project-section">
        <h2>Future Enhancements</h2>
        <ul className="features-list">
          <li>Product recommendations using machine learning</li>
          <li>Wishlist functionality</li>
          <li>Multi-language support</li>
          <li>Email notifications for order updates</li>
        </ul>
      </section>
    </ProjectDetail>
  );
}

export default ECommerceProject;

