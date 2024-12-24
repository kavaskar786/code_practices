import { Link, useLoaderData } from "react-router-dom";

interface test {
  id: number;
  name: string;
  email: string;
}

const UsersList = () => {
  const data = useLoaderData();
  return (
    <div>
      {data.map(({ id, name, email }: test) => (
        <Link to={id.toString()} key={id}>
          {" "}
          <div className="mt-10">
            {/* <p>{id}</p> */}
            <p>{name}</p>
            <p>{email}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};
export default UsersList;
