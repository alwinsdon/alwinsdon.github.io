import React, {useState, useEffect} from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { Navigation, Footer } from "./components";
import HomePage from "./pages/HomePage";
import AutonomousLawnmowerProject from "./components/projects/AutonomousLawnmowerProject";
import SmartInsoleProject from "./components/projects/SmartInsoleProject";
import SelfBalancingRobotProject from "./components/projects/SelfBalancingRobotProject";
import OpenManipulatorProject from "./components/projects/OpenManipulatorProject";
import ColorSortingRobotProject from "./components/projects/ColorSortingRobotProject";
import HovercraftProject from "./components/projects/HovercraftProject";
import BluetoothRCCarProject from "./components/projects/BluetoothRCCarProject";
import FoundryProject from "./components/projects/FoundryProject";
import './index.scss';

function ScrollToTop() {
    const { pathname, hash } = useLocation();

    useEffect(() => {
        if (hash) {
            // Clear the hash from the URL to prevent scroll-on-reload
            window.history.replaceState(null, '', pathname);
            const element = document.querySelector(hash);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        }
    }, [pathname, hash]);

    return null;
}

function App() {
    const [mode, setMode] = useState<string>('dark');

    const handleModeChange = () => {
        if (mode === 'dark') {
            setMode('light');
        } else {
            setMode('dark');
        }
    }

    return (
        <Router basename="/">
            <div className={`main-container ${mode === 'dark' ? 'dark-mode' : 'light-mode'}`}>
                <Navigation parentToChild={{mode}} modeChange={handleModeChange}/>
                <ScrollToTop />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/project/autonomous-lawnmower" element={<AutonomousLawnmowerProject />} />
                    <Route path="/project/smart-insole" element={<SmartInsoleProject />} />
                    <Route path="/project/self-balancing-robot" element={<SelfBalancingRobotProject />} />
                    <Route path="/project/openmanipulator-arm" element={<OpenManipulatorProject />} />
                    <Route path="/project/color-sorting-robot" element={<ColorSortingRobotProject />} />
                    <Route path="/project/autonomous-hovercraft" element={<HovercraftProject />} />
                    <Route path="/project/bluetooth-rc-car" element={<BluetoothRCCarProject />} />
                    <Route path="/project/foundry-forging" element={<FoundryProject />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;