import { Outlet, useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full min-h-[90vh] mx-auto max-w-[1000px]">
      Contact
      <button onClick={() => navigate("Form")}>Form</button>
      <button onClick={() => navigate("Detail")}>Detail</button>
      <Outlet />
    </div>
  );
};
export default Contact;
