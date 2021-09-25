import React from 'react';
import './SecondHeader.css';

const SecondHeader = () => {
    return (
      <div>
        <div className="text-center py-3">
          <h1 className="fw-bold">
            Doctors <span className="text-warning">For You</span>
          </h1>
          {/* about website  */}
          <p className="fw-bold">
            **A doctors hiring platform for your organization**
          </p>
          <h4 className="text-secondary">
            The best doctors in the world are Doctor Diet, Doctor Quiet, and
            Doctor Merryman
          </h4>
          <h4>Minimum Hiring Total Amount: 10000$</h4>
        </div>
        <div className="text-style mb-5">
          <p>
            <i class="fas fa-envelope"></i> Email: wahedemon09@gmail.com
          </p>
          <p>
            <i class="fas fa-phone"></i> Phone Number: +0964363
          </p>
        </div>
      </div>
    );
};

export default SecondHeader;