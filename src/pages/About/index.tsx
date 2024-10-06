import "./About.css";
import { Link } from "react-router-dom";
import {
  FaGraduationCap,
  FaUserGraduate,
  FaChalkboardTeacher,
  FaBriefcase,
} from "react-icons/fa";

export default function About() {
  return (
    <div className="about">
      {/* header */}
      <div className="row">
        {/* image */}
        <div className="col-md-6 d-flex justify-content-center align-items-center">
          <img src="images/about-img.svg" alt="" />
        </div>
        {/* content */}
        <div className="col-md-6 d-flex flex-column justify-content-center">
          <h1>Why Choose Us?</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut dolorum
            quasi illo? Distinctio expedita commodi, nemo a quam error
            repellendus sint, fugiat quis numquam eum eveniet sequi aspernatur
            quaerat tenetur.
          </p>

          <Link to="/courses" className="btn btn-primary">
            Our Courses
          </Link>
        </div>
      </div>
      {/* outcomes data */}
      <div className="box-container">
        <div className="box d-flex align-items-center mb-3">
          <FaGraduationCap className="me-3" size={40} />
          <div>
            <h3>+10k</h3>
            <p>online courses</p>
          </div>
        </div>
        <div className="box d-flex align-items-center mb-3">
          <FaUserGraduate className="me-3" size={40} />
          <div>
            <h3>+40k</h3>
            <p>brilliant students</p>
          </div>
        </div>
        <div className="box d-flex align-items-center mb-3">
          <FaChalkboardTeacher className="me-3" size={40} />
          <div>
            <h3>+2k</h3>
            <p>expert tutors</p>
          </div>
        </div>
        <div className="box d-flex align-items-center mb-3">
          <FaBriefcase className="me-3" size={40} />
          <div>
            <h3>100%</h3>
            <p>job placement</p>
          </div>
        </div>
      </div>
      {/* reviews */}
      <div className="reviews">
        <h1 className="heading">student's reviews</h1>
        <div className="box-container">
          <div className="box">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Necessitatibus, suscipit a. Quibusdam, dignissimos consectetur.
              Sed ullam iusto eveniet qui aut quibusdam vero voluptate libero
              facilis fuga. Eligendi eaque molestiae modi?
            </p>
            <div className="student">
              <img src="images/pic-2.jpg" alt="" />
              <div>
                <h3>john deo</h3>
                <div className="stars">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star-half-alt"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="box">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Necessitatibus, suscipit a. Quibusdam, dignissimos consectetur.
              Sed ullam iusto eveniet qui aut quibusdam vero voluptate libero
              facilis fuga. Eligendi eaque molestiae modi?
            </p>
            <div className="student">
              <img src="images/pic-3.jpg" alt="" />
              <div>
                <h3>john deo</h3>
                <div className="stars">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star-half-alt"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="box">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Necessitatibus, suscipit a. Quibusdam, dignissimos consectetur.
              Sed ullam iusto eveniet qui aut quibusdam vero voluptate libero
              facilis fuga. Eligendi eaque molestiae modi?
            </p>
            <div className="student">
              <img src="images/pic-4.jpg" alt="" />
              <div>
                <h3>john deo</h3>
                <div className="stars">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star-half-alt"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="box">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Necessitatibus, suscipit a. Quibusdam, dignissimos consectetur.
              Sed ullam iusto eveniet qui aut quibusdam vero voluptate libero
              facilis fuga. Eligendi eaque molestiae modi?
            </p>
            <div className="student">
              <img src="images/pic-5.jpg" alt="" />
              <div>
                <h3>john deo</h3>
                <div className="stars">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star-half-alt"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="box">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Necessitatibus, suscipit a. Quibusdam, dignissimos consectetur.
              Sed ullam iusto eveniet qui aut quibusdam vero voluptate libero
              facilis fuga. Eligendi eaque molestiae modi?
            </p>
            <div className="student">
              <img src="images/pic-6.jpg" alt="" />
              <div>
                <h3>john deo</h3>
                <div className="stars">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star-half-alt"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="box">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Necessitatibus, suscipit a. Quibusdam, dignissimos consectetur.
              Sed ullam iusto eveniet qui aut quibusdam vero voluptate libero
              facilis fuga. Eligendi eaque molestiae modi?
            </p>
            <div className="student">
              <img src="images/pic-7.jpg" alt="" />
              <div>
                <h3>john deo</h3>
                <div className="stars">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star-half-alt"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
