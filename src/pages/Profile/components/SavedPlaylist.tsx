import React from "react";

const SavedPlaylists: React.FC = () => {
  return (
    <div className="container mt-5">
      <h3>Saved Playlists</h3>
      <div className="row">
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="card shadow-sm">
            <img
              src="https://via.placeholder.com/150"
              className="card-img-top"
              alt="Course Thumbnail"
            />
            <div className="card-body">
              <h5 className="card-title">Sample Course Title</h5>
              <p className="card-text">Instructor: ZYC</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SavedPlaylists;
