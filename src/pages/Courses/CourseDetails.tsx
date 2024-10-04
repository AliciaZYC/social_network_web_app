import React from "react";
import { useParams } from "react-router-dom";
import * as db from "../../Database";

export default function CourseDetails() {
  const { cid } = useParams(); // Get the course ID from the URL
  const course = db.courses.find((course) => course.cid === cid);

  return (
    <div className="container mt-5">
      <h1>Course Details for {course?.title}</h1>
      {/* Here you can load specific details based on the cid */}
    </div>
  );
}
