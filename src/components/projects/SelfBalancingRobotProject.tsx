import React from "react";
import ProjectDetail from "./ProjectDetail";
import mock08 from '../../assets/images/mock08.png';

function SelfBalancingRobotProject() {
  return (
    <ProjectDetail
      title="Self-Balancing Robot"
      timeline="2024"
      background="This project was undertaken to deeply understand control systems theory and real-time embedded programming. The self-balancing robot serves as an excellent testbed for PID control, sensor fusion, and system dynamics. The goal was to design and build a robot that could maintain upright balance autonomously, recovering from disturbances and demonstrating stable control performance."
      description="Designed and constructed a two-wheeled self-balancing robot featuring a custom MIG-welded metal chassis, Arduino-based control system, and Kalman-filtered IMU sensor fusion. Implemented PID control algorithms to maintain vertical stability, achieving 3-5 minutes of continuous balancing with the ability to compensate for tilt disturbances up to 10 degrees. The project included both hardware fabrication and software simulation for controller tuning."
      technologies={[
        "Arduino",
        "C/C++",
        "Python",
        "MATLAB",
        "MPU-6050 IMU",
        "Kalman Filter",
        "PID Control",
        "Pygame (Simulation)",
        "DC Motors",
        "Encoder Feedback",
        "Bluetooth Telemetry",
        "MIG Welding",
        "Metal Fabrication"
      ]}
      features={[
        "Custom MIG-welded metal frame for structural rigidity",
        "Kalman filter-based IMU data fusion for accurate tilt measurement",
        "PID control loop running at high frequency (~100Hz) for responsive balancing",
        "Dual DC motors with encoder feedback for precise wheel control",
        "Bluetooth wireless telemetry for real-time monitoring and tuning",
        "Pygame-based simulation environment for controller development",
        "MATLAB/Python tools for PID parameter tuning and analysis",
        "Balances for 3-5 minutes continuously",
        "Compensates for external disturbances up to 10° tilt",
        "Autonomous self-recovery from mild pushes"
      ]}
      images={[mock08]}
      githubLink="https://github.com/alwinsdon"
      liveLink="#"
    >
      <section className="project-section">
        <h2>Control System Architecture</h2>
        <p>
          The robot's control system is built around a classic PID (Proportional-Integral-Derivative)
          controller that continuously adjusts motor speeds to maintain vertical balance. The MPU-6050 IMU
          provides accelerometer and gyroscope data, which is processed through a Kalman filter to produce
          a smooth, accurate estimate of the robot's tilt angle.
        </p>
        <p>
          The PID loop runs at approximately 100Hz on the Arduino, ensuring responsive control. The
          proportional term provides immediate correction based on current tilt, the derivative term
          anticipates future tilt by considering the rate of change, and the integral term eliminates
          steady-state error by accumulating past errors.
        </p>
      </section>

      <section className="project-section">
        <h2>Sensor Fusion with Kalman Filter</h2>
        <p>
          Raw IMU data suffers from noise and drift: accelerometers are noisy but don't drift, while
          gyroscopes are smooth but accumulate drift over time. The Kalman filter optimally combines both
          sensors to produce a "best estimate" of the robot's orientation.
        </p>
        <ul className="features-list">
          <li>Accelerometer provides absolute angle reference (noisy, no drift)</li>
          <li>Gyroscope provides angular velocity (smooth, but drifts)</li>
          <li>Kalman filter weights each sensor based on their uncertainty models</li>
          <li>Result: Accurate, drift-free angle estimation critical for stable control</li>
        </ul>
        <p>
          Testing showed the filtered angle to be significantly more stable than either raw sensor alone,
          directly translating to improved balancing performance.
        </p>
      </section>

      <section className="project-section">
        <h2>Hardware Design</h2>
        <p>
          The robot's chassis was designed for low center of gravity and structural rigidity, both critical
          for balancing stability. The frame was MIG-welded from metal stock, providing strength and
          vibration resistance far superior to 3D-printed or bolt-together designs.
        </p>
        <ul className="features-list">
          <li><strong>Frame:</strong> Custom MIG-welded metal chassis for maximum rigidity</li>
          <li><strong>Motors:</strong> Dual high-torque DC motors with integrated encoders</li>
          <li><strong>IMU:</strong> MPU-6050 6-axis sensor (accelerometer + gyroscope)</li>
          <li><strong>Controller:</strong> Arduino Uno for real-time control loop execution</li>
          <li><strong>Power:</strong> LiPo battery providing stable voltage to motors and electronics</li>
          <li><strong>Telemetry:</strong> Bluetooth module (HC-05) for wireless data monitoring</li>
        </ul>
      </section>

      <section className="project-section">
        <h2>Software Development & Simulation</h2>
        <p>
          Before deploying code to the physical robot, controller algorithms were developed and tested in
          a Pygame-based simulation environment. The simulation modeled the robot's dynamics, allowing
          rapid iteration on PID parameters without risk of hardware damage.
        </p>
        <p>
          MATLAB and Python scripts were used to analyze system response, plot angle vs. time, and
          systematically tune PID gains. This model-based approach accelerated development and provided
          insight into the system's behavior under various conditions.
        </p>
        <ul className="features-list">
          <li>Pygame simulation models robot physics and dynamics</li>
          <li>MATLAB/Python tools for PID tuning and frequency response analysis</li>
          <li>Arduino C++ firmware for real-time control on hardware</li>
          <li>Bluetooth telemetry logs angle, motor speeds, PID terms for analysis</li>
        </ul>
      </section>

      <section className="project-section">
        <h2>Performance & Results</h2>
        <ul className="features-list">
          <li><strong>Balance Duration:</strong> Achieves 3-5 minutes of continuous stable balancing</li>
          <li><strong>Disturbance Rejection:</strong> Recovers from external pushes causing up to 10° tilt</li>
          <li><strong>Control Frequency:</strong> PID loop runs at ~100Hz for responsive control</li>
          <li><strong>Sensor Filtering:</strong> Kalman filter provides drift-free angle estimation</li>
          <li><strong>Autonomous Recovery:</strong> Self-corrects from mild disturbances without intervention</li>
        </ul>
      </section>

      <section className="project-section">
        <h2>Challenges & Solutions</h2>
        <p>
          <strong>Challenge 1 - Mechanical Vibrations:</strong> Initial 3D-printed frame was too flexible,
          causing vibrations that interfered with IMU readings.
          <br/>
          <strong>Solution:</strong> Redesigned chassis using MIG-welded metal construction for superior
          rigidity and vibration damping.
        </p>
        <p>
          <strong>Challenge 2 - Sensor Drift:</strong> Gyroscope drift caused angle estimate to slowly
          diverge, leading to loss of balance over time.
          <br/>
          <strong>Solution:</strong> Implemented Kalman filter to fuse accelerometer and gyroscope data,
          eliminating drift while maintaining smooth angle estimation.
        </p>
        <p>
          <strong>Challenge 3 - PID Tuning:</strong> Finding optimal PID gains was time-consuming and
          risked damaging the robot.
          <br/>
          <strong>Solution:</strong> Developed Pygame simulation for safe controller development; used
          MATLAB/Python analysis tools for systematic parameter tuning.
        </p>
      </section>

      <section className="project-section">
        <h2>Control Theory Concepts Applied</h2>
        <ul className="features-list">
          <li><strong>PID Control:</strong> Classic feedback control for error minimization</li>
          <li><strong>Kalman Filtering:</strong> Optimal sensor fusion for state estimation</li>
          <li><strong>System Dynamics:</strong> Understanding of inverted pendulum dynamics</li>
          <li><strong>Feedback Loop:</strong> Continuous measurement, computation, actuation cycle</li>
          <li><strong>Stability Analysis:</strong> Ensuring system remains stable under disturbances</li>
          <li><strong>Real-Time Systems:</strong> High-frequency control loop timing constraints</li>
        </ul>
      </section>

      <section className="project-section">
        <h2>Future Enhancements</h2>
        <ul className="features-list">
          <li>Implement more advanced control (LQR, Model Predictive Control)</li>
          <li>Add positional control for autonomous navigation while balancing</li>
          <li>Integrate computer vision for line-following or obstacle avoidance</li>
          <li>Extend balance duration through improved battery management and control tuning</li>
          <li>Develop mobile app for wireless parameter tuning and monitoring</li>
          <li>Add self-calibration routines for easier deployment</li>
        </ul>
      </section>

      <section className="project-section">
        <h2>Skills Demonstrated</h2>
        <ul className="features-list">
          <li>Control systems design and implementation (PID)</li>
          <li>Sensor fusion and signal processing (Kalman filter)</li>
          <li>Embedded systems programming (Arduino, real-time constraints)</li>
          <li>Metal fabrication and welding (MIG welding, chassis construction)</li>
          <li>System modeling and simulation (Pygame, MATLAB)</li>
          <li>Parameter tuning and optimization</li>
          <li>Debugging and troubleshooting complex electromechanical systems</li>
          <li>Data analysis and visualization (Python, MATLAB)</li>
        </ul>
      </section>
    </ProjectDetail>
  );
}

export default SelfBalancingRobotProject;

