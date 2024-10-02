import React from "react";

const LikedVideos: React.FC = () => {
  return (
    <div className="container mt-5">
      <h3>Liked Videos</h3>
      <div className="row">
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="card">
            <img
              src="https://via.placeholder.com/150"
              className="card-img-top"
              alt="Video Thumbnail"
            />
            <div className="card-body">
              <h5 className="card-title d-flex justify-content-between">
                <span>Sample Video Title</span>
                <span>Ep. 1</span>
              </h5>
              <p className="card-text">Instructor: ZYC</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LikedVideos;
