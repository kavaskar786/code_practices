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

// import { useEffect, useState } from "react";
// interface User {
//   id: number;
//   name: string;
//   username: string;
//   email: string;
//   phone: string;
// }

// const UserList = () => {
//   const [user, setUser] = useState<User[]>([]);
//   const [loading, setLoading] = useState<boolean>(true);
//   const [error, setError] = useState<string | null>(null);
//   useEffect(() => {
//     const fetchusers = async () => {
//       try {
//         const response = await fetch(
//           "https://jsonplaceholder.typicode.com/users"
//         );
//         if (!response.ok) throw new Error("Network response was not ok");
//         const data: User[] = await response.json();
//         setUser(data);
//       } catch {
//         setError(error instanceof Error ? error.message : "An error occured");
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchusers();
//   }, []);
//   if (loading) return <h1>Loading</h1>;
//   if (error) return <h1>Error: {error}</h1>;
//   return (
//     <table>
//       <thead>
//         <tr>
//           <th>Id</th>
//           <th>Name</th>
//           <th>Username</th>
//           <th>Email</th>
//           <th>Phone</th>
//         </tr>
//       </thead>
//       <tbody>
//         {user.map((u) => (
//           <tr key={u.id}>
//             <td>{u.id}</td>
//             <td>{u.name}</td>
//             <td>{u.username}</td>
//             <td>{u.email}</td>
//             <td>{u.phone}</td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   );
// };
// export default UserList;
