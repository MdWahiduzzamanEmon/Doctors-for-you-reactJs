import React, { useEffect, useState } from "react";
import Doctors from "../Doctors/Doctors";
import HiringDoctors from "../Hirinng-Doctors/HiringDoctors";
import './DoctorBody.css'


const DoctorBody = () => {
    const [doctors, setDoctors] = useState([]);
    const[HiringDoctor,setHiringDoctor]=useState([])

    useEffect(() => {
        fetch("./fakeData.json")
          .then((res) => res.json())
          .then((data) => setDoctors(data));
    }, [])

    // buttton 
    const handleHiring = (doctor) => {
        const Hiring = [...HiringDoctor,doctor];
        setHiringDoctor(Hiring);
    }
    return (
      <div className="body-part">
        <div>
          <HiringDoctors HiringDoctor={HiringDoctor}></HiringDoctors>
        </div>
        {/* doctors details */}
        <div className="cart-style">
          {doctors.map((doctor) => (
            <Doctors
              handleHiring={handleHiring}
              key={doctor.id}
              doctor={doctor}
            ></Doctors>
          ))}
        </div>
      </div>
    );
};

export default DoctorBody;
