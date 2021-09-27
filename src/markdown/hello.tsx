import * as React from "react";
interface HelloProps {}

const Hello: React.FunctionComponent<HelloProps> = () => {
  return (
    <React.Fragment>
      <h1>Hello</h1>
      <h2>Hello</h2>
      <h3>Hello</h3>
    </React.Fragment>
  );
};

export default Hello;
