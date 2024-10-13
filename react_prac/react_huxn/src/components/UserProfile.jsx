import { useContext } from "react";
import { userContext } from "./UserProvider";
import UpdateProfile from "./UpdateProfile";

const UserProfile = () => {
  const { profile } = useContext(userContext);
  return (
    <div>
      <h1>UserProfile</h1>
      <p>{profile.name}</p>
      <p>{profile.age}</p>
      <UpdateProfile />
    </div>
  );
};
export default UserProfile;
