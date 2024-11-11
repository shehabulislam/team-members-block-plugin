import React, { useState } from "react";

const ColumnSelector = () => {
  const [device, setDevice] = useState("desktop");
  const [columns, setColumns] = useState(3); // Default for desktop

  const handleDeviceChange = (event) => {
    const selectedDevice = event.target.value;
    setDevice(selectedDevice);

    // Set default columns based on device
    switch (selectedDevice) {
      case "desktop":
        setColumns(3);
        break;
      case "tablet":
        setColumns(2);
        break;
      case "mobile":
        setColumns(1);
        break;
      default:
        break;
    }
  };

  const handleColumnChange = (event) => {
    setColumns(event.target.value);
  };

  return (
    <div>
      <label htmlFor="device-select">Select Device:</label>
      <select id="device-select" value={device} onChange={handleDeviceChange}>
        <option value="desktop">Desktop</option>
        <option value="tablet">Tablet</option>
        <option value="mobile">Mobile</option>
      </select>

      <label htmlFor="column-select">Select Number of Columns:</label>
      <input
        type="number"
        id="column-select"
        value={columns}
        min="1"
        max="3" // Adjust max based on your needs
        onChange={handleColumnChange}
      />

      <div>
        <h3>Selected Device: {device}</h3>
        <h3>Selected Columns: {columns}</h3>
      </div>
    </div>
  );
};

export default ColumnSelector;
