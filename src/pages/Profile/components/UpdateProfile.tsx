import React from "react";

const UpdateProfile: React.FC = () => {
  return (
    <div className="container mt-5">
      <h3>Update Profile</h3>
      <form>
        {/* 头像部分 */}
        <div className="mb-3 d-flex align-items-center">
          <img
            src="https://via.placeholder.com/150"
            alt="Profile Avatar"
            className="rounded"
            style={{ width: "150px", height: "150px", objectFit: "cover" }}
          />
          <div className="ms-3">
            <button type="button" className="btn btn-secondary btn-sm">
              Change Avatar
            </button>
          </div>
        </div>

        {/* 用户名（不可更改） */}
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            type="text"
            className="form-control"
            id="username"
            value="exampleUser" // 静态用户名
            readOnly
          />
        </div>

        {/* 邮箱（不可更改） */}
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            value="user@example.com" // 静态邮箱
            readOnly
          />
        </div>

        {/* 原密码 */}
        <div className="mb-3">
          <label htmlFor="currentPassword" className="form-label">
            Current Password
          </label>
          <input
            type="password"
            className="form-control"
            id="currentPassword"
            placeholder="Enter current password"
          />
        </div>

        {/* 新密码 */}
        <div className="mb-3">
          <label htmlFor="newPassword" className="form-label">
            New Password
          </label>
          <input
            type="password"
            className="form-control"
            id="newPassword"
            placeholder="Enter new password"
          />
        </div>

        {/* 新密码确认 */}
        <div className="mb-3">
          <label htmlFor="confirmPassword" className="form-label">
            Confirm New Password
          </label>
          <input
            type="password"
            className="form-control"
            id="confirmPassword"
            placeholder="Confirm new password"
          />
        </div>

        {/* 自我介绍 */}
        <div className="mb-3">
          <label htmlFor="selfIntro" className="form-label">
            Self Introduction
          </label>
          <textarea
            className="form-control"
            id="selfIntro"
            rows={3}
            placeholder="Write something about yourself"
          ></textarea>
        </div>

        {/* 确认更新按钮 */}
        <button type="button" className="btn btn-primary w-100">
          Update Profile
        </button>
      </form>
    </div>
  );
};

export default UpdateProfile;
