import React from "react";

const Spinner: React.FC = () => {
  return (
    <div className="spinner-triangles">
      <div className="tri invert-spin" />
      <div className="tri invert-spin" />
      <div className="tri" />
      <div className="tri invert-spin" />
      <div className="tri invert-spin" />
      <div className="tri" />
      <div className="tri invert-spin" />
      <div className="tri" />
      <div className="tri invert-spin" />
    </div>
  );
};

export default Spinner;
