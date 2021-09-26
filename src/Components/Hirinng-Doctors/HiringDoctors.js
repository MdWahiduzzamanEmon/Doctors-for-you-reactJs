import React from 'react';
import './HiringDoctors.css';

const HiringDoctors = (props) => {
    const { HiringDoctor } = props;
    // total hiring amount 
    let total = 0;
    for (const amount of HiringDoctor) {
        total = total + amount.visit_Charge;
    }
    return (
      <div className="ms-5 hired-doctors">
        <h2 className="mb-4">
          Hire{" "}
          <span className="text-uppercase fw-bold text-warning">Docotrs-</span>
        </h2>
        <h5>
          <span>Total Hire:</span> {props.HiringDoctor.length} Doctors{" "}
          <i className="fas fa-user-md icon"></i>
        </h5>
        <h5>
          <span>Total Hiring Charge:</span> {total}$
        </h5>
        <h5>
          <span>Hiring Doctors Name:</span>
        </h5>
        {props.HiringDoctor.map((doctor) => (
          <li key={doctor.id}>
            {doctor.name} <i className="fas fa-user-md icon"></i>
          </li>
        ))}
      </div>
    );
};

export default HiringDoctors;