import React from "react";
import { Link } from "react-router-dom";
import * as db from "../../Database";
import "./Courses.css";

export default function Courses() {
  const courses = db.courses;

  return (
    <div className="courses container my-5">
      <h1 className="heading text-center mb-5">our courses</h1>
      <div className="row">
        {courses.map((course) => (
          <div className="col-md-4 mb-4" key={course.cid}>
            <div className="course-card">
              <div className="card-body">
                <div className="tutor d-flex align-items-center mb-3">
                  <img
                    src={`images/${course.img}`}
                    alt=""
                    className="img-fluid rounded-circle me-3"
                  />
                  <div className="info">
                    <h5 className="card-title mb-0">john deo</h5>
                    <small className="text-muted">21-10-2022</small>
                  </div>
                </div>
                <div className="thumb mb-3">
                  <img
                    src={`images/${course.thumb}`}
                    alt=""
                    className="img-fluid"
                  />
                  <span className="badge bg-primary">10 videos</span>
                </div>
                <h5 className="card-title">{course.title}</h5>
                <Link to={`/courses/${course.cid}`} className="btn btn-primary">
                  View Playlist
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
