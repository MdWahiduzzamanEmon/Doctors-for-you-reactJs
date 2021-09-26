import React, { useEffect, useState } from "react";
import Doctors from "../Doctors/Doctors";
import HiringDoctors from "../Hirinng-Doctors/HiringDoctors";
import './DoctorBody.css'


const DoctorBody = () => {
    const [doctors, setDoctors] = useState([]);
    const[HiringDoctor,setHiringDoctor]=useState([])
    // api load 
    useEffect(() => {
        fetch("./fakeData.json")
          .then((res) => res.json())
          .then((data) => setDoctors(data));
    }, [])

    // buttton 
    const handleHiring = (doctor) => {
        const Hiring = [...HiringDoctor, doctor];
        // error handel 
        if (HiringDoctor.includes(doctor)) {
            alert('You Already Hired!!')
            return;

        } else {
            setHiringDoctor(Hiring);
        }
    }
    return (
      <div>
        <section className="body-part">
          {/* hiring details  */}
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
        </section>
        {/* footer section  */}
        <footer className="text-center py-5 fw-bold">
          <p>
            Designed by ||2021|| <span className="text-warning">MD WAHIDUZZAMAN EMON</span>
          </p>
        </footer>
      </div>
    );
};

export default DoctorBody;
