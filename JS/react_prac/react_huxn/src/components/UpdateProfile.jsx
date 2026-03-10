import { useProfile } from "./UserProvider";

const UpdateProfile = () => {
  const { setProfile } = useProfile();
  const handleClick = () => {
    setProfile({ name: "Likitha", age: 24 });
  };
  return (
    <div>
      <button onClick={handleClick}>update profile</button>
    </div>
  );
};
export default UpdateProfile;
