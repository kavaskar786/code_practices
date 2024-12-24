import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

interface test {
  id: number;
  name: string;
  email: string;
}

const UsersList = () => {
  const data = useLoaderData();
  const [itemsLimit, setItemLimit] = useState<number>(0);
  return (
    <div>
      {data
        .slice(itemsLimit, itemsLimit + 2)
        .map(({ id, name, email }: test) => (
          <Link to={id.toString()} key={id}>
            {" "}
            <div className="mt-10">
              {/* <p>{id}</p> */}
              <p>{name}</p>
              <p>{email}</p>
            </div>
          </Link>
        ))}
      <div className="flex items-center justify-center flex-row gap-4">
        {[...Array(data.length / 2 + 2)].map((_, index) => (
          <div key={index}>
            {index === 0 || index === data.length / 2 + 1 ? (
              index === 0 ? (
                <button
                  onClick={() => setItemLimit(itemsLimit - 2)}
                  disabled={itemsLimit === 0}
                >
                  previous
                </button>
              ) : (
                <button
                  onClick={() => setItemLimit(itemsLimit + 2)}
                  disabled={itemsLimit === data.length - 2}
                >
                  Next
                </button>
              )
            ) : (
              <button onClick={() => setItemLimit(index * 2 - 2)}>
                {index}
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
export default UsersList;
