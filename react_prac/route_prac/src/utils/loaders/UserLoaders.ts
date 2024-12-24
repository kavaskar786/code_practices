type params = {
  id: string;
};
export const usersLoader = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  return data;
};

export const userLoader = async ({ params }) => {
  const { id }: params = params;
  const res = await fetch("https://jsonplaceholder.typicode.com/users/" + id);
  const data = await res.json();
  return data;
};
