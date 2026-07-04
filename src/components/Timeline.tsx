import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
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
    </div>
  );
}

export default Timeline;