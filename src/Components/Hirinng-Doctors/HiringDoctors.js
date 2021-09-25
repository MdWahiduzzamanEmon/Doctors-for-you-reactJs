import React from 'react';
import './HiringDoctors.css';

const HiringDoctors = (props) => {
    console.log(props);
    const { HiringDoctor } = props;
    let total = 0;
    for (const amount of HiringDoctor) {
        total = total + amount.visit_Charge;
    }
    return (
      <div className="ms-5">
        <h2 className="mb-4">
          Hire <span className="text-uppercase fw-bold text-warning">Docotrs-</span>
        </h2>
            <h5>Total Hire: {props.HiringDoctor.length} Doctors</h5>
            <h5>Total Hiring Charge: { total}$</h5>
        <h5>Hire Doctors Name: </h5>
          {props.HiringDoctor.map((doctor) => (
            <li key={doctor.id}>{doctor.name}</li>
          ))}
      </div>
    );
};

export default HiringDoctors;