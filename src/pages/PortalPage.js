import React from 'react';
import Table from '../components/Table';
import ChartComponent from '../components/ChartComponent';
import SearchInput from '../components/SearchInput';
import './PortalPage.css';


function PortalPage() {
  return (
    <div className="portalPage">
      <h1>PORTAL PAGE</h1>
      <SearchInput />
      <Table />
      <ChartComponent />
    </div>
  );
}

export default PortalPage;
