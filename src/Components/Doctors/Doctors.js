
import './Doctors.css';

const Doctors = (props) => {
    // console.log(props);
    const { name, Qualifications, Job, contact, image, visit_Charge } =
      props.doctor;
    return (
      <div>
        <div className="doctors-details-cart">
          <div className="img">
                <img src={image} alt="" />
                    {/* add social icons  */}
            <div className="social-icons">
              <i class="fab fa-facebook"></i>
              <i class="fab fa-instagram"></i>
              <i class="fab fa-linkedin"></i>
            </div>
          </div>
          <div className="about-Doctors">
            <div>
              <p>
                Name: <span>{name}</span>
              </p>
              <p>
                Edu. Qualifications: <span>{Qualifications.slice(0, 45)}</span>
              </p>
              <p>
                Job: <span>{Job}</span>
              </p>
              <p>
                Contact.N: <span>{contact}</span>
              </p>
              <p>
                Hiring_Charge: <span>{visit_Charge}$</span>
              </p>
            </div>

            <div>
              <button
                className="btn btn-primary"
                onClick={() => props.handleHiring(props.doctor)}
              >
                <span>
                  <i class="fas fa-user-md"></i>
                </span>{" "}
                Hiring
              </button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Doctors;