import React from "react";
import NumberFormat from "react-number-format";

export const InfoCard = ({ name, dose }) => {
  return (
    <div data-testid="card-1" className="card my-2">
      <div className="card-body">
        <div style={{ fontWeight: "400" }}>{name}</div>
        <h3>{dose}</h3>
      </div>
    </div>
  );
};
