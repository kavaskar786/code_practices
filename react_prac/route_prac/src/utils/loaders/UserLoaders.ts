import { LoaderFunctionArgs } from "react-router-dom";

// export const usersLoader = async () => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/users");
//   if (!res.ok) {
//     throw Error("Unable to fetch the users");
//   }
//   const data = await res.json();
//   return data;
// };

// export const userLoader = async ({ params }: LoaderFunctionArgs) => {
//   const { id } = params;
//   const res = await fetch("https://jsonplaceholder.typicode.com/users/" + id);
//   if (!res.ok) {
//     throw Error("Unable to fetch the user");
//   }
//   const data = await res.json();
//   return data;
// };

export const usersLoader = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  if (!res.ok) {
    throw new Error("Unable to fetch the users");
  }
  const data = await res.json();
  return data;
};

export const userLoader = async ({ params }: LoaderFunctionArgs) => {
  const id = params.id;
  const res = await fetch("https://jsonplaceholder.typicode.com/users/" + id);
  if (!res.ok) {
    throw new Error("Unable to fetch the user");
  }
  const data = await res.json();
  return data;
};
