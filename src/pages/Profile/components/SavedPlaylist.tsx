import React from "react";
import "../Profile.css";
import { Link } from "react-router-dom";
import * as db from "../../../Database";

// List of course IDs to be displayed on this page
const requiredCourseIds = ["1", "2"]; // Add the IDs of the courses you want to display

// Filter the courses from the database based on the required IDs
const filteredCourses = db.courses.filter((course) =>
  requiredCourseIds.includes(course.cid)
);

const SavedPlaylists: React.FC = () => {
  return (
    <div className="container mt-5">
      <h3 className="mb-4">Saved Playlists</h3>
      <div className="row">
        {filteredCourses.map((course) => (
          <div className="col-md-12 mb-4" key={course.cid}>
            <Link
              to={`/courses/${course.cid}`} // Navigate to course detail page
              className="text-decoration-none text-dark"
            >
              <div
                className="card shadow-sm d-flex flex-row align-items-stretch"
                style={{ backgroundColor: "#f8f9fa" }}
              >
                {/* Playlist Thumbnail */}
                <div
                  className="thumbnail-container"
                  style={{ flex: "0 0 30%", position: "relative" }}
                >
                  <img
                    src={`images/${course.thumb}`}
                    className="img-fluid"
                    alt="Course Thumbnail"
                    style={{ height: "100%", objectFit: "cover" }}
                  />
                  <span className="badge bg-dark position-absolute top-0 start-0 m-2">
                    {course.videosCount} videos
                  </span>
                </div>

                {/* Playlist Information */}
                <div className="card-body" style={{ flex: "1" }}>
                  <div className="d-flex align-items-center mb-2">
                    <img
                      src="https://via.placeholder.com/50"
                      alt="Instructor Avatar"
                      className="rounded-circle me-3"
                      style={{ width: "50px", height: "50px" }}
                    />
                    <div>
                      <h5 className="card-title mb-0">{course.instructor}</h5>
                      <small className="text-muted">{course.date}</small>
                    </div>
                  </div>
                  <h4 className="card-title">{course.title}</h4>
                  <p className="card-text text-muted">{course.description}</p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SavedPlaylists;
