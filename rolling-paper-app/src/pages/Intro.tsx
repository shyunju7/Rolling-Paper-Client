import * as React from "react";
import { Link } from "react-router-dom";
const Intro = () => {
  return (
    <div>
      <h1>welcome to Rolling Paper</h1>
      <input type="text" placeholder="개똥벌레" />
      <Link to="/user">시작</Link>
    </div>
  );
};

export default Intro;
