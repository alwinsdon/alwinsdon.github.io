import React from "react";
import ProjectDetail, { ProjectImage } from "./ProjectDetail";

import imgRack from '../../assets/images/projects/plc/PLC.jpeg';
import imgOperatorPanel from '../../assets/images/projects/plc/LED panel.jpeg';
import imgLogixTags from '../../assets/images/projects/plc/logix designer template  scrn.png';
import imgNemaPanel from '../../assets/images/projects/plc/Nema panel wiring.jpeg';
import imgMinarik from '../../assets/images/projects/plc/Minarik Motor Drive.jpeg';

import vidRelayDemo from '../../assets/images/projects/plc/relay-based motor demo.mp4';
import vidPanelDemo from '../../assets/images/projects/plc/Start-Stop-Jog_and_Push-ON _Push-OFF _Circuits_DEMO.mp4';
import vidLogixDemo from '../../assets/images/projects/plc/start stop joj logix screen demo.mp4';

function PLCMotorControlProject() {
  const images: ProjectImage[] = [
    { src: vidRelayDemo, caption: "Relay-based reversing motor control: START latches the motor, the limit switches reverse it automatically, and JOG runs it only while held.", type: 'video' },
    { src: vidPanelDemo, caption: "Start-Stop-Jog and Push-ON/Push-OFF programs running on the operator panel.", type: 'video' },
    { src: vidLogixDemo, caption: "The same ladder logic monitored online in Studio 5000 Logix Designer.", type: 'video' },
    { src: imgRack, caption: "Allen-Bradley ControlLogix rack: Logix 5581E controller with DC input, DC output and analog I/O modules." },
    { src: imgLogixTags, caption: "Controller template in Logix Designer: I/O configuration and renamed program tags (MOTOR, FWD, REV, POWER, DIR)." },
    { src: imgOperatorPanel, caption: "Operator panel: pushbuttons, selector switches, pilot lights, analog input potentiometer and analog meter." },
    { src: imgNemaPanel, caption: "NEMA control panel wired for the relay motor circuit: pushbuttons, pilot lights, relays and terminal blocks." },
    { src: imgMinarik, caption: "Minarik motor drive wired to a potentiometer for bidirectional speed control." }
  ];

  return (
    <ProjectDetail
      title="PLC Motor Control and Panel Wiring"
      timeline="2026"
      background="How do industrial machines start, stop, jog and reverse a motor safely? Hands-on work in ladder logic on an Allen-Bradley ControlLogix PLC and in hard-wired relay control on a NEMA panel."
      description="Programmed an Allen-Bradley ControlLogix PLC in Studio 5000 Logix Designer to run classic motor-control circuits from an operator panel, then wired a relay-based reversing motor circuit by hand: 120 VAC motor power, a Minarik drive with potentiometer speed control, a 5 VDC direction relay, and a 24 VDC start, stop, seal-in and jog circuit with limit switches that reverse the motor at each end of travel."
      technologies={[
        "Allen-Bradley ControlLogix",
        "Studio 5000 Logix Designer",
        "Ladder Logic",
        "Digital & Analog I/O",
        "EtherNet/IP",
        "Relay Logic",
        "Control Panel Wiring",
        "Minarik Motor Drive",
        "Limit Switches"
      ]}
      features={[
        "Start-Stop-Jog: START latches the RUN output through a seal-in, STOP drops it, and JOG runs it only while held",
        "Push-ON/Push-OFF: built a one-shot rising circuit from only XIC, XIO, OTE and internal bits, then a flip-flop so a single POWER button toggles the motor on and off",
        "Direction toggle with the built-in OSR instruction, plus a programmatic interlock so FWD and REV can never energize together",
        "Renamed I/O tags to readable names and documented every rung with comments",
        "Wired a 120 VAC motor power circuit, a 5 VDC direction circuit through a relay, and a 24 VDC start, stop, seal-in and jog control circuit",
        "Limit switches reverse the motor automatically at each end of travel; wiring verified with power off before the first run"
      ]}
      images={images}
    />
  );
}

export default PLCMotorControlProject;
