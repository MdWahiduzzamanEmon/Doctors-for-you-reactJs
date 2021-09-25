import React from 'react';
import './SecondHeader.css';

const SecondHeader = () => {
    return (
      <div className="text-center py-3">
        <h1 className="fw-bold">
          Doctors <span className="text-warning">For You</span>
        </h1>
        <p>**A doctors hiring platform for your organization**</p>
        <h4 className="text-secondary">
          The best doctors in the world are Doctor Diet, Doctor Quiet, and
          Doctor Merryman
        </h4>
        <h4>Minimum Hiring Total Amount: 20000$</h4>
      </div>
    );
};

export default SecondHeader;