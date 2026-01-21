import React, {useState, useEffect} from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { Navigation, Footer } from "./components";
import HomePage from "./pages/HomePage";
import AutonomousLawnmowerProject from "./components/projects/AutonomousLawnmowerProject";
import SmartInsoleProject from "./components/projects/SmartInsoleProject";
import SelfBalancingRobotProject from "./components/projects/SelfBalancingRobotProject";
import OpenManipulatorProject from "./components/projects/OpenManipulatorProject";
import './index.scss';

function ScrollToTop() {
    const { pathname, hash } = useLocation();

    useEffect(() => {
        if (hash) {
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
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;