import { ReactNode } from "react";

const User = ({
  name,
  age,
  children,
}: {
  name: string;
  age: number;
  children: ReactNode;
}) => {
  return (
    <div>
      User
      <p>{name}</p>
      <p>{age}</p>
      {children}
    </div>
  );
};
export default User;
