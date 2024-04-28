import React, { useEffect, useState } from "react";
import '../styles/notes.scss';
import data from "../public/data.json"; 

const Notes = () => {
  // 3. Access the specific information you need
  const appliedChemistryData = data.Btech.code01;
    console.log(appliedChemistryData);
  // 4. Render the data
  return (
    <div>
      <h2>Applied Chemistry Notes</h2>
    <h2>{appliedChemistryData.Aakash}</h2>
    </div>
  );
};

export default Notes;