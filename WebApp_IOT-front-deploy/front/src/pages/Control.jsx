import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import "./Control.scss";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Header from "../components/Header.jsx";

const Control = () => {
    const [activePanel, setActivePanel] = useState("Panel A1");
    const [activeSector, setActiveSector] = useState("A");
    const [groups, setGroups] = useState([
        { id: "A1-1", status: true, type: "Schedule" },
        { id: "A1-2", status: true, type: "Schedule" },
        { id: "A1-3", status: false, type: "Schedule" },
        { id: "A1-4", status: true, type: "Schedule" },
        { id: "A1-5", status: false, type: "Schedule" },
        { id: "A1-6", status: true, type: "Schedule" },
    ]);

    const toggleStatus = (index) => {
        const newGroups = [...groups];
        newGroups[index].status = !newGroups[index].status;
        setGroups(newGroups);
    };

    const setControlType = (index, type) => {
        const newGroups = [...groups];
        newGroups[index].type = type;
        setGroups(newGroups);
    };

    const handleSectorChange = (sector) => {
        setActiveSector(sector);
    };

    return (
        <div className="control">
            <Sidebar />
            <div className="control-content">
                <Header />
                <div className="control-container">
                    <div className="control-left">
                        <h2>Sector {activeSector}</h2>
                        <h3>Control panel lighting</h3>

                        <div className="light-status">
                            <div className="light-card">
                                <span className="light-name">Working light</span>
                                <div className="light-value">
                                    <span className="on">30 on</span>
                                    <span className="off">0 off</span>
                                </div>
                            </div>
                            <div className="light-card">
                                <span className="light-name">Emergency light</span>
                                <div className="light-value">
                                    <span className="on">24 on</span>
                                    <span className="off">0 off</span>
                                </div>
                            </div>
                        </div>

                        <div className="sector-control">
                            <h3>Change Sector</h3>
                            <div className="sector-nav">
                                <div className="nav-circle">
                                    <button
                                        className={`nav-btn nav-c ${activeSector === "C" ? "active" : ""}`}
                                        onClick={() => handleSectorChange("C")}
                                    >
                                        C
                                    </button>
                                    <button
                                        className={`nav-btn nav-b ${activeSector === "B" ? "active" : ""}`}
                                        onClick={() => handleSectorChange("B")}
                                    >
                                        B
                                    </button>
                                    <button
                                        className={`nav-btn nav-d ${activeSector === "D" ? "active" : ""}`}
                                        onClick={() => handleSectorChange("D")}
                                    >
                                        D
                                    </button>
                                    <button
                                        className={`nav-btn nav-a ${activeSector === "A" ? "active" : ""}`}
                                        onClick={() => handleSectorChange("A")}
                                    >
                                        A
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="control-right">
                        <div className="panel-tabs">
                            {["Panel A1", "Panel A2", "Panel A3", "Panel A4", "Panel A5"].map((panel) => (
                                <button
                                    key={panel}
                                    className={`panel-tab ${activePanel === panel ? "active" : ""}`}
                                    onClick={() => setActivePanel(panel)}
                                >
                                    {panel}
                                </button>
                            ))}
                        </div>

                        <div className="control-groups">
                            <div className="group-header">
                                <span>Group</span>
                                <span>Status</span>
                                <span>Type of control</span>
                                <span></span>
                            </div>
                            {groups.map((group, index) => (
                                <div key={group.id} className="group-row">
                                    <span className="group-id">{group.id}</span>
                                    <label className="switch">
                                        <input
                                            type="checkbox"
                                            checked={group.status}
                                            onChange={() => toggleStatus(index)}
                                        />
                                        <span className="slider"></span>
                                    </label>
                                    <div className="control-type">
                                        <button
                                            className={`type-btn ${group.type === "Schedule" ? "active" : ""}`}
                                            onClick={() => setControlType(index, "Schedule")}
                                        >
                                            Schedule
                                        </button>
                                        <button
                                            className={`type-btn ${group.type === "Manual" ? "active" : ""}`}
                                            onClick={() => setControlType(index, "Manual")}
                                        >
                                            Manual
                                        </button>
                                    </div>
                                    <button className="start-btn">Start</button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Control;