import React from "react";
import "./Courses.css";

export default function Courses() {
  //   const courses = [
  //     { title: 'complete HTML tutorial', image: 'images/html.png', author: 'john deo', date: '21-10-2022' },
  //     { title: 'complete CSS tutorial', image: 'images/css.png', author: 'john deo', date: '21-10-2022' },
  //     { title: 'complete JS tutorial', image: 'images/js.png', author: 'john deo', date: '21-10-2022' },
  //     { title: 'complete Bootstrap tutorial', image: 'images/bootstrap.png', author: 'john deo', date: '21-10-2022' },
  //     { title: 'complete JQuery tutorial', image: 'images/jquery.png', author: 'john deo', date: '21-10-2022' },
  //     { title: 'complete SASS tutorial', image: 'images/sass.png', author: 'john deo', date: '21-10-2022' },
  //   ];

  return (
    <div className="courses container my-5">
      <h1 className="heading text-center mb-5">our courses</h1>
      <div className="row">
        {[
          {
            img: "pic-2.jpg",
            thumb: "thumb-1.png",
            title: "complete HTML tutorial",
          },
          {
            img: "pic-3.jpg",
            thumb: "thumb-2.png",
            title: "complete CSS tutorial",
          },
          {
            img: "pic-4.jpg",
            thumb: "thumb-3.png",
            title: "complete JS tutorial",
          },
          {
            img: "pic-5.jpg",
            thumb: "thumb-4.png",
            title: "complete Bootstrap tutorial",
          },
          {
            img: "pic-6.jpg",
            thumb: "thumb-5.png",
            title: "complete JQuery tutorial",
          },
          {
            img: "pic-7.jpg",
            thumb: "thumb-6.png",
            title: "complete SASS tutorial",
          },
          {
            img: "pic-8.jpg",
            thumb: "thumb-7.png",
            title: "complete PHP tutorial",
          },
          {
            img: "pic-9.jpg",
            thumb: "thumb-8.png",
            title: "complete MySQL tutorial",
          },
          {
            img: "pic-1.jpg",
            thumb: "thumb-9.png",
            title: "complete React tutorial",
          },
        ].map((course, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card">
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
                <a href="playlist.html" className="btn btn-primary">
                  view playlist
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
