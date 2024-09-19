import React from 'react';
import Table from './Table';
import ChartComponent from './ChartComponent';
function Portal() {
  return (
    <div className="portalContainer">
      <h1>Portal Page</h1>
      <div className="searchContainer">
        <input type="text" placeholder="Search..." />
        <button>🔍</button>
      </div>
      <Table />
      <ChartComponent />
    </div>
  );
}

export default Portal;
