import { useLoaderData } from "react-router-dom";

interface test {
  id: number;
  name: string;
  email: string;
}
const User = () => {
  const { id, name, email }: test = useLoaderData();
  return (
    <div>
      <p>{id}</p>
      <p>{name}</p>
      <p>{email}</p>
    </div>
  );
};
export default User;
