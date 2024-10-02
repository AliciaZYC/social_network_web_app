import { Link, useParams } from "react-router-dom";

const Profile = () => {
  const { username } = useParams(); // 获取 URL 中的 username 参数
  const role = "student"; // 假设角色为 student

  return (
    <div className="container mt-5">
      <h3>{username}'s Profile</h3>

      {/* 个人信息部分 */}
      <div className="card mb-4" style={{ width: "18rem" }}>
        <img
          src="https://via.placeholder.com/150"
          className="card-img-top"
          alt="User Avatar"
        />
        <div className="card-body">
          <h5 className="card-title">{username}</h5>
          <p className="card-text">Role: {role}</p>
          {/* 更新个人信息的链接，包含用户名 */}
          <Link to={`/profile/${username}/update`} className="btn btn-primary">
            Update Profile
          </Link>
        </div>
      </div>

      {/* 功能按钮部分 */}
      <div className="d-flex justify-content-around mt-4">
        <Link
          to={`/profile/${username}/saved-playlists`}
          className="btn btn-secondary"
        >
          Saved Playlists
        </Link>
        <Link
          to={`/profile/${username}/liked-videos`}
          className="btn btn-secondary"
        >
          Liked Videos
        </Link>
        <Link to={`/profile/${username}/inbox`} className="btn btn-secondary">
          Inbox
        </Link>
      </div>
    </div>
  );
};

export default Profile;
