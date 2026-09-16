import React from 'react';
import './statsCircles.css'; // Não se esqueça de importar o CSS

export function StatsCircles() {
  return (
    <section className="stats-section" id='stats'>
      <div className="bg-blur-1" />
      <div className="bg-blur-2" />

      <div className="stats-container">
        
        {/* Círculo 1 */}
        <div className="stat-circle circle-1">
          <h3 className="stat-title">10+ Years</h3>
          <p className="stat-text">Of Successful<br />Experience In Real Estate</p>
        </div>

        {/* Círculo 2 */}
        <div className="stat-circle circle-2">
          <h3 className="stat-title">100%</h3>
          <p className="stat-text">Clients<br />Satisfaction</p>
        </div>

        {/* Círculo 3 */}
        <div className="stat-circle circle-3">
          <h3 className="stat-title">20+</h3>
          <p className="stat-text">New Clients Every<br />Month</p>
        </div>

        {/* Círculo 4 */}
        <div className="stat-circle circle-4">
          <h3 className="stat-title">$5k-8K</h3>
          <p className="stat-text">Approximate Profit In<br />Real-Estate Business</p>
        </div>

      </div>
    </section>
  );
}