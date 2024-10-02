import React from "react";
import { Link } from "react-router-dom";

const Inbox: React.FC = () => {
  return (
    <div className="container mt-5">
      <h3>Inbox</h3>
      <ul className="list-group">
        {/* 示例对话框 */}
        <li className="list-group-item d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <img
              src="https://via.placeholder.com/50"
              className="rounded-circle me-3"
              alt="User Avatar"
            />
            <div>
              <h6 className="mb-0">User123</h6>
              <small className="text-muted">
                Last message: Hello, how are you?
              </small>
            </div>
          </div>
          <Link to="/chat/User123" className="stretched-link"></Link>
        </li>
      </ul>
    </div>
  );
};

export default Inbox;
