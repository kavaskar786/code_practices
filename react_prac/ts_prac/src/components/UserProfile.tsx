import { useState } from "react";

type User = {
  name: string;
  email: string;
};
const UserProfile = () => {
  const [user, setUser] = useState<User>({
    name: "kavaskar",
    email: "kavas@gmail.com",
  });
  return (
    <div>
      UserProfile
      <p>{user.name}</p>
      <p>{user.email}</p>
    </div>
  );
};
export default UserProfile;
