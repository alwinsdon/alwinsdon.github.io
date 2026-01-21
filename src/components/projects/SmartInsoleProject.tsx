import React from "react";
import ProjectDetail from "./ProjectDetail";
import mock09 from '../../assets/images/mock09.png';

function SmartInsoleProject() {
  return (
    <ProjectDetail
      title="Smart Insole"
      timeline="2024"
      background="The Smart Insole project was conceived as a wearable IoT solution to track fitness metrics and provide real-time feedback to users. The motivation was to create an accurate step-tracking platform with anti-cheat detection for crypto-based fitness incentive systems, while also exploring biomechanics sensing and haptic feedback technologies."
      description="Engineered a comprehensive wearable sensing platform embedded in an insole, featuring ESP32 microcontroller, force-sensitive resistors (FSRs), IMU, magnetometer, and haptic actuators. The system tracks footsteps, measures pressure distribution, monitors orientation, and provides zero-latency haptic feedback. Includes machine learning-based anti-cheat detection algorithms to ensure reliable step counting for incentive-based applications."
      technologies={[
        "ESP32 Microcontroller",
        "Python",
        "C/C++",
        "FSR (Force Sensitive Resistors)",
        "IMU (Inertial Measurement Unit)",
        "Magnetometer",
        "LRA Haptic Actuators",
        "KiCad (PCB Design)",
        "Autodesk Inventor",
        "Machine Learning",
        "Sensor Fusion Algorithms",
        "Wi-Fi & Bluetooth",
        "Wireless Charging"
      ]}
      features={[
        "Real-time step counting with 75-80% accuracy",
        "Four FSR sensors for pressure mapping",
        "IMU + magnetometer for orientation and gait analysis",
        "Zero-latency haptic feedback via LRA actuators",
        "Machine learning-based anti-cheat detection system",
        "Wi-Fi and Bluetooth wireless communication",
        "Wireless charging capability",
        "Approximately 5-hour battery runtime",
        "Custom PCB design optimized for insole form factor",
        "Sensor fusion algorithms for improved accuracy",
        "Real-time data transmission to mobile app/cloud"
      ]}
      images={[mock09]}
      githubLink="https://github.com/alwinsdon"
      liveLink="#"
    >
      <section className="project-section">
        <h2>Technical Architecture</h2>
        <p>
          The Smart Insole uses a sophisticated sensor array to capture biomechanical data from the user's
          foot. Four FSR sensors are strategically placed to measure pressure distribution across heel,
          ball, and toe regions. The IMU tracks acceleration and angular velocity, while the magnetometer
          provides heading information. Together, these sensors enable accurate step detection, gait
          analysis, and activity classification.
        </p>
        <p>
          The ESP32 serves as the central processing unit, running custom firmware that implements sensor
          fusion algorithms, step detection logic, and anti-cheat mechanisms. Data is transmitted wirelessly
          via Bluetooth Low Energy to a companion mobile app for visualization and blockchain integration.
        </p>
      </section>

      <section className="project-section">
        <h2>Hardware Components</h2>
        <ul className="features-list">
          <li><strong>Microcontroller:</strong> ESP32 for processing and wireless communication</li>
          <li><strong>Force Sensors:</strong> 4× FSR sensors for pressure mapping across foot regions</li>
          <li><strong>Motion Tracking:</strong> 6-axis IMU (accelerometer + gyroscope)</li>
          <li><strong>Orientation:</strong> 3-axis magnetometer for heading detection</li>
          <li><strong>Feedback:</strong> LRA (Linear Resonant Actuator) for haptic vibration</li>
          <li><strong>Power:</strong> Rechargeable LiPo battery with wireless charging coil</li>
          <li><strong>PCB:</strong> Custom two-layer board designed in KiCad, optimized for insole fit</li>
        </ul>
      </section>

      <section className="project-section">
        <h2>Software & Algorithms</h2>
        <p>
          <strong>Sensor Fusion:</strong> Implements Kalman filtering to combine accelerometer and gyroscope
          data for accurate motion tracking. The algorithm reduces sensor noise and drift, improving step
          detection reliability.
        </p>
        <p>
          <strong>Step Detection:</strong> Uses a combination of FSR pressure thresholds, IMU acceleration
          patterns, and temporal analysis to detect individual steps. Achieved 75-80% accuracy across 5
          field tests with diverse user gaits and walking speeds.
        </p>
        <p>
          <strong>Anti-Cheat Detection:</strong> Machine learning model trained on real walking data vs.
          simulated/manipulated patterns. Detects anomalies such as shaking, tapping, or non-walking
          movements that attempt to fake steps for crypto rewards.
        </p>
        <p>
          <strong>Wireless Communication:</strong> ESP32 firmware handles Wi-Fi and Bluetooth connectivity,
          transmitting real-time data packets to mobile app. Low-power modes extend battery life during
          idle periods.
        </p>
      </section>

      <section className="project-section">
        <h2>PCB Design & Manufacturing</h2>
        <p>
          The custom PCB was designed in KiCad with careful attention to the insole's constrained form
          factor. The two-layer board includes:
        </p>
        <ul className="features-list">
          <li>Compact component placement optimized for insole curvature</li>
          <li>Flexible connector pads for FSR sensors positioned across insole</li>
          <li>Power management circuit with battery protection and charging</li>
          <li>Wireless charging coil integration</li>
          <li>Decoupling capacitors and noise filtering for clean sensor signals</li>
          <li>Testpoints for debugging and calibration</li>
        </ul>
      </section>

      <section className="project-section">
        <h2>Performance Metrics</h2>
        <ul className="features-list">
          <li>Step counting accuracy: 75-80% validated across 5 field tests</li>
          <li>Battery runtime: Approximately 5 hours of continuous use</li>
          <li>Haptic latency: Zero-latency feedback (< 10ms response time)</li>
          <li>Wireless range: 10+ meters (Bluetooth), longer with Wi-Fi</li>
          <li>Anti-cheat detection: Successfully identifies fake step patterns</li>
          <li>Form factor: Slim enough to fit comfortably inside standard shoes</li>
        </ul>
      </section>

      <section className="project-section">
        <h2>Field Testing & Validation</h2>
        <p>
          Five comprehensive field tests were conducted with multiple users across different scenarios:
          walking, jogging, stairs, and varied terrain. Data was collected to validate step accuracy,
          battery performance, and comfort. The anti-cheat system was tested against intentional manipulation
          attempts (shaking, tapping, etc.) and successfully flagged non-walking patterns.
        </p>
        <p>
          Users reported the insole to be comfortable for extended wear, with haptic feedback providing
          satisfying confirmation of step registration without being intrusive.
        </p>
      </section>

      <section className="project-section">
        <h2>Blockchain Integration (In Progress)</h2>
        <p>
          The long-term vision includes integrating with a crypto-based reward system where users earn
          tokens for verified steps. The anti-cheat detection ensures that only legitimate walking activity
          is rewarded, maintaining system integrity. Blockchain smart contracts will automatically
          distribute rewards based on daily step counts, creating a "walk-to-earn" incentive model.
        </p>
        <ul className="features-list">
          <li>Smart contract development underway for reward distribution</li>
          <li>Secure data transmission to blockchain backend</li>
          <li>User wallet integration for receiving crypto rewards</li>
          <li>Leaderboard and social features for community engagement</li>
        </ul>
      </section>

      <section className="project-section">
        <h2>Challenges & Solutions</h2>
        <p>
          <strong>Challenge 1 - Form Factor:</strong> Fitting all electronics into a thin, comfortable insole.
          <br/>
          <strong>Solution:</strong> Custom PCB design with compact SMD components; flexible circuit approach
          for sensor placement; optimized battery size vs. runtime.
        </p>
        <p>
          <strong>Challenge 2 - Step Accuracy:</strong> Diverse gaits and walking styles caused inconsistent detection.
          <br/>
          <strong>Solution:</strong> Sensor fusion algorithms combining FSR, IMU, and magnetometer data;
          machine learning model trained on diverse user datasets; calibration per user.
        </p>
        <p>
          <strong>Challenge 3 - Anti-Cheat:</strong> Users could potentially fake steps by shaking or tapping device.
          <br/>
          <strong>Solution:</strong> ML-based pattern recognition to distinguish real walking from simulated
          movements; accelerometer signature analysis; temporal consistency checks.
        </p>
      </section>

      <section className="project-section">
        <h2>Future Enhancements</h2>
        <ul className="features-list">
          <li>Improved step accuracy targeting 90%+ through advanced ML models</li>
          <li>Extended battery life with optimized power management</li>
          <li>Gait analysis and posture correction feedback</li>
          <li>Integration with fitness apps (Apple Health, Google Fit)</li>
          <li>Injury prevention alerts based on pressure distribution</li>
          <li>Mobile app development for real-time visualization and control</li>
          <li>Production-ready design for manufacturing scalability</li>
        </ul>
      </section>

      <section className="project-section">
        <h2>Skills Demonstrated</h2>
        <ul className="features-list">
          <li>Wearable electronics design and PCB layout</li>
          <li>Embedded systems programming (ESP32, C++)</li>
          <li>Sensor integration and calibration</li>
          <li>Sensor fusion and signal processing algorithms</li>
          <li>Machine learning for activity recognition</li>
          <li>Wireless communication protocols (Wi-Fi, Bluetooth)</li>
          <li>User testing and iterative design</li>
          <li>Mechanical design for wearable form factors</li>
        </ul>
      </section>
    </ProjectDetail>
  );
}

export default SmartInsoleProject;

