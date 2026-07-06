import React from "react";
import "./App.css";
import Users from "./users";
import Courses from "./Courses";

// const plantData = [
//   { plant: "Snake Plant", light: "Low → bright", water: "2–3 weeks", difficulty: "Easy" },
//   { plant: "Pothos", light: "Medium", water: "7–10 days", difficulty: "Easy" },
//   { plant: "Monstera", light: "Bright indirect", water: "7 days", difficulty: "Medium" },
//   { plant: "Fiddle-leaf Fig", light: "Bright indirect", water: "7–10 days", difficulty: "Hard" }
// ];

function App() {
  return (
    <Courses />
    // <div className="app">
    //   {/* Header */}
    //   <Users />
    //   <header className="header">
    //     <div className="logo">
    //       <div className="logo-icon"></div>
    //       <span>Verdant</span>
    //     </div>
    //     <nav className="nav">
    //       <a href="#care">Care</a>
    //       <a href="#schedule">Schedule</a>
    //       <a href="#journal">Journal</a>
    //       <a href="#join">Join</a>
    //     </nav>
    //   </header>

    //   {/* Schedule Section */}
    //   <section className="schedule-section" id="schedule">
    //     <div className="schedule-container">
    //       <h2 className="schedule-title">
    //         Approximate watering interval by plant type (spring–summer)
    //       </h2>

    //       <div className="table-wrapper">
    //         <table className="schedule-table">
    //           <thead>
    //             <tr>
    //               <th>Plant</th>
    //               <th>Light needs</th>
    //               <th>Water every</th>
    //               <th>Difficulty</th>
    //             </tr>
    //           </thead>
    //           <tbody>
    //             {plantData.map((item, index) => (
    //               <tr key={index}>
    //                 <td>{item.plant}</td>
    //                 <td>{item.light}</td>
    //                 <td>{item.water}</td>
    //                 <td>{item.difficulty}</td>
    //               </tr>
    //             ))}
    //             <tr className="footer-row">
    //               <td colSpan="3"><strong>Reduce watering in winter</strong></td>
    //               <td><strong>~40%</strong></td>
    //             </tr>
    //           </tbody>
    //         </table>
    //       </div>
    //     </div>
    //   </section>
    // </div>
  );
}

export default App;