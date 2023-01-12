const User = ({ user }: { user?: User }) => {
  return (
    <div className="user-card">
      <img className="avatar" src="https://xsgames.co/randomusers/avatar.php?g=male"></img>
      <div className="user-info">
        <p className="name">Name: {user?.username}</p>
        <p className="email">Email: {user?.email}</p>
      </div>
    </div>
  );
};
export default User;
