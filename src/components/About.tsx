import React from "react";
import { Link } from "react-router-dom";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { faRobot, faMicrochip, faCogs, faEye, faLightbulb, faCode, faChartLine, faCube, faBolt, faWrench } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/About.scss'

function About() {
  // Helper function to get project route from abbreviation
  const getProjectRoute = (projectCode: string) => {
    const projectMap: { [key: string]: string } = {
      'alm': '/project/autonomous-lawnmower',
      'ssi': '/project/smart-insole',
      'sbr': '/project/self-balancing-robot',
      'ora': '/project/openmanipulator-arm'
    };
    
    const projects = projectCode.split(', ').map(code => code.trim());
    return projects.length > 0 ? projectMap[projects[0]] : '#projects';
  };

  return (
    <div id="about" className="about-container">
      <div className="about-content">
        <h1>About Me</h1>
        
        <div className="about-text">
          <p>
            I am a Robotics & Mechatronics Engineering Student with 2+ years of hands-on experience developing 
            autonomous robotic systems, control algorithms, and sensor-driven software for research environments. 
            My research background focuses on finding solutions to engineering problems by drawing on interdisciplinary 
            knowledge and resources.
          </p>
          
          <p>
            I've developed a toolbox of skills that has generalist characteristics by nature and specialist 
            characteristics by education. My problem-solving style is a hybrid between the applied tactics of 
            engineers ("Let's make something happen") and the experimental methods of scientists ("Let's find out 
            how this works"). My professional research spans robotics development, control systems, embedded systems, 
            and autonomous navigation using ROS2.
          </p>
          
          <p>
            In my free time, I love to work on personal robotics projects ranging from autonomous lawnmowers to 
            self-balancing robots. I enjoy the challenge of integrating mechanical design, electronics, and software 
            to create functional robotic systems. Outside of engineering, I'm passionate about applying robotics and 
            innovation to improve human health and solve real-world problems.
          </p>
        </div>

        {/* Interests Section with Icons */}
        <div className="interests-section">
          <h2>Interests</h2>
          <div className="interests-grid">
            <div className="interest-item">
              <FontAwesomeIcon icon={faRobot} className="interest-icon"/>
              <span>Robotics & Autonomous Systems</span>
            </div>
            <div className="interest-item">
              <FontAwesomeIcon icon={faCogs} className="interest-icon"/>
              <span>Control Systems Design</span>
            </div>
            <div className="interest-item">
              <FontAwesomeIcon icon={faBolt} className="interest-icon"/>
              <span>Sensor Fusion & Navigation</span>
            </div>
            <div className="interest-item">
              <FontAwesomeIcon icon={faMicrochip} className="interest-icon"/>
              <span>Embedded Systems</span>
            </div>
            <div className="interest-item">
              <FontAwesomeIcon icon={faCode} className="interest-icon"/>
              <span>ROS2 Development</span>
            </div>
            <div className="interest-item">
              <FontAwesomeIcon icon={faLightbulb} className="interest-icon"/>
              <span>Machine Learning for Robotics</span>
            </div>
            <div className="interest-item">
              <FontAwesomeIcon icon={faEye} className="interest-icon"/>
              <span>Computer Vision</span>
            </div>
            <div className="interest-item">
              <FontAwesomeIcon icon={faCube} className="interest-icon"/>
              <span>CAD & Mechanical Design</span>
            </div>
            <div className="interest-item">
              <FontAwesomeIcon icon={faChartLine} className="interest-icon"/>
              <span>Hardware-Software Integration</span>
            </div>
            <div className="interest-item">
              <FontAwesomeIcon icon={faWrench} className="interest-icon"/>
              <span>Rapid Prototyping</span>
            </div>
          </div>
        </div>

        {/* Education Section */}
        <div className="education-section">
          <h2>Education</h2>
          <div className="education-item">
            <h3>B.S. (Hons) Mechatronics Engineering</h3>
            <h4>Kent State University</h4>
            <p className="education-date">Expected Graduation: May 2028</p>
            <p className="education-gpa">GPA: 3.7/4.0</p>
            <p><strong>Relevant Coursework:</strong> ROS2 Navigation, Introduction to Robotics, Software for Robotics, 
            Computer Aided Design, MATLAB, Robot Programming, PCB Designing, Computer Vision</p>
          </div>
        </div>

        {/* Career History Timeline */}
        <div id="history" className="timeline-section">
          <h2>Career History</h2>
          <VerticalTimeline>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
              contentArrowStyle={{ borderRight: '7px solid white' }}
              date="January 2025 - Present"
              iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
              icon={<FontAwesomeIcon icon={faBriefcase} />}
            >
              <h3 className="vertical-timeline-element-title">Robotics Engineer Intern</h3>
              <h4 className="vertical-timeline-element-subtitle">Advanced Telerobotics Lab, Kent State University</h4>
              <p>
                Built ROS2 packages integrating LiDAR, IMU, GPS, and encoder values for autonomous navigation and 
                teleoperation control. Improved TurtleBot-based ROS2 training platform reliability by ~35% through 
                systematic hardware debugging and PCB fault correction.
              </p>
            </VerticalTimelineElement>
            
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="January 2025 - May 2025"
              iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
              icon={<FontAwesomeIcon icon={faBriefcase} />}
            >
              <h3 className="vertical-timeline-element-title">Engineering Intern</h3>
              <h4 className="vertical-timeline-element-subtitle">Extended Reality (XR) Research Lab, Kent State</h4>
              <p>
                Designed and modeled mechanical assemblies in Autodesk Inventor. Translated CAD designs into functional 
                VR prototypes in Unity, enabling interactive simulations for product validation using VIVE Pro.
              </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="September 2023 - December 2023"
              iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
              icon={<FontAwesomeIcon icon={faBriefcase} />}
            >
              <h3 className="vertical-timeline-element-title">Engineering Intern</h3>
              <h4 className="vertical-timeline-element-subtitle">International Engineering Co. (IECO), Kuwait</h4>
              <p>
                Supported 10+ industrial maintenance and retrofit tasks by preparing CAD drawings and BOMs. Assisted 
                in building sensor-based monitoring prototypes using Arduino/ESP32 and validated PLC ladder logic 
                through bench-level testing.
              </p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>

        {/* Technology Tags with Project Mapping */}
        <div className="tags-section">
          <h2>Technologies & Tools</h2>
          <p className="tags-subtitle">Click on any technology to go to the specific project</p>
          
          <div className="tech-category">
            <h3>Autonomous Systems</h3>
            <div className="tags-container">
              <Link to={getProjectRoute("alm")} className="tag" data-project="Autonomous Lawnmower">ROS2</Link>
              <Link to={getProjectRoute("alm")} className="tag" data-project="Autonomous Lawnmower">Python</Link>
              <Link to={getProjectRoute("alm")} className="tag" data-project="Lawnmower, Balancing Robot, Robotic Arm">C++</Link>
              <Link to={getProjectRoute("alm")} className="tag" data-project="Autonomous Lawnmower">SLAM</Link>
              <Link to={getProjectRoute("alm")} className="tag" data-project="Autonomous Lawnmower">Computer Vision</Link>
              <Link to={getProjectRoute("alm")} className="tag" data-project="Autonomous Lawnmower">LiDAR</Link>
              <Link to={getProjectRoute("alm")} className="tag" data-project="Lawnmower, Smart Insole">IMU</Link>
            </div>
          </div>

          <div className="tech-category">
            <h3>Embedded & Control</h3>
            <div className="tags-container">
              <Link to={getProjectRoute("alm")} className="tag" data-project="Lawnmower, Balancing Robot">Arduino</Link>
              <Link to={getProjectRoute("ssi")} className="tag" data-project="Smart Insole">ESP32</Link>
              <Link to={getProjectRoute("alm")} className="tag" data-project="Autonomous Lawnmower">Raspberry Pi</Link>
              <Link to={getProjectRoute("sbr")} className="tag" data-project="Self-Balancing Robot">PID Control</Link>
              <Link to={getProjectRoute("sbr")} className="tag" data-project="Self-Balancing Robot">Kalman Filter</Link>
              <Link to={getProjectRoute("alm")} className="tag" data-project="All Projects">Sensor Fusion</Link>
              <Link to={getProjectRoute("ssi")} className="tag" data-project="Smart Insole">PCB Design</Link>
              <Link to={getProjectRoute("ssi")} className="tag" data-project="Smart Insole">KiCad</Link>
            </div>
          </div>

          <div className="tech-category">
            <h3>Mechanical & Design</h3>
            <div className="tags-container">
              <Link to={getProjectRoute("alm")} className="tag" data-project="All Projects">Autodesk Inventor</Link>
              <Link to={getProjectRoute("alm")} className="tag" data-project="All Projects">CAD</Link>
              <Link to={getProjectRoute("ssi")} className="tag" data-project="Insole, Robotic Arm">3D Printing</Link>
              <Link to={getProjectRoute("alm")} className="tag" data-project="Lawnmower, Balancing Robot">MIG Welding</Link>
              <Link to={getProjectRoute("ora")} className="tag" data-project="Robotic Arm">MoveIt</Link>
              <Link to={getProjectRoute("ora")} className="tag" data-project="Robotic Arm">Gazebo</Link>
              <Link to={getProjectRoute("sbr")} className="tag" data-project="Self-Balancing Robot">MATLAB</Link>
            </div>
          </div>

          <div className="tech-category">
            <h3>Machine Learning & Analysis</h3>
            <div className="tags-container">
              <Link to={getProjectRoute("ssi")} className="tag" data-project="Smart Insole">Machine Learning</Link>
              <Link to={getProjectRoute("alm")} className="tag" data-project="Autonomous Lawnmower">YOLO</Link>
              <Link to={getProjectRoute("alm")} className="tag" data-project="Autonomous Lawnmower">Object Detection</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
