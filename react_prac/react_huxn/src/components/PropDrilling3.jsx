import { useContext } from "react";
import { Data, Data1 } from "../App";

const PropDrilling3 = () => {
  const age = useContext(Data1);
  const { name1, name2 } = useContext(Data);
  return (
    <div>
      <h1>PropDrilling3</h1>
      <h3>{`${name1} ${name2} ${age}`}</h3>
      {/* <Data.Consumer>
        {({ name1, name2 }) => {
          return (
            <Data1.Consumer>
              {(age) => {
                return <h1>{`${name1} ${name2} ${age}`}</h1>;
              }}
            </Data1.Consumer>
          );
        }}
      </Data.Consumer> */}
    </div>
  );
};
export default PropDrilling3;
