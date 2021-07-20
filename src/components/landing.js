import React from "react";
import settings from "../icons/settings.svg"

class LandingPage extends React.Component {
    render() {
        return (
            <div className="landing">
                <img src={settings} className="settings-icon" alt="settings icon" /><br></br>
                <h1 className="h2">Focus Timer</h1>
                <p className="body">A timer designed to keep you focused on what matters to you</p>
                <div className="landing-fabs">
                    <button className="fab-secondary">Start Pause (15min)</button>
                    <button className="fab">Start Focus (1hr)</button>

                </div>
            </div>
        )
    }
}

export default LandingPage;