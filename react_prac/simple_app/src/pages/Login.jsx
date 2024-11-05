import { useState } from "react";
import InputText from "../components/InputText";

const Login = () => {
  const [input, setInput] = useState({ email: "", password: "" });
  return (
    <div className="h-svh bg-gradient-to-r from-orange-600 to-red-600 flex items-center justify-center flex-col w-full">
      <h1 className="font-semibold text-4xl text-white mb-9 ">Login</h1>
      <div className="bg-white rounded-2xl h-2/5 w-2/6">
        <form className="flex items-center justify-center flex-col gap-3 w-full h-full">
          <div className="flex items-center justify-center gap-3">
            <label htmlFor="email">Email:</label>
            <InputText
              value={input.email}
              onChange={(e) => setInput({ ...input, email: e.target.value })}
              name="email"
              type="email"
              placeholder="Enter your email"
              className="border-2 rounded-lg focus-ring-0 py-1.5 focus-within:ring-0"
            />
          </div>
          <div className="flex items-center justify-center gap-3">
            <label htmlFor="email">Email:</label>
            <InputText
              value={input.email}
              onChange={(e) => setInput({ ...input, email: e.target.value })}
              name="email"
              type="email"
              placeholder="Enter your email"
              className="border-2 rounded-lg focus-ring-0 py-1.5 focus-within:ring-0"
            />
          </div>
        </form>
      </div>
    </div>
  );
};
export default Login;
