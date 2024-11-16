import { useState } from "react";
interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
}

const UserList = () => {
  const [user, setUser] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  return <div>UserList</div>;
};
export default UserList;
