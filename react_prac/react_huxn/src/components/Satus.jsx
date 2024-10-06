const Satus = ({ isAdmin, isLoggedIn }) => {
  return (
    <div>
      {isAdmin && isLoggedIn && <h1> Welcome Admin</h1>}
      {!isAdmin && isLoggedIn && <h1> Welcome User</h1>}
      {console.log(isAdmin, isLoggedIn)}
    </div>
  );
};
export default Satus;
