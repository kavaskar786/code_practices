import { Outlet } from "react-router-dom";
import { useLoadingContext } from "../context/contexts";

const Users = () => {
  const { setLoading } = useLoadingContext();
  setLoading(false);
  return (
    <div>
      {}
      Users
      <Outlet />
    </div>
  );
};
export default Users;
