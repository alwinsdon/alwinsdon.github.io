import React from "react";
import ProjectDetail from "./ProjectDetail";
import mock07 from '../../assets/images/mock07.png';

function OpenManipulatorProject() {
  return (
    <ProjectDetail
      title="OpenManipulator Robotic Arm"
      timeline="2024"
      background="This project was initiated to gain hands-on experience with industrial robotic manipulation, kinematics, and motion planning. The OpenManipulator arm serves as an educational platform for understanding forward/inverse kinematics, trajectory planning, and ROS-based control of multi-degree-of-freedom systems. The goal was to build a functional 6-DOF arm capable of precise pick-and-place operations."
      description="Constructed a 6-DOF (six degrees of freedom) robotic arm featuring 3D-printed joints, metal structural components for stability, and servo-based actuation. Integrated with ROS (Robot Operating System) for high-level control, MoveIt for motion planning, and Gazebo for realistic simulation. Programmed custom inverse kinematics solvers and PID controllers in Python and C++ to achieve precise end-effector positioning for manipulation tasks."
      technologies={[
        "ROS (Robot Operating System)",
        "MoveIt Motion Planning",
        "Gazebo Simulation",
        "Python",
        "C++",
        "Inverse Kinematics (IK)",
        "Forward Kinematics (FK)",
        "PID Control",
        "Autodesk Inventor",
        "3D Printing",
        "Metal Fabrication",
        "Servo Motors",
        "URDF (Unified Robot Description Format)",
        "Trajectory Planning"
      ]}
      features={[
        "6 degrees of freedom for versatile manipulation",
        "Custom CAD design with 3D-printed joints and metal base",
        "ROS integration for modular software architecture",
        "MoveIt motion planning for collision-free trajectories",
        "Gazebo simulation environment for testing and validation",
        "Custom inverse kinematics solver for end-effector control",
        "PID control loops for each joint servo",
        "URDF model defining robot geometry and kinematics",
        "Payload capacity of approximately 1 kg",
        "Validated pick-and-place operations in simulation and hardware",
        "Python and C++ API for programming manipulation tasks"
      ]}
      images={[mock07]}
      githubLink="https://github.com/alwinsdon"
      liveLink="#"
    >
      <section className="project-section">
        <h2>Robotic Kinematics</h2>
        <p>
          The arm's control system relies heavily on forward and inverse kinematics. Forward kinematics
          (FK) calculates the end-effector position given joint angles, while inverse kinematics (IK)
          solves for the joint angles needed to reach a desired end-effector pose. IK is particularly
          challenging for 6-DOF arms due to multiple possible solutions and singularities.
        </p>
        <p>
          A custom IK solver was implemented using geometric and numerical methods, complementing MoveIt's
          built-in IK capabilities. The solver accounts for joint limits, workspace constraints, and
          collision avoidance to produce feasible trajectories.
        </p>
      </section>

      <section className="project-section">
        <h2>Hardware Design & Construction</h2>
        <ul className="features-list">
          <li><strong>Base:</strong> Metal platform and mounting brackets for structural stability</li>
          <li><strong>Joints:</strong> 3D-printed components designed in Autodesk Inventor</li>
          <li><strong>Actuators:</strong> Six servo motors providing precise angular control</li>
          <li><strong>End-Effector:</strong> Gripper mechanism for grasping objects</li>
          <li><strong>Assembly:</strong> Combination of metal fasteners and 3D-printed connectors</li>
          <li><strong>Sensors:</strong> Encoders for joint position feedback</li>
        </ul>
        <p>
          The design prioritizes a balance between weight (for payload capacity) and structural integrity.
          The metal base provides a stable foundation, while 3D-printed joints reduce overall weight and
          allow rapid iteration on joint designs.
        </p>
      </section>

      <section className="project-section">
        <h2>ROS Software Stack</h2>
        <p>
          The robotic arm is fully integrated with ROS, providing a modular and extensible software
          architecture. Key ROS packages and components include:
        </p>
        <ul className="features-list">
          <li><strong>robot_description:</strong> URDF model defining arm geometry, joint limits, and inertial properties</li>
          <li><strong>MoveIt:</strong> Motion planning framework for trajectory generation and collision detection</li>
          <li><strong>robot_state_publisher:</strong> Publishes current joint states for visualization</li>
          <li><strong>joint_trajectory_controller:</strong> Executes planned trajectories by commanding servos</li>
          <li><strong>Custom IK/FK nodes:</strong> Python/C++ services for kinematics computations</li>
          <li><strong>Gripper control:</strong> Dedicated node for grasp planning and execution</li>
        </ul>
      </section>

      <section className="project-section">
        <h2>Motion Planning with MoveIt</h2>
        <p>
          MoveIt is a powerful ROS package for motion planning, manipulation, and collision avoidance. It
          provides algorithms like RRT (Rapidly-exploring Random Tree) and RRT-Connect to plan smooth,
          collision-free paths from the current configuration to a goal pose.
        </p>
        <p>
          The arm's MoveIt configuration includes:
        </p>
        <ul className="features-list">
          <li>Planning scene with collision objects (table, obstacles)</li>
          <li>Self-collision checking to prevent arm-on-arm contact</li>
          <li>Cartesian path planning for straight-line end-effector motion</li>
          <li>Trajectory smoothing and time parameterization</li>
          <li>Interactive visualization in RViz for debugging and demonstration</li>
        </ul>
      </section>

      <section className="project-section">
        <h2>Simulation with Gazebo</h2>
        <p>
          Before deploying to hardware, all motion planning and control algorithms were tested in Gazebo,
          a physics-based robot simulator. The Gazebo model includes:
        </p>
        <ul className="features-list">
          <li>Accurate mass and inertia properties for realistic dynamics</li>
          <li>Joint friction and damping to model real servo behavior</li>
          <li>Gravity and contact physics for object manipulation</li>
          <li>Simulated sensors (joint encoders) matching hardware</li>
        </ul>
        <p>
          Simulation enabled rapid iteration on control algorithms and trajectory planning without risk of
          hardware damage. Once validated in simulation, code transferred seamlessly to the physical arm.
        </p>
      </section>

      <section className="project-section">
        <h2>Pick-and-Place Task Execution</h2>
        <p>
          The primary application demonstrated is a pick-and-place task: the arm approaches an object,
          grasps it, lifts it, transports it to a new location, and releases it. This task requires:
        </p>
        <ul className="features-list">
          <li><strong>Perception:</strong> Object pose estimation (currently manual or via external input)</li>
          <li><strong>Grasp Planning:</strong> Computing gripper approach pose and grasp configuration</li>
          <li><strong>Motion Planning:</strong> Generating collision-free path to pre-grasp and grasp poses</li>
          <li><strong>Execution:</strong> Commanding servos to follow planned trajectory</li>
          <li><strong>Manipulation:</strong> Closing gripper, lifting object, transporting, and releasing</li>
        </ul>
        <p>
          The pick-and-place routine was successfully validated with objects up to 1 kg in weight, demonstrating
          the arm's capability for practical manipulation tasks.
        </p>
      </section>

      <section className="project-section">
        <h2>Performance Metrics</h2>
        <ul className="features-list">
          <li><strong>Degrees of Freedom:</strong> 6 DOF (shoulder pan/tilt, elbow, wrist pitch/roll, gripper)</li>
          <li><strong>Payload Capacity:</strong> Approximately 1 kg</li>
          <li><strong>Reach:</strong> ~50 cm workspace radius</li>
          <li><strong>Positioning Accuracy:</strong> ±5 mm (dependent on calibration and servo quality)</li>
          <li><strong>Motion Planning Success Rate:</strong> >95% in uncluttered environments</li>
          <li><strong>Task Execution:</strong> Pick-and-place validated in simulation and hardware</li>
        </ul>
      </section>

      <section className="project-section">
        <h2>Challenges & Solutions</h2>
        <p>
          <strong>Challenge 1 - Singularities:</strong> Certain arm configurations (singularities) make IK
          solutions unstable or non-existent.
          <br/>
          <strong>Solution:</strong> Implemented singularity detection and avoidance in path planning; MoveIt
          generates alternative paths avoiding problematic configurations.
        </p>
        <p>
          <strong>Challenge 2 - Joint Accuracy:</strong> Servo backlash and compliance reduced positioning accuracy.
          <br/>
          <strong>Solution:</strong> Calibrated each joint's offset and scaling; implemented PID control to
          minimize steady-state error; considered higher-quality servos for future iterations.
        </p>
        <p>
          <strong>Challenge 3 - URDF Modeling:</strong> Accurate URDF model critical for simulation and planning;
          errors in link lengths or joint axes caused mismatches.
          <br/>
          <strong>Solution:</strong> Carefully measured physical arm dimensions; validated URDF in RViz against
          real arm; iteratively refined model for accuracy.
        </p>
      </section>

      <section className="project-section">
        <h2>Future Enhancements</h2>
        <ul className="features-list">
          <li>Integrate computer vision for autonomous object detection and pose estimation</li>
          <li>Implement force/torque sensing for compliant manipulation</li>
          <li>Add more sophisticated grasp planning algorithms</li>
          <li>Improve positioning accuracy through better calibration and higher-quality servos</li>
          <li>Develop task-level programming interface for non-experts</li>
          <li>Extend applications to assembly, inspection, or teleoperation tasks</li>
          <li>Implement machine learning for adaptive grasp strategies</li>
        </ul>
      </section>

      <section className="project-section">
        <h2>Skills Demonstrated</h2>
        <ul className="features-list">
          <li>Robotic kinematics (forward and inverse kinematics)</li>
          <li>Motion planning and trajectory generation</li>
          <li>ROS software development (nodes, topics, services, actions)</li>
          <li>MoveIt configuration and usage</li>
          <li>Gazebo simulation and physics modeling</li>
          <li>Python and C++ programming for robotics</li>
          <li>CAD design and 3D printing for mechanical components</li>
          <li>PID control implementation</li>
          <li>System integration (hardware, firmware, high-level software)</li>
          <li>Debugging complex robotic systems</li>
        </ul>
      </section>
    </ProjectDetail>
  );
}

export default OpenManipulatorProject;

